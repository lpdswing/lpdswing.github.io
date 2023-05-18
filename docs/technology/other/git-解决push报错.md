---
title: git解决push报错
date: 2017-04-22 18:04:30
tags:
 - git
categories:
 - 知识库
---

# git -解决push报错问题

### 问题出现场景

github新建仓库,想把本地仓库推送到github

---

操作步骤

1. 进入本地仓库,假设项目为test

   `cd test`

   `git init`

2. 查看状态

   `git status`

3. 把更改的文件添加到本地git仓库

   `git add .`

4. 设置用户名邮箱

   `git config --global user.name 'jimi'`

   `git config --global user.email 'jimi@163.com`

5. 提交

   `git commit -m "first commit"`

6. 把本地test项目和githhub的test项目进行关联

   `git remote add origin xxxxx@xxxx`

7. 向远程仓库提交代码(配置好ssh或者密码)

   `git push origin master`

   可能会出现问题:

   ```shell
   $ git push origin master  
   To github.com:JasonLi-cn/test.git  
    ! [rejected]        master -> master (fetch first)  
   error: failed to push some refs to 'git@github.com:JasonLi-cn/test.git'  
   hint: Updates were rejected because the remote contains work that you do  
   hint: not have locally. This is usually caused by another repository pushing  
   hint: to the same ref. You may want to first integrate the remote changes  
   hint: (e.g., 'git pull ...') before pushing again.  
   hint: See the 'Note about fast-forwards' in 'git push --help' for details. 
   ```

   说明远程仓库有本地仓库没有的文件,需要先pull

   `git pull origin master`

   这时可能会遇到问题:

   ```
   $ git pull origin master  
   From github.com:JasonLi-cn/test  
    * branch            master     -> FETCH_HEAD  
   fatal: refusing to merge unrelated histories  
   ```

   解决办法:

   `git pull origin master --allow-unrelated-histories`

   这时就可以push了.

   如果远程仓库有和本地仓库一样的文件还不能直接push,git status发现:

   ```
   On branch master
   You have unmerged paths.
     (fix conflicts and run "git commit")
     (use "git merge --abort" to abort the merge)

   Unmerged paths:
     (use "git add <file>..." to mark resolution)

   	both added:      LICENSE

   ```

   只需要执行如下操作然后重新提交就行了

   ```Shell
   git rm LICENSE
   git add .
   git commit -m "merge"
   git push origin master
   ```

---

最好推荐几篇写的非常不错的git入门文章:

[从0开始学习 GitHub 系列之「初识 GitHub」](http://stormzhang.com/github/2016/05/25/learn-github-from-zero1/)

[从0开始学习 GitHub 系列之「加入 GitHub」](http://stormzhang.com/github/2016/05/26/learn-github-from-zero2/)

[从0开始学习 GitHub 系列之「Git 速成」](http://stormzhang.com/github/2016/05/30/learn-github-from-zero3/)

[从0开始学习 GitHub 系列之「向GitHub 提交代码」](http://stormzhang.com/github/2016/06/04/learn-github-from-zero4/)

[从0开始学习 GitHub 系列之「Git 进阶」](http://stormzhang.com/github/2016/06/16/learn-github-from-zero5/)

[从0开始学习 GitHub 系列之「团队合作利器 BRANCH」](http://stormzhang.com/github/2016/07/09/learn-from-github-from-zero6/)

[从0开始学习 GitHub 系列之「如何发现优秀的开源项目？」](http://stormzhang.com/github/2016/07/28/learn-github-from-zero7/)