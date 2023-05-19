---
title: vitepress博客主题参数配置
description: 列举了一些常用参数。
comment: true  
tags:
 - vitepress
categories:
 - 知识库
# 设置首页的精选文章，值越大越靠前
sticky: 999
---
# 主题配置

## Home

```
---
layout: home
# 首页部分元素定制
blog:
 name: '@lpdswing'
 motto: 集中起来的意志，可以击穿顽石
 inspiring: 真正的大师永远都怀着一颗学徒的心
 pageSize: 6
---
```
## Article
### 全部配置
```
---
title: 文章标题（默认取一级标题）
description: 类似副标题或者摘要（默认文章的前100字）
cover: 首页卡片列表里的图片（默认文章的第一张图）
# hiddenCover为false则不会在文章页展示上述的封面
hiddenCover: true 
#设置文章是否出现在首页列表
hidden: false  
# 单独设置文章作者信息
author： lpdswing  
# 预计阅读时间
readingTime: true  
# 关闭评论
comment: false  
date: 2023-01-01
tag: 
 - go
tags:
 - go
categories:
 - 知识库
# 设置首页的精选文章，值越大越靠前
sticky: 1  
# 用于设置在首页置顶展示的文章，从 1 开始，值越小越靠前
top: 1  
# 用于设置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示
recommend: 1
---
```
### 默认常用配置
写文章时可直接复制此配置
```
---
title: 
comment: true  
tags:
 - go
categories:
 - 面试
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---
```

