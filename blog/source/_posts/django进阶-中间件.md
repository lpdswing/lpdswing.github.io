---
title: django进阶
date: 2018-05-03 19:19:39
tags: 
	- django
	- python
categories: Django
---

# django进阶

1. **HTTP Objects**

    **HttpRequest** 

   ​	**自身属性** 

   ​		`request.path -> /foo/bar/ `

   ​		`request.method `

   ​		`request.GET `

   ​		`request.POST `

   ​		`request.COOKIES `

   ​		`request.FILES -> {name1: file1, name2: file2, ...} `

   ​		`request.META['REMOTE_ADDR'] `

   ​		`request.META['HTTP_USER_AGENT'] 	`

   ​	**中间件添加的属性** 

   ​		request.session 

   ​		request.user 

   ​	**方法** 

   ​		request.get_full_path() -> /foo/bar/?a=123 

   ​		request.get_signed_cookie(key) 

   **HttpResponse** 

   ​	**属性** 

   ​		response.status_code 

   ​		response.content 

   ​	**方法** 

   ​		response.set_cookie(key, value, max_age=None) 

   **JsonHttpResponse** 

   	`response = JsonHttpResponse({'a': 12, 'b': 'xyz'})`

2. django 中间件

   最简单的中间件:aop面向切片编程

   自己写一个获取接口数据的中间件

   ```python
   class Result(MiddlewareMixin):
       def process_view(self,request,view_func,*args,**kwargs):
           #执行view函数.获取rc
           try:
               print(args,kwargs)
               view_result =view_func(request)
               rc = 0
           except Exception as e:
               view_result = None
               rc = str(e)
               
           #获取 msg
           uid = request.GET.get('uid')
           msg = cache.get(f'msg-{uid}') #python3才有f拼接
           
           data ={
               'result': view_result,
               'rc': rc,
               'msg':msg
           }
           return JsonResponse(data)
   ```

   最简单的装饰器—装饰器形式

```python
def simple_middeware(get_response):
    #do_something  for __init__()
    
    def middleware(request):
        # do something before_views()
		t=time.time()
        
        response = get_response(request) #view 函数在这里执行
        
        print(time.time()-t)
        # do something after_views()
        return response
    return middleware
```

装饰器的运行方式

```python
def timer(func):
    def wrap(*args,**kwargs):
        t= time.time()
        res= func(*args,**kwargs)
        print(time.time()-t)
        return res
    return wrap

@timer
def foo(n)
	time.sleep(n)
#被装饰后,这时候 foo.__name__ 已经变成了wrap而不是foo了
# 相当于timer(foo)(0.5)->wrap(0.5)
```

中间件类

```python
class MyMiddleware:
    def __init__(self,view_func):
        self.view_func = view_func  #动态添加属性
    def __call__(self,request):
        response = self.view_func(request)
        return response
    def process_view(self,request,view_func,view_args,view_kwargs):
        pass
-----------------
def foo():
    pass
# 执行foo()实际上执行的是foo.__call__()
------------------
class A:
    pass
a = A()
#a()没有call方法,但是A是有的A.__call__()->A的实例
-------------------
class A:
    def __call__(self,n):
        print(n)
a = A()
a(1)
1
#现在a()是可以调用的,可以用callable(a)查看
```

### django1.10之前的中间件

继承自MiddlewareMixin

```python
from django.utils.deprecation import MiddlewareMixin
class MyMiddleware(MiddlewareMixin): 
    def process_request(self, request):
		pass
	def process_view(self, request, view_func, view_args, view_kwargs):
        pass
	def process_response(self, request, response):
        return response
```

执行顺序 process_request, process_view 从上往下执行 

process_response 从下往上执行 

[内置中间件的排序](https://docs.djangoproject.com/en/2.0/ref/middleware/#middleware-ordering)

6. Cache

    默认缓存: from django.core.cache import cache 

   BACKEND: DatabaseCache / MemcachedCache / LocMemCache 

   LOCATION: IP:Port 绑定, 只有一个时配制成字符串链接, 有多台时配制为列表 

   使用 Redis 做缓存 

   ```Python
   CACHES = { 
   	"default": { 
   	"BACKEND": "django_redis.cache.RedisCache", 
   	"LOCATION": "redis://127.0.0.1:6379/1", 
   	"OPTIONS": { 
   		"CLIENT_CLASS": "django_redis.client.DefaultClient", 
   		"PICKLE_VERSION": ‑1, 
   		} 
   	} 
   }
   ```

   **基本方法** 

   `cache.set(key, value, timeout=None)` 

   `cache.get(key, default=None)` 

```
   cache.delete(key) 

   cache.incr('num') 

   cache.decr('num') 

   cache.get_or_set(key, default, timeout=None) 
```

   `cache.set_many({'a': 1, 'b': 2, 'c': 3})` 

   `cache.get_many(['a', 'b', 'c'])` 

   **全站缓存中间件**: `django.middleware.cache.UpdateCacheMiddleware `

   ​	前置中间件 

   	缓存期限: `CACHE_MIDDLEWARE_SECONDS `

   **页面缓存装饰器**: `from django.views.decorators.cache import cache_page `

   **属性缓存装饰器**: `from django.utils.functional import cached_property `

   **pickle** 

   ​	dumps 

   ​	loads

7. **Cookie 和 Session**

    **Cookie:** response.set_cookie(key, value, max_age=None) 

   **Session 配置** 

   ​	a. 开启 Session 中间件: django.contrib.sessions.middleware.SessionMiddleware 

   ​	b. 配置缓存 

   ​	c. 配置 Session 引擎: SESSION_ENGINE = "django.contrib.sessions.backends.cache" 

   **可选项** 

   ​	SESSION_COOKIE_AGE 缓存时间, 默认 2 周 

   ​	SESSION_COOKIE_NAME Session 名, 默认 'sessionid' 

   	SESSION_EXPIRE_AT_BROWSER_CLOSE 浏览器关闭页面时, Session 是否设为过期 													`SESSION_SAVE_EVERY_REQUEST 每次请求时, 是否强制保存一次 Session `

   

   **用法** 

   request.session.session_key 查看 session_id 

   request.session.modified session 是否发生过修改 

   request.session['uid'] = 1234 当 session 发生更改时会自动保存 

   request.session.get('uid') 取值 

   request.session.save() 手动保存

---

### 手写一个login_require装饰器验证用户是否登录

```python
def login_require(view_func):
    def check_login(request):
        if request.session.get('name'):
            return view_func(request)
        else:
            return redirect('/login/')
    return check_login

```

```Python
#login的view函数
def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    if username==USER and password ==PASSWORD:
        user = User(username = USER)
        request.session['uid']=user.id
        return render()
    else:
        return redirect('/login/')
```

```Python
#手写一个中间件验证用户已经登录,比如用户登录后才能编辑评论等(全局的)
class Auth(MiddlewareMixin):
    def process_request(self,request):
        uid = request.session.get('uid')
        if uid is not None:
            user = User.objects.get(id = uid)
            request.user = user   #动态添加一个user属性 setattr(request,'user',user)
        else:
            if request.path not in ['/user/login/','/user/register/']
            return redirect('/login/')
            
```

8. **Logging** 

   **日志级别** 

   ​	DEBUG 

   ​	INFO 

   ​	WARN 

   ​	ERROR 

   ​	FATAL 

   **使用** 

   logger.debug('xxxxxxxx') 

   logger.info('xxxxxxxx') 

   logger.warning('xxxxxxxx') 

   logger.error('xxxxxxxx') 

   logger.fatal('xxxxxxxx') 

   **查找、分析** 

   tail 

   head 

   less 

   awk 

   grep 

   **配置** 

   ```Python
   LOGGING = { 
   	'version': 1, 
   	'disable_existing_loggers': True, 
   	'formatters': { 
   		'simple': { 'format': '%(asctime)s %(module)s.%(funcName)s: %(message)s', 
   		'datefmt': '%Y‑%m‑%d %H:%M:%S', }, 
   		'verbose': { 
   			'format': '%(asctime)s %(levelname)s [%(process)d‑%(threadName)s] '
   					  '%(module)s.%(funcName)s line %(lineno)d: %(message)s', 
   			'datefmt': '%Y‑%m‑%d %H:%M:%S', 
   			} 
   			}, 
   	'handlers': { 
   		'inf': { 
   			'class': 'logging.handlers.TimedRotatingFileHandler', 
   			'filename': '/data/web/gnt.out', 
   			'when': 'W0', # 每周一切割日志 
   			'backupCount': 5, 
   			'formatter': 'simple', 
   			'level': 'DEBUG' if DEBUG else 'INFO', 
   			}, 
   			'err': { 
   				'class': 'logging.handlers.TimedRotatingFileHandler', 
   				'filename': '/data/web/gnt.err', 
   				'when': 'D', # 每天切割日志 'backupCount': 5, 
   				'formatter': 'verbose', 
   				'level': 'WARNING', 
   				} 
   			}, 
   		'loggers': { 
   			'inf': { 
   				'handlers': ['inf'], 
   				'level': 'DEBUG', 
   				'propagate': True, 
   				}, 
   			'err': { 
   				'handlers': ['err'], 
   				'level': 'DEBUG', 
   				'propagate': True, 
   				} 
   			} 
   		}
   ```

   一个打印日志的装饰器

   ---

   ```python
   def statistic(view_func):
       def wrap(request.*args,**kwargs):
           ip = request.META['REMOTE_ADDR']
           aid = int(request.GET.get('aid',0))
           logger.info(f'{ip}  {aid}')
           return view_func(request,*args,**kwargs)
       return wrap
   ```

   

9. **Django 的性能**

    **Django 自身优化** 

   ​	`充分之用缓存 `

   ​	`惰性求值和迭代器 `

   ​	`尽量使用 defer() 和 only() 查找 `

   ​	`尽量使用 count() 和 exists() `

   ​	模板中`{`% block %`}`性能优于` {`% include %`}`

   ​	`开启模板缓存 `

   ​	`不要使用外键！不要使用外键！不要使用外键！ `

   **其他优化** 

   ​	**I/O 密集型: 异步化** 

   ​		请求异步化 

   ​		数据操作异步化 

   ​		gevent, asyncio, aiopg, aiohttp, tornado 

   ​	**计算密集型** 

   ​		耗时操作用 Celery 等工具异步完成 

   ​	**分库分表** 

   ​		取余、哈希 

   ​		范围 

   ​		一致性哈希 

   ​	**索引优化** 

   ​	慢查询优化 (相关工具: DjangoDebugToolbar) 

   ​	Gunicorn 开启多进程模式利用多核 

   ​	PyPy 

   ​	Cython

---

### 异步调用任务

```Python
from functools import update_wrapper
def async_call(func):
    '''异步调用任务'''
    func.trace_err =trace_err
    func.trace_info = '%s.%s'%(trace_code(2),func.func_name)
    def wrapper(*args,**kwargs)
    	global main_thread
        try:
            main_thread.MMQ.submit(func,*args,**kwargs)
        except AttributeError:
            return func(*args,**kwargs)
    return update_wrapper(wrapper,func)
```



### 生成器

```python
#生成器  使用next调用
def foo():
    for i in range(10):
        yield i 
x = foo()
next(x)
#惰性求值,占内存小  ----python2中的xrange类似
```

### 迭代器

```python
class Iter:
    def __iter__(self):
        return self
    def __next__(self):
        return 1
o =Iter()

class Iter:
    def __init__(self):
        self.v = 0
    def __iter__(self):
        return self
    def __next__(self):
        self.v +=1
        return self.v   #迭代的规则写在next方法
```

