import{j as e,b as a,c as t,a9 as r}from"./chunks/framework.gTVU9YHx.js";const q=JSON.parse('{"title":"python学习笔记","description":"","frontmatter":{"title":"python学习笔记","date":"2017-04-24T16:10:15.000Z","tags":["python","django"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/学习笔记.md","filePath":"technology/other/学习笔记.md","lastUpdated":1684394809000}'),n={name:"technology/other/学习笔记.md"},o=r(`<h1 id="学习笔记" tabindex="-1">学习笔记 <a class="header-anchor" href="#学习笔记" aria-label="Permalink to &quot;学习笔记&quot;">​</a></h1><h2 id="开发工具栈" tabindex="-1">开发工具栈 <a class="header-anchor" href="#开发工具栈" aria-label="Permalink to &quot;开发工具栈&quot;">​</a></h2><pre><code>1. sublime
2. zsh + oh-my-zsh
3. tmux
4. vim
5. 常用配置: &lt;https://github.com/seamile/Weeds/tree/master/rc.d&gt;
</code></pre><h2 id="限制访问频率" tabindex="-1">限制访问频率 <a class="header-anchor" href="#限制访问频率" aria-label="Permalink to &quot;限制访问频率&quot;">​</a></h2><p>频率最大为每秒 2 次</p><pre><code>    requests     time.time()
    --------     -----------
    request 1 -&gt; 1000.000
    request 2 -&gt; 1000.230
    request 3 -&gt; 1001.930
    request 4 -&gt; 1002.900
    request 5 -&gt; (1003.130 - 1001.930) &lt; 1
    request 6 -&gt; 1003.140
    request 7 -&gt; 1003.140
    request 8 -&gt; 1003.140
    request 9 -&gt; 1003.140
    request 10 -&gt; 1003.140
    request 11 -&gt; 1003.140
</code></pre><h2 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;Tags&quot;">​</a></h2><ol><li>多对多关系，一般建立一个关系表</li></ol><p>Article 表 id</p><p>Tag 表 id name</p><p>关系表 article_id tag_id</p><h2 id="创建或更新过程" tabindex="-1">创建或更新过程 <a class="header-anchor" href="#创建或更新过程" aria-label="Permalink to &quot;创建或更新过程&quot;">​</a></h2><p>文章 Article(33)</p><pre><code>   1        2         3
</code></pre><p>原来的 &#39;python&#39;, &#39;django&#39;, &#39;linux&#39; 传入 &#39;python&#39;, &#39;django&#39;, &#39;mongodb&#39; 4</p><p>ArticleTags</p><p>33 1 33 2</p><p>33 4</p><h2 id="权限管理功能" tabindex="-1">权限管理功能 <a class="header-anchor" href="#权限管理功能" aria-label="Permalink to &quot;权限管理功能&quot;">​</a></h2><p>做设计时要有 “前瞻性”</p><p>给用户添加权限</p><p>user id</p><p>permission id</p><p>group id pid</p><p>参考链接 <a href="https://www.zhihu.com/question/20313385" target="_blank" rel="noreferrer">https://www.zhihu.com/question/20313385</a><a href="http://blog.csdn.net/painsonline/article/details/7183613/" target="_blank" rel="noreferrer">http://blog.csdn.net/painsonline/article/details/7183613/</a></p><h2 id="gunicorn" tabindex="-1">Gunicorn <a class="header-anchor" href="#gunicorn" aria-label="Permalink to &quot;Gunicorn&quot;">​</a></h2><p>多进程 + 协程 (greenlet)</p><p>Gunicorn uWSGI</p><p>压力测试 ab (Apache Bench) webbench autobench</p><p>RPS 每秒请求量 QPS 每秒查询量</p><p>10 Concurrency 1000 Request gunicorn 614 r/s django 510 r/s</p><p>Unix 一切皆文件</p><p>文件描述符</p><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p>正向代理</p><p>内网环境 -&gt; 代理 -&gt; 公网机器</p><p>反向代理</p><p>用户 -&gt; Nginx -&gt; 服务器内网环境</p><h2 id="db-集群" tabindex="-1">DB 集群 <a class="header-anchor" href="#db-集群" aria-label="Permalink to &quot;DB 集群&quot;">​</a></h2><p>读写分离</p><h2 id="主从结构" tabindex="-1">主从结构 <a class="header-anchor" href="#主从结构" aria-label="Permalink to &quot;主从结构&quot;">​</a></h2><pre><code> 写     读
 |      ^
 V      |
主机 -&gt; 从机
</code></pre><p>一主两从甚至一主多从</p><h2 id="双主互备" tabindex="-1">双主互备 <a class="header-anchor" href="#双主互备" aria-label="Permalink to &quot;双主互备&quot;">​</a></h2><pre><code>主机 &lt;-&gt; 主机

     从
</code></pre><h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h2><p>北京 源站 上海 镜像站 深圳 镜像站 乌鲁木齐 镜像站 . . . 美国 镜像站</p>`,47),i=[o];function h(p,l,s,d,c,u){return a(),t("div",null,i)}const b=e(n,[["render",h]]);export{q as __pageData,b as default};
