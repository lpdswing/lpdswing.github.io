---
title: 初识k8s和动手实践
comment: true  
tags:
 - k8s
 - Docker
categories:
 - 学习小册
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---

## 什么是Kubernetes

Kubernetes 是一个可扩展的，用于容器化应用程序编排，管理的平台。Kubernetes 建立在 [Google 大规模运行生产工作负载十几年经验](https://research.google/pubs/pub43438)的基础上， 结合了社区中最优秀的想法和实践。由Google于2014年开源出来，目前在国内外大大小小的公司都得到了广泛的应用。

**Kubernetes** 这个名字源于希腊语，意为“舵手”或“飞行员”。k8s 这个缩写是因为 k 和 s 之间有八个字符的关系。后面都用简称k8s。

k8s 可支持公有云，私有云及混合云等，具备良好的可移植性。我们可直接使用它或在其之上构建自己的容器/云平台，以达到快速部署，快速扩展，及优化资源使用等。它致力于提供通用接口类似 CNI( Container Network Interface ), CSI(Container Storage Interface), CRI(Container Runtime Interface)等规范，以便有更多可能, 让更多的厂商共同加入其生态 体系内。

## 为什么需要k8s

不论是前端，后端，或者运维人员，可能都遇到过node安装版本不一致，服务器和本地环境不一致，频繁部署环境中间出现各种安装不了等问题。对于这些问题，目前来看最好的解决办法是标准化，容器化。目前用的最多的是Docker，通过Dockerfile对环境进行描述，对镜像进行交付，使用时不再关注环境不一致的问题。

作为一个技术人员，我们应该对整体的体系架构有所了解, 掌握更多 的技能，了解软件的完整生命周期，包括开发，交付，部署，以及当 流量变大时的扩容等。

在容器编排领域目前用的比较多的是k8s，docker-compose，swarm等。

## 基础概念

### Node

我们项目中跑服务的物理机或者虚拟机，对k8s来说这台服务器就是k8s中的Node。

- Node状态

  拿到服务器之后，我们一般会查看一下服务器的基本配置和信息，对加入k8s中的Node也是一样的，需要先检查它的状态，并上报到集群。

- 地址

  内部ip在集群内访问，外部ip在集群外访问，在k8s中每个Node的主机名会被记录下来。类似主机中用hostname命令获取的主机名。

- 信息

  类似在主机中cat /etc/issue、cat /etc/os-release等方法查看的信息，k8s也会把Node的基础信息记录下来。

- 容量

  统计CPU、内存等信息，以便于计算Node中可用Pod数量。

- 条件

  如果上述信息都满足我们需求，在集群内该Node被标记为Ready，这样我们的服务器就完成了交付。

### Deployment和Pod

假设我们现在需要用Nginx对一个静态html提供访问，对k8s来说，能提供html的访问服务就是deployment，对Nginx和html的组合可以理解为Pod，作为最小的调度单元。

### Container Runtime

虽然目前只提供了一个静态网页的访问，但是为了避免故障，我们再申请2个服务器，对原来的服务进行扩容，增加一台服务器我们做的是完全重复的事情，我们可选方案有kvm，Docker等技术，对于k8s来说，Docker就是container Runtime。

## 本地搭建k8s集群

### 方案选择

- [kind](https://github.com/kubernetes-sigs/kind)(Kubernetes in Docker) 
- minikube(是 K8S 官方为了开发者能在个人电脑上运行 K8S 而提供 的一套工具。实现上是通过 Go 语言编写，通过调用虚拟化管理程 序，创建出一个运行在虚拟机内的单节点集群。)
- Docker desktop
- Kubeadm(官方推荐用于生产环境)

### 创建集群

为了方便，我们选择Docker desktop默认的k8s创建方案。首先需要安装好Docker环境，不再赘述。

安装好kubectl，方便对搭建好的集群进行管理。kubectl 版本和集群之间的差异必须在一个小版本号之内。 例如：v1.27 版本的客户端能与 v1.26、 v1.27 和 v1.28 版本的控制面通信。 用最新兼容版本的 kubectl 有助于避免不可预见的问题。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306061724997.png)

验证集群是否正常启动，出现以下信息表示正常启动。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306061737059.png)

## 搭建一个生成环境可以的集群

大多数人的需求并不只是包含一个虚拟机节点的本地测试集群，而是 一个可在服务器运行，可自行扩/缩容，具备全部功能的，达到生产 可用的集群。我们选择一个 Kubernetes 官方推荐的方案 kubeadm 进行搭建。

kubeadm 是 Kubernetes 官方提供的一个 CLI 工具，可以很方便的 搭建一套符合官方最佳实践的最小化可用集群。

安装kubeadm([安装 kubeadm | Kubernetes](https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/))

支持的Docker的最新版本为20.10.17。

当前使用k8s最新版本为1.27.2。

### 准备

- 禁用swap
  - 通过`sudo swapoff -a`临时关闭swap
  
  - ```swift
    sudo vim /etc/fstab     注释swap相关
    ```
  
- `sudo cat /sys/class/dmi/id/product_uuid`可查看机器的 product_uuid 请确保要搭建集群的所有节点的 product_uuid 均不相同。

-  `sudo ufw disable `禁用防火墙。

- 配置主机hosts。

  ```shell
  # sudo vim /etc/hosts
  10.211.55.3 k8s-master
  ```

- 安装Docker

  ```shell
   sudo apt update
   sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
   # 导入源仓库的 GPG key
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   # 添加Docker软件源
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt update
   # 查看所有可用Docker版本
   apt list -a docker-ce
   sudo apt install docker-ce=5:20.10.17~3-0~ubuntu-jammy docker-ce-cli=5:20.10.17~3-0~ubuntu-jammy containerd.io
   sudo systemctl status docker
   # 锁定版本
   sudo apt-mark hold docker-ce
   sudo vi /etc/docker/daemon.json
   # 输入下面json
   {
    "registry-mirrors": [
      "https://dockerhub.azk8s.cn",
      "https://reg-mirror.qiniu.com",
      "https://quay-mirror.qiniu.com"
    ],
    "exec-opts": [ "native.cgroupdriver=systemd" ] 
  }
  systemctl daemon-reload
  systemctl restart docker
  #查看修改后的 docker cgroup 状态
  docker info | grep Cgroup
  # 当前用户加入Docker组
  sudo usermod -aG docker $USER
  ```

  

- 安装kubeadm，kubectl，kubelet，安装步骤参考上面链接。`apt-cache madison kubeadm|head`查看版本

- `sudo netstat -ntlp |grep -E '6443|23[79,80]|1025[0,1,2]' `检查是否有端口占用，如果有就手动释放。

### 配置

为了保证生产环境的稳定运行，我们增加kubelet的systemd配置，对服务进行管理。

```shell
cat <<EOF > /etc/systemd/system/kubelet.service
[Unit]
Description=kubelet: The Kubernetes Node Agent
Documentation=https://kubernetes.io/docs/home/
Wants=network-online.target
After=network-online.target

[Service]
ExecStart=/usr/bin/kubelet
Restart=always
StartLimitInterval=0
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
```

```shell
mkdir -p /etc/systemd/system/kubelet.service.d
# 设置kubelet开机自启
systemctl enable kubelet

```

配置containerd，常见的CRI有：containerd、CRI-O、Docker Engine、Mirantis Container Runtime。containerd需要和kubelet使用一样的systemd。

```shell
containerd config default > /etc/containerd/config.toml
vim /etc/containerd/config.toml

SystemdCgroup = false 改为 SystemdCgroup = true
#重新加载并重启containerd
systemctl daemon-reload && systemctl restart containerd
```



### 启动

- 安装crictl(目前apt安装已经带了，不需要手动安装了)

  - `crictl` 是 `kubelet` CRI (Container Runtime Interface) 的 CLI
  - `critest` 是 `kubelet` CRI 的测试工具集。

  ```shell
  # install crictl
  VERSION="v1.26.0"
  wget https://github.com/kubernetes-sigs/cri-tools/releases/download/$VERSION/crictl-$VERSION-linux-amd64.tar.gz
  sudo tar zxvf crictl-$VERSION-linux-amd64.tar.gz -C /usr/local/bin
  rm -f crictl-$VERSION-linux-amd64.tar.gz
  # install critest
  VERSION="v1.26.0"
  wget https://github.com/kubernetes-sigs/cri-tools/releases/download/$VERSION/critest-$VERSION-linux-amd64.tar.gz
  sudo tar zxvf critest-$VERSION-linux-amd64.tar.gz -C /usr/local/bin
  rm -f critest-$VERSION-linux-amd64.tar.gz
  ```

- 安装socat

  - `socat` 是一款很强大的命令行工具，可以建立两个双向字节流并在其中传输数据。它其中的一个功能是可以实现端口转发。
  - ubuntu下使用`sudo apt-get install -y socat`进行安装。

- 初始化集群

  ```bash
  kubeadm config print init-defaults > kubeadm.yaml
  # 配置文件如下
  apiVersion: kubeadm.k8s.io/v1beta3
  bootstrapTokens:
  - groups:
    - system:bootstrappers:kubeadm:default-node-token
    token: abcdef.0123456789abcdef
    ttl: 24h0m0s
    usages:
    - signing
    - authentication
  kind: InitConfiguration
  localAPIEndpoint:
    advertiseAddress: 10.211.55.3
    bindPort: 6443
  nodeRegistration:
    criSocket: unix:///var/run/containerd/containerd.sock
    imagePullPolicy: IfNotPresent
    name: k8s-master
    taints: null
  ---
  apiServer:
    timeoutForControlPlane: 4m0s
  apiVersion: kubeadm.k8s.io/v1beta3
  certificatesDir: /etc/kubernetes/pki
  clusterName: kubernetes
  controllerManager: {}
  dns: {}
  etcd:
    local:
      dataDir: /var/lib/etcd
  imageRepository: registry.k8s.io
  kind: ClusterConfiguration
  kubernetesVersion: 1.27.2
  networking:
    dnsDomain: cluster.local
    serviceSubnet: 10.96.0.0/12
    podSubnet: 10.1.0.0/16  # 增加指定pod的网段
  scheduler: {}
  ---
  # 指定cgroup
  apiVersion: kubelet.config.k8s.io/v1beta1
  kind: KubeletConfiguration
  cgroupDriver: systemd
  ```
  
  ![image-20230609145745282](/Users/lpdswing/Library/Application Support/typora-user-images/image-20230609145745282.png)

​		`kubeadm init` 执行起见生成了一些文件，而这些文件我们先前在 kubelet server 的 `Drop-in` 的配置中配置过。

​		生成这些配置文件后，将启动 `kubelet` 服务，生成一系列的证书和相关的配置之类的，并增加一些扩展。

​		最终集群创建成功，并提示可在任意机器上使用指定命令加入集群。


  ```shell
To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.211.55.3:6443 --token abcdef.0123456789abcdef \
	--discovery-token-ca-cert-hash sha256:af686c123ef26692b818eda43838997ba0997d76ac2fd509ab643a838e78201d
  ```

- 验证

  ![image-20230609150039514](/Users/lpdswing/Library/Application Support/typora-user-images/image-20230609150039514.png)

​		K8S 默认会监听一些端口，但并不是 `8080` 端口，由此可知，我们的 `kubectl`配置有误。

- 配置kubectl

  - 使用 `kubectl` 的参数 `--kubeconfig` 或者环境变量 `KUBECONFIG`

  ```shell
  root@k8s-master:/home/tom# kubectl --kubeconfig /etc/kubernetes/admin.conf get nodes
  NAME         STATUS     ROLES           AGE     VERSION
  k8s-master   NotReady   control-plane   6m10s   v1.27.2
  root@k8s-master:/home/tom# KUBECONFIG=/etc/kubernetes/admin.conf kubectl get nodes
  NAME         STATUS     ROLES           AGE     VERSION
  k8s-master   NotReady   control-plane   6m44s   v1.27.2
  root@k8s-master:/home/tom#
  ```

  - 更改默认配置文件

  ![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306091505052.png)

- 配置集群网络

  通过上面的配置，我们已经可以正常获取 `Node` 信息。但是状态是notready,可以通过`kubectl get nodes -o yaml`查看详细信息。

  ![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306091510150.png)

​		`CNI` 是 Container Network Interface 的缩写，是 K8S 用于配置 Linux 容器网络的接口规范。

```shell
# 使用flannel 当前最新
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml
```

![image-20230609152153990](/Users/lpdswing/Library/Application Support/typora-user-images/image-20230609152153990.png)

查看一下现有集群Pod状态。

```shell
kubectl get pods --all-namespaces
NAMESPACE      NAME                                 READY   STATUS              RESTARTS      AGE
kube-flannel   kube-flannel-ds-gqmtk                0/1     Error               3 (33s ago)   74s
kube-system    coredns-5d78c9869d-n89l7             0/1     ContainerCreating   0             25m
kube-system    coredns-5d78c9869d-wx5q9             0/1     ContainerCreating   0             25m
kube-system    etcd-k8s-master                      1/1     Running             1             26m
kube-system    kube-apiserver-k8s-master            1/1     Running             1             26m
kube-system    kube-controller-manager-k8s-master   1/1     Running             1             26m
kube-system    kube-proxy-srz8c                     1/1     Running             0             25m
kube-system    kube-scheduler-k8s-master            1/1     Running             1             26m
```

发现有两个 `coredns` 的 `Pod` 是 `ContainerCreating` 的状态，但并未就绪。`Pod` 实际会有一个调度过程，此处我们暂且不论，后续再对此进行解释。

- 新增Node

  ```shell
  # node节点忽略init配置文件修改和网络配置
  kubeadm join 10.211.55.3:6443 --token abcdef.0123456789abcdef \
  	--discovery-token-ca-cert-hash sha256:af686c123ef26692b818eda43838997ba0997d76ac2fd509ab643a838e78201d
  ```

  ![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306091645324.png)

