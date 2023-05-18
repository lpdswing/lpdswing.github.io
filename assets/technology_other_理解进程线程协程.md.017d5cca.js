import{_ as t,o as a,c as e,O as o}from"./chunks/framework.72ba6402.js";const _=JSON.parse('{"title":"理解进程线程协程","description":"","frontmatter":{"title":"理解进程线程协程","date":"2019-04-24T16:10:15.000Z","tags":["技术笔记","go"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/理解进程线程协程.md","filePath":"technology/other/理解进程线程协程.md","lastUpdated":1684394809000}'),p={name:"technology/other/理解进程线程协程.md"},n=o('<h1 id="理解进程线程协程" tabindex="-1">理解进程线程协程 <a class="header-anchor" href="#理解进程线程协程" aria-label="Permalink to &quot;理解进程线程协程&quot;">​</a></h1><h2 id="_1-1-多任务" tabindex="-1">1.1 多任务 <a class="header-anchor" href="#_1-1-多任务" aria-label="Permalink to &quot;1.1 多任务&quot;">​</a></h2><p>怎么来理解多任务呢？其实就是指我们的操作系统可以同时执行多个任务。举个例子，你一边听音乐，一边刷微博，一边聊 QQ，一边用 Markdown 写作业，这就是多任务，至少同时有 4 个任务正在运行。还有很多任务悄悄地在后台同时运行着，只是界面上没有显示而已。</p><h2 id="_1-2-什么是并发" tabindex="-1">1.2 什么是并发 <a class="header-anchor" href="#_1-2-什么是并发" aria-label="Permalink to &quot;1.2 什么是并发&quot;">​</a></h2><p>Go 是并发语言，而不是并行语言。在讨论如何在 Go 中进行并发处理之前，我们首先必须了解什么是并发，以及它与并行性有什么不同。(Go is a concurrent language and not a parallel one. )</p><p><strong>并发性 Concurrency 是同时处理许多事情的能力。</strong></p><p>举个例子，假设一个人在晨跑。在晨跑时，他的鞋带松了。现在这个人停止跑步，系鞋带，然后又开始跑步。这是一个典型的并发性示例。这个人能够同时处理跑步和系鞋带，这是一个人能够同时处理很多事情。</p><p>什么是并行性 parallelism，它与并发 concurrency 有什么不同?</p><p>并行就是同时做很多事情。这听起来可能与并发类似，但实际上是不同的。</p><p>让我们用同样的慢跑例子更好地理解它。在这种情况下，我们假设这个人正在慢跑，并且使用它的手机听音乐。在这种情况下，一个人一边慢跑一边听音乐，那就是他同时在做很多事情。这就是所谓的并行性(parallelism)。</p><p>并发性和并行性——一种技术上的观点。</p><p>假设我们正在编写一个 web 浏览器。web 浏览器有各种组件。其中两个是 web 页面呈现区域和下载文件从 internet 下载的下载器。假设我们以这样的方式构建了浏览器的代码，这样每个组件都可以独立地执行。当这个浏览器运行在单个核处理器中时，处理器将在浏览器的两个组件之间进行上下文切换。它可能会下载一个文件一段时间，然后它可能会切换到呈现用户请求的网页的 html。这就是所谓的并发性。并发进程从不同的时间点开始，它们的执行周期重叠。在这种情况下，下载和呈现从不同的时间点开始，它们的执行重叠。</p><p>假设同一浏览器运行在多核处理器上。在这种情况下，文件下载组件和 HTML 呈现组件可能同时在不同的内核中运行。这就是所谓的并行性。</p><p><img src="https://www.qfgolang.com/wp-content/uploads/2019/08/WX20190730-100944.png#align=left&amp;display=inline&amp;height=515&amp;margin=%5Bobject%20Object%5D&amp;originHeight=515&amp;originWidth=777&amp;status=done&amp;style=none&amp;width=777#alt=" alt=""></p><p><img src="https://www.qfgolang.com/wp-content/uploads/2019/08/WX20190730-100944.png#align=left&amp;display=inline&amp;height=515&amp;margin=%5Bobject%20Object%5D&amp;originHeight=515&amp;originWidth=777&amp;status=done&amp;style=none&amp;width=777#alt=" alt=""></p><p>并行性 Parallelism 不会总是导致更快的执行时间。这是因为并行运行的组件可能需要相互通信。例如，在我们的浏览器中，当文件下载完成时，应该将其传递给用户，比如使用弹出窗口。这种通信发生在负责下载的组件和负责呈现用户界面的组件之间。这种通信开销在并发 concurrent 系统中很低。当组件在多个内核中并行 concurrent 运行时，这种通信开销很高。因此，并行程序并不总是导致更快的执行时间!</p><p><img src="https://www.qfgolang.com/wp-content/uploads/2019/08/t.png#align=left&amp;display=inline&amp;height=664&amp;margin=%5Bobject%20Object%5D&amp;originHeight=664&amp;originWidth=787&amp;status=done&amp;style=none&amp;width=787#alt=" alt=""></p><h2 id="_1-3-进程、线程、协程" tabindex="-1">1.3 进程、线程、协程 <a class="header-anchor" href="#_1-3-进程、线程、协程" aria-label="Permalink to &quot;1.3 进程、线程、协程&quot;">​</a></h2><p><strong>进程(Process)，线程(Thread)，协程(Coroutine，也叫轻量级线程)</strong></p><p>进程</p><p>进程是一个程序在一个数据集中的一次动态执行过程，可以简单理解为“正在执行的程序”，它是 CPU 资源分配和调度的独立单位。</p><p>进程一般由程序、数据集、进程控制块三部分组成。我们编写的程序用来描述进程要完成哪些功能以及如何完成；数据集则是程序在执行过程中所需要使用的资源；进程控制块用来记录进程的外部特征，描述进程的执行变化过程，系统可以利用它来控制和管理进程，它是系统感知进程存在的唯一标志。 <strong>进程的局限是创建、撤销和切换的开销比较大。</strong></p><p>线程</p><p>线程是在进程之后发展出来的概念。 线程也叫轻量级进程，它是一个基本的 CPU 执行单元，也是程序执行过程中的最小单元，由线程 ID、程序计数器、寄存器集合和堆栈共同组成。一个进程可以包含多个线程。线程的优点是减小了程序并发执行时的开销，提高了操作系统的并发性能，缺点是线程没有自己的系统资源，只拥有在运行时必不可少的资源，但同一进程的各线程可以共享进程所拥有的系统资源，如果把进程比作一个车间，那么线程就好比是车间里面的工人。不过对于某些独占性资源存在锁机制，处理不当可能会产生“死锁”。</p><p>协程</p><p>协程是一种用户态的轻量级线程，又称微线程，英文名 Coroutine，协程的调度完全由用户控制。人们通常将协程和子程序（函数）比较着理解。子程序调用总是一个入口，一次返回，一旦退出即完成了子程序的执行.</p><p><strong>与传统的系统级线程和进程相比，协程的最大优势在于其&quot;轻量级&quot;，可以轻松创建上百万个而不会导致系统资源衰竭，而线程和进程通常最多也不能超过 1 万的。这也是协程也叫轻量级线程的原因。</strong></p><blockquote><p>协程与多线程相比，其优势体现在：协程的执行效率极高。因为子程序切换不是线程切换，而是由程序自身控制，因此，没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显。</p></blockquote><p><strong>Go 语言对于并发的实现是靠协程，Goroutine</strong></p>',29),r=[n];function i(l,s,c,h,m,g){return a(),e("div",null,r)}const u=t(p,[["render",i]]);export{_ as __pageData,u as default};
