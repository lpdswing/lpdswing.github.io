import{j as e,b as s,c as i,a9 as t}from"./chunks/framework.gTVU9YHx.js";const F=JSON.parse('{"title":"etcd","description":"","frontmatter":{"title":"etcd","comment":true,"tags":["k8s","Docker"],"categories":["学习小册"],"sticky":1},"headers":[],"relativePath":"booklet/k8s/etcd.md","filePath":"booklet/k8s/etcd.md","lastUpdated":1690881272000}'),a={name:"booklet/k8s/etcd.md"},n=t(`<p>Master是k8s集群的大脑, 而<code>etcd</code>则是大脑的核心.</p><h2 id="什么是etcd" tabindex="-1">什么是etcd <a class="header-anchor" href="#什么是etcd" aria-label="Permalink to &quot;什么是etcd&quot;">​</a></h2><p><code>etcd</code> 是由 CoreOS 团队发起的一个分布式，强一致的键值存储。它用 Go 语言编写，使用 <code>Raft</code> 协议作为一致性算法。多数情况下会用于分布式系统中的服务注册发现，或是用于存储系统的关键数据。</p><p>参考<a href="https://etcd.io/docs/v3.5/faq/" target="_blank" rel="noreferrer">FAQ | etcd</a></p><p>etcd 是一个一致的分布式键值存储。主要用作分布式系统中的单独协调服务。旨在保存完全适合内存的少量数据。</p><h2 id="etcd有什么作用" tabindex="-1">etcd有什么作用 <a class="header-anchor" href="#etcd有什么作用" aria-label="Permalink to &quot;etcd有什么作用&quot;">​</a></h2><p><code>etcd</code> 在 K8S 中，最主要的作用便是其高可用，强一致的键值存储以及监听机制。</p><p>在 <code>kube-apiserver</code> 收到对应请求经过一系列的处理后，最终如果是集群所需要存储的数据，便会存储至 <code>etcd</code> 中。主部分主要是集群状态信息和元信息。</p><ul><li>查找集群中的etcd pod</li></ul><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011505223.png" alt=""></p><ul><li>进入etcd并查看集群中的member</li></ul><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011546753.png" alt=""></p><p>需要通过传递cert等证书信息才能正常查询。</p><ul><li>查看存储的元信息</li></ul><p><code>etcd</code> 中存储的 K8S 集群元信息基本都是 <code>/registry</code> 下，我们可通过下面的方式进行查看</p><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011552415.png" alt=""></p><ul><li>查看namespace信息</li></ul><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202308011554076.png" alt=""></p><ul><li>上面用到的命令</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ETCDCTL_API</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> etcdctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --key=/run/config/pki/etcd/server.key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cert=/run/config/pki/etcd/server.crt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cacert=/run/config/pki/etcd/ca.crt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> member</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ETCDCTL_API</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> etcdctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --key=/run/config/pki/etcd/server.key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cert=/run/config/pki/etcd/server.crt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cacert=/run/config/pki/etcd/ca.crt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /registry</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keys-only</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ETCDCTL_API</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> etcdctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --key=/run/config/pki/etcd/server.key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cert=/run/config/pki/etcd/server.crt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cacert=/run/config/pki/etcd/ca.crt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /registry/namespaces</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keys-only</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>由于 <code>etcd</code> 集群使用 <code>Raft</code> 一致性算法，通常情况下 <code>etcd</code> 集群需要部署奇数个节点，如 3，5，7 等。<code>etcd</code> 集群维护也相对容易，很容易可以做成高可用集群。（这也是保障 K8S 集群高可用的重要一环）。</p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p><a href="https://juejin.cn/book/6844733753063915533" target="_blank" rel="noreferrer">Kubernetes 从上手到实践 - 张晋涛 - 掘金小册 (juejin.cn)</a></p>`,24),c=[n];function r(l,p,d,h,k,o){return s(),i("div",null,c)}const C=e(a,[["render",r]]);export{F as __pageData,C as default};
