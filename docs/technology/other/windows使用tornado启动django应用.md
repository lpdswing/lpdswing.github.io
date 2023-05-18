---
title: windows使用tornado启动django应用
date: 2020-05-10 19:42:05
tags:
 - tornado
 - django
 - python
categories:
 - 知识库
---

由于 windows 不支持 gunicorn,uwsgi 等高性能的 server,使用 Apache + mod_uwsgi 我觉得有点麻烦,就想用 tornado 来作为 django 的 http server..

**tornado 是单线程的，同时 WSGI 应用又是同步的，如果我们使用 Tornado 启动 WSGI 应用，理论上每次只能处理一个请求都是，任何一个请求有阻塞，都会导致 tornado 的整个 IOLOOP 阻塞。如下所示，我们同时发出两个 GET 请求向[http://127.0.0.1:5000/](http://127.0.0.1:5000/)**

**会发现第一个发出的请求会在大约 5s 之后返回，而另一个请求会在 10s 左右返回，我们可以判断，这两个请求是顺序执行的。**

```python
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from flask import Flask
import time


app = Flask(__name__)


@app.route('/')
def index():
    time.sleep(5)
    return 'OK'


if __name__ == '__main__':
    http_server = HTTPServer(WSGIContainer(app))
    http_server.listen(5000)
    IOLoop.instance().start()
```

**我们知道，tornado 实现异步运行同步函数，我们只能使用线程来运行，如下所示：**

> 几乎同时返回结果,并发执行了

```python
import tornado.web
import tornado.ioloop
import time
import tornado

class IndexHandler(tornado.web.RequestHandler):
    """主路由处理类"""
    @tornado.gen.coroutine
    def get(self):
        """对应http的get请求方式"""
        loop = tornado.ioloop.IOLoop.instance()
        yield loop.run_in_executor(None,self.sleep)
        self.write("Hello You!")

    def sleep(self):
        time.sleep(5)
        self.write('sleep OK')


if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", IndexHandler),
    ])
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()
```

**对于这种（使用 tornado 运行 Flask 的情况）情况，我们如何做呢，查看  WSGIContainer 的代码我们发现**

```python
class WSGIContainer(object):

    def __init__(self, wsgi_application):
        self.wsgi_application = wsgi_application

    def __call__(self, request):
        data = {}
        response = []

        def start_response(status, response_headers, exc_info=None):
            data["status"] = status
            data["headers"] = response_headers
            return response.append
        # wsgi返回response部分
        app_response = self.wsgi_application(
            WSGIContainer.environ(request), start_response)
        try:
            response.extend(app_response)
            body = b"".join(response)
        finally:
            if hasattr(app_response, "close"):
                app_response.close()
        if not data:
            raise Exception("WSGI app did not call start_response")

        status_code, reason = data["status"].split(' ', 1)
        status_code = int(status_code)
        headers = data["headers"]
        header_set = set(k.lower() for (k, v) in headers)
        body = escape.utf8(body)
        if status_code != 304:
            if "content-length" not in header_set:
                headers.append(("Content-Length", str(len(body))))
            if "content-type" not in header_set:
                headers.append(("Content-Type", "text/html; charset=UTF-8"))
        if "server" not in header_set:
            headers.append(("Server", "TornadoServer/%s" % tornado.version))

        start_line = httputil.ResponseStartLine("HTTP/1.1", status_code, reason)
        header_obj = httputil.HTTPHeaders()
        for key, value in headers:
            header_obj.add(key, value)
        request.connection.write_headers(start_line, header_obj, chunk=body)
        request.connection.finish()
        self._log(status_code, request)
```

只需重新方法将这部分代码变成异步即可,代码如下:

loop.run_in_executor 的第一个参数可以为一个 ThreadPoolExecutor 对象

```python
from flask import Flask
import time
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

app = Flask(__name__)


@app.route('/')
def index():
    time.sleep(5)
    return 'OK'


import tornado
from tornado import escape
from tornado import httputil
from typing import List, Tuple, Optional, Callable, Any, Dict
from types import TracebackType


class WSGIContainer_With_Thread(WSGIContainer):
    @tornado.gen.coroutine
    def __call__(self, request):
        data = {}  # type: Dict[str, Any]
        response = []  # type: List[bytes]

        def start_response(
                status: str,
                headers: List[Tuple[str, str]],
                exc_info: Optional[
                    Tuple[
                        "Optional[Type[BaseException]]",
                        Optional[BaseException],
                        Optional[TracebackType],
                    ]
                ] = None,
        ) -> Callable[[bytes], Any]:
            data["status"] = status
            data["headers"] = headers
            return response.append

        loop = tornado.ioloop.IOLoop.instance()
        app_response = yield loop.run_in_executor(None, self.wsgi_application, WSGIContainer.environ(request),
                                                  start_response)
        # app_response = self.wsgi_application(
        #     WSGIContainer.environ(request), start_response
        # )
        try:
            response.extend(app_response)
            body = b"".join(response)
        finally:
            if hasattr(app_response, "close"):
                app_response.close()  # type: ignore
        if not data:
            raise Exception("WSGI app did not call start_response")

        status_code_str, reason = data["status"].split(" ", 1)
        status_code = int(status_code_str)
        headers = data["headers"]  # type: List[Tuple[str, str]]
        header_set = set(k.lower() for (k, v) in headers)
        body = escape.utf8(body)
        if status_code != 304:
            if "content-length" not in header_set:
                headers.append(("Content-Length", str(len(body))))
            if "content-type" not in header_set:
                headers.append(("Content-Type", "text/html; charset=UTF-8"))
        if "server" not in header_set:
            headers.append(("Server", "TornadoServer/%s" % tornado.version))

        start_line = httputil.ResponseStartLine("HTTP/1.1", status_code, reason)
        header_obj = httputil.HTTPHeaders()
        for key, value in headers:
            header_obj.add(key, value)
        assert request.connection is not None
        request.connection.write_headers(start_line, header_obj, chunk=body)
        request.connection.finish()
        self._log(status_code, request)


if __name__ == '__main__':
    http_server = HTTPServer(WSGIContainer_With_Thread(app))
    http_server.listen(5000)
    IOLoop.instance().start()
```

> 测试执行结果,几乎同时返回了 OK,不是顺序执行了

**注意：**

1 、这种方法实际上并没有提高性能，说到底还是使用多线程来运行的，所以推荐如果使用 tornado 还是和 tornado 的 web 框架联合起来写出真正的异步代码，这样才会达到 tornado 异步 IO 的高性能目的。我们的目的仅仅是让 tornado 替代 django 开发服务器的低性能而已.\*\*

- 让 tornado 取代 django 的开发服务

在项目的根路径新增一个 `tornado_server.py`  的文件,代码如下:

```python
import os
import sys

from django.core.wsgi import get_wsgi_application
from tornado.options import options, define, parse_command_line

import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.wsgi

from tornado import escape, httputil
from typing import List, Tuple, Optional, Callable, Any, Dict
from types import TracebackType
from tornado.wsgi import WSGIContainer

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ['DJANGO_SETTINGS_MODULE'] = 'datapower.settings'

setting = {
    'template_path': os.path.join(os.path.dirname(__file__), 'templates'),
    'static_path': os.path.join(os.path.dirname(__file__), 'static'),
    'debug': False
}


define('port', type=int, default=8000)


class WSGIContainer_With_Thread(WSGIContainer):
    @tornado.gen.coroutine
    def __call__(self, request):
        data = {}  # type: Dict[str, Any]
        response = []  # type: List[bytes]

        def start_response(
                status: str,
                headers: List[Tuple[str, str]],
                exc_info: Optional[
                    Tuple[
                        "Optional[Type[BaseException]]",
                        Optional[BaseException],
                        Optional[TracebackType],
                    ]
                ] = None,
        ) -> Callable[[bytes], Any]:
            data["status"] = status
            data["headers"] = headers
            return response.append

        loop = tornado.ioloop.IOLoop.instance()
        app_response = yield loop.run_in_executor(None, self.wsgi_application, WSGIContainer.environ(request),
                                                  start_response)
        # app_response = self.wsgi_application(
        #     WSGIContainer.environ(request), start_response
        # )
        try:
            response.extend(app_response)
            body = b"".join(response)
        finally:
            if hasattr(app_response, "close"):
                app_response.close()  # type: ignore
        if not data:
            raise Exception("WSGI app did not call start_response")

        status_code_str, reason = data["status"].split(" ", 1)
        status_code = int(status_code_str)
        headers = data["headers"]  # type: List[Tuple[str, str]]
        header_set = set(k.lower() for (k, v) in headers)
        body = escape.utf8(body)
        if status_code != 304:
            if "content-length" not in header_set:
                headers.append(("Content-Length", str(len(body))))
            if "content-type" not in header_set:
                headers.append(("Content-Type", "text/html; charset=UTF-8"))
        if "server" not in header_set:
            headers.append(("Server", "TornadoServer/%s" % tornado.version))

        start_line = httputil.ResponseStartLine(
            "HTTP/1.1", status_code, reason)
        header_obj = httputil.HTTPHeaders()
        for key, value in headers:
            header_obj.add(key, value)
        assert request.connection is not None
        request.connection.write_headers(start_line, header_obj, chunk=body)
        request.connection.finish()
        self._log(status_code, request)


def main():
    parse_command_line()
    wsgi_app = WSGIContainer_With_Thread(get_wsgi_application())
    tornado_app = tornado.web.Application(
        [
            ('.*', tornado.web.FallbackHandler, dict(fallback=wsgi_app)),
            # 虽然django设置了static文件访问接口, 这是貌似取不到,防止前端出现样式丢失这里就增加一个静态文件访问接口
            ('/static/(.*)', tornado.web.StaticFileHandler,
             dict(path=os.path.join(os.path.dirname(__file__), 'static')))

        ], **setting
    )
    server = tornado.httpserver.HTTPServer(tornado_app)
    server.listen(options.port)
    tornado.ioloop.IOLoop.instance.start()


if __name__ == '__main__':
    main()
```

文章参考:

[https://www.cnblogs.com/lycsdhr/p/11123545.html](https://www.cnblogs.com/lycsdhr/p/11123545.html)

[https://www.cnblogs.com/ExMan/p/9506012.html](https://www.cnblogs.com/ExMan/p/9506012.html)

[https://www.cnblogs.com/baolong/p/6769237.html](https://www.cnblogs.com/baolong/p/6769237.html)
