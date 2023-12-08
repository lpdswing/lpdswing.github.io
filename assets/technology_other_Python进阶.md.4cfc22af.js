import{_ as e,o as l,c as i,Q as n}from"./chunks/framework.d7865772.js";const m=JSON.parse('{"title":"python进阶笔记","description":"","frontmatter":{"title":"python进阶笔记","date":"2017-05-03T18:16:36.000Z","tags":["python"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/Python进阶.md","filePath":"technology/other/Python进阶.md","lastUpdated":1684394809000}'),o={name:"technology/other/Python进阶.md"},t=n(`<h1 id="python-进阶" tabindex="-1">Python 进阶 <a class="header-anchor" href="#python-进阶" aria-label="Permalink to &quot;Python 进阶&quot;">​</a></h1><ol><li><p>PEP8 编码规范, 以及开发中的一些惯例和建议</p><ul><li><p>代码编排:</p><ul><li>缩进 4 个空格, 禁止空格与 Tab 混用</li><li>行长 80: 防止单行逻辑过于复杂</li></ul></li><li><p>适当添加空行</p><ul><li>函数间: 顶级函数间空 2 行, 类的方法之间空 1 行</li><li>函数内: 同一函数内的逻辑块之间, 空 1 行</li><li>文件结尾: 留一个空行</li></ul></li><li><p>import</p><ul><li>顺序 <ol><li>标准库</li><li>第三方库</li><li>自定义库</li></ol></li><li>单行不要 import 多个库</li><li>模块内用不到的不要去 import</li></ul></li><li><p>空格</p></li><li><p>注释</p><ul><li>行注释</li><li>块注释</li><li>引入外来算法或者配置时须在注释中添加源连接, 标明出处</li><li>函数和类尽可能添加 <code>docstring</code></li></ul></li><li><p>命名</p><ul><li>包名、模块名、函数名、方法名全部使用小写, 单词间用下划线连接</li><li>类名、异常名使用 CapWords 的方式, 异常名结尾加 <code>Error</code> 或 <code>Wraning</code> 后缀</li><li>全局变量尽量使用大写, 一组同类型的全局变量要加上统一前缀, 单词用下划线连接</li></ul></li><li><p>字符串拼接尽量使用 <code>join</code> 方式: 速度快, 内存消耗小</p></li><li><p>语意明确、直白</p><ul><li><code>not xx in yy</code> vs <code>xx not in yy</code></li><li><code>not a is b</code> vs <code>a is not b</code></li></ul></li><li><p>程序构建</p><ul><li>一个函数只做一件事情, 并把这件事做好</li><li>大的功能用小函数之间灵活组合来完成</li><li>避免编写庞大的程序, “大”意味着体积庞大, 逻辑复杂甚至混乱</li></ul></li><li><p>函数名必须有动词, 最好是 do_something 的句式, 或者 somebody_do_something 句式</p></li><li><p>自定义的变量名、函数名不要与标准库中的名字冲突</p></li><li><p>pip install pep8</p></li><li><p>练习: 规范化这段代码</p><pre><code>  from django.conf import settings
  import sys, os
  mod=0xffffffff
  def foo ( a , b = 123 ) :
      c = { &#39;x&#39; : 111 , &#39;y&#39; : 222 }  # 定义一个字典
      d = [ 1, 3 , 5 ]
      return a , b , c
  def bar(x):
      if x%2 ==0: return true
</code></pre></li></ul></li><li><p><code>*</code> 和 <code>**</code> 的用法</p><ul><li><p>函数定义</p><pre><code>  def foo(*args, **kwargs):
      pass
</code></pre></li><li><p>参数传递</p><pre><code>  def foo(x, y, z, a, b):
      print(x)
      print(y)
      print(z)
      print(a)
      print(b)
  lst = [1, 2, 3]
  dic = {&#39;a&#39;: 22, &#39;b&#39;: 77}
  foo(*lst, **dic)
</code></pre></li><li><p>强制命名参数</p><pre><code>  def foo(a, *, b, c=123):
      pass
</code></pre></li><li><p>解包语法: <code>a, b, *ignored, c = [1, 2, 3, 4, 5, 6, 7]</code></p></li></ul></li><li><p>Python 的赋值和引用</p><ul><li><p><code>==, is</code>: <code>==</code> 判断的是值, <code>is</code> 判断的是内存地址 (即对象的id)</p></li><li><p>小整数对象: [-5, 256]</p></li><li><p><code>copy, deepcopy</code> 的区别</p><ul><li><code>copy</code>: 只拷贝表层元素</li><li><code>deepcopy</code>: 在内存中重新创建所有子元素</li><li><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305181010449.png" alt=""></li></ul></li><li><p>练习1: 说出执行结果</p><pre><code>  def extendList(val, lst=[]):
      lst.append(val)
      return lst

  list1 = extendList(10)
  list2 = extendList(123, [])
  list3 = extendList(&#39;a&#39;)
</code></pre></li><li><p>练习2: 说出下面执行结果</p><pre><code>  from copy import copy, deepcopy
  from pickle import dumps, loads

  a = [1, 2, 3]
  b = [a] * 3
  c = copy(b)
  d = deepcopy(b)
  e = loads(dumps(b, 4))

  b[1].append(999)
  c[1].append(999)
  d[1].append(999)
  e[1].append(999)
  d[1].append(777)
  e[1].append(777)
</code></pre></li><li><p>自定义 deepcopy: <code>my_deepcopy = lambda item: loads(dumps(item, 4))</code></p></li></ul></li><li><p>迭代器, 生成器, itertools, yield, 列表 / 字典 / 集合的推导</p><pre><code> class Range:
     def __init__(self, start, end):
         self.start = start - 1
         self.end = end

     def __iter__(self):
         return self

     def __next__(self):
         self.start += 1
         if self.start &lt; self.end:
             return self.start
         else:
             raise StopIteration()
</code></pre><ul><li><p>iterator: 任何实现了 <code>__iter__</code> 和 <code>__next__</code> (python2中是 <code>next()</code>) 方法的对象都是迭代器.</p><ul><li><code>__iter__</code>返回迭代器自身</li><li><code>__next__</code> 返回容器中的下一个值</li><li>如果容器中没有更多元素, 则抛出StopIteration异常</li></ul></li><li><p>generator: 生成器其实是一种特殊的迭代器, 不需要自定义 <code>__iter__</code> 和 <code>__next__</code></p><ul><li>生成器函数 (yield)</li><li>生成器表达式</li></ul></li><li><p>练习1: 自定义一个迭代器, 实现斐波那契数列</p><pre><code>  class Fib:
      def __init__(self, count):
          self.prev = 0
          self.curr = 1
          self.count = count

      def __iter__(self):
          return self

      def __next__(self):
          if self.count &gt; 0:
              # 计数
              self.count -= 1
              # 计算当前的值
              current = self.curr
              # 为下次做准备
              self.prev, self.curr = self.curr, (self.curr + self.prev)
              # 返回当前值
              return current
          else:
              raise StopIteration()
</code></pre></li><li><p>练习2: 自定义一个生成器函数, 实现斐波那契数列</p><pre><code>      def fib(max_value):
          prev = 0
          curr = 1
          while curr &lt; max_value:
              yield curr
              prev, curr = curr, curr + prev
</code></pre></li><li><p>练习3: 定义一个随机数迭代器, 随机范围为 [1, 50], 最大迭代次数 30</p><pre><code>  import random

  class RandomIter:
      def __init__(self, start, end, times):
          self.start = start
          self.end = end
          self.max_times = times
          self.count = 0

      def __iter__(self):
          return self

      def __next__(self):
          self.count += 1
          if self.count &lt;= self.max_times:
              return random.randint(self.start, self.end)
          else:
              raise StopIteration()
</code></pre></li><li><p>迭代器、生成器有什么好处？</p><ul><li>节省内存</li><li>惰性求值</li></ul></li><li><p>itertools</p><ul><li>无限迭代 <ul><li><code>count(start=0, step=1)</code></li><li><code>cycle(iterable)</code></li><li><code>repeat(object [,times])</code></li></ul></li><li>有限迭代 <ul><li><code>chain(*iterables)</code></li></ul></li><li>排列组合 <ul><li><code>product(*iterables, repeat=1)</code> 笛卡尔积</li><li><code>permutations(iterable[, r-length])</code> 全排列</li><li><code>combinations(iterable, r-length)</code> 组合</li></ul></li></ul></li></ul></li><li><p><code>method</code>, <code>classmethod</code> 和 <code>staticmethod</code></p><ul><li><p><code>method</code>: 通过实例调用时, 可以引用类内部的任何属性和方法</p></li><li><p><code>classmethod</code>: 无需实例化, 可以调用类属性和类方法, 无法取到普通的成员属性和方法</p></li><li><p><code>staticmethod</code>: 无论用类调用还是用实例调用, 都无法取到类内部的属性和方法, 完全独立的一个方法</p></li><li><p>练习: 说出下面代码的运行结果</p><pre><code>  class Test(object):
      x = 123

      def __init__(self):
          self.y = 456

      def bar1(self):
          print(&#39;i am a method&#39;)

      @classmethod
      def bar2(cls):
          print(&#39;i am a classmethod&#39;)

      @staticmethod
      def bar3():
          print(&#39;i am a staticmethod&#39;)

      def foo1(self):
          print(self.x)
          print(self.y)
          self.bar1()
          self.bar2()
          self.bar3()

      @classmethod
      def foo2(cls):
          print(cls.x)
          # print(cls.y)
          # cls.bar1()
          Test.bar2()
          Test.bar3()

      @staticmethod
      def foo3(obj):
          print(obj.x)
          print(obj.y)
          obj.bar1()
          obj.bar2()
          obj.bar3()

  t = Test()
  t.foo1()
  t.foo2()
  t.foo3()
</code></pre></li></ul></li><li><p>Python 魔术方法</p><ol><li><p><code>__str__</code>, <code>__repr__</code></p></li><li><p><code>__init__</code> 和 <code>__new__</code></p><ul><li><code>__new__</code> 返回一个对象的实例, <code>__init__</code> 无返回值</li><li><code>__new__</code> 是一个类方法 <ul><li><p>单例模式</p><pre><code>  class A(object):
      &#39;&#39;&#39;单例模式&#39;&#39;&#39;
      obj = None
      def __new__(cls, *args, **kwargs):
          if cls.obj is None:
              cls.obj = object.__new__(cls)
          return cls.obj
</code></pre></li></ul></li></ul></li><li><p>比较运算、数学运算</p><ul><li><p>运算符重载</p><ul><li><code>+</code>: <code>__add__(value)</code></li><li><code>-</code>: <code>__sub__(value)</code></li><li><code>*</code>: <code>__mul__(value)</code></li><li><code>/</code>: <code>__truediv__(value)</code> (Python 3.x), <code>__div__(value)</code> (Python 2.x)</li><li><code>//</code>: <code>__floordiv__(value)</code></li><li><code>%</code>: <code>__mod__(value)</code></li><li><code>&amp;</code>: <code>__and__(value)</code></li><li><code>|</code>: <code>__or__(value)</code></li></ul></li><li><p>练习: 实现字典的 <code>__add__</code> 方法, 作用相当于 d.update(other)</p><pre><code>  class Dict(dict):
      def __add__(self, other):
          if isinstance(other, dict):
              new_dict = {}
              new_dict.update(self)
              new_dict.update(other)
              return new_dict
          else:
              raise TypeError(&#39;not a dict&#39;)
</code></pre></li><li><p>比较运算符的重载</p><ul><li><code>==</code>: <code>__eq__</code></li><li><code>!=</code>: <code>__ne__</code></li><li><code>&gt;</code>: <code>__gt__</code></li><li><code>&gt;=</code>: <code>__ge__</code></li><li><code>&lt;</code>: <code>__lt__</code></li><li><code>&lt;=</code>: <code>__le__</code></li></ul></li><li><p>练习: 完成一个类, 实现数学上无穷大的概念</p><pre><code>  class Inf:
      def __lt__(self, other):
          return False
      def __le__(self, other):
          return False
      def __ge__(self, other):
          return True
      def __gt__(self, other):
          return True
      def __eq__(self, other):
          return False
      def __ne__(self, other):
          return True
</code></pre></li></ul></li><li><p>容器方法</p><ul><li><p><code>__len__, __iter__, __contains__</code></p></li><li><p><code>__getitem__</code> 对 <code>string, list, tuple, dict</code> 有效</p></li><li><p><code>__setitem__</code> 对 <code>list, dict</code> 有效</p></li><li><p><code>__missing__</code> 对 <code>dict</code> 有效</p><pre><code>  class Dict(dict):
      def __missing__(self, key):
          self[key] = None  # 当检查到 Key 缺失时, 可以做任何默认行为
</code></pre></li></ul></li><li><p>可执行对象: <code>__call__</code></p></li><li><p>with:</p><ul><li><code>__enter__</code> 进入 <code>with</code> 代码块前的准备操作</li><li><code>__exit__</code> 退出时的善后操作</li></ul></li><li><p><code>__setattr__, __getattribute__, __getattr__, __dict__</code></p><ul><li><p>常用来做属性监听</p><pre><code>  class A:
      &#39;&#39;&#39;TestClass&#39;&#39;&#39;
      z = [7,8,9]
      def __init__(self):
          self.x = 123
          self.y = &#39;abc&#39;

      def __setattr__(self, name, value):
          print(&#39;set %s to %s&#39; % (name, value))
          object.__setattr__(self, name, value)

      def __getattribute__(self, name):
          print(&#39;get %s&#39; % name)
          return object.__getattribute__(self, name)

      def __getattr__(self, name):
          print(&#39;not has %s&#39; % name)
          return -1

      def foo(self, x, y):
          return x ** y

  # 对比
  a = A()
  print(A.__dict__)
  print(a.__dict__)
</code></pre></li></ul></li><li><p>描述器: <code>__set__, __get__</code></p><ul><li><a href="http://pyzh.readthedocs.io/en/latest/Descriptor-HOW-TO-Guide.html" target="_blank" rel="noreferrer">http://pyzh.readthedocs.io/en/latest/Descriptor-HOW-TO-Guide.html</a></li><li>常见应用场景: ORM 的各种 Field 类</li></ul></li><li><p>槽: <code>__slots__</code></p><ul><li><p>固定类所具有的属性</p></li><li><p>实例不会分配 <code>__dict__</code></p></li><li><p>实例无法动态添加属性</p></li><li><p>优化内存分配</p><pre><code>  class A:
      __slots__ = (&#39;x&#39;, &#39;y&#39;)
</code></pre></li></ul></li></ol></li><li><p>Python 性能之困</p><ol><li>计算密集型 <ul><li>CPU 长时间满负荷运行, 如图像处理、大数据运算、圆周率计算等</li><li>计算密集型: 用 C 语言补充</li><li>Profile, timeit</li></ul></li><li>I/O 密集型: 网络 IO, 文件 IO, 设备 IO 等 <ul><li>多线程 / 多进程 / 协程</li><li>阻塞 -&gt; 非阻塞</li><li>同步 -&gt; 异步</li></ul></li><li>GIL 全局解释器锁 <ul><li>它确保任何时候都只有一个Python线程执行。 <img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305181010949.png" alt=""></li></ul></li><li>什么是进程、线程、协程？ <ul><li>进程: 资源消耗大, 系统整体开销大, 数据通信不方便</li><li>线程: 资源消耗小, 可共享数据。上下文开销大。按时间片强制切换, 不够灵活</li><li>协程: 内存开销更小, 上下文切换开销更小。可根据事件切换, 更加有效的利用 CPU</li></ul></li><li>什么是同步、异步、阻塞、非阻塞？ <ul><li>同步, 异步: 客户端调用服务器接口时</li><li>阻塞, 非阻塞: 服务端发生等待</li></ul></li><li>事件驱动 + 多路复用 <ul><li>轮询: select, poll</li><li>事件驱动: epoll 有效轮询</li></ul></li><li>Greenlets / gevent | tornado / asyncio</li><li>线程安全, 锁 <ul><li>获得锁之后, 一定要释放, 避免死锁</li><li>获得锁之后, 执行的语句, 只跟被锁资源有关</li><li>区分普通锁 Lock, 可重入锁 RLock</li><li>线程之间的数据交互尽量使用 Queue</li></ul></li><li>gevent <ul><li>monkey.patch</li><li>gevent.sleep 非阻塞式等待</li><li>Queue 协程间数据交互, 避免竞争</li></ul></li></ol></li><li><p>装饰器</p><ul><li><p>最简装饰器</p><pre><code>  def deco(func):
      def wrap(*args, **kwargs):
          return func(*args, **kwargs)
      return wrap

  @deco
  def foo(a, b):
      return a ** b
</code></pre></li><li><p>原理</p><ul><li><p>对比被装饰前后的 <code>foo.__name__</code> 和 <code>foo.__doc__</code></p><pre><code>  from functools import wraps
  def deco(func):
      &#39;&#39;&#39;i am deco&#39;&#39;&#39;
      @wraps(func)
      def wrap(*args, **kwargs):
          &#39;&#39;&#39;i am wrap&#39;&#39;&#39;
          return func(*args, **kwargs)
      return wrap
</code></pre></li><li><p>简单过程</p><pre><code>  fn = deco(func)
  fn(*args, **kwargs)
</code></pre></li><li><p>多个装饰器调用过程</p><pre><code>  @deco1
  @deco2
  @deco3
  def foo(x, y):
      return x ** y
</code></pre></li></ul></li><li><p>带参数的装饰器</p><pre><code>  def deco(n):
      def wrap1(func):
          def wrap2(*args, **kwargs):
              return func(*args, **kwargs)
          return wrap2
      return wrap1
</code></pre></li><li><p>装饰器类和 <code>__call__</code></p></li><li><p>使用场景</p><ul><li>参数、结果检查</li><li>缓存、计数</li><li>日志、统计</li><li>权限管理</li><li>重试</li><li>其他</li></ul></li><li><p>练习1：写一个 timer 装饰器, 计算出被装饰函数调用一次花多长时间, 并把时间打印出来</p></li><li><p>练习2: 写一个权限管理装饰器, 权限分为 <code>admin / member / guest</code> 三级</p></li><li><p>练习3: 写一个 Retry 装饰器</p><pre><code>  import time

  class retry(object):
      def __init__(self, max_retries=3, wait=0, exceptions=(Exception,)):
          self.max_retries = max_retries
          self.exceptions = exceptions
          self.wait = wait

      def __call__(self, f):
          def wrapper(*args, **kwargs):
              for i in range(self.max_retries + 1):
                  try:
                      result = f(*args, **kwargs)
                  except self.exceptions:
                      time.sleep(self.wait)
                      continue
                  else:
                      return result
          return wrapper
</code></pre></li></ul></li><li><p>闭包</p><ul><li><p>说出下面函数返回值</p><pre><code>  def foo():
      l = []
      def bar(i):
          l.append(i)
          return l
      return bar

  f1 = foo()
  f2 = foo()

  # 说出下列语句执行结果
  f1(1)
  f1(2)
  f2(3)
</code></pre></li><li><p>作用域</p><ul><li><p>global</p></li><li><p>nonlocal</p></li><li><p>globals()</p></li><li><p>locals()</p></li><li><p>vars()</p><pre><code>  local namespace
      |
      V
  global namespace
      |
      V
  builtin namespace
</code></pre></li></ul></li><li><p>更深入一点: <code>__closure__</code></p></li></ul></li><li><p>Garbage Collection (GC)</p><ul><li><p>引用计数</p><ul><li><p>优点: 简单、实时性高</p></li><li><p>缺点: 消耗资源、循环引用</p><pre><code>  l1, l2 = [], []
  l1.append(l2)
  l2.append(l1)
</code></pre></li></ul><p><img src="https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305181011763.png" alt=""></p></li><li><p>标记-清除, 分代收集</p></li></ul></li><li><p>继承、多继承、多态、Mixin、super</p><ul><li><p>继承</p></li><li><p>多态</p></li><li><p>多继承 和 Mixin</p></li><li><p>super</p><pre><code>  class A:
      def __init__(self):
          print(&#39;enter A&#39;)
          self.x = 111
          print(&#39;exit A&#39;)


  class B(A):
      def __init__(self):
          print(&#39;enter B&#39;)
          A.__init__(self)
          # super().__init__()
          print(&#39;exit B&#39;)


  class C(A):
      def __init__(self):
          print(&#39;enter C&#39;)
          A.__init__(self)
          # super().__init__()
          print(&#39;exit C&#39;)


  class D(B, C):
      def __init__(self):
          print(&#39;enter D&#39;)
          B.__init__(self)
          C.__init__(self)
          # super().__init__()
          print(&#39;exit D&#39;)

  d = D()
</code></pre></li></ul></li><li><p>一些技巧和误区</p><ol><li><p>格式化打印</p><ul><li>json.dumps(obj, indent=4)</li><li>json 压缩: <code>json.dumps(obj, separators=[&#39;,&#39;,&#39;:&#39;])</code></li><li>pprint</li></ul></li><li><p>确保能取到有效值</p><ul><li><code>d.get(k, default)</code></li><li><code>d.setdefault</code></li><li><code>defaultdict</code></li><li><code>a or b</code></li><li><code>x = a if foo() else b</code></li></ul></li><li><p>try...except... 的滥用</p><ul><li>不要把所有东西全都包住, 程序错误需要报出来</li><li>使用 <code>try...except</code> 要指明具体错误, <code>try</code> 结构不是用来隐藏错误的, 而是用来有方向的处理错误的</li></ul></li><li><p>利用 dict 做模式匹配</p><pre><code> def do1():
     print(&#39;i am do1&#39;)

 def do2():
     print(&#39;i am do2&#39;)

 def do3():
     print(&#39;i am do3&#39;)

 def do4():
     print(&#39;i am do4&#39;)

 mapping = {1: do1, 2: do2, 3: do3, 4: do4}
 mod = random.randint(1, 10)
 func = mapping.get(mod, do4)
 func()
</code></pre></li><li><p><code>inf, -inf, nan</code></p></li><li><p>pyenv, venv, 命名空间</p><ul><li><a href="https://github.com/pyenv/pyenv-installer" target="_blank" rel="noreferrer">pyenv</a>: 管理 Python 版本</li><li>venv: 创建虚拟环境, 做环境隔离, venv 目录直接放到项目的目录里</li></ul></li><li><p>property: 把一个方法属性化</p><pre><code> class C(object):
     @property
     def x(self):
         &quot;I am the &#39;x&#39; property.&quot;
         return self._x
     @x.setter
     def x(self, value):
         self._x = value
     @x.deleter
     def x(self):
         del self._x
</code></pre></li><li><p>else 子句: <code>if, for, while, try</code></p></li><li><p>collections 模块</p><ul><li>defaultdict</li><li>namedtuple</li><li>Counter</li></ul></li></ol></li></ol>`,2),d=[t];function p(c,r,_,s,a,u){return l(),i("div",null,d)}const h=e(o,[["render",p]]);export{m as __pageData,h as default};
