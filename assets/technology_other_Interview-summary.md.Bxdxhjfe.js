import{_ as s,o as i,c as a,a6 as p}from"./chunks/framework.DFh5PHz-.js";const o=JSON.parse('{"title":"python常用面试","description":"","frontmatter":{"title":"python常用面试","date":"2017-04-24T16:10:15.000Z","tags":["python"],"categories":["面试"]},"headers":[],"relativePath":"technology/other/Interview-summary.md","filePath":"technology/other/Interview-summary.md","lastUpdated":1722422902000}'),n={name:"technology/other/Interview-summary.md"},t=p(`<h2 id="技术面试准备" tabindex="-1">技术面试准备 <a class="header-anchor" href="#技术面试准备" aria-label="Permalink to &quot;技术面试准备&quot;">​</a></h2><p><a href="https://github.com/taizilongxu/interview_python" target="_blank" rel="noreferrer">https://github.com/taizilongxu/interview_python</a></p><h3 id="python基础" tabindex="-1">python基础 <a class="header-anchor" href="#python基础" aria-label="Permalink to &quot;python基础&quot;">​</a></h3><ul><li><p>面向对象</p><p>三大特性:继承,多态,封装</p><p>面向过程vs面向对象: 面向过程的优点是程序复杂度低,只要顺着执行步骤堆叠代码即可,缺点是一套流程解决一个问题,牵一发而动全身.</p><p>著名的应用:Linux内核,git,Apache server等</p><p>面向对象的核心思想万物皆对象,解决了程序的扩展性,对某个对象修改会立刻反应到体系中.缺点是可控性差,解决问题一开始就是由对象之间的交互来解决.</p><ul><li><p>类,对象,实例,实例化</p><p>类:具有相同特征的一类事物 对象/实例:具体的某个事物</p><p>实例化,类—&gt;对象的过程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; dict #类型dict就是类dict</span></span>
<span class="line"><span>&lt;class &#39;dict&#39;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; d=dict(name=&#39;eva&#39;) #实例化</span></span>
<span class="line"><span>&gt;&gt;&gt; d.pop(&#39;name&#39;) #向d发一条消息，执行d的方法pop</span></span>
<span class="line"><span>&#39;eva&#39;</span></span>
<span class="line"><span>--------------------------</span></span>
<span class="line"><span>egg = Person(&#39;egon&#39;)  #类名()就等于在执行Person.__init__()</span></span>
<span class="line"><span>#执行完__init__()就会返回一个对象。这个对象类似一个字典，存着属于这个人本身的一些属性和方法。</span></span>
<span class="line"><span>#你可以偷偷的理解：egg = {&#39;name&#39;:&#39;egon&#39;,&#39;walk&#39;:walk}</span></span></code></pre></div></li></ul></li><li><p>设计模式 - 单例 - 装饰器 - MVC</p><ul><li><p>单例模式 - 它的核心结构中只包含一个被称为单例类的特殊类,通过单例模式可以 保证系统中一个类只有一个实例且该实例易于外接访问,从而方便对实例的个数的控制并节约系统资源.如果希望在系统中某个类的对象只能存在一个,单例模式是最好的解决方案._<em>new</em>_()在_<em>init</em>_()之前被调用,用于生产实例对象,利用这个方法和类属性可以实现单例.</p><p>使用_<em>new</em>_()</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __new__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cls,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kw):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hasattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_instance&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Func,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__new__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kw) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._instance</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Myclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><p>import 方法</p><p>装饰器方法</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cls,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kw):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    instances </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instances:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            instances[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kw)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instances[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@func</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></li></ul></li><li><p>网络编程-HTTP,TCP,UDP,ajax</p><ul><li><p>AJAX,Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）, 是与在不重新加载整个页面的情况下，与服务器交换数据并更新部分网页的技术</p></li><li><p>http:是用于www浏览的一个协议。但是基于tcp的 tcp：是机器之间建立连接用的到的一个协议。</p><table tabindex="0"><thead><tr><th></th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>是否连接</td><td>面向连接</td><td>面向非连接</td></tr><tr><td>传输可靠性</td><td>可靠</td><td>不可靠</td></tr><tr><td>应用场合</td><td>传输大量的数据，对可靠性要求较高的场合</td><td>传送少量数据、对可靠性要求不高的场景</td></tr><tr><td>速度</td><td>慢</td><td>快</td></tr></tbody></table><p>1 三次握手 客户端通过向服务器端发送一个SYN来创建一个主动打开，作为三次握手的一部分。客户端把这段连接的序号设定为随机数 A。 服务器端应当为一个合法的SYN回送一个SYN/ACK。ACK 的确认码应为 A+1，SYN/ACK 包本身又有一个随机序号 B。 最后，客户端再发送一个ACK。当服务端受到这个ACK的时候，就完成了三路握手，并进入了连接创建状态。此时包序号被设定为收到的确认号 A+1，而响应则为 B+1。 2 四次挥手 注意: 中断连接端可以是客户端，也可以是服务器端. 下面仅以客户端断开连接举例, 反之亦然.</p><p>客户端发送一个数据分段, 其中的 FIN 标记设置为1. 客户端进入 FIN-WAIT 状态. 该状态下客户端只接收数据, 不再发送数据. 服务器接收到带有 FIN = 1 的数据分段, 发送带有 ACK = 1 的剩余数据分段, 确认收到客户端发来的 FIN 信息. 服务器等到所有数据传输结束, 向客户端发送一个带有 FIN = 1 的数据分段, 并进入 CLOSE-WAIT 状态, 等待客户端发来带有 ACK = 1 的确认报文. 客户端收到服务器发来带有 FIN = 1 的报文, 返回 ACK = 1 的报文确认, 为了防止服务器端未收到需要重发, 进入 TIME-WAIT 状态. 服务器接收到报文后关闭连接. 客户端等待 2MSL 后未收到回复, 则认为服务器成功关闭, 客户端关闭连接.</p></li></ul></li><li><p>多线程,多进程,协程</p><ul><li><p>计算机硬件角度:</p><p>计算机核心是cpu,承担了所有的计算任务,一个cpu,在一个时间切片里只能运行一个程序.</p></li><li><p>从操作系统的角度:</p><p>进程和线程,都是一种cpu的执行单元,进程:表示一个程序的上下文执行活动(打开,执行,保存)</p><p>线程:进程执行程序时的最小调度单位,一个程序至少有一个进程,一个进程至少有一个线程.</p></li><li><p>并行:</p><p>多个cpu核心,不同的程序分给不同的cpu运行,可以让多个程序同时执行.</p></li><li><p>并发:单个cpu核心,在一个时间切片里一次只能运行一个程序,如果需要运行多个程序,则串行执行.</p></li><li><p>多进程 - 多线程</p><p>同时执行多个任务</p><p>进程:每个进程都有自己独立的内存空间,不同进程之间的内存空间不共享,进城之间的通信由操作系统偿还地,导致通讯效率低,切换开销大.</p><p>线程:一个进程可以有多个线程，所有线程共享进程的内存空间，通讯效率高，切换开销小。共享意味着竞争，导致数据不安全，为了保护内存空间的数据安全，引入&quot;互斥锁&quot;。</p><p>一个线程在访问内存空间时其他线程不允许访问,必须等待之前的线程访问结束,才能使用这个内存空间.</p><hr><p>Python的多线程：</p><p>GIL 全局解释器锁：线程的执行权限，在Python的进程里只有一个GIL。</p><p>一个线程需要执行任务，必须获取GIL。</p><p>好处：直接杜绝了多个线程访问内存空间的安全问题。 坏处：Python的多线程不是真正多线程，不能充分利用多核CPU的资源。</p><p>但是，在I/O阻塞的时候，解释器会释放GIL。</p><p>多进程：密集CPU任务，需要充分使用多核CPU资源（服务器，大量的并行计算）的时候，用多进程。 multiprocessing 缺陷：多个进程之间通信成本高，切换开销大。</p><p>多线程：密集I/O任务（网络I/O，磁盘I/O，数据库I/O）使用多线程合适。 threading.Thread、multiprocessing.dummy 缺陷：同一个时间切片只能运行一个线程，不能做到高并行，但是可以做到高并发。</p><p>协程：又称微线程，在单线程上执行多个任务，用函数切换，开销极小。不通过操作系统调度，没有进程、线程的切换开销。genvent，monkey.patchall</p><p>多线程请求返回是无序的，那个线程有数据返回就处理那个线程，而协程返回的数据是有序的。</p><p>缺陷：单线程执行，处理密集CPU和本地磁盘IO的时候，性能较低。处理网络I/O性能还是比较高.</p><hr><p>多进程multiprocessing模块</p><p>多线程threading</p><p>协程 from gevent import monkey</p><hr><p>处理高并发:</p><p>twisted—&gt;tornad0—&gt;gevent</p></li></ul></li><li><p>数据库</p><ul><li><p>事务</p><p>原子性,一致性,隔离性,持久性</p></li><li><p>数据库索引</p><p>建立索引的原则:</p><p>1,最左前缀匹配原则,MySQL会一直向右匹配到范围查询就停止匹配.</p><p>比如a = 1 and b = 2 and c &gt; 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。</p><p>2,=和in可以乱序比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式</p><p>3,尽量选择区分度高的列作为索引</p><p>4,索引列不能参与运算</p><p>5,尽量的扩展索引,不要新建索引</p><hr><p><a href="https://tech.meituan.com/mysql-index.html" target="_blank" rel="noreferrer">https://tech.meituan.com/mysql-index.html</a></p><p><a href="http://blog.codinglabs.org/articles/theory-of-mysql-index.html" target="_blank" rel="noreferrer">http://blog.codinglabs.org/articles/theory-of-mysql-index.html</a></p></li><li><p>redis</p><p>k-v数据库,丰富的数据结构string,map,list,sets,sorted sets</p><blockquote><p>​ 通常局限点来说，Redis也以消息队列的形式存在，作为内嵌的List存在，满足实时的高并发需求。在使用缓存的时候，redis比memcached具有更多的优势，并且支持更多的数据类型，把redis当作一个中间存储系统，用来处理高并发的数据库操作</p></blockquote><ul><li>速度快：使用标准C写，所有数据都在内存中完成，读写速度分别达到10万/20万</li><li>持久化：对数据的更新采用Copy-on-write技术，可以异步地保存到磁盘上，主要有两种策略，一是根据时间，更新次数的快照（save 300 10 ）二是基于语句追加方式(Append-only file，aof)</li><li>自动操作：对不同数据类型的操作都是自动的，很安全</li><li>快速的主--从复制，官方提供了一个数据，Slave在21秒即完成了对Amazon网站10G key set的复制。</li><li>Sharding技术： 很容易将数据分布到多个Redis实例中，数据库的扩展是个永恒的话题，在关系型数据库中，主要是以添加硬件、以分区为主要技术形式的纵向扩展解决了很多的应用场景，但随着web2.0、移动互联网、云计算等应用的兴起，这种扩展模式已经不太适合了，所以近年来，像采用主从配置、数据库复制形式的，Sharding这种技术把负载分布到多个特理节点上去的横向扩展方式用处越来越多。</li></ul></li><li><p>redis的缺点</p><ul><li>是数据库容量受到物理内存的限制,不能用作海量数据的高性能读写,因此Redis适合的场景主要局限在较小数据量的高性能操作和运算上。</li><li>Redis较难支持在线扩容，在集群容量达到上限时在线扩容会变得很复杂。为避免这一问题，运维人员在系统上线时必须确保有足够的空间，这对资源造成了很大的浪费。</li></ul></li><li><p>乐观锁和悲观锁</p><p>悲观锁：假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作</p><p>乐观锁：假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。</p></li><li><p>6 MyISAM和InnoDB MyISAM 适合于一些需要大量查询的应用，但其对于有大量写操作并不是很好。甚至你只是需要update一个字段，整个表都会被锁起来，而别的进程，就算是读进程都无法操作直到读操作完成。另外，MyISAM 对于 SELECT COUNT(*) 这类的计算是超快无比的。</p><p>InnoDB 的趋势会是一个非常复杂的存储引擎，对于一些小的应用，它会比 MyISAM 还慢。他是它支持“行锁” ，于是在写操作比较多的时候，会更优秀。并且，他还支持更多的高级应用，比如：事务。</p><p>mysql 数据库引擎: <a href="http://www.cnblogs.com/0201zcr/p/5296843.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/0201zcr/p/5296843.html</a> MySQL存储引擎－－MyISAM与InnoDB区别: <a href="https://segmentfault.com/a/1190000008227211" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000008227211</a></p><p>​</p></li></ul></li></ul>`,4),l=[t];function h(e,k,r,d,g,c){return i(),a("div",{"data-pagefind-body":!0},l)}const y=s(n,[["render",h]]);export{o as __pageData,y as default};
