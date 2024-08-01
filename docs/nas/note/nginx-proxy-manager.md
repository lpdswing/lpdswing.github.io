---
title: NginxProxyManager非标准端口http自动跳转https配置方法
comment: true  
tags:
 - Nas
 - Nginx
categories:
 - Nas
 - 家庭网络
# 设置首页的精选文章，值越大越靠前
sticky: 1  
date: 2024-08-01 19:00:00
---

# NginxProxyManager非标准端口http自动跳转https配置方法

家庭网络的80/443端口一般都封锁的, NPM配置强制https, 非标准端口会提示`the plain http was sent to https port`, 而不是像我们预期的那样自动跳转到https.

在`Advanced`里添加配置 `error_page 497 https://$http_host$request_uri;`
如图:
![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202408011723691.png)