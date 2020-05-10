
---

title: Hexo：语雀云端写作 Coding 持续集成实现自动部署

urlname: klz3vb

date: 2020-04-19 11:42:50 +0800

tags: []

categories: []

---
ps：参考文章：[https://www.yuque.com/u46795/blog/dlloc7](https://www.yuque.com/u46795/blog/dlloc7) <br />上文所用的是GitHub action，不过我们用的是coding平台，好处是国内访问速度快，部署简单。<br />首先要有一个hexo博客，此处略过，下面来介绍一下在部署过程中遇到的一些坑。
<a name="xbC7v"></a>
## 原理

- coding持续集成编译博客源码构建静态文件
- 使用腾讯云函数调用coding构建的api
- 语雀的webhook功能调用腾讯云的函数调用。
<a name="tHlQo"></a>
## coding自动构建hexo

- 持续集成

参考文章：[http://www.mamicode.com/info-detail-2922484.html](http://www.mamicode.com/info-detail-2922484.html)<br />他的pipeline有些坑，node不支持，附上我的配置：<br />下面这个是直接粘过来的，方便理解

  - 令牌用户名是：`root`
  - 令牌密码是：`abcdefg`
  - 项目地址是`[https://e.coding.net/test/test.git](https://e.coding.net/test/test.git)`

那么我们的访问地址就是`[https://root:abcdefg@e.coding.net/test/test.git](https://root:abcdefg@e.coding.net/test/test.git)`
```bash
pipeline {
  agent any
  stages {
    stage('hexo') {
      steps {
        sh 'npm install -g hexo-cli'
      }
    }
    stage('拉取仓库') {
      steps {
        sh 'git clone https://令牌用户名:令牌密码@e.coding.net/lpdswing/hexo_blog.git .'
        sh 'npm install hexo --save'
        sh 'npm install yuque-hexo --save'
        sh 'npm install hexo-deployer-git --save'
      }
    }
    stage('发布') {
      steps {
        sh 'npm run start'
        sh 'mv source/_yuque/* source/_posts'
        sh 'ls source/_posts'
        sh 'hexo clean && hexo g -d'
        
      }
    }
  }
}

```
**坑1** ：yuque-hexo会把我们本来的_post文件夹直接删掉覆盖，导致本来有的文章被删除，所以这里再配置yuque的时候文章目录使用的是_yuque,一会会介绍到，yuque-hexo的配置。曲线救国，我们再自动构建的时候移动文章到post文件夹，然后再构建静态文章。<br />

<a name="Ugg9E"></a>
## 腾讯云函数

- 使用的python3.6

参考第一个文章的代码，附上配置：
```python
# -*- coding: utf8 -*-
import requests

def main_handler(event, context):


    url = "https://xxxxx" # 这个url再coding自动构建的触发规则>API触发哪里复制过来

    payload = {"ref": "master","envs": []}
    headers = {
    'Content-Type': 'application/json',
    }
	# coding的api触发用到是http basic auth验证，这里的用户密码也去coding的项目token拷贝
    # 开发者选项-项目令牌，如果没有就新建，仓库权限全勾上
    response = requests.post( url, headers=headers, json = payload,auth=('令牌用户名','令牌密码'))

    return response.text

```

- 测试腾讯云函数成功就可以下一步了



<a name="d9rzR"></a>
## 语雀配置

- 发布文章

文章发布的时候勾选推送给关注的人选项才会调用webhook。<br />

<a name="Dp0vq"></a>
## hexo本地配置

- package.json配置
```json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "yuqueConfig": {
    "baseUrl": "https://www.yuque.com/api/v2",
    "login": "你的个人路径",
    "repo": "你的知识库名称",
    "mdNameFormat": "title",
    "postPath": "source/_yuque",
    "token":"你的token，再用户设置的token那里新建",
    "onlyPublished": false
    
  },
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "server": "hexo server",
    "sync": "yuque-hexo sync",
    "deploy": "hexo deploy",
    "start": "yuque-hexo clean && yuque-hexo sync"
  },
  "hexo": {
    "version": "4.2.0"
  },
  "dependencies": {
    "hexo": "^4.2.0",
    "hexo-generator-archive": "^1.0.0",
    "hexo-generator-category": "^1.0.0",
    "hexo-generator-index": "^1.0.0",
    "hexo-generator-tag": "^1.0.0",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-marked": "^2.0.0",
    "hexo-renderer-stylus": "^1.1.0",
    "hexo-server": "^1.0.0",
    "yuque-hexo": "^1.6.4"
  }
}

```

- 坑1
  - login参数这个填的不是url地址，是url后缀类似用户名的字符串
- 坑2
  - 如果你本来有文章的话，"postPath": "source/_yuque",用我这个配置，不要用_post，否则再yuque-hexo sync的时候会把这个文件夹删除重建，原来写的文章也就没了，所以使用另一种办法，再coding自动构建的时候介绍了。



<a name="UxSWE"></a>
## 把hexo的源码push到coding

<br />在语雀发布一篇文章，发现文章同步过去了，大功告成！<br />ps： coding有时候会有构建失败的问题，目前还不清楚是啥原因，修改一下文章再发布一次搞定。

