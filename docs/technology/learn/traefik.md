---
title: traefik在docker中的使用
comment: true  
tags:
 - traefik
 - Docker
 - 技术教程
categories:
 - 知识库
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---

## 什么是traefik

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011605561.png)

Traefik 是一个 [开源](https://github.com/containous/traefik) 的可以使得服务发布变得轻松有趣的 *边缘路由器*。它负责接收你系统的请求，然后使用合适的组件来对这些请求进行处理。Traefik 的与众不同之处还在于它会自动发现适合你服务的配置。当 Traefik 在检查你的服务时，会找到服务的相关信息并找到合适的服务来满足对应的请求。

Traefik 兼容所有主流的集群技术，比如 Kubernetes，Docker，Docker Swarm，AWS，Mesos，Marathon，[等等](https://www.qikqiak.com/traefik-book/providers/overview/)；并且可以同时处理多种方式。（甚至可以用于在裸机上运行的比较旧的软件。）

:::tip

本文主要以docker-compose的方式来介绍traefik的使用

:::

## 概念

### 边缘路由器

Traefik 是一个 *边缘路由器* ，这意味着它是你整个应用平台的**大门**，拦截并路由每个传入的请求：它知道所有的逻辑和规则，这些规则确定哪些服务处理哪些请求（基于 [path](https://www.qikqiak.com/traefik-book/routing/routers/#rule)，[host](https://www.qikqiak.com/traefik-book/routing/routers/#rule)，[headers](https://www.qikqiak.com/traefik-book/routing/routers/#rule) [等等](https://www.qikqiak.com/traefik-book/routing/routers/#rule)...）。所有的服务都可以通过traefik来暴露出来，可以是http，也可以是tcp。

### 自动服务发现

传统的边缘路由器（或反向代理）需要一个配置文件，其中包含路由到你服务的所有可能路由，而 Traefik 则从服务本身获取它们。

在部署你的服务的时候，你附加上一些信息来告诉 Traefik 可以处理的服务请求的特征。

这意味着在部署服务时，Traefik 会立即检测到该服务并实时更新路由规则。当然同样的，当你从你的基础架构上删除这些服务时，这些路由同样会相应的消失。

## 配置介绍

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011637294.png)

traefik中的配置分为2种，一种是静态配置，是不会经常变动的，也就是启动配置。另一种是动态配置，包含定义系统如何处理请求的所有配置内容。这些配置是可以改变的，而且是无缝热更新的，没有任何请求中断或连接损耗。traefik从provides获取动态配置， 比如docker或者k8s。

### 动态配置

Traefik 从 [providers](https://www.qikqiak.com/traefik-book/providers/overview/) 获取它的 *动态配置*：编排器，服务注册表，或者普通的旧配置文件。

### 静态配置

在 Traefik 中定义了3中不同的**互斥方式**（比如，你只能同时使用一种方式）：

- 在配置文件中
- 在命令行参数中
- 通过环境变量传递

:::tip

在docker-compose中我们使用命令行参数的方式

:::

## 配置发现

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011621779.png)

Traefik 中的配置发现是通过下面的一些 *providers* 来实现的。*providers* 是现有的一些基础架构组件，可以是编排工具，容器引擎，云提供商或者 key-value 存储都可以。

Traefik 通过查询 providers 的 API 来查找有关路由的相关信息，Traefik 每次检测到更改时，都会动态更新路由。

具体支持的provider详见： [Traefik Configuration Discovery Overview - Traefik](https://doc.traefik.io/traefik/providers/overview/)

## 路由和负载均衡

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011659448.png)

首先，当启动 Traefik 时，需要定义 [entrypoints](https://www.qikqiak.com/traefik-book/routing/entrypoints)。然后，根据连接到这些 entrypoints 的 [路由](https://www.qikqiak.com/traefik-book/routing/routers) 来分析传入的请求，来查看他们是否与一组 [规则](https://www.qikqiak.com/traefik-book/routing/routers#rule) 相匹配，如果匹配，则路由可能会将请求通过一系列 [中间件](https://www.qikqiak.com/traefik-book/middlewares/overview/) 转换过后再转发到你的 [服务](https://www.qikqiak.com/traefik-book/routing/services/) 上去。

### 职责

- [*Providers*](https://www.qikqiak.com/traefik-book/providers/overview/) 来发现基础设施上存在的服务（它们的 IP、运行状况等...）
- [*Entrypoints*](https://www.qikqiak.com/traefik-book/routing/entrypoints/) 监听传入的流量（端口等...）
- [*Routers*](https://www.qikqiak.com/traefik-book/routing/routers/) 分析请求（host, path, headers, SSL, ...）
- [*Services*](https://www.qikqiak.com/traefik-book/routing/services/) 将请求转发到你的服务（load balancing, ...）
- [*Middlewares*](https://www.qikqiak.com/traefik-book/middlewares/overview/) 中间件，用来修改请求或者根据请求来做出一些判断 （authentication, rate limiting, headers, ...）

## docker示例

```yaml
version: '3'

services:
  reverse-proxy:
    # 官方的 Traefik 2.0 Docker 镜像
    image: traefik:v2.10.3
    command:
    	# 开启 web UI 并且告诉 Traefik 监听 Docker
      - --api.insecure=true
      # provider定义为docker
      - --providers.docker
      # 设置为不自动管理容器，label中traefik.enable=true设置会覆盖该值
      - --providers.docker.exposedByDefault=false
      # 自定义约束， 需要在容器label中指定才会被管理
      - --providers.docker.constraints=Label(`traefik.tftag`, `foo`)
      # 监听80端口
      - --entryPoints.http.address=:80
      # 监听443，https
      - --entryPoints.https.address=:443
      # 自动获取证书
      # acme https tlschallenge
      - --certificatesResolvers.le.acme.email=example@163.com
      - --certificatesResolvers.le.acme.storage=/letsencrypt/acme.json
      - --certificatesresolvers.le.acme.tlschallenge=true
      # http自动转https
      - --entrypoints.web.http.redirections.entryPoint.to=websecure
      - --entrypoints.web.http.redirections.entryPoint.scheme=https
      - --entrypoints.web.http.redirections.entrypoint.permanent=true

    ports:
      # HTTP 端口
      - "80:80"
      # Web UI 端口(通过 --api.insecure=true 启用)
      - "8080:8080"
    volumes:
      # 这样 Traefik 可以监听 Docker 事件
      - ./letsencrypt:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock
    labels:
      - traefik.docker.network=tf-public

  whoami:
    # 一个通过 API 暴露其 IP 地址的容器
    image: containous/whoami
    labels:
      - traefik.enable=true
      - traefik.tftag=foo
      - traefik.http.routers.whoami.rule=Host(`api.drug.com`)
      - traefik.http.routers.whoami.entrypoints=http,https
      - traefik.http.routers.whoami.tls.certresolver=gpt


networks:
  tf-public:
    external: true
```

## Reference

[Traefik (qikqiak.com)](https://www.qikqiak.com/traefik-book/)

[Traefik Proxy Documentation - Traefik](https://doc.traefik.io/traefik/)

