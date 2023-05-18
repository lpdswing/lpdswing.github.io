import{_ as s,o as n,c as a,O as l}from"./chunks/framework.72ba6402.js";const d=JSON.parse('{"title":"django进阶-笔记","description":"","frontmatter":{"title":"django进阶-笔记","date":"2017-05-03T18:16:44.000Z","tags":["python","django"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/Django_advanced.md","filePath":"technology/other/Django_advanced.md","lastUpdated":1684399297000}'),p={name:"technology/other/Django_advanced.md"},e=l(`<h1 id="django-进阶" tabindex="-1">Django 进阶 <a class="header-anchor" href="#django-进阶" aria-label="Permalink to &quot;Django 进阶&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.  [HTTP Objects](https://docs.djangoproject.com/en/2.0/ref/request-response/)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - HttpRequest</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 自身属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.path -&gt; \`/foo/bar/\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.method</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.GET</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.POST</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.COOKIES</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.FILES -&gt; \`{name1: file1, name2: file2, ...}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.META[&#39;REMOTE_ADDR&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">        request.META[&#39;HTTP_USER_AGENT&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 中间件添加的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        - request.session</span></span>
<span class="line"><span style="color:#A6ACCD;">        - request.user</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        - request.get_full_path() -&gt; \`/foo/bar/?a=123\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - request.get_signed_cookie(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    - HttpResponse</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        - response.status_code</span></span>
<span class="line"><span style="color:#A6ACCD;">        - response.content</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        - response.set_cookie(key, value, max_age=None)</span></span>
<span class="line"><span style="color:#A6ACCD;">    - JsonHttpResponse</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`response = JsonHttpResponse({&#39;a&#39;: 12, &#39;b&#39;: &#39;xyz&#39;})\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.  Django 中间件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 最简单的中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`python</span></span>
<span class="line"><span style="color:#A6ACCD;">              def simple_middleware(get_response):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  # do_something_for_init()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                  def middleware(request):</span></span>
<span class="line"><span style="color:#A6ACCD;">                      # do_something_before_views()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                      response = get_response(request)  # views 函数在这里执行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                      # do_something_after_views()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                      return response</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                  return middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 中间件类</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`python</span></span>
<span class="line"><span style="color:#A6ACCD;">          class MyMiddleware:</span></span>
<span class="line"><span style="color:#A6ACCD;">              def __init__(self, get_response):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  self.get_response = get_response</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              def __call__(self, request):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  response = self.get_response(request)</span></span>
<span class="line"><span style="color:#A6ACCD;">                  return response</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  pass</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - Django-1.10 以前的中间件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`python</span></span>
<span class="line"><span style="color:#A6ACCD;">          from django.utils.deprecation import MiddlewareMixin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          class MyMiddleware(MiddlewareMixin):</span></span>
<span class="line"><span style="color:#A6ACCD;">              def process_request(self, request):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              def process_response(self, request, response):</span></span>
<span class="line"><span style="color:#A6ACCD;">                  return response</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 执行顺序</span></span>
<span class="line"><span style="color:#A6ACCD;">      - process_request, process_view 从上往下执行</span></span>
<span class="line"><span style="color:#A6ACCD;">      - process_response 从下往上执行</span></span>
<span class="line"><span style="color:#A6ACCD;">    - [内置中间件的排序](https://docs.djangoproject.com/en/2.0/ref/middleware/#middleware-ordering)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.  Form 表单</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - form 的 method 只能是 POST 或 GET</span></span>
<span class="line"><span style="color:#A6ACCD;">    - method=GET 时, 表单提交的参数会出现在 URL 里</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 属性和方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      - form.is_valid()</span></span>
<span class="line"><span style="color:#A6ACCD;">      - form.has_changed()</span></span>
<span class="line"><span style="color:#A6ACCD;">      - form.cleaned_data[&#39;fieldname&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    - Form 的定义和使用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`python</span></span>
<span class="line"><span style="color:#A6ACCD;">          from django.forms import Form</span></span>
<span class="line"><span style="color:#A6ACCD;">          from django.forms import IntegerField, CharField, DateField, ChoiceField</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          class TestForm(Form):</span></span>
<span class="line"><span style="color:#A6ACCD;">              TAGS = (</span></span>
<span class="line"><span style="color:#A6ACCD;">                  (&#39;py&#39;, &#39;python&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">                  (&#39;ln&#39;, &#39;linux&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">                  (&#39;dj&#39;, &#39;django&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">              )</span></span>
<span class="line"><span style="color:#A6ACCD;">              fid = IntegerField()</span></span>
<span class="line"><span style="color:#A6ACCD;">              name = CharField(max_length=10)</span></span>
<span class="line"><span style="color:#A6ACCD;">              tag = ChoiceField(choices=TAGS)</span></span>
<span class="line"><span style="color:#A6ACCD;">              date = DateField()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          data = {&#39;fid&#39;: 123, &#39;name&#39;: &#39;1234567890&#39;, &#39;tag&#39;: &#39;dj&#39;, &#39;date&#39;: &#39;2017-12-17&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">          form = TestForm(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">          print(form.is_valid())</span></span>
<span class="line"><span style="color:#A6ACCD;">          print(form.cleaned_data)  # cleaned_data 属性是 is_valid 函数执行时动态添加的</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - ModelForm</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`python</span></span>
<span class="line"><span style="color:#A6ACCD;">          class UserForm(ModelForm):</span></span>
<span class="line"><span style="color:#A6ACCD;">              class Meta:</span></span>
<span class="line"><span style="color:#A6ACCD;">                  model = User</span></span>
<span class="line"><span style="color:#A6ACCD;">                  fields = [&#39;name&#39;, &#39;birth&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4.  模板</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - base.html 模板推荐布局</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`html</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;title&gt;{{title}}&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/static/css/style.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {% block &quot;ext_css&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;!-- {% block &quot;navbar&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {% block &quot;sidebar&quot; %}{% endblock %} {% block &quot;content&quot; %}{% endblock</span></span>
<span class="line"><span style="color:#A6ACCD;">          %}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;!-- {% block &quot;foot&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {% block &quot;ext_js&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - [内建 Tags](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#ref-templates-builtins-tags)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`autoescape\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {% autoescape off %}</span></span>
<span class="line"><span style="color:#A6ACCD;">                  {{ body }}</span></span>
<span class="line"><span style="color:#A6ACCD;">              {% endautoescape %}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`csrf_token\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {% csrf_token %}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`for...endfor\` 中的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.counter\` 从 1 开始计数</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.counter0\` 从 0 开始计数</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.revcounter\` 逆序计数到 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.revcounter0\` 逆序计数到 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.first\` 是否是循环中的第一个</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.last\` 是否是循环中的最后一个</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`forloop.parentloop\` 用于引用上级循环中的变量, 如 \`{{ forloop.parentloop.counter }}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - empty 子句</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {% for x in lst %}</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &lt;div&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {% empty %}</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &lt;div&gt;Sorry&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {% endfor %}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - load: 加载自定义 Tag {\`%\`load foo.bar \`%\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - url: 根据 url name 替换 {\`%\` url &#39;your-url-name&#39; v1 v2 \`%\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - static</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {% load static %}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;img src=&quot;{% static &quot;img/smile.jpg&quot; %}&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        或</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">              {% load static %}</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;img src=&quot;{% get_static_prefix %}img/smile.jpg&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - [内建的 filter](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#built-in-filter-reference)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - safe 和 escape: \`{{ var|safe|escape }}\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - [使用 Jinja2 替换内置模板引擎](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5.  ORM</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 什么是 ORM</span></span>
<span class="line"><span style="color:#A6ACCD;">    - CURD (Create/Update/Retrieve/Delete)</span></span>
<span class="line"><span style="color:#A6ACCD;">    - [Field](https://docs.djangoproject.com/en/2.0/ref/models/fields/)</span></span>
<span class="line"><span style="color:#A6ACCD;">    - Field 选项</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`null\` 针对数据库, 允许数据库该字段为 Null</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`blank\` 针对 Model 本身, 允许传入字段为空. blank 为 True 时, 对数据库来说, 该字段依然为必填项</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`default\` 尽量使用 default, 少用 null 和 blank</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`choices\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`primary_key\` 非必要时不要设置, 用默认 id, 保持条目自增、有序</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`unique\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`db_index\` (True | False)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`max_length\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`auto_now\` 每次 save 时，更新为当前时间</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`auto_now_add\` 只记录创建时的时间, 保存时不更新</span></span>
<span class="line"><span style="color:#A6ACCD;">    - [QuerySet](https://docs.djangoproject.com/en/2.0/ref/models/querysets/)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 创建: \`create() / get_or_create() / update_or_create() / bulk_create()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 条件过滤和排除: \`filter() / exclude()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 只加载需要的字段: \`only() / defer()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`order_by() / count() / exists()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`latest() / earliest()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`first() / last()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 查找条件</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`filter(id__in=[123, 555, 231])\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`filter(id__range=[123, 456])\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`filter(name__contains=&#39;123&#39;)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`filter(name__regex=&#39;^\\w+\\d+&#39;)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`gt / gte / lt / lte\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 其他 ORM</span></span>
<span class="line"><span style="color:#A6ACCD;">      - sqlalchemy</span></span>
<span class="line"><span style="color:#A6ACCD;">      - peewee</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 主键和外键约束</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 内部系统、传统企业级应用可以使用 (需要数据量可控，数据库服务器数量可控)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 互联网行业不建议使用</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 性能缺陷</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 不能用于分布式环境</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 不容易做到数据解耦</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6.  Cache</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 默认缓存: \`from django.core.cache import cache\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - BACKEND: \`DatabaseCache / MemcachedCache / LocMemCache\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - LOCATION: IP:Port 绑定, 只有一个时配制成字符串链接, 有多台时配制为列表</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 使用 Redis 做缓存</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            CACHES = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;default&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;BACKEND&quot;: &quot;django_redis.cache.RedisCache&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;LOCATION&quot;: &quot;redis://127.0.0.1:6379/1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;OPTIONS&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &quot;CLIENT_CLASS&quot;: &quot;django_redis.client.DefaultClient&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &quot;PICKLE_VERSION&quot;: -1,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 基本方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.set(key, value, timeout=None)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.get(key, default=None)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.delete(key)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.incr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.decr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.get_or_set(key, default, timeout=None)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.set_many({&#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 3})\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`cache.get_many([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 全站缓存中间件: \`django.middleware.cache.UpdateCacheMiddleware\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 前置中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 缓存期限: CACHE_MIDDLEWARE_SECONDS</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 页面缓存装饰器: \`from django.views.decorators.cache import cache_page\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 属性缓存装饰器: \`from django.utils.functional import cached_property\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - pickle</span></span>
<span class="line"><span style="color:#A6ACCD;">      - dumps</span></span>
<span class="line"><span style="color:#A6ACCD;">      - loads</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7.  Cookie 和 Session</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - Cookie: \`response.set_cookie(key, value, max_age=None)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - Session 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">      1. 开启 Session 中间件: \`django.contrib.sessions.middleware.SessionMiddleware\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      2. 配置缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">      3. 配置 Session 引擎: \`SESSION_ENGINE = &quot;django.contrib.sessions.backends.cache&quot;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 可选项</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`SESSION_COOKIE_AGE\` 缓存时间, 默认 2 周</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`SESSION_COOKIE_NAME\` Session 名, 默认 &#39;sessionid&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`SESSION_EXPIRE_AT_BROWSER_CLOSE\` 浏览器关闭页面时, Session 是否设为过期</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`SESSION_SAVE_EVERY_REQUEST\` 每次请求时, 是否强制保存一次 Session</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 用法</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`request.session.session_key\` 查看 session_id</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`request.session.modified\` session 是否发生过修改</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`request.session[&#39;uid&#39;] = 1234\` 当 session 发生更改时会自动保存</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`request.session.get(&#39;uid&#39;)\` 取值</span></span>
<span class="line"><span style="color:#A6ACCD;">      - \`request.session.save()\` 手动保存</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8.  Logging</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 日志级别</span></span>
<span class="line"><span style="color:#A6ACCD;">      - DEBUG</span></span>
<span class="line"><span style="color:#A6ACCD;">      - INFO</span></span>
<span class="line"><span style="color:#A6ACCD;">      - WARNING</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ERROR</span></span>
<span class="line"><span style="color:#A6ACCD;">      - FATAL</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">      - logger.debug(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - logger.info(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - logger.warning(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - logger.error(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - logger.fatal(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 查找、分析</span></span>
<span class="line"><span style="color:#A6ACCD;">      - tail</span></span>
<span class="line"><span style="color:#A6ACCD;">      - head</span></span>
<span class="line"><span style="color:#A6ACCD;">      - less</span></span>
<span class="line"><span style="color:#A6ACCD;">      - awk</span></span>
<span class="line"><span style="color:#A6ACCD;">      - grep</span></span>
<span class="line"><span style="color:#A6ACCD;">    - [配置](https://docs.python.org/2/library/logging.html)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            LOGGING = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;version&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;disable_existing_loggers&#39;: True,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;formatters&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;simple&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;format&#39;: &#39;%(asctime)s %(module)s.%(funcName)s: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;verbose&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;format&#39;: &#39;%(asctime)s %(levelname)s [%(process)d-%(threadName)s] &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                  &#39;%(module)s.%(funcName)s line %(lineno)d: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;handlers&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;filename&#39;: &#39;/data/web/gnt.out&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;when&#39;: &#39;W0&#39;,  # 每周一切割日志</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;formatter&#39;: &#39;simple&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;level&#39;: &#39;DEBUG&#39; if DEBUG else &#39;INFO&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;filename&#39;: &#39;/data/web/gnt.err&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;when&#39;: &#39;D&#39;,  # 每天切割日志</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;formatter&#39;: &#39;verbose&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;level&#39;: &#39;WARNING&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;loggers&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;handlers&#39;: [&#39;inf&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;handlers&#39;: [&#39;err&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">9.  Django 的性能</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - Django 自身优化</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 充分之用缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 惰性求值和迭代器</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 尽量使用 \`defer()\` 和 \`only()\` 查找</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 尽量使用 \`count()\` 和 \`exists()\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 模板中 \`{% block %}\` 性能优于 \`{% include %}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      - [开启模板缓存](https://docs.djangoproject.com/en/2.0/ref/templates/api/#django.template.loaders.cached.Loader)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - **不要使用外键！不要使用外键！不要使用外键！**</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 其他优化</span></span>
<span class="line"><span style="color:#A6ACCD;">      - I/O 密集型: 异步化</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 请求异步化</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 数据操作异步化</span></span>
<span class="line"><span style="color:#A6ACCD;">        - gevent, asyncio, aiopg, aiohttp, tornado</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 计算密集型</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 耗时操作用 [Celery](http://docs.jinkan.org/docs/celery/) 等工具异步完成</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 分库分表</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 取余、哈希</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 范围</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 一致性哈希</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 索引优化</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 慢查询优化 ([相关工具: DjangoDebugToolbar](https://django-debug-toolbar.readthedocs.io))</span></span>
<span class="line"><span style="color:#A6ACCD;">      - Gunicorn 开启多进程模式利用多核</span></span>
<span class="line"><span style="color:#A6ACCD;">      - PyPy</span></span>
<span class="line"><span style="color:#A6ACCD;">      - Cython</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">10. Python / Django 环境加载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - sys.argv</span></span>
<span class="line"><span style="color:#A6ACCD;">    - sys.path</span></span>
<span class="line"><span style="color:#A6ACCD;">    - os.environ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">11. Git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 常用操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git init</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git clone</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git add</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git commit -m &#39;xxxxxxxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git push</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git pull</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git log</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git branch</span></span>
<span class="line"><span style="color:#A6ACCD;">      - git merge</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码管理</span></span>
<span class="line"><span style="color:#A6ACCD;">      - code review</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 发现代码逻辑问题</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 代码风格及规范化问题</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 算法问题</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 错误的使用方式</span></span>
<span class="line"><span style="color:#A6ACCD;">        - 能够学习其他人的优秀代码</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 分支: master / dev / feature</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">12. Blog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    1.  基础功能</span></span>
<span class="line"><span style="color:#A6ACCD;">        1. 看文章</span></span>
<span class="line"><span style="color:#A6ACCD;">        2. 写文章</span></span>
<span class="line"><span style="color:#A6ACCD;">        3. 查看文章列表</span></span>
<span class="line"><span style="color:#A6ACCD;">        4. 根据正文搜索文章</span></span>
<span class="line"><span style="color:#A6ACCD;">        5. 可以评论</span></span>
<span class="line"><span style="color:#A6ACCD;">    2.  扩展功能 0. 实现分页功能: 首页文章列表每页显示 5 篇文章</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        1.  实现一个基于 redis 的文章缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">        2.  给首页增加一个模块, 显示最受欢迎的 10 篇文章 (点击率最高的)</span></span>
<span class="line"><span style="color:#A6ACCD;">        3.  创建用户模块</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 实现注册、登录功能</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 添加用户个人信息展示</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 开发头像上传功能</span></span>
<span class="line"><span style="color:#A6ACCD;">        4.  写一个装饰器, 在 blog.log 文件中输出阅读文章的用户 IP, 及所读文章的 ID</span></span>
<span class="line"><span style="color:#A6ACCD;">        5.  基于日志的简单统计</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            - 计算出阅读次数最多的文章: \`awk &#39;{print $6}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            - 计算出每个访客读了多少篇文章: \`awk &#39;{print $5}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        6.  写一个中间件, 限制用户的访问频率最大为每秒 2 次，超过 2 次时，等待至合理时间再返回</span></span>
<span class="line"><span style="color:#A6ACCD;">        7.  给文章增加 Tag 功能:</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 每篇文章可以添加多个 Tag</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 每个 Tag 分类下有多篇文章</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 点击每个 Tag 直接跳转到此 tag 的文章列表</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 不要使用外键</span></span>
<span class="line"><span style="color:#A6ACCD;">        8.  实现权限管理功能</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 未登录用户只能查看文章</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 普通注册用户，可以发表评论</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 管理员，可以发表和删除文章、评论</span></span>
<span class="line"><span style="color:#A6ACCD;">        9.  [使用 Gunicorn 驱动 Django, 对比性能差异](http://docs.gunicorn.org/en/latest/install.html)</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 文件描述符</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 单台服务器最大连接数</span></span>
<span class="line"><span style="color:#A6ACCD;">            - TCP 连接上限</span></span>
<span class="line"><span style="color:#A6ACCD;">        10. Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            - 负载均衡: 轮询, 权重, IP 哈希</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                                   User Requests</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 |    |    |    |</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 V    V    V    V</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 www.example.com</span></span>
<span class="line"><span style="color:#A6ACCD;">                                     DNS 轮训</span></span>
<span class="line"><span style="color:#A6ACCD;">                                   /         \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                                  V           V</span></span>
<span class="line"><span style="color:#A6ACCD;">                              Nginx            Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">                           113.5.3.10        110.2.9.11         ---&gt; Nginx 绑定公网 IP</span></span>
<span class="line"><span style="color:#A6ACCD;">                           /        |        |       \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                          V         V        V        V</span></span>
<span class="line"><span style="color:#A6ACCD;">                    AppServer  AppServer  AppServer  AppServer  ---&gt; Gunicorn + Django</span></span>
<span class="line"><span style="color:#A6ACCD;">                    10.0.0.1   10.0.0.2   10.0.0.3   10.0.0.3   ---&gt; AppServer 绑定内网 IP</span></span>
<span class="line"><span style="color:#A6ACCD;">                    weight:2   weight:5   weight:10  weight:20  ---&gt; 权重</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            - 为什么用 Nginx, 不直接用 gunicorn</span></span>
<span class="line"><span style="color:#A6ACCD;">            - 代理网站、图片</span></span>
<span class="line"><span style="color:#A6ACCD;">            - Nginx 和 Apache 的区别</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        11. 压力测试</span></span>
<span class="line"><span style="color:#A6ACCD;">            - ab</span></span>
<span class="line"><span style="color:#A6ACCD;">            - webbench</span></span>
<span class="line"><span style="color:#A6ACCD;">        12. 其他: uWSGI, tornado</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">13. 项目</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码组织</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 常用组件</span></span>
<span class="line"><span style="color:#A6ACCD;">      - nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">      - [Redis](http://redisdoc.com/)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - MySQL</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 软件安装</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`apt-get\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`yum\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        - \`make\` / \`make install\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    - DB 集群</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 主从备份</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 一主两从</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 双主互备</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">14. 静态文件存储</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 线上系统 Django 会关掉自身的静态文件处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 用 Nginx 代理静态文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    - CDN (内容分发网络)</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 基于缓存技术为静态资源 (主要是多媒体资源) 提供访问加速的服务</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 在不同地区部署镜像服务器节点</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 定期与源站做内容同步</span></span></code></pre></div>`,2),o=[e];function c(C,A,t,r,i,y){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
