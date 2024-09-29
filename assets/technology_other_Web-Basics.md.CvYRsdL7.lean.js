import{j as i,b as e,c as o,a8 as t}from"./chunks/framework.BrpFzWtI.js";const T=JSON.parse('{"title":"web基础-django","description":"","frontmatter":{"title":"web基础-django","date":"2017-05-03T18:16:44.000Z","tags":["django","python"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/Web-Basics.md","filePath":"technology/other/Web-Basics.md","lastUpdated":1722422902000}'),s={name:"technology/other/Web-Basics.md"};function n(r,l,a,p,c,u){return e(),o("div",{"data-pagefind-body":!0},l[0]||(l[0]=[t(`<h1 id="web-基础" tabindex="-1">Web 基础 <a class="header-anchor" href="#web-基础" aria-label="Permalink to &quot;Web 基础&quot;">​</a></h1><ol><li><p>HyperText Transfer Protocol</p><ol><li>HTTP 1.0 (1996) / 1.1 (1997) / 2.0 (2015)</li><li>构建在 TCP 应用层之上的协议</li><li>应用领域</li><li>认识 URL (统一资源定位符) <ul><li><code>http://example.com:80/foo/bar/readme?x=0&amp;y=abc#part1</code></li><li>组成 <ul><li>scheme: http</li><li>hostname: example.com</li><li>port: 80</li><li>path: /foo/bar/readme</li><li>query: ?x=0&amp;y=abc</li><li>fragment: #part1</li></ul></li></ul></li></ol></li><li><p>Python 系常见 Web 框架</p><ul><li>Django <ul><li>全能型框架, 大而全, 插件丰富, 文档丰富, 社区活跃, 适合快速开发, 内部耦合比较紧</li></ul></li><li>Flask <ul><li>微型框架, 适合新手学习, 极其灵活, 便于二次开发和扩展, 生态环境好, 插件丰富</li></ul></li><li>Tornado <ul><li>异步处理, 事件驱动 (epoll), 性能优异</li></ul></li><li>web.py <ul><li>代码优秀, 适合学习源码</li></ul></li><li>bottle <ul><li>单文件框架</li></ul></li><li>其他 <ul><li>Falcon</li><li>web2py</li><li>Quixote</li><li>Sanic</li></ul></li></ul></li><li><p>点击一个链接后, 都发生了什么</p><ol><li>DNS解析 <ul><li>example.com -&gt; 93.184.216.34</li><li><code>dig example.com</code></li><li><code>nslookup example.com</code></li><li><code>/etc/hosts</code></li></ul></li><li>建立TCP <ol><li>SYN</li><li>ACK + SYN</li><li>ACK</li></ol></li><li>生成 Request 报文</li><li>Client 发送 Request 报文</li><li>Server 接收报文</li><li>通过 WSGI 解析报文, 获得 Request 对象</li><li>Django、Flask 等应用程序进行逻辑处理 0. 生成 Request 对象 <ol><li>process_request (Middleware)</li><li>URL match</li><li>process_views (Middleware)</li><li>Views --&gt; process_exception</li><li>Redner Template</li><li>Response</li><li>process_response (Middleware)</li></ol></li><li>从 Response 对象生成报文</li><li>Server 返回报文给 Client</li><li>关闭连接</li><li>解析、渲染 HTML 页面</li></ol></li><li><p>最简单的 Server</p><ul><li>HTTP Server <ul><li>创建、关闭连接</li><li>发送、接收数据</li></ul></li><li>WSGI: 沟通 HTTPServer 和 Web 应用程序 之间的接口</li><li>Web Application <ul><li>网络程序的功能和逻辑</li><li>解析用户请求, 生成 HTML 页面</li></ul></li></ul></li><li><p>常见 Header 字段</p><ul><li>Accept text/plain</li><li>Accept-Charset utf-8</li><li>Accept-Encoding gzip (Content-Encoding)</li><li>Accept-Language zh-CN en-US</li><li>Cache-Control true,max-age</li><li>Connection keep-alive</li><li>Content-Length 请求体/响应体的长度</li><li>Content-Type 用于指定响应的HTTP内容类型. 如果未指定 默认为 text/html</li><li>User-Agent 浏览器标识</li></ul></li><li><p>HTTP 状态码</p><ul><li>200 <strong>OK</strong> 成功</li><li>301 <strong>Moved Permanently</strong> 重定向 (永久迁移)</li><li>302 <strong>Moved Temporarily</strong> 重定向 (临时迁移)</li><li>303 <strong>See Other</strong> 重定向 (非 GET 请求的重定向)</li><li>400 <strong>Bad Request</strong> 客户端请求错误</li><li>403 <strong>Forbidden</strong> 拒绝访问</li><li>404 <strong>Not Found</strong> 找不到页面</li><li>500 <strong>Internal Server Error</strong> 服务器内部错误</li><li>502 <strong>Bad Gateway</strong> 网关错误</li><li>503 <strong>Service Unavailable</strong> 服务器维护或者过载</li><li>504 <strong>Gateway Timeout</strong> 请求超时</li></ul></li><li><p>GET 和 POST</p><ul><li>表象 <ul><li>GET 在浏览器可以回退, 而 POST 则会再次提交请求</li><li>GET 的 URL 可以被 Bookmark, 而 POST 不可以.</li><li>GET 请求会被浏览器主动缓存, 而 POST 不会, 除非手动设置.</li><li>GET 请求参数会被完整保留在浏览器历史记录里, 而 POST 中的参数不会被保留.</li><li>GET 请求的数据只能进行 URL 编码, 而 POST 支持多种编码方式.</li><li>GET 请求在 URL 中传送的参数是有长度限制的 (URL 的最大长度是 2048 个字符), 而 POST 没有.</li><li>对参数的数据类型, GET 只接受 ASCII 字符, 而 POST 没有限制.</li><li>GET 比 POST 更不安全, 因为参数直接暴露在URL上, 所以不能用来传递敏感信息.</li><li>GET 参数通过 URL 传递, POST 放在 Request body 中.</li></ul></li><li>深层 <ul><li>GET 产生一个TCP数据包；POST产生两个TCP数据包.</li><li>GET: 浏览器会把 http 的 header和data一并发送出去, 服务器响应200（返回数据）；</li><li>POST: 浏览器先发送 header, 服务器响应 100 continue, 浏览器再发送data, 服务器响应200 ok（返回数据）.</li></ul></li></ul></li><li><p>cookie 和 session</p><ul><li>无状态协议的无奈之举 <ul><li>通信如同一次无法看到脸的握手, 如何识别用户</li></ul></li><li>异同 <ol><li>session 在服务器端, cookie 在客户端（浏览器）</li><li>session 默认被存在在服务器的一个文件里（不是内存）</li><li>session 的运行依赖 session id, 而 session id 是存在 cookie 中的, 也就是说, 如果浏览器禁用了 cookie , 同时 session 也会失效（但是可以通过其它方式实现, 比如在 url 中传递 session_id）</li><li>session 可以放在 文件、数据库、或内存中都可以.</li><li>用户验证这种场合一般会用 session</li></ol></li><li>产生过程 <ol><li>客户端请求</li><li>服务器产生 session_id, 并传回浏览器</li><li>浏览器将 session_id 写入 cookie</li><li>后续请求会写入 Header</li></ol></li><li>使用</li></ul></li><li><p>RESTful</p><ul><li>一种网络软件架构风格, 而非标准</li><li>用 URL 定位一个网络资源</li><li>用 HTTP 描述对资源的操作</li><li>四个动词 <ul><li>GET: 用来获取资源</li><li>POST: 用来新建资源</li><li>PUT: 用来更新资源</li><li>DELETE: 用来删除资源</li></ul></li><li>误区 <ul><li>URL 中使用动词</li><li>URL 中出现版本号, 版本号放在 Header</li></ul></li></ul></li><li><p>HTTPS</p><ul><li><p>优点</p><ul><li>防窃听: 建立一个信息安全通道，来保证数据传输的安全</li><li>防篡改: 防止内容被第三方修改</li><li>放冒充: 确认网站的真实性</li></ul></li><li><p>缺点</p><ul><li>加密、解密消耗 CPU</li><li>握手过程繁琐</li></ul></li><li><p>SSL / TLS (安全套接字层)</p></li><li><p>加密算法</p><ul><li><p>对称加密: TEA, AES, 3DES</p><pre><code>  text: abcdefg
          |  ^
          v  |
  key:    1234
          |  ^
          v  |
  new:  hasjdkfhasdf
</code></pre></li><li><p>非对称加密: RSA, ED25519</p><pre><code>  text:   abcdefghijklmn
            |       ^
            v       |
  pub_key: 123      |
  pri_key:  |   1234567890123456789546789
            |       ^
            v       |
  new: ajsgdpfqibwfmbsdlkfjbq;ejkwbf;qkbfd
</code></pre></li></ul></li><li><p>Let&#39;s Encrypt: <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">https://letsencrypt.org/</a></p></li><li><p>传输过程 <img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305181012607.png" alt=""></p></li></ul></li></ol>`,2)]))}const g=i(s,[["render",n]]);export{T as __pageData,g as default};
