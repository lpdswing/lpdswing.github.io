import{_ as s,o as a,c as i,R as e}from"./chunks/framework.UjIW6W3V.js";const g=JSON.parse('{"title":"traefik在docker中的使用","description":"","frontmatter":{"title":"traefik在docker中的使用","comment":true,"tags":["traefik","Docker","技术教程"],"categories":["知识库"],"sticky":1},"headers":[],"relativePath":"technology/learn/traefik.md","filePath":"technology/learn/traefik.md","lastUpdated":1690881272000}'),n={name:"technology/learn/traefik.md"},t=e(`<h2 id="什么是traefik" tabindex="-1">什么是traefik <a class="header-anchor" href="#什么是traefik" aria-label="Permalink to &quot;什么是traefik&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011605561.png" alt=""></p><p>Traefik 是一个 <a href="https://github.com/containous/traefik" target="_blank" rel="noreferrer">开源</a> 的可以使得服务发布变得轻松有趣的 <em>边缘路由器</em>。它负责接收你系统的请求，然后使用合适的组件来对这些请求进行处理。Traefik 的与众不同之处还在于它会自动发现适合你服务的配置。当 Traefik 在检查你的服务时，会找到服务的相关信息并找到合适的服务来满足对应的请求。</p><p>Traefik 兼容所有主流的集群技术，比如 Kubernetes，Docker，Docker Swarm，AWS，Mesos，Marathon，<a href="https://www.qikqiak.com/traefik-book/providers/overview/" target="_blank" rel="noreferrer">等等</a>；并且可以同时处理多种方式。（甚至可以用于在裸机上运行的比较旧的软件。）</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文主要以docker-compose的方式来介绍traefik的使用</p></div><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><h3 id="边缘路由器" tabindex="-1">边缘路由器 <a class="header-anchor" href="#边缘路由器" aria-label="Permalink to &quot;边缘路由器&quot;">​</a></h3><p>Traefik 是一个 <em>边缘路由器</em> ，这意味着它是你整个应用平台的<strong>大门</strong>，拦截并路由每个传入的请求：它知道所有的逻辑和规则，这些规则确定哪些服务处理哪些请求（基于 <a href="https://www.qikqiak.com/traefik-book/routing/routers/#rule" target="_blank" rel="noreferrer">path</a>，<a href="https://www.qikqiak.com/traefik-book/routing/routers/#rule" target="_blank" rel="noreferrer">host</a>，<a href="https://www.qikqiak.com/traefik-book/routing/routers/#rule" target="_blank" rel="noreferrer">headers</a> <a href="https://www.qikqiak.com/traefik-book/routing/routers/#rule" target="_blank" rel="noreferrer">等等</a>...）。所有的服务都可以通过traefik来暴露出来，可以是http，也可以是tcp。</p><h3 id="自动服务发现" tabindex="-1">自动服务发现 <a class="header-anchor" href="#自动服务发现" aria-label="Permalink to &quot;自动服务发现&quot;">​</a></h3><p>传统的边缘路由器（或反向代理）需要一个配置文件，其中包含路由到你服务的所有可能路由，而 Traefik 则从服务本身获取它们。</p><p>在部署你的服务的时候，你附加上一些信息来告诉 Traefik 可以处理的服务请求的特征。</p><p>这意味着在部署服务时，Traefik 会立即检测到该服务并实时更新路由规则。当然同样的，当你从你的基础架构上删除这些服务时，这些路由同样会相应的消失。</p><h2 id="配置介绍" tabindex="-1">配置介绍 <a class="header-anchor" href="#配置介绍" aria-label="Permalink to &quot;配置介绍&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011637294.png" alt=""></p><p>traefik中的配置分为2种，一种是静态配置，是不会经常变动的，也就是启动配置。另一种是动态配置，包含定义系统如何处理请求的所有配置内容。这些配置是可以改变的，而且是无缝热更新的，没有任何请求中断或连接损耗。traefik从provides获取动态配置， 比如docker或者k8s。</p><h3 id="动态配置" tabindex="-1">动态配置 <a class="header-anchor" href="#动态配置" aria-label="Permalink to &quot;动态配置&quot;">​</a></h3><p>Traefik 从 <a href="https://www.qikqiak.com/traefik-book/providers/overview/" target="_blank" rel="noreferrer">providers</a> 获取它的 <em>动态配置</em>：编排器，服务注册表，或者普通的旧配置文件。</p><h3 id="静态配置" tabindex="-1">静态配置 <a class="header-anchor" href="#静态配置" aria-label="Permalink to &quot;静态配置&quot;">​</a></h3><p>在 Traefik 中定义了3中不同的<strong>互斥方式</strong>（比如，你只能同时使用一种方式）：</p><ul><li>在配置文件中</li><li>在命令行参数中</li><li>通过环境变量传递</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在docker-compose中我们使用命令行参数的方式</p></div><h2 id="配置发现" tabindex="-1">配置发现 <a class="header-anchor" href="#配置发现" aria-label="Permalink to &quot;配置发现&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011621779.png" alt=""></p><p>Traefik 中的配置发现是通过下面的一些 <em>providers</em> 来实现的。<em>providers</em> 是现有的一些基础架构组件，可以是编排工具，容器引擎，云提供商或者 key-value 存储都可以。</p><p>Traefik 通过查询 providers 的 API 来查找有关路由的相关信息，Traefik 每次检测到更改时，都会动态更新路由。</p><p>具体支持的provider详见： <a href="https://doc.traefik.io/traefik/providers/overview/" target="_blank" rel="noreferrer">Traefik Configuration Discovery Overview - Traefik</a></p><h2 id="路由和负载均衡" tabindex="-1">路由和负载均衡 <a class="header-anchor" href="#路由和负载均衡" aria-label="Permalink to &quot;路由和负载均衡&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011659448.png" alt=""></p><p>首先，当启动 Traefik 时，需要定义 <a href="https://www.qikqiak.com/traefik-book/routing/entrypoints" target="_blank" rel="noreferrer">entrypoints</a>。然后，根据连接到这些 entrypoints 的 <a href="https://www.qikqiak.com/traefik-book/routing/routers" target="_blank" rel="noreferrer">路由</a> 来分析传入的请求，来查看他们是否与一组 <a href="https://www.qikqiak.com/traefik-book/routing/routers#rule" target="_blank" rel="noreferrer">规则</a> 相匹配，如果匹配，则路由可能会将请求通过一系列 <a href="https://www.qikqiak.com/traefik-book/middlewares/overview/" target="_blank" rel="noreferrer">中间件</a> 转换过后再转发到你的 <a href="https://www.qikqiak.com/traefik-book/routing/services/" target="_blank" rel="noreferrer">服务</a> 上去。</p><h3 id="职责" tabindex="-1">职责 <a class="header-anchor" href="#职责" aria-label="Permalink to &quot;职责&quot;">​</a></h3><ul><li><a href="https://www.qikqiak.com/traefik-book/providers/overview/" target="_blank" rel="noreferrer"><em>Providers</em></a> 来发现基础设施上存在的服务（它们的 IP、运行状况等...）</li><li><a href="https://www.qikqiak.com/traefik-book/routing/entrypoints/" target="_blank" rel="noreferrer"><em>Entrypoints</em></a> 监听传入的流量（端口等...）</li><li><a href="https://www.qikqiak.com/traefik-book/routing/routers/" target="_blank" rel="noreferrer"><em>Routers</em></a> 分析请求（host, path, headers, SSL, ...）</li><li><a href="https://www.qikqiak.com/traefik-book/routing/services/" target="_blank" rel="noreferrer"><em>Services</em></a> 将请求转发到你的服务（load balancing, ...）</li><li><a href="https://www.qikqiak.com/traefik-book/middlewares/overview/" target="_blank" rel="noreferrer"><em>Middlewares</em></a> 中间件，用来修改请求或者根据请求来做出一些判断 （authentication, rate limiting, headers, ...）</li></ul><h2 id="docker示例" tabindex="-1">docker示例 <a class="header-anchor" href="#docker示例" aria-label="Permalink to &quot;docker示例&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reverse-proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 官方的 Traefik 2.0 Docker 镜像</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik:v2.10.3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	# 开启 web UI 并且告诉 Traefik 监听 Docker</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--api.insecure=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # provider定义为docker</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--providers.docker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 设置为不自动管理容器，label中traefik.enable=true设置会覆盖该值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--providers.docker.exposedByDefault=false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 自定义约束， 需要在容器label中指定才会被管理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--providers.docker.constraints=Label(\`traefik.tftag\`, \`foo\`)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 监听80端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--entryPoints.http.address=:80</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 监听443，https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--entryPoints.https.address=:443</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 自动获取证书</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # acme https tlschallenge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--certificatesResolvers.le.acme.email=example@163.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--certificatesResolvers.le.acme.storage=/letsencrypt/acme.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--certificatesresolvers.le.acme.tlschallenge=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # http自动转https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--entrypoints.web.http.redirections.entryPoint.to=websecure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--entrypoints.web.http.redirections.entryPoint.scheme=https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--entrypoints.web.http.redirections.entrypoint.permanent=true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # HTTP 端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80:80&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Web UI 端口(通过 --api.insecure=true 启用)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 这样 Traefik 可以监听 Docker 事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./letsencrypt:/letsencrypt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.docker.network=tf-public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  whoami</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 一个通过 API 暴露其 IP 地址的容器</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">containous/whoami</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.enable=true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.tftag=foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.http.routers.whoami.rule=Host(\`api.drug.com\`)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.http.routers.whoami.entrypoints=http,https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">traefik.http.routers.whoami.tls.certresolver=gpt</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tf-public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    external</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p><a href="https://www.qikqiak.com/traefik-book/" target="_blank" rel="noreferrer">Traefik (qikqiak.com)</a></p><p><a href="https://doc.traefik.io/traefik/" target="_blank" rel="noreferrer">Traefik Proxy Documentation - Traefik</a></p>`,36),r=[t];function l(k,p,h,o,c,d){return a(),i("div",null,r)}const f=s(n,[["render",l]]);export{g as __pageData,f as default};
