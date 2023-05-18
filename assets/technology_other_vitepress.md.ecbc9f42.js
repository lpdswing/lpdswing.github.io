import{_ as s,o as a,c as n,O as l}from"./chunks/framework.72ba6402.js";const h=JSON.parse('{"title":"vitepress博客主题参数配置","description":"列举了一些常用参数。","frontmatter":{"title":"vitepress博客主题参数配置","description":"列举了一些常用参数。","comment":true,"tags":["vitepress"],"categories":["知识库"],"sticky":999},"headers":[],"relativePath":"technology/other/vitepress.md","filePath":"technology/other/vitepress.md","lastUpdated":1684403883000}'),e={name:"technology/other/vitepress.md"},p=l(`<h1 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-label="Permalink to &quot;主题配置&quot;">​</a></h1><h2 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;Home&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">layout: home</span></span>
<span class="line"><span style="color:#A6ACCD;"># 首页部分元素定制</span></span>
<span class="line"><span style="color:#A6ACCD;">blog:</span></span>
<span class="line"><span style="color:#A6ACCD;"> name: &#39;@lpdswing&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> motto: 集中起来的意志，可以击穿顽石</span></span>
<span class="line"><span style="color:#A6ACCD;"> inspiring: 真正的大师永远都怀着一颗学徒的心</span></span>
<span class="line"><span style="color:#A6ACCD;"> pageSize: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div><h2 id="article" tabindex="-1">Article <a class="header-anchor" href="#article" aria-label="Permalink to &quot;Article&quot;">​</a></h2><h3 id="全部配置" tabindex="-1">全部配置 <a class="header-anchor" href="#全部配置" aria-label="Permalink to &quot;全部配置&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: 文章标题（默认取一级标题）</span></span>
<span class="line"><span style="color:#A6ACCD;">description: 类似副标题或者摘要（默认文章的前100字）</span></span>
<span class="line"><span style="color:#A6ACCD;">cover: 首页卡片列表里的图片（默认文章的第一张图）</span></span>
<span class="line"><span style="color:#A6ACCD;"># hiddenCover为false则不会在文章页展示上述的封面</span></span>
<span class="line"><span style="color:#A6ACCD;">hiddenCover: true </span></span>
<span class="line"><span style="color:#A6ACCD;">#设置文章是否出现在首页列表</span></span>
<span class="line"><span style="color:#A6ACCD;">hidden: false  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 单独设置文章作者信息</span></span>
<span class="line"><span style="color:#A6ACCD;">author： lpdswing  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 预计阅读时间</span></span>
<span class="line"><span style="color:#A6ACCD;">readingTime: true  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭评论</span></span>
<span class="line"><span style="color:#A6ACCD;">comment: false  </span></span>
<span class="line"><span style="color:#A6ACCD;">date: 2023-01-01</span></span>
<span class="line"><span style="color:#A6ACCD;">tag: </span></span>
<span class="line"><span style="color:#A6ACCD;"> - go</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - go</span></span>
<span class="line"><span style="color:#A6ACCD;">categories:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - 知识库</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#A6ACCD;">sticky: 1  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 用于设置在首页置顶展示的文章，从 1 开始，值越小越靠前</span></span>
<span class="line"><span style="color:#A6ACCD;">top: 1  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 用于设置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示</span></span>
<span class="line"><span style="color:#A6ACCD;">recommend: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div><h3 id="默认常用配置" tabindex="-1">默认常用配置 <a class="header-anchor" href="#默认常用配置" aria-label="Permalink to &quot;默认常用配置&quot;">​</a></h3><p>写文章时可直接复制此配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: 文章标题（默认取一级标题）</span></span>
<span class="line"><span style="color:#A6ACCD;">description: 类似副标题或者摘要（默认文章的前100字）</span></span>
<span class="line"><span style="color:#A6ACCD;">comment: true  </span></span>
<span class="line"><span style="color:#A6ACCD;">tag: </span></span>
<span class="line"><span style="color:#A6ACCD;"> - go</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - go</span></span>
<span class="line"><span style="color:#A6ACCD;">categories:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - 知识库</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置首页的精选文章，值越大越靠前</span></span>
<span class="line"><span style="color:#A6ACCD;">sticky: 1  </span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div>`,9),o=[p];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{h as __pageData,D as default};
