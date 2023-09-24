---
title: 深入了解Kubernetes的Top和Dashboard功能
comment: true  
tags:
 - k8s
 - Kubernetes
categories:
 - 技术教程
# 设置首页的精选文章，值越大越靠前
sticky: 1  
cover: https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241117935.png
---


Kubernetes（通常简称为K8s）已成为容器编排和管理的事实标准，为开发人员和运维团队提供了强大的工具和功能集。在Kubernetes生态系统中，"Top"和"Dashboard"是两个非常有用的组件，它们为用户提供了实时监控和可视化管理容器集群的能力。本文将深入探讨Kubernetes的Top和Dashboard功能，介绍它们的特点和用法，以及如何在日常工作中充分利用它们。

## Kubernetes的Top功能
Kubernetes的Top功能提供了对集群中资源使用情况的实时监控。它可以帮助用户了解各个节点和容器的资源消耗情况，包括CPU、内存、存储等方面的指标。通过使用Top命令，用户可以获得集群的整体性能概览，并深入了解资源的分配和利用情况。

### 资源监控
Top功能通过收集和展示节点和容器的资源使用指标，帮助用户了解系统的健康状况。用户可以查看各个节点的负载情况，以及容器的资源消耗情况，从而及时识别出资源瓶颈和性能问题。

### 资源调优
Top功能提供了对资源使用情况的实时监控，用户可以根据监控数据进行资源调优。通过查看资源使用情况的变化趋势，用户可以调整容器的资源配额，优化资源分配，提高系统的整体性能和稳定性。

## Kubernetes的Dashboard功能
Kubernetes的Dashboard是一个基于Web的用户界面，提供了对Kubernetes集群的可视化管理和操作。它为用户提供了一个直观的界面，用于监控和管理集群中的各种资源，如节点、Pod、服务、存储等。

### 集群概览
Dashboard功能提供了集群的整体概览，用户可以一目了然地查看集群中的节点数量、运行的Pod数量、服务数量等关键信息。通过Dashboard，用户可以快速了解集群的规模和状态，为后续的管理和操作提供参考。

### 资源管理
Dashboard功能允许用户对集群中的各种资源进行管理和操作。用户可以创建、删除和编辑Pod、服务等对象，也可以扩展和收缩节点的数量。通过Dashboard，用户可以轻松管理集群中的资源，提高工作效率。

### 日志和事件查看
Dashboard功能还提供了查看Pod日志和事件的能力。用户可以方便地查看Pod的日志输出，以便快速定位和解决问题。同时，用户还可以查看集群中发生的事件，如Pod的创建、删除和调度等，帮助用户了解系统的运行情况。

## 实操开启Top和Dashboard

### Top

对于较新的Kubernetes版本，Metrics Server是默认的资源监控组件。如果执行`kubectl top node`出现`error: Metrics API not available`说明没有安装好metrics server, 我们需要先安装好metrics server。

1. 执行`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml`安装，具体版本信息可以参考[metrics-server](https://github.com/kubernetes-sigs/metrics-server)。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241045945.png)

2. 执行`kubectl get pods -n kube-system`查看metris-server是否已经启动。如下图所示说明已经启动成功。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241049444.png)

3. 执行`kubectl top node`查看node状态, :grin::grin: 搞定收工。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241051783.png)

4. Trouble shooting

   如果网络环境不好，镜像下不下来可以使用阿里云镜像，我们把components.yaml下载下来。

   ```yaml
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server
     namespace: kube-system
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     labels:
       k8s-app: metrics-server
       rbac.authorization.k8s.io/aggregate-to-admin: "true"
       rbac.authorization.k8s.io/aggregate-to-edit: "true"
       rbac.authorization.k8s.io/aggregate-to-view: "true"
     name: system:aggregated-metrics-reader
   rules:
   - apiGroups:
     - metrics.k8s.io
     resources:
     - pods
     - nodes
     verbs:
     - get
     - list
     - watch
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     labels:
       k8s-app: metrics-server
     name: system:metrics-server
   rules:
   - apiGroups:
     - ""
     resources:
     - nodes/metrics
     verbs:
     - get
   - apiGroups:
     - ""
     resources:
     - pods
     - nodes
     verbs:
     - get
     - list
     - watch
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: RoleBinding
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server-auth-reader
     namespace: kube-system
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: Role
     name: extension-apiserver-authentication-reader
   subjects:
   - kind: ServiceAccount
     name: metrics-server
     namespace: kube-system
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server:system:auth-delegator
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: system:auth-delegator
   subjects:
   - kind: ServiceAccount
     name: metrics-server
     namespace: kube-system
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     labels:
       k8s-app: metrics-server
     name: system:metrics-server
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: system:metrics-server
   subjects:
   - kind: ServiceAccount
     name: metrics-server
     namespace: kube-system
   ---
   apiVersion: v1
   kind: Service
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server
     namespace: kube-system
   spec:
     ports:
     - name: https
       port: 443
       protocol: TCP
       targetPort: https
     selector:
       k8s-app: metrics-server
   ---
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server
     namespace: kube-system
   spec:
     selector:
       matchLabels:
         k8s-app: metrics-server
     strategy:
       rollingUpdate:
         maxUnavailable: 0
     template:
       metadata:
         labels:
           k8s-app: metrics-server
       spec:
         containers:
         - args:
           - --cert-dir=/tmp
           - --secure-port=4443
           - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
           - --kubelet-use-node-status-port
           - --metric-resolution=15s
           # 如果没权限访问，增加下面这一行
           - --kubelet-insecure-tls
           # 镜像替换为阿里云镜像
           image: registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server:v0.6.4
           imagePullPolicy: IfNotPresent
           livenessProbe:
             failureThreshold: 3
             httpGet:
               path: /livez
               port: https
               scheme: HTTPS
             periodSeconds: 10
           name: metrics-server
           ports:
           - containerPort: 4443
             name: https
             protocol: TCP
           readinessProbe:
             failureThreshold: 3
             httpGet:
               path: /readyz
               port: https
               scheme: HTTPS
             initialDelaySeconds: 20
             periodSeconds: 10
           resources:
             requests:
               cpu: 100m
               memory: 200Mi
           securityContext:
             allowPrivilegeEscalation: false
             readOnlyRootFilesystem: true
             runAsNonRoot: true
             runAsUser: 1000
           volumeMounts:
           - mountPath: /tmp
             name: tmp-dir
         nodeSelector:
           kubernetes.io/os: linux
         priorityClassName: system-cluster-critical
         serviceAccountName: metrics-server
         volumes:
         - emptyDir: {}
           name: tmp-dir
   ---
   apiVersion: apiregistration.k8s.io/v1
   kind: APIService
   metadata:
     labels:
       k8s-app: metrics-server
     name: v1beta1.metrics.k8s.io
   spec:
     group: metrics.k8s.io
     groupPriorityMinimum: 100
     insecureSkipTLSVerify: true
     service:
       name: metrics-server
       namespace: kube-system
     version: v1beta1
     versionPriority: 100
   ```

   

### Dashboard

参考[这里](https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/)我们很轻松就可以搞定k8s仪表盘（Dashboard），Follow me。

1. 部署Dashboard UI

   执行`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml`

2. 创建管理用户

   为了保护你的集群数据，默认情况下，Dashboard 会使用最少的 RBAC 配置进行部署。 当前，Dashboard 仅支持使用 Bearer 令牌登录。

   来，参考[这里](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)。

   - 创建dashboard-adminuser.yaml 内容如下：

     ```yaml
     apiVersion: v1
     kind: ServiceAccount
     metadata:
       name: admin-user
       namespace: kubernetes-dashboard
     ---
     apiVersion: rbac.authorization.k8s.io/v1
     kind: ClusterRoleBinding
     metadata:
       name: admin-user
     roleRef:
       apiGroup: rbac.authorization.k8s.io
       kind: ClusterRole
       name: cluster-admin
     subjects:
     - kind: ServiceAccount
       name: admin-user
       namespace: kubernetes-dashboard
     ```

   - 执行`kubectl apply -f dashboard-adminuser.yaml`,到这里admin-user就创建好了。

     ![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241104410.png)

3. 获取Bearer Token

   1. 直接通过命令创建Token

      执行下面的命令：

      ```shell
      kubectl -n kubernetes-dashboard create token admin-user
      # 会生成下面一串Token
      eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJrM3MiXSwiZXhwIjoxNjk1NTI4NTAwLCJpYXQiOjE2OTU1MjQ5MDAsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiMjdhYjI2YmEtMDNlNy00YTkxLWI5YWUtYjIwNDQ5ZjI5NDk4In19LCJuYmYiOjE2OTU1MjQ5MDAsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.owFzEipgjfkARdM8OSR3UK_eI23ZNj3gBX1Q7a6nxzRgP8lwd2vMdQM7c7uCpHT1w5KbzoZ70lOsxzqqcSWHOhXVUezYBZqRIIVX8VOHxrCUp0hL8rS71B_QO3WALuil_Q3cIJbuyzNt6Zku-rax7AZoFaxpIdHhoYFdjEmKLA3dv4M2dMYUxM5f0RfBvYRp_fO-6fOyv1Y5iFXaHsdGg5a3zdXkOM-1T7VftR0jq1Q2dD_VsnrvFWO5jQmIt3iywSG20CO2W9YlAtaVOcIHbqionttlHUyUrhOfvPaikR30rzGpkZDeD7l234XryWcQr3rtRgO-s3QkfNjdUSeHew
      ```

      

   2. 通过secret获取长期持有的Token

      创建dashboard-secret.yaml.

      ```yaml
      apiVersion: v1
      kind: Secret
      metadata:
        name: admin-user
        namespace: kubernetes-dashboard
        annotations:
          kubernetes.io/service-account.name: "admin-user"   
      type: kubernetes.io/service-account-token  
      ```

      执行`kubectl apply -f dashboard-secret.yaml`

      执行下面的命令获取Token：

      ```shell
      kubectl get secret admin-user -n kubernetes-dashboard -o jsonpath={".data.token"} | base64 -d
      
      eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyN2FiMjZiYS0wM2U3LTRhOTEtYjlhZS1iMjA0NDlmMjk0OTgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LJTDXBU9P5rWOj1ATTgJxk-tKKMvYI43dkkBAePMek01ixCc0Z62xfMcTVUaGdQTO-N6dYeiI1YHkkFHjiSYwNltdZEfY7xWY7cqQzKhI50jNObIX1grKxcw9jhanzWFfpeMdbMHtuzSnHDLYow8DlZnvuUuXaKEEryiIT4jUTilbOqtrA01Nayqmq_d88_izrUptCB1hAxfdwcbBBu1OmTc48PabU5POF-H8xPRqJ7act4Q1TH_u5H2gAnQcpsHC2UYrTB0ag6kUMFrwSN_u_-LooDdmqRKGbuFf2AM1DBw_H43N-keeLrir21ojOrb-JLc4icabnpEXM5jQHys9Q
      ```

   3. 命令行代理

      `kubectl proxy`来启动dashboard的访问。现在就可以通过`http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`来访问Dashboard了， UI只能通过执行这条命令的机器访问，如果是远程服务器，可以通过端口转发的方式来在本机电脑进行访问。

   4. 访问UI

      ![](https://github.com/kubernetes/dashboard/raw/master/docs/images/signin.png)

      把第二步得到的Token贴进来登录就可以了。

      ![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241117935.png)

      恭喜你已经完成Dashboard的部署访问。




## 总结
Kubernetes的Top和Dashboard功能为用户提供了实时监控和可视化管理容器集群的能力。Top功能帮助用户了解资源的使用情况，进行资源调优，提高系统性能和稳定性。Dashboard功能提供了集群的概览和资源管理功能，方便用户对集群进行可视化操作和管理。通过充分利用Kubernetes的Top和Dashboard功能，用户可以更好地理解和管理自己的容器集群，提高工作效率和生产力。
