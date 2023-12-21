---
title: go语言模糊测试
comment: true
tags:
 - go
 - golang
categories:
 - 语言
# 设置首页的精选文章，值越大越靠前
sticky: 1
---

# 前言

​		软件系统越复杂，测试就越重要。然而手动测试可能会非常费时和乏味。这就是为什么自动化测试变的越来越流行的原因。今天我们来聊一聊自动化测试中的一种测试技术就是fuzz测试，它是一种随机测试技术，可以帮助发现软件系统中的漏洞和错误。

​		Go语言目前已经是非常流行的语言了，具有高效、并发等特性。今天我们浅谈使用Go语言进行fuzz测试。从Go1.18开始，Go在其标准工具链中支持模糊测试。

## 什么是fuzz测试

​		**模糊测试** （fuzz testing, fuzzing）是一种[软件测试](https://zh.wikipedia.org/wiki/软件测试)技术。其核心思想是将自动或半自动生成的随机数据输入到一个[程序](https://zh.wikipedia.org/wiki/计算机程序)中，并监视程序异常，如崩溃，[断言](https://zh.wikipedia.org/wiki/斷言_(程式))（assertion）失败，以发现可能的程序错误，比如内存泄漏。模糊测试常常用于检测软件或计算机系统的安全漏洞。

## Go语言中的模糊测试

​		Go为开发者提供了一套强大的工具，用于实施模糊测试，核心是`testing`包中的`Fuzz`函数。通过创建以`Fuzz`为前缀的函数，按特定的签名定义输入输出，可以很容易集成模糊测试到我们的Go程序中。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202312212044424.png)

上图是一个模糊测试的例子，突出显示了它的主要组件。

模糊测试必须要遵循的规则：

1. Fuzz测试必须是一个函数，函数名必须以"Fuzz"开头，后面必须是一个大写字母开头的名称，例如"FuzzAdd"。
2. Fuzz测试函数必须接受一个*testing.F类型的参数，不能有返回值。
3. Fuzz测试函数必须在*_test.go文件中定义才能运行。
4. Fuzz目标必须是一个方法调用，第一个参数必须是*testing.F类型，后面跟随着fuzz测试的参数。
5. 每个fuzz测试函数只能有一个fuzz目标。
6. 所有的种子语料库条目的类型必须与fuzz测试的参数类型相同，顺序也必须相同。这适用于对Fuzz函数的调用以及fuzz测试的testdata/fuzz目录中的任何语料库文件。
7. Fuzz测试的参数类型只能是以下类型：
   - string, []byte
   - int, uint, uintptr, int8, int16, int32, rune, int64, uint8, uint16, uint32, uint64
   - float32, float64
   - bool

这些规则和要求是Go语言fuzz测试的基本要求，遵循这些规则可以帮助我们编写有效的fuzz测试并提高测试覆盖率。

​		接下来我们通过一些简单代码来体验一下Fuzz test。

### 代码编写

1. 我们创建一个名为fuzz的目录

   ```shell
   > mkdir fuzz
   > cd fuzz
   > go mod init example/fuzz
   > touch main.go
   ```

2. 在main.go中我们贴如以下代码

   ```go
   package main
   
   import "fmt"
   
   func Add(a, b int) int {
     	return a + b
   }
   
   func main(){
     	fmt.Printf("Add(1, 2) = %d\n", Add(1, 2))
   }
   ```

3. 运行代码

   ```shell
   go run .
   Add(1, 2) = 3
   ```

   现在代码正常运行，接下来我们来测试它。

### 添加单元测试

​		我们先为Add函数编写一个基本的单元测试。

1. 在`fuzz`目录创建一个文件为`add_test.go`。

2. 贴如以下代码到`add_test.go`。

   ```go
   package main
   
   import "testing"
   
   func TestAdd(t *testing.T) {
   	testcases := []struct {
   		a, b, want int
   	}{
   		{1, 2, 3},
   		{0, 0, 0},
   		{-1, -2, -3},
   		{1, -2, -1},
   	}
   	for _, tc := range testcases {
   		got := Add(tc.a, tc.b)
   		if got != tc.want {
   			t.Errorf("Add(%d, %d) == %d, want %d", tc.a, tc.b, got, tc.want)
   		}
   	}
   }
   ```

3. 执行单元测试

   ```shell
   > go test -v
   
   === RUN   TestAdd
   --- PASS: TestAdd (0.00s)
   PASS
   ok      example/fuzz    0.003s
   ```

### 添加模糊测试

单元测试的局限是我们必须把每个输入添加到测试中，模糊测试的好处是它提供了你的代码，并且可能识别你想出的测试用例的边缘情况。

我们把add_test.go中的单元测试替换为以下内容模糊测试。

```go
func FuzzAdd(f *testing.F) {
	f.Add(1, 2)
	f.Add(0, 0)
	f.Add(-1, -2)
	f.Add(-2, -2)

	f.Fuzz(func(t *testing.T, a, b int) {
		got := Add(a, b)
		if got != a+b {
			t.Errorf("Add(%d, %d) == %d, want %d", a, b, got, a+b)
		}
		t.Logf("Add(%d, %d) == %d", a, b, got)
	})
}
```

接下来我们执行模糊测试, 通过`-run`选项用于指定要运行的测试函数的正则表达式，`-fuzz`选项用于指定要运行的fuzz测试函数的正则表达式，`-fuzztime`选项来控制fuzz测试的持续时间。

```shell
> go test -v -run=FuzzAdd -fuzz=Fuzz -fuzztime 10s
=== RUN   FuzzAdd
fuzz: elapsed: 0s, gathering baseline coverage: 0/11 completed
fuzz: elapsed: 0s, gathering baseline coverage: 11/11 completed, now fuzzing with 8 workers
fuzz: elapsed: 3s, execs: 718882 (239620/sec), new interesting: 1 (total: 12)
fuzz: elapsed: 6s, execs: 1444761 (241916/sec), new interesting: 1 (total: 12)
fuzz: elapsed: 9s, execs: 2177414 (244215/sec), new interesting: 1 (total: 12)
fuzz: elapsed: 10s, execs: 2415524 (216791/sec), new interesting: 1 (total: 12)
--- PASS: FuzzAdd (10.10s)
=== NAME  
PASS
ok      example/fuzz    10.106s
```

总的来说，Go语言内置的fuzz测试框架提供了一种方便的方式来进行fuzz测试，它与testing包紧密集成，可以更方便的进行单元测试和fuzz测试。



# 参考文献

- [wiki](https://zh.wikipedia.org/wiki/%E6%A8%A1%E7%B3%8A%E6%B5%8B%E8%AF%95)
- [gotutorial](https://go.dev/doc/tutorial/fuzz)

