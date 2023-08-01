---
title: etcd
comment: true  
tags:
 - k8s
 - Docker
categories:
 - 学习小册
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---

Master是k8s集群的大脑, 而`etcd`则是大脑的核心.

## 什么是etcd

`etcd` 是由 CoreOS 团队发起的一个分布式，强一致的键值存储。它用 Go 语言编写，使用 `Raft` 协议作为一致性算法。多数情况下会用于分布式系统中的服务注册发现，或是用于存储系统的关键数据。

参考[FAQ | etcd](https://etcd.io/docs/v3.5/faq/)

etcd 是一个一致的分布式键值存储。主要用作分布式系统中的单独协调服务。旨在保存完全适合内存的少量数据。

## etcd有什么作用

`etcd` 在 K8S 中，最主要的作用便是其高可用，强一致的键值存储以及监听机制。

在 `kube-apiserver` 收到对应请求经过一系列的处理后，最终如果是集群所需要存储的数据，便会存储至 `etcd` 中。主部分主要是集群状态信息和元信息。

- 查找集群中的etcd pod

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011505223.png)

- 进入etcd并查看集群中的member

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011546753.png)

需要通过传递cert等证书信息才能正常查询。

- 查看存储的元信息

`etcd` 中存储的 K8S 集群元信息基本都是 `/registry` 下，我们可通过下面的方式进行查看

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011552415.png)

- 查看namespace信息

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011554076.png)

- 上面用到的命令

```shell
ETCDCTL_API=3 etcdctl --key=/run/config/pki/etcd/server.key  --cert=/run/config/pki/etcd/server.crt  --cacert=/run/config/pki/etcd/ca.crt member list
ETCDCTL_API=3 etcdctl --key=/run/config/pki/etcd/server.key  --cert=/run/config/pki/etcd/server.crt  --cacert=/run/config/pki/etcd/ca.crt get /registry --prefix --keys-only
ETCDCTL_API=3 etcdctl --key=/run/config/pki/etcd/server.key  --cert=/run/config/pki/etcd/server.crt  --cacert=/run/config/pki/etcd/ca.crt get /registry/namespaces --prefix --keys-only
```

## 总结

由于 `etcd` 集群使用 `Raft` 一致性算法，通常情况下 `etcd` 集群需要部署奇数个节点，如 3，5，7 等。`etcd` 集群维护也相对容易，很容易可以做成高可用集群。（这也是保障 K8S 集群高可用的重要一环）。

## Reference

[Kubernetes 从上手到实践 - 张晋涛 - 掘金小册 (juejin.cn)](https://juejin.cn/book/6844733753063915533)
