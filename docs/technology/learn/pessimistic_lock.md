---
title: 并发控制中的悲观锁
comment: true  
tags:
 - go
 - 技术教程
categories:
 - 知识库
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202402021718881.png)

在[关系数据库管理系统](https://zh.wikipedia.org/wiki/关系数据库管理系统)里，**悲观并发控制**（又名“**悲观锁**”，Pessimistic Concurrency Control，缩写“PCC”）是一种并发控制的方法。它可以阻止一个事务以影响其他用户的方式来修改数据。如果一个事务执行的操作读某行数据应用了锁，那只有当这个事务把锁释放，其他事务才能够执行与该锁冲突的操作。 ----摘自wiki

# 引言

最近有同事问了这么个问题，假设有这么个场景，有一个`Job`，对应多个子任务`Task`，当`Task`完成回调更新状态的时候，同时检查其他`Task`是不是完成了，当所有`Task`的状态都为`done`的时候，更新`Job`的状态为`done`，否则就不必操作。怎么数据的一致性？

我们知道在并发场景下，在读取其他`Task`状态并更新`Job`状态的时候，有其他事务正好改掉了一个`Task`的状态，我们查到的不是最新的结果，也就是幻读了。

在这个场景里，既有数据库的写，又有读操作，我们要解决这个问题，就得加锁了，保证同一时刻只能有一个线程来进行操作。又不希望干扰其他线程写入`Task`状态，我们就不考虑数据库锁了，这里使用redis实现一个分布式的悲观锁。

# 实现

这里使用Golang来实现一个demo，可以先用docker启动一个redis，一个postgres/mysql数据库，根据你的喜好。

新建一个项目`redis-lock`, 然后`go mod init example/redis-lock`。👌🏻接下来先来搞定redis锁的相关操作，新建`redis.go`

```go
// redis.go
package main

import (
	"github.com/redis/go-redis/v9"
	"time"
)

func RedisClient(db int) *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
		DB:   db,
	})
	return client
}

func GetRedisLock(client *redis.Client, key string, value interface{}, expiration int) (bool, error) {
	return client.SetNX(ctx, key, value, time.Duration(expiration)*time.Second).Result()
}

func ReleaseRedisLock(client *redis.Client, key string) {
	client.Del(ctx, key)
}
```

>  我们实现了一个获取锁和释放锁的方法，使用redis实现锁一般用`setnx`命令实现，如果key不存在就创建并返回1，如果key存在就返回0。释放锁就用删除key来实现。实际操作中需要给锁设置一个超时时间，防止在释放锁前的代码崩溃导致锁始终不释放造成死锁。

接下来我们新建一个`models.go`, 在里面定义一下`Job`和`Task`的数据结构。

```go
package main

type Job struct {
	ID     int64  `db:"id"`
	name   string `db:"name"`
	Status string `db:"status"`
}

type Task struct {
	ID     int64  `db:"id"`
	name   string `db:"name"`
	JobID  int64  `db:"job_id"`
	Status string `db:"status"`
}

const (
	JobStatusPending = "pending"
	JobStatusRunning = "running"
	JobStatusDone    = "done"
)

```

👌接下来搞一个`main.go`起一个gin服务，定义一个更新task的接口，直接看代码吧。

```go
package main

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/gin-gonic/gin"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/redis/go-redis/v9"
	"log"
	"math/rand"
	"strconv"
	"time"
)

var ctx = context.Background()
var db *sql.DB
var rdb *redis.Client

type Status struct {
	NewStatus string `json:"newStatus"`
}

func init() {
	rdb = RedisClient(0)
	var err error
	//db, err = sql.Open("sqlite3", "./example.db?_busy_timeout=1000")
	db, err = sql.Open("pgx", "postgres://postgres:123456@localhost:5432/test?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS jobs (
    		id SERIAL PRIMARY KEY,
    		name TEXT,
    		status TEXT
    	);
		CREATE TABLE IF NOT EXISTS tasks (
			id SERIAL PRIMARY KEY,
			name TEXT,
			job_id INTEGER,
			status TEXT,
			FOREIGN KEY(job_id) REFERENCES jobs(id)
			);
	`)
	if err != nil {
		log.Fatal(err)
	}
}

func updateStatus(taskID int64, newStatus string) error {

	// 开启数据库事务
	//db, _ = sql.Open("sqlite3", "./example.db")
	//defer db.Close()
	RandomPause()

	tx, err := db.Begin()
	if err != nil {
		log.Println(err)
		return err
	}
	defer tx.Rollback()
	// 更新task状态
	_, err = tx.Exec(`UPDATE tasks SET status = $1 WHERE id=$2`, newStatus, taskID)
	if err != nil {
		log.Println(err)
		return err
	}
	// 查询关联的Job
	var jobID int64
	err = tx.QueryRow(`select job_id from tasks where id=$1`, taskID).Scan(&jobID)
	if err != nil {
		log.Println(err)
		return err
	}
	// 分布式锁做悲观锁
	lockKey := fmt.Sprintf("job:%d", jobID)
	lockValue := "1"
	lockDuration := 10 * time.Second
	lock, err := GetRedisLock(rdb, lockKey, lockValue, int(lockDuration.Seconds()))
	if err != nil {
		log.Println(err)
		return err
	}
	if !lock {
		log.Println("Failed to get lock")
		return err
	}
	defer ReleaseRedisLock(rdb, lockKey)
	// 查询Job下的所有Task状态
	rows, err := tx.Query(`select status from tasks where job_id=$1`, jobID)
	if err != nil {
		log.Println(err)
		return err
	}
	defer rows.Close()

	allDone := true
	for rows.Next() {
		var status string
		if err := rows.Scan(&status); err != nil {
			log.Println(err)
			return err
		}
		if status != JobStatusDone {
			allDone = false
			break
		}
	}
	if allDone {
		_, err = tx.Exec(`update jobs set status=$1 where id=$2`, JobStatusDone, jobID)
		if err != nil {
			log.Println(err)
			return err
		}
	}
	// 提交事务
	return tx.Commit()
}

func handleTaskCallback(c *gin.Context) {
	// taskID是int64类型
	taskID_ := c.Param("id")
	taskID, _ := strconv.ParseInt(taskID_, 10, 64)

	var newStatus Status
	if err := c.BindJSON(&newStatus); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	err := updateStatus(taskID, newStatus.NewStatus)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"message": "ok"})
}

func main() {
	r := gin.Default()
	r.PUT("/tasks/:id", handleTaskCallback)
	err := r.Run(":8080")
	if err != nil {
		return
	}
	fmt.Println("Server is running on port 8080")
}

func RandomPause() {
	// 随机暂停300-500毫秒
	rand.New(rand.NewSource(time.Now().UnixNano()))
	pause := rand.Intn(200) + 300
	time.Sleep(time.Duration(pause) * time.Millisecond)
}

```

>由于sqlite默认隔离机制用的是串行化，我们不好模拟幻读的情况，这里db就用postgres、mysql。注意pg的占位符用`$1,$2...`来表示，mysql则是用`？`表示。

到这里，我们大概的逻辑就实现好了，接下来让我们来测试一下。

# 测试

我们创建一个`main_test.go`

```go
package main

import (
	"bytes"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
	"strconv"
	"sync"
	"testing"
)

func TestUpdate(t *testing.T) {
	// 创建task和Job数据
	// 交个你们自己实现吧，创建一个Job，100个task

	// 并发调用task更新接口
	fmt.Println("start")
	var wg sync.WaitGroup
	client := &http.Client{}
	data := []byte(`{"newStatus": "done"}`)
	for i := 1; i <= 100; i++ {
		wg.Add(1)
		go func(taskID int64) {
			fmt.Println("taskID:", taskID)
			defer wg.Done()
			req, err := http.NewRequest("PUT", "http://127.0.0.1:8080/tasks/"+strconv.FormatInt(taskID, 10), bytes.NewBuffer(data))
			req.Header.Set("Content-Type", "application/json")
			if err != nil {
				log.Println(err)
				return
			}
			resp, err := client.Do(req)
			if err != nil {
				log.Println(err)
				return
			}
			defer resp.Body.Close()
			fmt.Println("taskID:", taskID, "status:", resp.Status)
		}(int64(i))
	}
	wg.Wait()
}

```

分别开关这一段加锁的代码，执行`go test -v`观察Job的状态有没有更新对。试几次你会发现，如果不加锁，Job的状态可能会一直在running。👌就这样吧！

