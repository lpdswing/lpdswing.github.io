import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d7865772.js";const u=JSON.parse('{"title":"windows使用tornado启动django应用","description":"","frontmatter":{"title":"windows使用tornado启动django应用","date":"2020-05-10T19:42:05.000Z","tags":["tornado","django","python"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/windows使用tornado启动django应用.md","filePath":"technology/other/windows使用tornado启动django应用.md","lastUpdated":1684394809000}'),l={name:"technology/other/windows使用tornado启动django应用.md"},o=p(`<p>由于 windows 不支持 gunicorn,uwsgi 等高性能的 server,使用 Apache + mod_uwsgi 我觉得有点麻烦,就想用 tornado 来作为 django 的 http server..</p><p><strong>tornado 是单线程的，同时 WSGI 应用又是同步的，如果我们使用 Tornado 启动 WSGI 应用，理论上每次只能处理一个请求都是，任何一个请求有阻塞，都会导致 tornado 的整个 IOLOOP 阻塞。如下所示，我们同时发出两个 GET 请求向<a href="http://127.0.0.1:5000/" target="_blank" rel="noreferrer">http://127.0.0.1:5000/</a></strong></p><p><strong>会发现第一个发出的请求会在大约 5s 之后返回，而另一个请求会在 10s 左右返回，我们可以判断，这两个请求是顺序执行的。</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.wsgi </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> WSGIContainer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.httpserver </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HTTPServer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.ioloop </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> IOLoop</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> time</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    time.sleep(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;OK&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;__main__&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    http_server </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HTTPServer(WSGIContainer(app))</span></span>
<span class="line"><span style="color:#E1E4E8;">    http_server.listen(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    IOLoop.instance().start()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.wsgi </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> WSGIContainer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.httpserver </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HTTPServer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.ioloop </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> IOLoop</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> time</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    time.sleep(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;OK&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;__main__&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    http_server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HTTPServer(WSGIContainer(app))</span></span>
<span class="line"><span style="color:#24292E;">    http_server.listen(</span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    IOLoop.instance().start()</span></span></code></pre></div><p><strong>我们知道，tornado 实现异步运行同步函数，我们只能使用线程来运行，如下所示：</strong></p><blockquote><p>几乎同时返回结果,并发执行了</p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.web</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.ioloop</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> time</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IndexHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">tornado</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">web</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">RequestHandler</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;主路由处理类&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;&quot;&quot;对应http的get请求方式&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        loop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> loop.run_in_executor(</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.sleep)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.write(</span><span style="color:#9ECBFF;">&quot;Hello You!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sleep</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        time.sleep(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.write(</span><span style="color:#9ECBFF;">&#39;sleep OK&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__main__&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.web.Application([</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">r</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#DBEDFF;">/</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, IndexHandler),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ])</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.listen(</span><span style="color:#79B8FF;">8000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    tornado.ioloop.IOLoop.current().start()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.web</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.ioloop</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> time</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IndexHandler</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">tornado</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">web</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">RequestHandler</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;主路由处理类&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;&quot;&quot;对应http的get请求方式&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">        loop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> loop.run_in_executor(</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.sleep)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.write(</span><span style="color:#032F62;">&quot;Hello You!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sleep</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        time.sleep(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.write(</span><span style="color:#032F62;">&#39;sleep OK&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;__main__&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.web.Application([</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">r</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">, IndexHandler),</span></span>
<span class="line"><span style="color:#24292E;">    ])</span></span>
<span class="line"><span style="color:#24292E;">    app.listen(</span><span style="color:#005CC5;">8000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    tornado.ioloop.IOLoop.current().start()</span></span></code></pre></div><p><strong>对于这种（使用 tornado 运行 Flask 的情况）情况，我们如何做呢，查看  WSGIContainer 的代码我们发现</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WSGIContainer</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self, wsgi_application):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.wsgi_application </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wsgi_application</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call__</span><span style="color:#E1E4E8;">(self, request):</span></span>
<span class="line"><span style="color:#E1E4E8;">        data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">        response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start_response</span><span style="color:#E1E4E8;">(status, response_headers, exc_info</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> status</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response_headers</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.append</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># wsgi返回response部分</span></span>
<span class="line"><span style="color:#E1E4E8;">        app_response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.wsgi_application(</span></span>
<span class="line"><span style="color:#E1E4E8;">            WSGIContainer.environ(request), start_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">            body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">b</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">.join(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hasattr</span><span style="color:#E1E4E8;">(app_response, </span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">                app_response.close()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> data:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        status_code, reason </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">].split(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        status_code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(status_code)</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_set </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(k.lower() </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (k, v) </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers)</span></span>
<span class="line"><span style="color:#E1E4E8;">        body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> status_code </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">304</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-length&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(body))))</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-type&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;server&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">            headers.append((</span><span style="color:#9ECBFF;">&quot;Server&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;TornadoServer/</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        start_line </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.ResponseStartLine(</span><span style="color:#9ECBFF;">&quot;HTTP/1.1&quot;</span><span style="color:#E1E4E8;">, status_code, reason)</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> key, value </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers:</span></span>
<span class="line"><span style="color:#E1E4E8;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#FFAB70;">chunk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._log(status_code, request)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WSGIContainer</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self, wsgi_application):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.wsgi_application </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wsgi_application</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call__</span><span style="color:#24292E;">(self, request):</span></span>
<span class="line"><span style="color:#24292E;">        data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">        response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start_response</span><span style="color:#24292E;">(status, response_headers, exc_info</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> status</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> response_headers</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response.append</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># wsgi返回response部分</span></span>
<span class="line"><span style="color:#24292E;">        app_response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.wsgi_application(</span></span>
<span class="line"><span style="color:#24292E;">            WSGIContainer.environ(request), start_response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#24292E;">            body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">b</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">.join(response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hasattr</span><span style="color:#24292E;">(app_response, </span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">                app_response.close()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> data:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        status_code, reason </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">].split(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        status_code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(status_code)</span></span>
<span class="line"><span style="color:#24292E;">        headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        header_set </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(k.lower() </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (k, v) </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers)</span></span>
<span class="line"><span style="color:#24292E;">        body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> status_code </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">304</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-length&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Length&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(body))))</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-type&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;server&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">            headers.append((</span><span style="color:#032F62;">&quot;Server&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;TornadoServer/</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        start_line </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.ResponseStartLine(</span><span style="color:#032F62;">&quot;HTTP/1.1&quot;</span><span style="color:#24292E;">, status_code, reason)</span></span>
<span class="line"><span style="color:#24292E;">        header_obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> key, value </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers:</span></span>
<span class="line"><span style="color:#24292E;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#E36209;">chunk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">body)</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._log(status_code, request)</span></span></code></pre></div><p>只需重新方法将这部分代码变成异步即可,代码如下:</p><p>loop.run_in_executor 的第一个参数可以为一个 ThreadPoolExecutor 对象</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> time</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.wsgi </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> WSGIContainer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.httpserver </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HTTPServer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.ioloop </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> IOLoop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    time.sleep(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;OK&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> escape</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> httputil</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> typing </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> List, Tuple, Optional, Callable, Any, Dict</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> types </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TracebackType</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WSGIContainer_With_Thread</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">WSGIContainer</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call__</span><span style="color:#E1E4E8;">(self, request):</span></span>
<span class="line"><span style="color:#E1E4E8;">        data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}  </span><span style="color:#6A737D;"># type: Dict[str, Any]</span></span>
<span class="line"><span style="color:#E1E4E8;">        response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;"># type: List[bytes]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start_response</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                status: </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers: List[Tuple[</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">                exc_info: Optional[</span></span>
<span class="line"><span style="color:#E1E4E8;">                    Tuple[</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&quot;Optional[Type[BaseException]]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        Optional[</span><span style="color:#79B8FF;">BaseException</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        Optional[TracebackType],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                ] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) -&gt; Callable[[</span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;">], Any]:</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> status</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> headers</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.append</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        loop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#E1E4E8;">        app_response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> loop.run_in_executor(</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.wsgi_application, WSGIContainer.environ(request),</span></span>
<span class="line"><span style="color:#E1E4E8;">                                                  start_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># app_response = self.wsgi_application(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#     WSGIContainer.environ(request), start_response</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># )</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">            body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">b</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">.join(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hasattr</span><span style="color:#E1E4E8;">(app_response, </span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">                app_response.close()  </span><span style="color:#6A737D;"># type: ignore</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> data:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        status_code_str, reason </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">].split(</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        status_code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(status_code_str)</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">]  </span><span style="color:#6A737D;"># type: List[Tuple[str, str]]</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_set </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(k.lower() </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (k, v) </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers)</span></span>
<span class="line"><span style="color:#E1E4E8;">        body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> status_code </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">304</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-length&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(body))))</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-type&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;server&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">            headers.append((</span><span style="color:#9ECBFF;">&quot;Server&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;TornadoServer/</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        start_line </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.ResponseStartLine(</span><span style="color:#9ECBFF;">&quot;HTTP/1.1&quot;</span><span style="color:#E1E4E8;">, status_code, reason)</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> key, value </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers:</span></span>
<span class="line"><span style="color:#E1E4E8;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> request.connection </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#FFAB70;">chunk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._log(status_code, request)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;__main__&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    http_server </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HTTPServer(WSGIContainer_With_Thread(app))</span></span>
<span class="line"><span style="color:#E1E4E8;">    http_server.listen(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    IOLoop.instance().start()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> time</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.wsgi </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> WSGIContainer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.httpserver </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HTTPServer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.ioloop </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> IOLoop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    time.sleep(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;OK&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> escape</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> httputil</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> typing </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> List, Tuple, Optional, Callable, Any, Dict</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> types </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> TracebackType</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WSGIContainer_With_Thread</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">WSGIContainer</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call__</span><span style="color:#24292E;">(self, request):</span></span>
<span class="line"><span style="color:#24292E;">        data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}  </span><span style="color:#6A737D;"># type: Dict[str, Any]</span></span>
<span class="line"><span style="color:#24292E;">        response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;"># type: List[bytes]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start_response</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                status: </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                headers: List[Tuple[</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">                exc_info: Optional[</span></span>
<span class="line"><span style="color:#24292E;">                    Tuple[</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&quot;Optional[Type[BaseException]]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        Optional[</span><span style="color:#005CC5;">BaseException</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        Optional[TracebackType],</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                ] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ) -&gt; Callable[[</span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;">], Any]:</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> status</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> headers</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response.append</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        loop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#24292E;">        app_response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> loop.run_in_executor(</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.wsgi_application, WSGIContainer.environ(request),</span></span>
<span class="line"><span style="color:#24292E;">                                                  start_response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># app_response = self.wsgi_application(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#     WSGIContainer.environ(request), start_response</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># )</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#24292E;">            body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">b</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">.join(response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hasattr</span><span style="color:#24292E;">(app_response, </span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">                app_response.close()  </span><span style="color:#6A737D;"># type: ignore</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> data:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        status_code_str, reason </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">].split(</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        status_code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(status_code_str)</span></span>
<span class="line"><span style="color:#24292E;">        headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">]  </span><span style="color:#6A737D;"># type: List[Tuple[str, str]]</span></span>
<span class="line"><span style="color:#24292E;">        header_set </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(k.lower() </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (k, v) </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers)</span></span>
<span class="line"><span style="color:#24292E;">        body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> status_code </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">304</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-length&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Length&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(body))))</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-type&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;server&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">            headers.append((</span><span style="color:#032F62;">&quot;Server&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;TornadoServer/</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        start_line </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.ResponseStartLine(</span><span style="color:#032F62;">&quot;HTTP/1.1&quot;</span><span style="color:#24292E;">, status_code, reason)</span></span>
<span class="line"><span style="color:#24292E;">        header_obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> key, value </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers:</span></span>
<span class="line"><span style="color:#24292E;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> request.connection </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#E36209;">chunk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">body)</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._log(status_code, request)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;__main__&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    http_server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HTTPServer(WSGIContainer_With_Thread(app))</span></span>
<span class="line"><span style="color:#24292E;">    http_server.listen(</span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    IOLoop.instance().start()</span></span></code></pre></div><blockquote><p>测试执行结果,几乎同时返回了 OK,不是顺序执行了</p></blockquote><p><strong>注意：</strong></p><p>1 、这种方法实际上并没有提高性能，说到底还是使用多线程来运行的，所以推荐如果使用 tornado 还是和 tornado 的 web 框架联合起来写出真正的异步代码，这样才会达到 tornado 异步 IO 的高性能目的。我们的目的仅仅是让 tornado 替代 django 开发服务器的低性能而已.**</p><ul><li>让 tornado 取代 django 的开发服务</li></ul><p>在项目的根路径新增一个 <code>tornado_server.py</code>  的文件,代码如下:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> os</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.core.wsgi </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_wsgi_application</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.options </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> options, define, parse_command_line</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.httpserver</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.ioloop</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.web</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tornado.wsgi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> escape, httputil</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> typing </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> List, Tuple, Optional, Callable, Any, Dict</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> types </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TracebackType</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> tornado.wsgi </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> WSGIContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">sys.path.append(os.path.dirname(os.path.abspath(</span><span style="color:#79B8FF;">__file__</span><span style="color:#E1E4E8;">)))</span></span>
<span class="line"><span style="color:#E1E4E8;">os.environ[</span><span style="color:#9ECBFF;">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;datapower.settings&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">setting </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;template_path&#39;</span><span style="color:#E1E4E8;">: os.path.join(os.path.dirname(</span><span style="color:#79B8FF;">__file__</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;templates&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;static_path&#39;</span><span style="color:#E1E4E8;">: os.path.join(os.path.dirname(</span><span style="color:#79B8FF;">__file__</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">False</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">define(</span><span style="color:#9ECBFF;">&#39;port&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">default</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">8000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WSGIContainer_With_Thread</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">WSGIContainer</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call__</span><span style="color:#E1E4E8;">(self, request):</span></span>
<span class="line"><span style="color:#E1E4E8;">        data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}  </span><span style="color:#6A737D;"># type: Dict[str, Any]</span></span>
<span class="line"><span style="color:#E1E4E8;">        response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;"># type: List[bytes]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start_response</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                status: </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers: List[Tuple[</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">                exc_info: Optional[</span></span>
<span class="line"><span style="color:#E1E4E8;">                    Tuple[</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&quot;Optional[Type[BaseException]]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        Optional[</span><span style="color:#79B8FF;">BaseException</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        Optional[TracebackType],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                ] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ) -&gt; Callable[[</span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;">], Any]:</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> status</span></span>
<span class="line"><span style="color:#E1E4E8;">            data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> headers</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.append</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        loop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#E1E4E8;">        app_response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> loop.run_in_executor(</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.wsgi_application, WSGIContainer.environ(request),</span></span>
<span class="line"><span style="color:#E1E4E8;">                                                  start_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># app_response = self.wsgi_application(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#     WSGIContainer.environ(request), start_response</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># )</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#E1E4E8;">            body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">b</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">.join(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hasattr</span><span style="color:#E1E4E8;">(app_response, </span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">                app_response.close()  </span><span style="color:#6A737D;"># type: ignore</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> data:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        status_code_str, reason </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">].split(</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        status_code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(status_code_str)</span></span>
<span class="line"><span style="color:#E1E4E8;">        headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data[</span><span style="color:#9ECBFF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">]  </span><span style="color:#6A737D;"># type: List[Tuple[str, str]]</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_set </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(k.lower() </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (k, v) </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers)</span></span>
<span class="line"><span style="color:#E1E4E8;">        body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> status_code </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">304</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-length&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(body))))</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;content-type&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">                headers.append((</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;server&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> header_set:</span></span>
<span class="line"><span style="color:#E1E4E8;">            headers.append((</span><span style="color:#9ECBFF;">&quot;Server&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;TornadoServer/</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        start_line </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.ResponseStartLine(</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;HTTP/1.1&quot;</span><span style="color:#E1E4E8;">, status_code, reason)</span></span>
<span class="line"><span style="color:#E1E4E8;">        header_obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> key, value </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> headers:</span></span>
<span class="line"><span style="color:#E1E4E8;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> request.connection </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#FFAB70;">chunk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">body)</span></span>
<span class="line"><span style="color:#E1E4E8;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">._log(status_code, request)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    parse_command_line()</span></span>
<span class="line"><span style="color:#E1E4E8;">    wsgi_app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WSGIContainer_With_Thread(get_wsgi_application())</span></span>
<span class="line"><span style="color:#E1E4E8;">    tornado_app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.web.Application(</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#9ECBFF;">&#39;.*&#39;</span><span style="color:#E1E4E8;">, tornado.web.FallbackHandler, </span><span style="color:#79B8FF;">dict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fallback</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">wsgi_app)),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 虽然django设置了static文件访问接口, 这是貌似取不到,防止前端出现样式丢失这里就增加一个静态文件访问接口</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#9ECBFF;">&#39;/static/(.*)&#39;</span><span style="color:#E1E4E8;">, tornado.web.StaticFileHandler,</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#79B8FF;">dict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">os.path.join(os.path.dirname(</span><span style="color:#79B8FF;">__file__</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        ], </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">setting</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    server </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tornado.httpserver.HTTPServer(tornado_app)</span></span>
<span class="line"><span style="color:#E1E4E8;">    server.listen(options.port)</span></span>
<span class="line"><span style="color:#E1E4E8;">    tornado.ioloop.IOLoop.instance.start()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;__main__&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    main()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> os</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.core.wsgi </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_wsgi_application</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.options </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> options, define, parse_command_line</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.httpserver</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.ioloop</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.web</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tornado.wsgi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> escape, httputil</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> typing </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> List, Tuple, Optional, Callable, Any, Dict</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> types </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> TracebackType</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> tornado.wsgi </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> WSGIContainer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">sys.path.append(os.path.dirname(os.path.abspath(</span><span style="color:#005CC5;">__file__</span><span style="color:#24292E;">)))</span></span>
<span class="line"><span style="color:#24292E;">os.environ[</span><span style="color:#032F62;">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;datapower.settings&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">setting </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;template_path&#39;</span><span style="color:#24292E;">: os.path.join(os.path.dirname(</span><span style="color:#005CC5;">__file__</span><span style="color:#24292E;">), </span><span style="color:#032F62;">&#39;templates&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;static_path&#39;</span><span style="color:#24292E;">: os.path.join(os.path.dirname(</span><span style="color:#005CC5;">__file__</span><span style="color:#24292E;">), </span><span style="color:#032F62;">&#39;static&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;debug&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">False</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">define(</span><span style="color:#032F62;">&#39;port&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">, </span><span style="color:#E36209;">default</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">8000</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WSGIContainer_With_Thread</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">WSGIContainer</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@tornado.gen.coroutine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call__</span><span style="color:#24292E;">(self, request):</span></span>
<span class="line"><span style="color:#24292E;">        data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}  </span><span style="color:#6A737D;"># type: Dict[str, Any]</span></span>
<span class="line"><span style="color:#24292E;">        response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;"># type: List[bytes]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start_response</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                status: </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                headers: List[Tuple[</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">                exc_info: Optional[</span></span>
<span class="line"><span style="color:#24292E;">                    Tuple[</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&quot;Optional[Type[BaseException]]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        Optional[</span><span style="color:#005CC5;">BaseException</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        Optional[TracebackType],</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                ] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ) -&gt; Callable[[</span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;">], Any]:</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> status</span></span>
<span class="line"><span style="color:#24292E;">            data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> headers</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response.append</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        loop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.ioloop.IOLoop.instance()</span></span>
<span class="line"><span style="color:#24292E;">        app_response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> loop.run_in_executor(</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.wsgi_application, WSGIContainer.environ(request),</span></span>
<span class="line"><span style="color:#24292E;">                                                  start_response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># app_response = self.wsgi_application(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#     WSGIContainer.environ(request), start_response</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># )</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            response.extend(app_response)</span></span>
<span class="line"><span style="color:#24292E;">            body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">b</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">.join(response)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hasattr</span><span style="color:#24292E;">(app_response, </span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">                app_response.close()  </span><span style="color:#6A737D;"># type: ignore</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> data:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;WSGI app did not call start_response&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        status_code_str, reason </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">].split(</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        status_code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(status_code_str)</span></span>
<span class="line"><span style="color:#24292E;">        headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data[</span><span style="color:#032F62;">&quot;headers&quot;</span><span style="color:#24292E;">]  </span><span style="color:#6A737D;"># type: List[Tuple[str, str]]</span></span>
<span class="line"><span style="color:#24292E;">        header_set </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(k.lower() </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (k, v) </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers)</span></span>
<span class="line"><span style="color:#24292E;">        body </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> escape.utf8(body)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> status_code </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">304</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-length&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Length&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(body))))</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;content-type&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">                headers.append((</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;text/html; charset=UTF-8&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;server&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> header_set:</span></span>
<span class="line"><span style="color:#24292E;">            headers.append((</span><span style="color:#032F62;">&quot;Server&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;TornadoServer/</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> tornado.version))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        start_line </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.ResponseStartLine(</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;HTTP/1.1&quot;</span><span style="color:#24292E;">, status_code, reason)</span></span>
<span class="line"><span style="color:#24292E;">        header_obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httputil.HTTPHeaders()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> key, value </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> headers:</span></span>
<span class="line"><span style="color:#24292E;">            header_obj.add(key, value)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> request.connection </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.write_headers(start_line, header_obj, </span><span style="color:#E36209;">chunk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">body)</span></span>
<span class="line"><span style="color:#24292E;">        request.connection.finish()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">._log(status_code, request)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    parse_command_line()</span></span>
<span class="line"><span style="color:#24292E;">    wsgi_app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WSGIContainer_With_Thread(get_wsgi_application())</span></span>
<span class="line"><span style="color:#24292E;">    tornado_app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.web.Application(</span></span>
<span class="line"><span style="color:#24292E;">        [</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#032F62;">&#39;.*&#39;</span><span style="color:#24292E;">, tornado.web.FallbackHandler, </span><span style="color:#005CC5;">dict</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fallback</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">wsgi_app)),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># 虽然django设置了static文件访问接口, 这是貌似取不到,防止前端出现样式丢失这里就增加一个静态文件访问接口</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#032F62;">&#39;/static/(.*)&#39;</span><span style="color:#24292E;">, tornado.web.StaticFileHandler,</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#005CC5;">dict</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">os.path.join(os.path.dirname(</span><span style="color:#005CC5;">__file__</span><span style="color:#24292E;">), </span><span style="color:#032F62;">&#39;static&#39;</span><span style="color:#24292E;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        ], </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">setting</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">    server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tornado.httpserver.HTTPServer(tornado_app)</span></span>
<span class="line"><span style="color:#24292E;">    server.listen(options.port)</span></span>
<span class="line"><span style="color:#24292E;">    tornado.ioloop.IOLoop.instance.start()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;__main__&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    main()</span></span></code></pre></div><p>文章参考:</p><p><a href="https://www.cnblogs.com/lycsdhr/p/11123545.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/lycsdhr/p/11123545.html</a></p><p><a href="https://www.cnblogs.com/ExMan/p/9506012.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ExMan/p/9506012.html</a></p><p><a href="https://www.cnblogs.com/baolong/p/6769237.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/baolong/p/6769237.html</a></p>`,22),e=[o];function t(r,c,E,y,i,F){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{u as __pageData,_ as default};
