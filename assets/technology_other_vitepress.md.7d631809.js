import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d7865772.js";const m=JSON.parse('{"title":"vitepress博客主题参数配置","description":"列举了一些常用参数。","frontmatter":{"title":"vitepress博客主题参数配置","description":"列举了一些常用参数。","comment":true,"tags":["vitepress"],"categories":["知识库"],"sticky":999},"headers":[],"relativePath":"technology/other/vitepress.md","filePath":"technology/other/vitepress.md","lastUpdated":1684467644000}'),l={name:"technology/other/vitepress.md"},p=e(`<h1 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-label="Permalink to &quot;主题配置&quot;">​</a></h1><h2 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;Home&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">layout: home</span></span>
<span class="line"><span style="color:#e1e4e8;"># 首页部分元素定制</span></span>
<span class="line"><span style="color:#e1e4e8;">blog:</span></span>
<span class="line"><span style="color:#e1e4e8;"> name: &#39;@lpdswing&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"> motto: 集中起来的意志，可以击穿顽石</span></span>
<span class="line"><span style="color:#e1e4e8;"> inspiring: 真正的大师永远都怀着一颗学徒的心</span></span>
<span class="line"><span style="color:#e1e4e8;"> pageSize: 6</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">layout: home</span></span>
<span class="line"><span style="color:#24292e;"># 首页部分元素定制</span></span>
<span class="line"><span style="color:#24292e;">blog:</span></span>
<span class="line"><span style="color:#24292e;"> name: &#39;@lpdswing&#39;</span></span>
<span class="line"><span style="color:#24292e;"> motto: 集中起来的意志，可以击穿顽石</span></span>
<span class="line"><span style="color:#24292e;"> inspiring: 真正的大师永远都怀着一颗学徒的心</span></span>
<span class="line"><span style="color:#24292e;"> pageSize: 6</span></span>
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><h2 id="article" tabindex="-1">Article <a class="header-anchor" href="#article" aria-label="Permalink to &quot;Article&quot;">​</a></h2><h3 id="全部配置" tabindex="-1">全部配置 <a class="header-anchor" href="#全部配置" aria-label="Permalink to &quot;全部配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">title: 文章标题（默认取一级标题）</span></span>
<span class="line"><span style="color:#e1e4e8;">description: 类似副标题或者摘要（默认文章的前100字）</span></span>
<span class="line"><span style="color:#e1e4e8;">cover: 首页卡片列表里的图片（默认文章的第一张图）</span></span>
<span class="line"><span style="color:#e1e4e8;"># hiddenCover为false则不会在文章页展示上述的封面</span></span>
<span class="line"><span style="color:#e1e4e8;">hiddenCover: true </span></span>
<span class="line"><span style="color:#e1e4e8;">#设置文章是否出现在首页列表</span></span>
<span class="line"><span style="color:#e1e4e8;">hidden: false  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 单独设置文章作者信息</span></span>
<span class="line"><span style="color:#e1e4e8;">author： lpdswing  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 预计阅读时间</span></span>
<span class="line"><span style="color:#e1e4e8;">readingTime: true  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 关闭评论</span></span>
<span class="line"><span style="color:#e1e4e8;">comment: false  </span></span>
<span class="line"><span style="color:#e1e4e8;">date: 2023-01-01</span></span>
<span class="line"><span style="color:#e1e4e8;">tag: </span></span>
<span class="line"><span style="color:#e1e4e8;"> - go</span></span>
<span class="line"><span style="color:#e1e4e8;">tags:</span></span>
<span class="line"><span style="color:#e1e4e8;"> - go</span></span>
<span class="line"><span style="color:#e1e4e8;">categories:</span></span>
<span class="line"><span style="color:#e1e4e8;"> - 知识库</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#e1e4e8;">sticky: 1  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 用于设置在首页置顶展示的文章，从 1 开始，值越小越靠前</span></span>
<span class="line"><span style="color:#e1e4e8;">top: 1  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 用于设置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示</span></span>
<span class="line"><span style="color:#e1e4e8;">recommend: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">title: 文章标题（默认取一级标题）</span></span>
<span class="line"><span style="color:#24292e;">description: 类似副标题或者摘要（默认文章的前100字）</span></span>
<span class="line"><span style="color:#24292e;">cover: 首页卡片列表里的图片（默认文章的第一张图）</span></span>
<span class="line"><span style="color:#24292e;"># hiddenCover为false则不会在文章页展示上述的封面</span></span>
<span class="line"><span style="color:#24292e;">hiddenCover: true </span></span>
<span class="line"><span style="color:#24292e;">#设置文章是否出现在首页列表</span></span>
<span class="line"><span style="color:#24292e;">hidden: false  </span></span>
<span class="line"><span style="color:#24292e;"># 单独设置文章作者信息</span></span>
<span class="line"><span style="color:#24292e;">author： lpdswing  </span></span>
<span class="line"><span style="color:#24292e;"># 预计阅读时间</span></span>
<span class="line"><span style="color:#24292e;">readingTime: true  </span></span>
<span class="line"><span style="color:#24292e;"># 关闭评论</span></span>
<span class="line"><span style="color:#24292e;">comment: false  </span></span>
<span class="line"><span style="color:#24292e;">date: 2023-01-01</span></span>
<span class="line"><span style="color:#24292e;">tag: </span></span>
<span class="line"><span style="color:#24292e;"> - go</span></span>
<span class="line"><span style="color:#24292e;">tags:</span></span>
<span class="line"><span style="color:#24292e;"> - go</span></span>
<span class="line"><span style="color:#24292e;">categories:</span></span>
<span class="line"><span style="color:#24292e;"> - 知识库</span></span>
<span class="line"><span style="color:#24292e;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#24292e;">sticky: 1  </span></span>
<span class="line"><span style="color:#24292e;"># 用于设置在首页置顶展示的文章，从 1 开始，值越小越靠前</span></span>
<span class="line"><span style="color:#24292e;">top: 1  </span></span>
<span class="line"><span style="color:#24292e;"># 用于设置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示</span></span>
<span class="line"><span style="color:#24292e;">recommend: 1</span></span>
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><h3 id="默认常用配置" tabindex="-1">默认常用配置 <a class="header-anchor" href="#默认常用配置" aria-label="Permalink to &quot;默认常用配置&quot;">​</a></h3><p>写文章时可直接复制此配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">title: </span></span>
<span class="line"><span style="color:#e1e4e8;">comment: true  </span></span>
<span class="line"><span style="color:#e1e4e8;">tags:</span></span>
<span class="line"><span style="color:#e1e4e8;"> - go</span></span>
<span class="line"><span style="color:#e1e4e8;">categories:</span></span>
<span class="line"><span style="color:#e1e4e8;"> - 面试</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#e1e4e8;">sticky: 1  </span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">title: </span></span>
<span class="line"><span style="color:#24292e;">comment: true  </span></span>
<span class="line"><span style="color:#24292e;">tags:</span></span>
<span class="line"><span style="color:#24292e;"> - go</span></span>
<span class="line"><span style="color:#24292e;">categories:</span></span>
<span class="line"><span style="color:#24292e;"> - 面试</span></span>
<span class="line"><span style="color:#24292e;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#24292e;">sticky: 1  </span></span>
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div>`,9),o=[p];function c(t,i,r,y,d,h){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
