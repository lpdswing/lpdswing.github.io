import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9f27c3de.js";const m=JSON.parse('{"title":"深入了解Kubernetes的Top和Dashboard功能","description":"","frontmatter":{"title":"深入了解Kubernetes的Top和Dashboard功能","comment":true,"tags":["k8s","Kubernetes"],"categories":["技术教程"],"sticky":1,"cover":"https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241117935.png"},"headers":[],"relativePath":"technology/learn/k8s_dashboard.md","filePath":"technology/learn/k8s_dashboard.md","lastUpdated":1695530936000}'),p={name:"technology/learn/k8s_dashboard.md"},o=l(`<p>Kubernetes（通常简称为K8s）已成为容器编排和管理的事实标准，为开发人员和运维团队提供了强大的工具和功能集。在Kubernetes生态系统中，&quot;Top&quot;和&quot;Dashboard&quot;是两个非常有用的组件，它们为用户提供了实时监控和可视化管理容器集群的能力。本文将深入探讨Kubernetes的Top和Dashboard功能，介绍它们的特点和用法，以及如何在日常工作中充分利用它们。</p><h2 id="kubernetes的top功能" tabindex="-1">Kubernetes的Top功能 <a class="header-anchor" href="#kubernetes的top功能" aria-label="Permalink to &quot;Kubernetes的Top功能&quot;">​</a></h2><p>Kubernetes的Top功能提供了对集群中资源使用情况的实时监控。它可以帮助用户了解各个节点和容器的资源消耗情况，包括CPU、内存、存储等方面的指标。通过使用Top命令，用户可以获得集群的整体性能概览，并深入了解资源的分配和利用情况。</p><h3 id="资源监控" tabindex="-1">资源监控 <a class="header-anchor" href="#资源监控" aria-label="Permalink to &quot;资源监控&quot;">​</a></h3><p>Top功能通过收集和展示节点和容器的资源使用指标，帮助用户了解系统的健康状况。用户可以查看各个节点的负载情况，以及容器的资源消耗情况，从而及时识别出资源瓶颈和性能问题。</p><h3 id="资源调优" tabindex="-1">资源调优 <a class="header-anchor" href="#资源调优" aria-label="Permalink to &quot;资源调优&quot;">​</a></h3><p>Top功能提供了对资源使用情况的实时监控，用户可以根据监控数据进行资源调优。通过查看资源使用情况的变化趋势，用户可以调整容器的资源配额，优化资源分配，提高系统的整体性能和稳定性。</p><h2 id="kubernetes的dashboard功能" tabindex="-1">Kubernetes的Dashboard功能 <a class="header-anchor" href="#kubernetes的dashboard功能" aria-label="Permalink to &quot;Kubernetes的Dashboard功能&quot;">​</a></h2><p>Kubernetes的Dashboard是一个基于Web的用户界面，提供了对Kubernetes集群的可视化管理和操作。它为用户提供了一个直观的界面，用于监控和管理集群中的各种资源，如节点、Pod、服务、存储等。</p><h3 id="集群概览" tabindex="-1">集群概览 <a class="header-anchor" href="#集群概览" aria-label="Permalink to &quot;集群概览&quot;">​</a></h3><p>Dashboard功能提供了集群的整体概览，用户可以一目了然地查看集群中的节点数量、运行的Pod数量、服务数量等关键信息。通过Dashboard，用户可以快速了解集群的规模和状态，为后续的管理和操作提供参考。</p><h3 id="资源管理" tabindex="-1">资源管理 <a class="header-anchor" href="#资源管理" aria-label="Permalink to &quot;资源管理&quot;">​</a></h3><p>Dashboard功能允许用户对集群中的各种资源进行管理和操作。用户可以创建、删除和编辑Pod、服务等对象，也可以扩展和收缩节点的数量。通过Dashboard，用户可以轻松管理集群中的资源，提高工作效率。</p><h3 id="日志和事件查看" tabindex="-1">日志和事件查看 <a class="header-anchor" href="#日志和事件查看" aria-label="Permalink to &quot;日志和事件查看&quot;">​</a></h3><p>Dashboard功能还提供了查看Pod日志和事件的能力。用户可以方便地查看Pod的日志输出，以便快速定位和解决问题。同时，用户还可以查看集群中发生的事件，如Pod的创建、删除和调度等，帮助用户了解系统的运行情况。</p><h2 id="实操开启top和dashboard" tabindex="-1">实操开启Top和Dashboard <a class="header-anchor" href="#实操开启top和dashboard" aria-label="Permalink to &quot;实操开启Top和Dashboard&quot;">​</a></h2><h3 id="top" tabindex="-1">Top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;Top&quot;">​</a></h3><p>对于较新的Kubernetes版本，Metrics Server是默认的资源监控组件。如果执行<code>kubectl top node</code>出现<code>error: Metrics API not available</code>说明没有安装好metrics server, 我们需要先安装好metrics server。</p><ol><li>执行<code>kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml</code>安装，具体版本信息可以参考<a href="https://github.com/kubernetes-sigs/metrics-server" target="_blank" rel="noreferrer">metrics-server</a>。</li></ol><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241045945.png" alt=""></p><ol start="2"><li>执行<code>kubectl get pods -n kube-system</code>查看metris-server是否已经启动。如下图所示说明已经启动成功。</li></ol><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241049444.png" alt=""></p><ol start="3"><li>执行<code>kubectl top node</code>查看node状态, 😁😁 搞定收工。</li></ol><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241051783.png" alt=""></p><ol start="4"><li><p>Trouble shooting</p><p>如果网络环境不好，镜像下不下来可以使用阿里云镜像，我们把components.yaml下载下来。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rbac.authorization.k8s.io/aggregate-to-admin</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rbac.authorization.k8s.io/aggregate-to-edit</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rbac.authorization.k8s.io/aggregate-to-view</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system:aggregated-metrics-reader</span></span>
<span class="line"><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">metrics.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">pods</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">nodes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">watch</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system:metrics-server</span></span>
<span class="line"><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">nodes/metrics</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">pods</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">nodes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">watch</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">RoleBinding</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server-auth-reader</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#85E89D;">roleRef</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">apiGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Role</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">extension-apiserver-authentication-reader</span></span>
<span class="line"><span style="color:#85E89D;">subjects</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server:system:auth-delegator</span></span>
<span class="line"><span style="color:#85E89D;">roleRef</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">apiGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system:auth-delegator</span></span>
<span class="line"><span style="color:#85E89D;">subjects</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system:metrics-server</span></span>
<span class="line"><span style="color:#85E89D;">roleRef</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">apiGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system:metrics-server</span></span>
<span class="line"><span style="color:#85E89D;">subjects</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Service</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">443</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">protocol</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">TCP</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">targetPort</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">selector</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">selector</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">matchLabels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rollingUpdate</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">maxUnavailable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">containers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">args</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--cert-dir=/tmp</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--secure-port=4443</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--kubelet-use-node-status-port</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--metric-resolution=15s</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 如果没权限访问，增加下面这一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">--kubelet-insecure-tls</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 镜像替换为阿里云镜像</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server:v0.6.4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">imagePullPolicy</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">IfNotPresent</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">livenessProbe</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">failureThreshold</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">httpGet</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/livez</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">scheme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">HTTPS</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">periodSeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">containerPort</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4443</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">protocol</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">TCP</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">readinessProbe</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">failureThreshold</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">httpGet</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/readyz</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">scheme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">HTTPS</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">initialDelaySeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">periodSeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">requests</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">cpu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">100m</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">memory</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">200Mi</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">securityContext</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">allowPrivilegeEscalation</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">readOnlyRootFilesystem</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">runAsNonRoot</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">runAsUser</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumeMounts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">mountPath</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/tmp</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tmp-dir</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">nodeSelector</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">kubernetes.io/os</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">linux</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">priorityClassName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">system-cluster-critical</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">serviceAccountName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">emptyDir</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tmp-dir</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">apiregistration.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">APIService</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">k8s-app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1beta1.metrics.k8s.io</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">group</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">groupPriorityMinimum</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">insecureSkipTLSVerify</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">service</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">metrics-server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kube-system</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1beta1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">versionPriority</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rbac.authorization.k8s.io/aggregate-to-admin</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rbac.authorization.k8s.io/aggregate-to-edit</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rbac.authorization.k8s.io/aggregate-to-view</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system:aggregated-metrics-reader</span></span>
<span class="line"><span style="color:#22863A;">rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">metrics.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">pods</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">nodes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">get</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">watch</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system:metrics-server</span></span>
<span class="line"><span style="color:#22863A;">rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">nodes/metrics</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">get</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">pods</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">nodes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">get</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">watch</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">RoleBinding</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server-auth-reader</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#22863A;">roleRef</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">apiGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Role</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">extension-apiserver-authentication-reader</span></span>
<span class="line"><span style="color:#22863A;">subjects</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server:system:auth-delegator</span></span>
<span class="line"><span style="color:#22863A;">roleRef</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">apiGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system:auth-delegator</span></span>
<span class="line"><span style="color:#22863A;">subjects</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system:metrics-server</span></span>
<span class="line"><span style="color:#22863A;">roleRef</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">apiGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system:metrics-server</span></span>
<span class="line"><span style="color:#22863A;">subjects</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Service</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">443</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">protocol</span><span style="color:#24292E;">: </span><span style="color:#032F62;">TCP</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">targetPort</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">selector</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">apps/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployment</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">selector</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">matchLabels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rollingUpdate</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">maxUnavailable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">template</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">containers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">args</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--cert-dir=/tmp</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--secure-port=4443</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--kubelet-use-node-status-port</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--metric-resolution=15s</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 如果没权限访问，增加下面这一行</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">--kubelet-insecure-tls</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 镜像替换为阿里云镜像</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server:v0.6.4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">imagePullPolicy</span><span style="color:#24292E;">: </span><span style="color:#032F62;">IfNotPresent</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">livenessProbe</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">failureThreshold</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">httpGet</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/livez</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">scheme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">HTTPS</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">periodSeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">containerPort</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4443</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">protocol</span><span style="color:#24292E;">: </span><span style="color:#032F62;">TCP</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">readinessProbe</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">failureThreshold</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">httpGet</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/readyz</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">scheme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">HTTPS</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">initialDelaySeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">periodSeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">requests</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">cpu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">100m</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">memory</span><span style="color:#24292E;">: </span><span style="color:#032F62;">200Mi</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">securityContext</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">allowPrivilegeEscalation</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">readOnlyRootFilesystem</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">runAsNonRoot</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">runAsUser</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumeMounts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">mountPath</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/tmp</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tmp-dir</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">nodeSelector</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">kubernetes.io/os</span><span style="color:#24292E;">: </span><span style="color:#032F62;">linux</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">priorityClassName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">system-cluster-critical</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">serviceAccountName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">emptyDir</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tmp-dir</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">apiregistration.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">APIService</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">k8s-app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1beta1.metrics.k8s.io</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">group</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">groupPriorityMinimum</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">insecureSkipTLSVerify</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">service</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">metrics-server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kube-system</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1beta1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">versionPriority</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span></span></code></pre></div></li></ol><h3 id="dashboard" tabindex="-1">Dashboard <a class="header-anchor" href="#dashboard" aria-label="Permalink to &quot;Dashboard&quot;">​</a></h3><p>参考<a href="https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/" target="_blank" rel="noreferrer">这里</a>我们很轻松就可以搞定k8s仪表盘（Dashboard），Follow me。</p><ol><li><p>部署Dashboard UI</p><p>执行<code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml</code></p></li><li><p>创建管理用户</p><p>为了保护你的集群数据，默认情况下，Dashboard 会使用最少的 RBAC 配置进行部署。 当前，Dashboard 仅支持使用 Bearer 令牌登录。</p><p>来，参考<a href="https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md" target="_blank" rel="noreferrer">这里</a>。</p><ul><li><p>创建dashboard-adminuser.yaml 内容如下：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin-user</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kubernetes-dashboard</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin-user</span></span>
<span class="line"><span style="color:#85E89D;">roleRef</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">apiGroup</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">cluster-admin</span></span>
<span class="line"><span style="color:#85E89D;">subjects</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ServiceAccount</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin-user</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kubernetes-dashboard</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin-user</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kubernetes-dashboard</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRoleBinding</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin-user</span></span>
<span class="line"><span style="color:#22863A;">roleRef</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">apiGroup</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">cluster-admin</span></span>
<span class="line"><span style="color:#22863A;">subjects</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ServiceAccount</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin-user</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kubernetes-dashboard</span></span></code></pre></div></li><li><p>执行<code>kubectl apply -f dashboard-adminuser.yaml</code>,到这里admin-user就创建好了。</p><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241104410.png" alt=""></p></li></ul></li><li><p>获取Bearer Token</p><ol><li><p>直接通过命令创建Token</p><p>执行下面的命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubernetes-dashboard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin-user</span></span>
<span class="line"><span style="color:#6A737D;"># 会生成下面一串Token</span></span>
<span class="line"><span style="color:#B392F0;">eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJrM3MiXSwiZXhwIjoxNjk1NTI4NTAwLCJpYXQiOjE2OTU1MjQ5MDAsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiMjdhYjI2YmEtMDNlNy00YTkxLWI5YWUtYjIwNDQ5ZjI5NDk4In19LCJuYmYiOjE2OTU1MjQ5MDAsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.owFzEipgjfkARdM8OSR3UK_eI23ZNj3gBX1Q7a6nxzRgP8lwd2vMdQM7c7uCpHT1w5KbzoZ70lOsxzqqcSWHOhXVUezYBZqRIIVX8VOHxrCUp0hL8rS71B_QO3WALuil_Q3cIJbuyzNt6Zku-rax7AZoFaxpIdHhoYFdjEmKLA3dv4M2dMYUxM5f0RfBvYRp_fO-6fOyv1Y5iFXaHsdGg5a3zdXkOM-1T7VftR0jq1Q2dD_VsnrvFWO5jQmIt3iywSG20CO2W9YlAtaVOcIHbqionttlHUyUrhOfvPaikR30rzGpkZDeD7l234XryWcQr3rtRgO-s3QkfNjdUSeHew</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubernetes-dashboard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin-user</span></span>
<span class="line"><span style="color:#6A737D;"># 会生成下面一串Token</span></span>
<span class="line"><span style="color:#6F42C1;">eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJrM3MiXSwiZXhwIjoxNjk1NTI4NTAwLCJpYXQiOjE2OTU1MjQ5MDAsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiMjdhYjI2YmEtMDNlNy00YTkxLWI5YWUtYjIwNDQ5ZjI5NDk4In19LCJuYmYiOjE2OTU1MjQ5MDAsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.owFzEipgjfkARdM8OSR3UK_eI23ZNj3gBX1Q7a6nxzRgP8lwd2vMdQM7c7uCpHT1w5KbzoZ70lOsxzqqcSWHOhXVUezYBZqRIIVX8VOHxrCUp0hL8rS71B_QO3WALuil_Q3cIJbuyzNt6Zku-rax7AZoFaxpIdHhoYFdjEmKLA3dv4M2dMYUxM5f0RfBvYRp_fO-6fOyv1Y5iFXaHsdGg5a3zdXkOM-1T7VftR0jq1Q2dD_VsnrvFWO5jQmIt3iywSG20CO2W9YlAtaVOcIHbqionttlHUyUrhOfvPaikR30rzGpkZDeD7l234XryWcQr3rtRgO-s3QkfNjdUSeHew</span></span></code></pre></div></li><li><p>通过secret获取长期持有的Token</p><p>创建dashboard-secret.yaml.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Secret</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin-user</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kubernetes-dashboard</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">annotations</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">kubernetes.io/service-account.name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;admin-user&quot;</span><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kubernetes.io/service-account-token</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Secret</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin-user</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kubernetes-dashboard</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">annotations</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">kubernetes.io/service-account.name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin-user&quot;</span><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kubernetes.io/service-account-token</span></span></code></pre></div><p>执行<code>kubectl apply -f dashboard-secret.yaml</code></p><p>执行下面的命令获取Token：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">secret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin-user</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubernetes-dashboard</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jsonpath={&quot;.data.token&quot;}</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base64</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyN2FiMjZiYS0wM2U3LTRhOTEtYjlhZS1iMjA0NDlmMjk0OTgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LJTDXBU9P5rWOj1ATTgJxk-tKKMvYI43dkkBAePMek01ixCc0Z62xfMcTVUaGdQTO-N6dYeiI1YHkkFHjiSYwNltdZEfY7xWY7cqQzKhI50jNObIX1grKxcw9jhanzWFfpeMdbMHtuzSnHDLYow8DlZnvuUuXaKEEryiIT4jUTilbOqtrA01Nayqmq_d88_izrUptCB1hAxfdwcbBBu1OmTc48PabU5POF-H8xPRqJ7act4Q1TH_u5H2gAnQcpsHC2UYrTB0ag6kUMFrwSN_u_-LooDdmqRKGbuFf2AM1DBw_H43N-keeLrir21ojOrb-JLc4icabnpEXM5jQHys9Q</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">secret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin-user</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubernetes-dashboard</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jsonpath={&quot;.data.token&quot;}</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">base64</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">eyJhbGciOiJSUzI1NiIsImtpZCI6IjNpNTB6b2NBSHpFRHFiNUhTVDRyTURpV1g0OTB2aHBnNEVka1Npcy01RHMifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyN2FiMjZiYS0wM2U3LTRhOTEtYjlhZS1iMjA0NDlmMjk0OTgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LJTDXBU9P5rWOj1ATTgJxk-tKKMvYI43dkkBAePMek01ixCc0Z62xfMcTVUaGdQTO-N6dYeiI1YHkkFHjiSYwNltdZEfY7xWY7cqQzKhI50jNObIX1grKxcw9jhanzWFfpeMdbMHtuzSnHDLYow8DlZnvuUuXaKEEryiIT4jUTilbOqtrA01Nayqmq_d88_izrUptCB1hAxfdwcbBBu1OmTc48PabU5POF-H8xPRqJ7act4Q1TH_u5H2gAnQcpsHC2UYrTB0ag6kUMFrwSN_u_-LooDdmqRKGbuFf2AM1DBw_H43N-keeLrir21ojOrb-JLc4icabnpEXM5jQHys9Q</span></span></code></pre></div></li><li><p>命令行代理</p><p><code>kubectl proxy</code>来启动dashboard的访问。现在就可以通过<code>http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/</code>来访问Dashboard了， UI只能通过执行这条命令的机器访问，如果是远程服务器，可以通过端口转发的方式来在本机电脑进行访问。</p></li><li><p>访问UI</p><p><img src="https://github.com/kubernetes/dashboard/raw/master/docs/images/signin.png" alt=""></p><p>把第二步得到的Token贴进来登录就可以了。</p><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241117935.png" alt=""></p><p>恭喜你已经完成Dashboard的部署访问。</p></li></ol></li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Kubernetes的Top和Dashboard功能为用户提供了实时监控和可视化管理容器集群的能力。Top功能帮助用户了解资源的使用情况，进行资源调优，提高系统性能和稳定性。Dashboard功能提供了集群的概览和资源管理功能，方便用户对集群进行可视化操作和管理。通过充分利用Kubernetes的Top和Dashboard功能，用户可以更好地理解和管理自己的容器集群，提高工作效率和生产力。</p>`,30),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
