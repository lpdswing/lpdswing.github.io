import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.9f27c3de.js";const m=JSON.parse('{"title":"django进阶-笔记","description":"","frontmatter":{"title":"django进阶-笔记","date":"2017-05-03T18:16:44.000Z","tags":["python","django"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/Django_advanced.md","filePath":"technology/other/Django_advanced.md","lastUpdated":1684399297000}'),l={name:"technology/other/Django_advanced.md"},p=e(`<h1 id="django-进阶" tabindex="-1">Django 进阶 <a class="header-anchor" href="#django-进阶" aria-label="Permalink to &quot;Django 进阶&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.  [HTTP Objects](https://docs.djangoproject.com/en/2.0/ref/request-response/)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - HttpRequest</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 自身属性</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.path -&gt; \`/foo/bar/\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.method</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.GET</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.POST</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.COOKIES</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.FILES -&gt; \`{name1: file1, name2: file2, ...}\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.META[&#39;REMOTE_ADDR&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">        request.META[&#39;HTTP_USER_AGENT&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 中间件添加的属性</span></span>
<span class="line"><span style="color:#e1e4e8;">        - request.session</span></span>
<span class="line"><span style="color:#e1e4e8;">        - request.user</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        - request.get_full_path() -&gt; \`/foo/bar/?a=123\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - request.get_signed_cookie(key)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - HttpResponse</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 属性</span></span>
<span class="line"><span style="color:#e1e4e8;">        - response.status_code</span></span>
<span class="line"><span style="color:#e1e4e8;">        - response.content</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        - response.set_cookie(key, value, max_age=None)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - JsonHttpResponse</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`response = JsonHttpResponse({&#39;a&#39;: 12, &#39;b&#39;: &#39;xyz&#39;})\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2.  Django 中间件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 最简单的中间件</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`python</span></span>
<span class="line"><span style="color:#e1e4e8;">              def simple_middleware(get_response):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  # do_something_for_init()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                  def middleware(request):</span></span>
<span class="line"><span style="color:#e1e4e8;">                      # do_something_before_views()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                      response = get_response(request)  # views 函数在这里执行</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                      # do_something_after_views()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                      return response</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                  return middleware</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 中间件类</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`python</span></span>
<span class="line"><span style="color:#e1e4e8;">          class MyMiddleware:</span></span>
<span class="line"><span style="color:#e1e4e8;">              def __init__(self, get_response):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  self.get_response = get_response</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              def __call__(self, request):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  response = self.get_response(request)</span></span>
<span class="line"><span style="color:#e1e4e8;">                  return response</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  pass</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - Django-1.10 以前的中间件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`python</span></span>
<span class="line"><span style="color:#e1e4e8;">          from django.utils.deprecation import MiddlewareMixin</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          class MyMiddleware(MiddlewareMixin):</span></span>
<span class="line"><span style="color:#e1e4e8;">              def process_request(self, request):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  pass</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  pass</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              def process_response(self, request, response):</span></span>
<span class="line"><span style="color:#e1e4e8;">                  return response</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 执行顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">      - process_request, process_view 从上往下执行</span></span>
<span class="line"><span style="color:#e1e4e8;">      - process_response 从下往上执行</span></span>
<span class="line"><span style="color:#e1e4e8;">    - [内置中间件的排序](https://docs.djangoproject.com/en/2.0/ref/middleware/#middleware-ordering)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3.  Form 表单</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - form 的 method 只能是 POST 或 GET</span></span>
<span class="line"><span style="color:#e1e4e8;">    - method=GET 时, 表单提交的参数会出现在 URL 里</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 属性和方法</span></span>
<span class="line"><span style="color:#e1e4e8;">      - form.is_valid()</span></span>
<span class="line"><span style="color:#e1e4e8;">      - form.has_changed()</span></span>
<span class="line"><span style="color:#e1e4e8;">      - form.cleaned_data[&#39;fieldname&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">    - Form 的定义和使用</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`python</span></span>
<span class="line"><span style="color:#e1e4e8;">          from django.forms import Form</span></span>
<span class="line"><span style="color:#e1e4e8;">          from django.forms import IntegerField, CharField, DateField, ChoiceField</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          class TestForm(Form):</span></span>
<span class="line"><span style="color:#e1e4e8;">              TAGS = (</span></span>
<span class="line"><span style="color:#e1e4e8;">                  (&#39;py&#39;, &#39;python&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">                  (&#39;ln&#39;, &#39;linux&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">                  (&#39;dj&#39;, &#39;django&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">              )</span></span>
<span class="line"><span style="color:#e1e4e8;">              fid = IntegerField()</span></span>
<span class="line"><span style="color:#e1e4e8;">              name = CharField(max_length=10)</span></span>
<span class="line"><span style="color:#e1e4e8;">              tag = ChoiceField(choices=TAGS)</span></span>
<span class="line"><span style="color:#e1e4e8;">              date = DateField()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          data = {&#39;fid&#39;: 123, &#39;name&#39;: &#39;1234567890&#39;, &#39;tag&#39;: &#39;dj&#39;, &#39;date&#39;: &#39;2017-12-17&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">          form = TestForm(data)</span></span>
<span class="line"><span style="color:#e1e4e8;">          print(form.is_valid())</span></span>
<span class="line"><span style="color:#e1e4e8;">          print(form.cleaned_data)  # cleaned_data 属性是 is_valid 函数执行时动态添加的</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - ModelForm</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`python</span></span>
<span class="line"><span style="color:#e1e4e8;">          class UserForm(ModelForm):</span></span>
<span class="line"><span style="color:#e1e4e8;">              class Meta:</span></span>
<span class="line"><span style="color:#e1e4e8;">                  model = User</span></span>
<span class="line"><span style="color:#e1e4e8;">                  fields = [&#39;name&#39;, &#39;birth&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4.  模板</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - base.html 模板推荐布局</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`html</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          &lt;title&gt;{{title}}&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/static/css/style.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          {% block &quot;ext_css&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          &lt;!-- {% block &quot;navbar&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          {% block &quot;sidebar&quot; %}{% endblock %} {% block &quot;content&quot; %}{% endblock</span></span>
<span class="line"><span style="color:#e1e4e8;">          %}</span></span>
<span class="line"><span style="color:#e1e4e8;">          &lt;!-- {% block &quot;foot&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">          {% block &quot;ext_js&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;/html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - [内建 Tags](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#ref-templates-builtins-tags)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`autoescape\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              {% autoescape off %}</span></span>
<span class="line"><span style="color:#e1e4e8;">                  {{ body }}</span></span>
<span class="line"><span style="color:#e1e4e8;">              {% endautoescape %}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`csrf_token\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">              {% csrf_token %}</span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`for...endfor\` 中的变量</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.counter\` 从 1 开始计数</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.counter0\` 从 0 开始计数</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.revcounter\` 逆序计数到 1</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.revcounter0\` 逆序计数到 0</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.first\` 是否是循环中的第一个</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.last\` 是否是循环中的最后一个</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`forloop.parentloop\` 用于引用上级循环中的变量, 如 \`{{ forloop.parentloop.counter }}\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - empty 子句</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              {% for x in lst %}</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &lt;div&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">              {% empty %}</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &lt;div&gt;Sorry&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">              {% endfor %}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - load: 加载自定义 Tag {\`%\`load foo.bar \`%\`}</span></span>
<span class="line"><span style="color:#e1e4e8;">      - url: 根据 url name 替换 {\`%\` url &#39;your-url-name&#39; v1 v2 \`%\`}</span></span>
<span class="line"><span style="color:#e1e4e8;">      - static</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              {% load static %}</span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;img src=&quot;{% static &quot;img/smile.jpg&quot; %}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        或</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">              {% load static %}</span></span>
<span class="line"><span style="color:#e1e4e8;">              &lt;img src=&quot;{% get_static_prefix %}img/smile.jpg&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - [内建的 filter](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#built-in-filter-reference)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - safe 和 escape: \`{{ var|safe|escape }}\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - [使用 Jinja2 替换内置模板引擎](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">5.  ORM</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 什么是 ORM</span></span>
<span class="line"><span style="color:#e1e4e8;">    - CURD (Create/Update/Retrieve/Delete)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - [Field](https://docs.djangoproject.com/en/2.0/ref/models/fields/)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - Field 选项</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`null\` 针对数据库, 允许数据库该字段为 Null</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`blank\` 针对 Model 本身, 允许传入字段为空. blank 为 True 时, 对数据库来说, 该字段依然为必填项</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`default\` 尽量使用 default, 少用 null 和 blank</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`choices\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`primary_key\` 非必要时不要设置, 用默认 id, 保持条目自增、有序</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`unique\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`db_index\` (True | False)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`max_length\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`auto_now\` 每次 save 时，更新为当前时间</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`auto_now_add\` 只记录创建时的时间, 保存时不更新</span></span>
<span class="line"><span style="color:#e1e4e8;">    - [QuerySet](https://docs.djangoproject.com/en/2.0/ref/models/querysets/)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 创建: \`create() / get_or_create() / update_or_create() / bulk_create()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 条件过滤和排除: \`filter() / exclude()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 只加载需要的字段: \`only() / defer()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`order_by() / count() / exists()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`latest() / earliest()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`first() / last()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 查找条件</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`filter(id__in=[123, 555, 231])\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`filter(id__range=[123, 456])\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`filter(name__contains=&#39;123&#39;)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`filter(name__regex=&#39;^\\w+\\d+&#39;)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`gt / gte / lt / lte\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 其他 ORM</span></span>
<span class="line"><span style="color:#e1e4e8;">      - sqlalchemy</span></span>
<span class="line"><span style="color:#e1e4e8;">      - peewee</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 主键和外键约束</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 内部系统、传统企业级应用可以使用 (需要数据量可控，数据库服务器数量可控)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 互联网行业不建议使用</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 性能缺陷</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 不能用于分布式环境</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 不容易做到数据解耦</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">6.  Cache</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 默认缓存: \`from django.core.cache import cache\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - BACKEND: \`DatabaseCache / MemcachedCache / LocMemCache\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - LOCATION: IP:Port 绑定, 只有一个时配制成字符串链接, 有多台时配制为列表</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 使用 Redis 做缓存</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            CACHES = {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;default&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &quot;BACKEND&quot;: &quot;django_redis.cache.RedisCache&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &quot;LOCATION&quot;: &quot;redis://127.0.0.1:6379/1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &quot;OPTIONS&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &quot;CLIENT_CLASS&quot;: &quot;django_redis.client.DefaultClient&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &quot;PICKLE_VERSION&quot;: -1,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 基本方法</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.set(key, value, timeout=None)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.get(key, default=None)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.delete(key)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.incr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.decr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.get_or_set(key, default, timeout=None)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.set_many({&#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 3})\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`cache.get_many([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 全站缓存中间件: \`django.middleware.cache.UpdateCacheMiddleware\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 前置中间件</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 缓存期限: CACHE_MIDDLEWARE_SECONDS</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 页面缓存装饰器: \`from django.views.decorators.cache import cache_page\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 属性缓存装饰器: \`from django.utils.functional import cached_property\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - pickle</span></span>
<span class="line"><span style="color:#e1e4e8;">      - dumps</span></span>
<span class="line"><span style="color:#e1e4e8;">      - loads</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">7.  Cookie 和 Session</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - Cookie: \`response.set_cookie(key, value, max_age=None)\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - Session 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">      1. 开启 Session 中间件: \`django.contrib.sessions.middleware.SessionMiddleware\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      2. 配置缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">      3. 配置 Session 引擎: \`SESSION_ENGINE = &quot;django.contrib.sessions.backends.cache&quot;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 可选项</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`SESSION_COOKIE_AGE\` 缓存时间, 默认 2 周</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`SESSION_COOKIE_NAME\` Session 名, 默认 &#39;sessionid&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`SESSION_EXPIRE_AT_BROWSER_CLOSE\` 浏览器关闭页面时, Session 是否设为过期</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`SESSION_SAVE_EVERY_REQUEST\` 每次请求时, 是否强制保存一次 Session</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 用法</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`request.session.session_key\` 查看 session_id</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`request.session.modified\` session 是否发生过修改</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`request.session[&#39;uid&#39;] = 1234\` 当 session 发生更改时会自动保存</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`request.session.get(&#39;uid&#39;)\` 取值</span></span>
<span class="line"><span style="color:#e1e4e8;">      - \`request.session.save()\` 手动保存</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">8.  Logging</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 日志级别</span></span>
<span class="line"><span style="color:#e1e4e8;">      - DEBUG</span></span>
<span class="line"><span style="color:#e1e4e8;">      - INFO</span></span>
<span class="line"><span style="color:#e1e4e8;">      - WARNING</span></span>
<span class="line"><span style="color:#e1e4e8;">      - ERROR</span></span>
<span class="line"><span style="color:#e1e4e8;">      - FATAL</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 使用</span></span>
<span class="line"><span style="color:#e1e4e8;">      - logger.debug(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - logger.info(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - logger.warning(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - logger.error(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - logger.fatal(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 查找、分析</span></span>
<span class="line"><span style="color:#e1e4e8;">      - tail</span></span>
<span class="line"><span style="color:#e1e4e8;">      - head</span></span>
<span class="line"><span style="color:#e1e4e8;">      - less</span></span>
<span class="line"><span style="color:#e1e4e8;">      - awk</span></span>
<span class="line"><span style="color:#e1e4e8;">      - grep</span></span>
<span class="line"><span style="color:#e1e4e8;">    - [配置](https://docs.python.org/2/library/logging.html)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            LOGGING = {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &#39;version&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">                &#39;disable_existing_loggers&#39;: True,</span></span>
<span class="line"><span style="color:#e1e4e8;">                &#39;formatters&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;simple&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;format&#39;: &#39;%(asctime)s %(module)s.%(funcName)s: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;verbose&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;format&#39;: &#39;%(asctime)s %(levelname)s [%(process)d-%(threadName)s] &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                  &#39;%(module)s.%(funcName)s line %(lineno)d: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                &#39;handlers&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;filename&#39;: &#39;/data/web/gnt.out&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;when&#39;: &#39;W0&#39;,  # 每周一切割日志</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;formatter&#39;: &#39;simple&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;level&#39;: &#39;DEBUG&#39; if DEBUG else &#39;INFO&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;filename&#39;: &#39;/data/web/gnt.err&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;when&#39;: &#39;D&#39;,  # 每天切割日志</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;formatter&#39;: &#39;verbose&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;level&#39;: &#39;WARNING&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                &#39;loggers&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;handlers&#39;: [&#39;inf&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;handlers&#39;: [&#39;err&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">9.  Django 的性能</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - Django 自身优化</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 充分之用缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 惰性求值和迭代器</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 尽量使用 \`defer()\` 和 \`only()\` 查找</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 尽量使用 \`count()\` 和 \`exists()\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 模板中 \`{% block %}\` 性能优于 \`{% include %}\`</span></span>
<span class="line"><span style="color:#e1e4e8;">      - [开启模板缓存](https://docs.djangoproject.com/en/2.0/ref/templates/api/#django.template.loaders.cached.Loader)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - **不要使用外键！不要使用外键！不要使用外键！**</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 其他优化</span></span>
<span class="line"><span style="color:#e1e4e8;">      - I/O 密集型: 异步化</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 请求异步化</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 数据操作异步化</span></span>
<span class="line"><span style="color:#e1e4e8;">        - gevent, asyncio, aiopg, aiohttp, tornado</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 计算密集型</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 耗时操作用 [Celery](http://docs.jinkan.org/docs/celery/) 等工具异步完成</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 分库分表</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 取余、哈希</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 范围</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 一致性哈希</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 索引优化</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 慢查询优化 ([相关工具: DjangoDebugToolbar](https://django-debug-toolbar.readthedocs.io))</span></span>
<span class="line"><span style="color:#e1e4e8;">      - Gunicorn 开启多进程模式利用多核</span></span>
<span class="line"><span style="color:#e1e4e8;">      - PyPy</span></span>
<span class="line"><span style="color:#e1e4e8;">      - Cython</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">10. Python / Django 环境加载</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - sys.argv</span></span>
<span class="line"><span style="color:#e1e4e8;">    - sys.path</span></span>
<span class="line"><span style="color:#e1e4e8;">    - os.environ</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">11. Git</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 常用操作</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git init</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git clone</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git add</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git commit -m &#39;xxxxxxxx&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git push</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git pull</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git fetch</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git log</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git checkout</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">      - git merge</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 代码管理</span></span>
<span class="line"><span style="color:#e1e4e8;">      - code review</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 发现代码逻辑问题</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 代码风格及规范化问题</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 算法问题</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 错误的使用方式</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 能够学习其他人的优秀代码</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 分支: master / dev / feature</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">12. Blog</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    1.  基础功能</span></span>
<span class="line"><span style="color:#e1e4e8;">        1. 看文章</span></span>
<span class="line"><span style="color:#e1e4e8;">        2. 写文章</span></span>
<span class="line"><span style="color:#e1e4e8;">        3. 查看文章列表</span></span>
<span class="line"><span style="color:#e1e4e8;">        4. 根据正文搜索文章</span></span>
<span class="line"><span style="color:#e1e4e8;">        5. 可以评论</span></span>
<span class="line"><span style="color:#e1e4e8;">    2.  扩展功能 0. 实现分页功能: 首页文章列表每页显示 5 篇文章</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        1.  实现一个基于 redis 的文章缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">        2.  给首页增加一个模块, 显示最受欢迎的 10 篇文章 (点击率最高的)</span></span>
<span class="line"><span style="color:#e1e4e8;">        3.  创建用户模块</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 实现注册、登录功能</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 添加用户个人信息展示</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 开发头像上传功能</span></span>
<span class="line"><span style="color:#e1e4e8;">        4.  写一个装饰器, 在 blog.log 文件中输出阅读文章的用户 IP, 及所读文章的 ID</span></span>
<span class="line"><span style="color:#e1e4e8;">        5.  基于日志的简单统计</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            - 计算出阅读次数最多的文章: \`awk &#39;{print $6}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            - 计算出每个访客读了多少篇文章: \`awk &#39;{print $5}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        6.  写一个中间件, 限制用户的访问频率最大为每秒 2 次，超过 2 次时，等待至合理时间再返回</span></span>
<span class="line"><span style="color:#e1e4e8;">        7.  给文章增加 Tag 功能:</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 每篇文章可以添加多个 Tag</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 每个 Tag 分类下有多篇文章</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 点击每个 Tag 直接跳转到此 tag 的文章列表</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 不要使用外键</span></span>
<span class="line"><span style="color:#e1e4e8;">        8.  实现权限管理功能</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 未登录用户只能查看文章</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 普通注册用户，可以发表评论</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 管理员，可以发表和删除文章、评论</span></span>
<span class="line"><span style="color:#e1e4e8;">        9.  [使用 Gunicorn 驱动 Django, 对比性能差异](http://docs.gunicorn.org/en/latest/install.html)</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 文件描述符</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 单台服务器最大连接数</span></span>
<span class="line"><span style="color:#e1e4e8;">            - TCP 连接上限</span></span>
<span class="line"><span style="color:#e1e4e8;">        10. Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            - 负载均衡: 轮询, 权重, IP 哈希</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                                   User Requests</span></span>
<span class="line"><span style="color:#e1e4e8;">                                 |    |    |    |</span></span>
<span class="line"><span style="color:#e1e4e8;">                                 V    V    V    V</span></span>
<span class="line"><span style="color:#e1e4e8;">                                 www.example.com</span></span>
<span class="line"><span style="color:#e1e4e8;">                                     DNS 轮训</span></span>
<span class="line"><span style="color:#e1e4e8;">                                   /         \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                                  V           V</span></span>
<span class="line"><span style="color:#e1e4e8;">                              Nginx            Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">                           113.5.3.10        110.2.9.11         ---&gt; Nginx 绑定公网 IP</span></span>
<span class="line"><span style="color:#e1e4e8;">                           /        |        |       \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                          V         V        V        V</span></span>
<span class="line"><span style="color:#e1e4e8;">                    AppServer  AppServer  AppServer  AppServer  ---&gt; Gunicorn + Django</span></span>
<span class="line"><span style="color:#e1e4e8;">                    10.0.0.1   10.0.0.2   10.0.0.3   10.0.0.3   ---&gt; AppServer 绑定内网 IP</span></span>
<span class="line"><span style="color:#e1e4e8;">                    weight:2   weight:5   weight:10  weight:20  ---&gt; 权重</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            - 为什么用 Nginx, 不直接用 gunicorn</span></span>
<span class="line"><span style="color:#e1e4e8;">            - 代理网站、图片</span></span>
<span class="line"><span style="color:#e1e4e8;">            - Nginx 和 Apache 的区别</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        11. 压力测试</span></span>
<span class="line"><span style="color:#e1e4e8;">            - ab</span></span>
<span class="line"><span style="color:#e1e4e8;">            - webbench</span></span>
<span class="line"><span style="color:#e1e4e8;">        12. 其他: uWSGI, tornado</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">13. 项目</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - 代码组织</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 常用组件</span></span>
<span class="line"><span style="color:#e1e4e8;">      - nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">      - [Redis](http://redisdoc.com/)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - MySQL</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 软件安装</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`apt-get\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`yum\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        - \`make\` / \`make install\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    - DB 集群</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 主从备份</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 一主两从</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 双主互备</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">14. 静态文件存储</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 线上系统 Django 会关掉自身的静态文件处理</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 用 Nginx 代理静态文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    - CDN (内容分发网络)</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 基于缓存技术为静态资源 (主要是多媒体资源) 提供访问加速的服务</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 在不同地区部署镜像服务器节点</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 定期与源站做内容同步</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.  [HTTP Objects](https://docs.djangoproject.com/en/2.0/ref/request-response/)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - HttpRequest</span></span>
<span class="line"><span style="color:#24292e;">      - 自身属性</span></span>
<span class="line"><span style="color:#24292e;">        request.path -&gt; \`/foo/bar/\`</span></span>
<span class="line"><span style="color:#24292e;">        request.method</span></span>
<span class="line"><span style="color:#24292e;">        request.GET</span></span>
<span class="line"><span style="color:#24292e;">        request.POST</span></span>
<span class="line"><span style="color:#24292e;">        request.COOKIES</span></span>
<span class="line"><span style="color:#24292e;">        request.FILES -&gt; \`{name1: file1, name2: file2, ...}\`</span></span>
<span class="line"><span style="color:#24292e;">        request.META[&#39;REMOTE_ADDR&#39;]</span></span>
<span class="line"><span style="color:#24292e;">        request.META[&#39;HTTP_USER_AGENT&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      - 中间件添加的属性</span></span>
<span class="line"><span style="color:#24292e;">        - request.session</span></span>
<span class="line"><span style="color:#24292e;">        - request.user</span></span>
<span class="line"><span style="color:#24292e;">      - 方法</span></span>
<span class="line"><span style="color:#24292e;">        - request.get_full_path() -&gt; \`/foo/bar/?a=123\`</span></span>
<span class="line"><span style="color:#24292e;">        - request.get_signed_cookie(key)</span></span>
<span class="line"><span style="color:#24292e;">    - HttpResponse</span></span>
<span class="line"><span style="color:#24292e;">      - 属性</span></span>
<span class="line"><span style="color:#24292e;">        - response.status_code</span></span>
<span class="line"><span style="color:#24292e;">        - response.content</span></span>
<span class="line"><span style="color:#24292e;">      - 方法</span></span>
<span class="line"><span style="color:#24292e;">        - response.set_cookie(key, value, max_age=None)</span></span>
<span class="line"><span style="color:#24292e;">    - JsonHttpResponse</span></span>
<span class="line"><span style="color:#24292e;">      - \`response = JsonHttpResponse({&#39;a&#39;: 12, &#39;b&#39;: &#39;xyz&#39;})\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2.  Django 中间件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 最简单的中间件</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`python</span></span>
<span class="line"><span style="color:#24292e;">              def simple_middleware(get_response):</span></span>
<span class="line"><span style="color:#24292e;">                  # do_something_for_init()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                  def middleware(request):</span></span>
<span class="line"><span style="color:#24292e;">                      # do_something_before_views()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                      response = get_response(request)  # views 函数在这里执行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                      # do_something_after_views()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                      return response</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                  return middleware</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;">    - 中间件类</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`python</span></span>
<span class="line"><span style="color:#24292e;">          class MyMiddleware:</span></span>
<span class="line"><span style="color:#24292e;">              def __init__(self, get_response):</span></span>
<span class="line"><span style="color:#24292e;">                  self.get_response = get_response</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              def __call__(self, request):</span></span>
<span class="line"><span style="color:#24292e;">                  response = self.get_response(request)</span></span>
<span class="line"><span style="color:#24292e;">                  return response</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#24292e;">                  pass</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - Django-1.10 以前的中间件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`python</span></span>
<span class="line"><span style="color:#24292e;">          from django.utils.deprecation import MiddlewareMixin</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">          class MyMiddleware(MiddlewareMixin):</span></span>
<span class="line"><span style="color:#24292e;">              def process_request(self, request):</span></span>
<span class="line"><span style="color:#24292e;">                  pass</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              def process_view(self, request, view_func, view_args, view_kwargs):</span></span>
<span class="line"><span style="color:#24292e;">                  pass</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              def process_response(self, request, response):</span></span>
<span class="line"><span style="color:#24292e;">                  return response</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 执行顺序</span></span>
<span class="line"><span style="color:#24292e;">      - process_request, process_view 从上往下执行</span></span>
<span class="line"><span style="color:#24292e;">      - process_response 从下往上执行</span></span>
<span class="line"><span style="color:#24292e;">    - [内置中间件的排序](https://docs.djangoproject.com/en/2.0/ref/middleware/#middleware-ordering)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3.  Form 表单</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - form 的 method 只能是 POST 或 GET</span></span>
<span class="line"><span style="color:#24292e;">    - method=GET 时, 表单提交的参数会出现在 URL 里</span></span>
<span class="line"><span style="color:#24292e;">    - 属性和方法</span></span>
<span class="line"><span style="color:#24292e;">      - form.is_valid()</span></span>
<span class="line"><span style="color:#24292e;">      - form.has_changed()</span></span>
<span class="line"><span style="color:#24292e;">      - form.cleaned_data[&#39;fieldname&#39;]</span></span>
<span class="line"><span style="color:#24292e;">    - Form 的定义和使用</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`python</span></span>
<span class="line"><span style="color:#24292e;">          from django.forms import Form</span></span>
<span class="line"><span style="color:#24292e;">          from django.forms import IntegerField, CharField, DateField, ChoiceField</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">          class TestForm(Form):</span></span>
<span class="line"><span style="color:#24292e;">              TAGS = (</span></span>
<span class="line"><span style="color:#24292e;">                  (&#39;py&#39;, &#39;python&#39;),</span></span>
<span class="line"><span style="color:#24292e;">                  (&#39;ln&#39;, &#39;linux&#39;),</span></span>
<span class="line"><span style="color:#24292e;">                  (&#39;dj&#39;, &#39;django&#39;),</span></span>
<span class="line"><span style="color:#24292e;">              )</span></span>
<span class="line"><span style="color:#24292e;">              fid = IntegerField()</span></span>
<span class="line"><span style="color:#24292e;">              name = CharField(max_length=10)</span></span>
<span class="line"><span style="color:#24292e;">              tag = ChoiceField(choices=TAGS)</span></span>
<span class="line"><span style="color:#24292e;">              date = DateField()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">          data = {&#39;fid&#39;: 123, &#39;name&#39;: &#39;1234567890&#39;, &#39;tag&#39;: &#39;dj&#39;, &#39;date&#39;: &#39;2017-12-17&#39;}</span></span>
<span class="line"><span style="color:#24292e;">          form = TestForm(data)</span></span>
<span class="line"><span style="color:#24292e;">          print(form.is_valid())</span></span>
<span class="line"><span style="color:#24292e;">          print(form.cleaned_data)  # cleaned_data 属性是 is_valid 函数执行时动态添加的</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - ModelForm</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`python</span></span>
<span class="line"><span style="color:#24292e;">          class UserForm(ModelForm):</span></span>
<span class="line"><span style="color:#24292e;">              class Meta:</span></span>
<span class="line"><span style="color:#24292e;">                  model = User</span></span>
<span class="line"><span style="color:#24292e;">                  fields = [&#39;name&#39;, &#39;birth&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4.  模板</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - base.html 模板推荐布局</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`html</span></span>
<span class="line"><span style="color:#24292e;">      &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;title&gt;{{title}}&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/static/css/style.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">          {% block &quot;ext_css&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;!-- {% block &quot;navbar&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#24292e;">          {% block &quot;sidebar&quot; %}{% endblock %} {% block &quot;content&quot; %}{% endblock</span></span>
<span class="line"><span style="color:#24292e;">          %}</span></span>
<span class="line"><span style="color:#24292e;">          &lt;!-- {% block &quot;foot&quot; %}{% endblock %} --&gt;</span></span>
<span class="line"><span style="color:#24292e;">          {% block &quot;ext_js&quot; %}{% endblock %}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;/html&gt;</span></span>
<span class="line"><span style="color:#24292e;">      \`\`\`</span></span>
<span class="line"><span style="color:#24292e;">    - [内建 Tags](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#ref-templates-builtins-tags)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - \`autoescape\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              {% autoescape off %}</span></span>
<span class="line"><span style="color:#24292e;">                  {{ body }}</span></span>
<span class="line"><span style="color:#24292e;">              {% endautoescape %}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - \`csrf_token\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              &lt;form&gt;</span></span>
<span class="line"><span style="color:#24292e;">              {% csrf_token %}</span></span>
<span class="line"><span style="color:#24292e;">              &lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - \`for...endfor\` 中的变量</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.counter\` 从 1 开始计数</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.counter0\` 从 0 开始计数</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.revcounter\` 逆序计数到 1</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.revcounter0\` 逆序计数到 0</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.first\` 是否是循环中的第一个</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.last\` 是否是循环中的最后一个</span></span>
<span class="line"><span style="color:#24292e;">        - \`forloop.parentloop\` 用于引用上级循环中的变量, 如 \`{{ forloop.parentloop.counter }}\`</span></span>
<span class="line"><span style="color:#24292e;">      - empty 子句</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              {% for x in lst %}</span></span>
<span class="line"><span style="color:#24292e;">                  &lt;div&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">              {% empty %}</span></span>
<span class="line"><span style="color:#24292e;">                  &lt;div&gt;Sorry&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">              {% endfor %}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - load: 加载自定义 Tag {\`%\`load foo.bar \`%\`}</span></span>
<span class="line"><span style="color:#24292e;">      - url: 根据 url name 替换 {\`%\` url &#39;your-url-name&#39; v1 v2 \`%\`}</span></span>
<span class="line"><span style="color:#24292e;">      - static</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              {% load static %}</span></span>
<span class="line"><span style="color:#24292e;">              &lt;img src=&quot;{% static &quot;img/smile.jpg&quot; %}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        或</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">              {% load static %}</span></span>
<span class="line"><span style="color:#24292e;">              &lt;img src=&quot;{% get_static_prefix %}img/smile.jpg&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - [内建的 filter](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#built-in-filter-reference)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - safe 和 escape: \`{{ var|safe|escape }}\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - [使用 Jinja2 替换内置模板引擎](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">5.  ORM</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 什么是 ORM</span></span>
<span class="line"><span style="color:#24292e;">    - CURD (Create/Update/Retrieve/Delete)</span></span>
<span class="line"><span style="color:#24292e;">    - [Field](https://docs.djangoproject.com/en/2.0/ref/models/fields/)</span></span>
<span class="line"><span style="color:#24292e;">    - Field 选项</span></span>
<span class="line"><span style="color:#24292e;">      - \`null\` 针对数据库, 允许数据库该字段为 Null</span></span>
<span class="line"><span style="color:#24292e;">      - \`blank\` 针对 Model 本身, 允许传入字段为空. blank 为 True 时, 对数据库来说, 该字段依然为必填项</span></span>
<span class="line"><span style="color:#24292e;">      - \`default\` 尽量使用 default, 少用 null 和 blank</span></span>
<span class="line"><span style="color:#24292e;">      - \`choices\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`primary_key\` 非必要时不要设置, 用默认 id, 保持条目自增、有序</span></span>
<span class="line"><span style="color:#24292e;">      - \`unique\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`db_index\` (True | False)</span></span>
<span class="line"><span style="color:#24292e;">      - \`max_length\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`auto_now\` 每次 save 时，更新为当前时间</span></span>
<span class="line"><span style="color:#24292e;">      - \`auto_now_add\` 只记录创建时的时间, 保存时不更新</span></span>
<span class="line"><span style="color:#24292e;">    - [QuerySet](https://docs.djangoproject.com/en/2.0/ref/models/querysets/)</span></span>
<span class="line"><span style="color:#24292e;">      - 方法</span></span>
<span class="line"><span style="color:#24292e;">        - 创建: \`create() / get_or_create() / update_or_create() / bulk_create()\`</span></span>
<span class="line"><span style="color:#24292e;">        - 条件过滤和排除: \`filter() / exclude()\`</span></span>
<span class="line"><span style="color:#24292e;">        - 只加载需要的字段: \`only() / defer()\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`order_by() / count() / exists()\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`latest() / earliest()\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`first() / last()\`</span></span>
<span class="line"><span style="color:#24292e;">      - 查找条件</span></span>
<span class="line"><span style="color:#24292e;">        - \`filter(id__in=[123, 555, 231])\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`filter(id__range=[123, 456])\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`filter(name__contains=&#39;123&#39;)\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`filter(name__regex=&#39;^\\w+\\d+&#39;)\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`gt / gte / lt / lte\`</span></span>
<span class="line"><span style="color:#24292e;">    - 其他 ORM</span></span>
<span class="line"><span style="color:#24292e;">      - sqlalchemy</span></span>
<span class="line"><span style="color:#24292e;">      - peewee</span></span>
<span class="line"><span style="color:#24292e;">    - 主键和外键约束</span></span>
<span class="line"><span style="color:#24292e;">      - 内部系统、传统企业级应用可以使用 (需要数据量可控，数据库服务器数量可控)</span></span>
<span class="line"><span style="color:#24292e;">      - 互联网行业不建议使用</span></span>
<span class="line"><span style="color:#24292e;">        - 性能缺陷</span></span>
<span class="line"><span style="color:#24292e;">        - 不能用于分布式环境</span></span>
<span class="line"><span style="color:#24292e;">        - 不容易做到数据解耦</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">6.  Cache</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 默认缓存: \`from django.core.cache import cache\`</span></span>
<span class="line"><span style="color:#24292e;">    - BACKEND: \`DatabaseCache / MemcachedCache / LocMemCache\`</span></span>
<span class="line"><span style="color:#24292e;">    - LOCATION: IP:Port 绑定, 只有一个时配制成字符串链接, 有多台时配制为列表</span></span>
<span class="line"><span style="color:#24292e;">    - 使用 Redis 做缓存</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            CACHES = {</span></span>
<span class="line"><span style="color:#24292e;">                &quot;default&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                    &quot;BACKEND&quot;: &quot;django_redis.cache.RedisCache&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    &quot;LOCATION&quot;: &quot;redis://127.0.0.1:6379/1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    &quot;OPTIONS&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &quot;CLIENT_CLASS&quot;: &quot;django_redis.client.DefaultClient&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                        &quot;PICKLE_VERSION&quot;: -1,</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 基本方法</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.set(key, value, timeout=None)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.get(key, default=None)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.delete(key)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.incr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.decr(&#39;num&#39;)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.get_or_set(key, default, timeout=None)\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.set_many({&#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 3})\`</span></span>
<span class="line"><span style="color:#24292e;">      - \`cache.get_many([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])\`</span></span>
<span class="line"><span style="color:#24292e;">    - 全站缓存中间件: \`django.middleware.cache.UpdateCacheMiddleware\`</span></span>
<span class="line"><span style="color:#24292e;">      - 前置中间件</span></span>
<span class="line"><span style="color:#24292e;">      - 缓存期限: CACHE_MIDDLEWARE_SECONDS</span></span>
<span class="line"><span style="color:#24292e;">    - 页面缓存装饰器: \`from django.views.decorators.cache import cache_page\`</span></span>
<span class="line"><span style="color:#24292e;">    - 属性缓存装饰器: \`from django.utils.functional import cached_property\`</span></span>
<span class="line"><span style="color:#24292e;">    - pickle</span></span>
<span class="line"><span style="color:#24292e;">      - dumps</span></span>
<span class="line"><span style="color:#24292e;">      - loads</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">7.  Cookie 和 Session</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - Cookie: \`response.set_cookie(key, value, max_age=None)\`</span></span>
<span class="line"><span style="color:#24292e;">    - Session 配置</span></span>
<span class="line"><span style="color:#24292e;">      1. 开启 Session 中间件: \`django.contrib.sessions.middleware.SessionMiddleware\`</span></span>
<span class="line"><span style="color:#24292e;">      2. 配置缓存</span></span>
<span class="line"><span style="color:#24292e;">      3. 配置 Session 引擎: \`SESSION_ENGINE = &quot;django.contrib.sessions.backends.cache&quot;\`</span></span>
<span class="line"><span style="color:#24292e;">    - 可选项</span></span>
<span class="line"><span style="color:#24292e;">      - \`SESSION_COOKIE_AGE\` 缓存时间, 默认 2 周</span></span>
<span class="line"><span style="color:#24292e;">      - \`SESSION_COOKIE_NAME\` Session 名, 默认 &#39;sessionid&#39;</span></span>
<span class="line"><span style="color:#24292e;">      - \`SESSION_EXPIRE_AT_BROWSER_CLOSE\` 浏览器关闭页面时, Session 是否设为过期</span></span>
<span class="line"><span style="color:#24292e;">      - \`SESSION_SAVE_EVERY_REQUEST\` 每次请求时, 是否强制保存一次 Session</span></span>
<span class="line"><span style="color:#24292e;">    - 用法</span></span>
<span class="line"><span style="color:#24292e;">      - \`request.session.session_key\` 查看 session_id</span></span>
<span class="line"><span style="color:#24292e;">      - \`request.session.modified\` session 是否发生过修改</span></span>
<span class="line"><span style="color:#24292e;">      - \`request.session[&#39;uid&#39;] = 1234\` 当 session 发生更改时会自动保存</span></span>
<span class="line"><span style="color:#24292e;">      - \`request.session.get(&#39;uid&#39;)\` 取值</span></span>
<span class="line"><span style="color:#24292e;">      - \`request.session.save()\` 手动保存</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">8.  Logging</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 日志级别</span></span>
<span class="line"><span style="color:#24292e;">      - DEBUG</span></span>
<span class="line"><span style="color:#24292e;">      - INFO</span></span>
<span class="line"><span style="color:#24292e;">      - WARNING</span></span>
<span class="line"><span style="color:#24292e;">      - ERROR</span></span>
<span class="line"><span style="color:#24292e;">      - FATAL</span></span>
<span class="line"><span style="color:#24292e;">    - 使用</span></span>
<span class="line"><span style="color:#24292e;">      - logger.debug(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      - logger.info(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      - logger.warning(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      - logger.error(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      - logger.fatal(&#39;xxxxxxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    - 查找、分析</span></span>
<span class="line"><span style="color:#24292e;">      - tail</span></span>
<span class="line"><span style="color:#24292e;">      - head</span></span>
<span class="line"><span style="color:#24292e;">      - less</span></span>
<span class="line"><span style="color:#24292e;">      - awk</span></span>
<span class="line"><span style="color:#24292e;">      - grep</span></span>
<span class="line"><span style="color:#24292e;">    - [配置](https://docs.python.org/2/library/logging.html)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            LOGGING = {</span></span>
<span class="line"><span style="color:#24292e;">                &#39;version&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">                &#39;disable_existing_loggers&#39;: True,</span></span>
<span class="line"><span style="color:#24292e;">                &#39;formatters&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;simple&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;format&#39;: &#39;%(asctime)s %(module)s.%(funcName)s: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    },</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;verbose&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;format&#39;: &#39;%(asctime)s %(levelname)s [%(process)d-%(threadName)s] &#39;</span></span>
<span class="line"><span style="color:#24292e;">                                  &#39;%(module)s.%(funcName)s line %(lineno)d: %(message)s&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                &#39;handlers&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;filename&#39;: &#39;/data/web/gnt.out&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;when&#39;: &#39;W0&#39;,  # 每周一切割日志</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;formatter&#39;: &#39;simple&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;level&#39;: &#39;DEBUG&#39; if DEBUG else &#39;INFO&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    },</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;filename&#39;: &#39;/data/web/gnt.err&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;when&#39;: &#39;D&#39;,  # 每天切割日志</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;backupCount&#39;: 5,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;formatter&#39;: &#39;verbose&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;level&#39;: &#39;WARNING&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                &#39;loggers&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;inf&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;handlers&#39;: [&#39;inf&#39;],</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#24292e;">                    },</span></span>
<span class="line"><span style="color:#24292e;">                    &#39;err&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;handlers&#39;: [&#39;err&#39;],</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;level&#39;: &#39;DEBUG&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        &#39;propagate&#39;: True,</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">9.  Django 的性能</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - Django 自身优化</span></span>
<span class="line"><span style="color:#24292e;">      - 充分之用缓存</span></span>
<span class="line"><span style="color:#24292e;">      - 惰性求值和迭代器</span></span>
<span class="line"><span style="color:#24292e;">      - 尽量使用 \`defer()\` 和 \`only()\` 查找</span></span>
<span class="line"><span style="color:#24292e;">      - 尽量使用 \`count()\` 和 \`exists()\`</span></span>
<span class="line"><span style="color:#24292e;">      - 模板中 \`{% block %}\` 性能优于 \`{% include %}\`</span></span>
<span class="line"><span style="color:#24292e;">      - [开启模板缓存](https://docs.djangoproject.com/en/2.0/ref/templates/api/#django.template.loaders.cached.Loader)</span></span>
<span class="line"><span style="color:#24292e;">      - **不要使用外键！不要使用外键！不要使用外键！**</span></span>
<span class="line"><span style="color:#24292e;">    - 其他优化</span></span>
<span class="line"><span style="color:#24292e;">      - I/O 密集型: 异步化</span></span>
<span class="line"><span style="color:#24292e;">        - 请求异步化</span></span>
<span class="line"><span style="color:#24292e;">        - 数据操作异步化</span></span>
<span class="line"><span style="color:#24292e;">        - gevent, asyncio, aiopg, aiohttp, tornado</span></span>
<span class="line"><span style="color:#24292e;">      - 计算密集型</span></span>
<span class="line"><span style="color:#24292e;">        - 耗时操作用 [Celery](http://docs.jinkan.org/docs/celery/) 等工具异步完成</span></span>
<span class="line"><span style="color:#24292e;">      - 分库分表</span></span>
<span class="line"><span style="color:#24292e;">        - 取余、哈希</span></span>
<span class="line"><span style="color:#24292e;">        - 范围</span></span>
<span class="line"><span style="color:#24292e;">        - 一致性哈希</span></span>
<span class="line"><span style="color:#24292e;">      - 索引优化</span></span>
<span class="line"><span style="color:#24292e;">      - 慢查询优化 ([相关工具: DjangoDebugToolbar](https://django-debug-toolbar.readthedocs.io))</span></span>
<span class="line"><span style="color:#24292e;">      - Gunicorn 开启多进程模式利用多核</span></span>
<span class="line"><span style="color:#24292e;">      - PyPy</span></span>
<span class="line"><span style="color:#24292e;">      - Cython</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">10. Python / Django 环境加载</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - sys.argv</span></span>
<span class="line"><span style="color:#24292e;">    - sys.path</span></span>
<span class="line"><span style="color:#24292e;">    - os.environ</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">11. Git</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 常用操作</span></span>
<span class="line"><span style="color:#24292e;">      - git init</span></span>
<span class="line"><span style="color:#24292e;">      - git clone</span></span>
<span class="line"><span style="color:#24292e;">      - git add</span></span>
<span class="line"><span style="color:#24292e;">      - git commit -m &#39;xxxxxxxx&#39;</span></span>
<span class="line"><span style="color:#24292e;">      - git push</span></span>
<span class="line"><span style="color:#24292e;">      - git pull</span></span>
<span class="line"><span style="color:#24292e;">      - git fetch</span></span>
<span class="line"><span style="color:#24292e;">      - git log</span></span>
<span class="line"><span style="color:#24292e;">      - git checkout</span></span>
<span class="line"><span style="color:#24292e;">      - git branch</span></span>
<span class="line"><span style="color:#24292e;">      - git merge</span></span>
<span class="line"><span style="color:#24292e;">    - 代码管理</span></span>
<span class="line"><span style="color:#24292e;">      - code review</span></span>
<span class="line"><span style="color:#24292e;">        - 发现代码逻辑问题</span></span>
<span class="line"><span style="color:#24292e;">        - 代码风格及规范化问题</span></span>
<span class="line"><span style="color:#24292e;">        - 算法问题</span></span>
<span class="line"><span style="color:#24292e;">        - 错误的使用方式</span></span>
<span class="line"><span style="color:#24292e;">        - 能够学习其他人的优秀代码</span></span>
<span class="line"><span style="color:#24292e;">      - 分支: master / dev / feature</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">12. Blog</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    1.  基础功能</span></span>
<span class="line"><span style="color:#24292e;">        1. 看文章</span></span>
<span class="line"><span style="color:#24292e;">        2. 写文章</span></span>
<span class="line"><span style="color:#24292e;">        3. 查看文章列表</span></span>
<span class="line"><span style="color:#24292e;">        4. 根据正文搜索文章</span></span>
<span class="line"><span style="color:#24292e;">        5. 可以评论</span></span>
<span class="line"><span style="color:#24292e;">    2.  扩展功能 0. 实现分页功能: 首页文章列表每页显示 5 篇文章</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        1.  实现一个基于 redis 的文章缓存</span></span>
<span class="line"><span style="color:#24292e;">        2.  给首页增加一个模块, 显示最受欢迎的 10 篇文章 (点击率最高的)</span></span>
<span class="line"><span style="color:#24292e;">        3.  创建用户模块</span></span>
<span class="line"><span style="color:#24292e;">            - 实现注册、登录功能</span></span>
<span class="line"><span style="color:#24292e;">            - 添加用户个人信息展示</span></span>
<span class="line"><span style="color:#24292e;">            - 开发头像上传功能</span></span>
<span class="line"><span style="color:#24292e;">        4.  写一个装饰器, 在 blog.log 文件中输出阅读文章的用户 IP, 及所读文章的 ID</span></span>
<span class="line"><span style="color:#24292e;">        5.  基于日志的简单统计</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            - 计算出阅读次数最多的文章: \`awk &#39;{print $6}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            - 计算出每个访客读了多少篇文章: \`awk &#39;{print $5}&#39; blog6.log | sort | uniq -c | sort -r\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        6.  写一个中间件, 限制用户的访问频率最大为每秒 2 次，超过 2 次时，等待至合理时间再返回</span></span>
<span class="line"><span style="color:#24292e;">        7.  给文章增加 Tag 功能:</span></span>
<span class="line"><span style="color:#24292e;">            - 每篇文章可以添加多个 Tag</span></span>
<span class="line"><span style="color:#24292e;">            - 每个 Tag 分类下有多篇文章</span></span>
<span class="line"><span style="color:#24292e;">            - 点击每个 Tag 直接跳转到此 tag 的文章列表</span></span>
<span class="line"><span style="color:#24292e;">            - 不要使用外键</span></span>
<span class="line"><span style="color:#24292e;">        8.  实现权限管理功能</span></span>
<span class="line"><span style="color:#24292e;">            - 未登录用户只能查看文章</span></span>
<span class="line"><span style="color:#24292e;">            - 普通注册用户，可以发表评论</span></span>
<span class="line"><span style="color:#24292e;">            - 管理员，可以发表和删除文章、评论</span></span>
<span class="line"><span style="color:#24292e;">        9.  [使用 Gunicorn 驱动 Django, 对比性能差异](http://docs.gunicorn.org/en/latest/install.html)</span></span>
<span class="line"><span style="color:#24292e;">            - 文件描述符</span></span>
<span class="line"><span style="color:#24292e;">            - 单台服务器最大连接数</span></span>
<span class="line"><span style="color:#24292e;">            - TCP 连接上限</span></span>
<span class="line"><span style="color:#24292e;">        10. Nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            - 负载均衡: 轮询, 权重, IP 哈希</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                                   User Requests</span></span>
<span class="line"><span style="color:#24292e;">                                 |    |    |    |</span></span>
<span class="line"><span style="color:#24292e;">                                 V    V    V    V</span></span>
<span class="line"><span style="color:#24292e;">                                 www.example.com</span></span>
<span class="line"><span style="color:#24292e;">                                     DNS 轮训</span></span>
<span class="line"><span style="color:#24292e;">                                   /         \\</span></span>
<span class="line"><span style="color:#24292e;">                                  V           V</span></span>
<span class="line"><span style="color:#24292e;">                              Nginx            Nginx</span></span>
<span class="line"><span style="color:#24292e;">                           113.5.3.10        110.2.9.11         ---&gt; Nginx 绑定公网 IP</span></span>
<span class="line"><span style="color:#24292e;">                           /        |        |       \\</span></span>
<span class="line"><span style="color:#24292e;">                          V         V        V        V</span></span>
<span class="line"><span style="color:#24292e;">                    AppServer  AppServer  AppServer  AppServer  ---&gt; Gunicorn + Django</span></span>
<span class="line"><span style="color:#24292e;">                    10.0.0.1   10.0.0.2   10.0.0.3   10.0.0.3   ---&gt; AppServer 绑定内网 IP</span></span>
<span class="line"><span style="color:#24292e;">                    weight:2   weight:5   weight:10  weight:20  ---&gt; 权重</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            - 为什么用 Nginx, 不直接用 gunicorn</span></span>
<span class="line"><span style="color:#24292e;">            - 代理网站、图片</span></span>
<span class="line"><span style="color:#24292e;">            - Nginx 和 Apache 的区别</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        11. 压力测试</span></span>
<span class="line"><span style="color:#24292e;">            - ab</span></span>
<span class="line"><span style="color:#24292e;">            - webbench</span></span>
<span class="line"><span style="color:#24292e;">        12. 其他: uWSGI, tornado</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">13. 项目</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - 代码组织</span></span>
<span class="line"><span style="color:#24292e;">    - 常用组件</span></span>
<span class="line"><span style="color:#24292e;">      - nginx</span></span>
<span class="line"><span style="color:#24292e;">      - [Redis](http://redisdoc.com/)</span></span>
<span class="line"><span style="color:#24292e;">      - MySQL</span></span>
<span class="line"><span style="color:#24292e;">      - 软件安装</span></span>
<span class="line"><span style="color:#24292e;">        - \`apt-get\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`yum\`</span></span>
<span class="line"><span style="color:#24292e;">        - \`make\` / \`make install\`</span></span>
<span class="line"><span style="color:#24292e;">    - DB 集群</span></span>
<span class="line"><span style="color:#24292e;">      - 主从备份</span></span>
<span class="line"><span style="color:#24292e;">      - 一主两从</span></span>
<span class="line"><span style="color:#24292e;">      - 双主互备</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">14. 静态文件存储</span></span>
<span class="line"><span style="color:#24292e;">    - 线上系统 Django 会关掉自身的静态文件处理</span></span>
<span class="line"><span style="color:#24292e;">    - 用 Nginx 代理静态文件</span></span>
<span class="line"><span style="color:#24292e;">    - CDN (内容分发网络)</span></span>
<span class="line"><span style="color:#24292e;">      - 基于缓存技术为静态资源 (主要是多媒体资源) 提供访问加速的服务</span></span>
<span class="line"><span style="color:#24292e;">      - 在不同地区部署镜像服务器节点</span></span>
<span class="line"><span style="color:#24292e;">      - 定期与源站做内容同步</span></span></code></pre></div>`,2),o=[p];function c(t,r,i,y,d,g){return n(),a("div",null,o)}const _=s(l,[["render",c]]);export{m as __pageData,_ as default};
