import{_ as s,o as i,c as a,R as n}from"./chunks/framework.UjIW6W3V.js";const y=JSON.parse('{"title":"sqlalchemy之event使用","description":"","frontmatter":{"title":"sqlalchemy之event使用","date":"2020-04-24T10:50:10.000Z","tags":["flask","sqlalchemy"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/sqlalchemy之event使用.md","filePath":"technology/other/sqlalchemy之event使用.md","lastUpdated":1684394809000}'),e={name:"technology/other/sqlalchemy之event使用.md"},t=n(`<ul><li>参考文档 <blockquote><p><a href="https://docs.sqlalchemy.org/en/13/orm/events.html?highlight=events#mapper-events" target="_blank" rel="noreferrer">https://docs.sqlalchemy.org/en/13/orm/events.html?highlight=events#mapper-events</a></p></blockquote></li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sqlalchemy.event </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> listents_for</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sqlalchemy.orm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sessionmaker</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sqlalchemy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> create_engine</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">engine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> create_engine(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SQLALCHEMY_DATABASE_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pool_pre_ping</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sessionmaker(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">autocommit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">autoflush</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">engine)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Session()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例为当删除某条数据的时候,触发event删除和这条数据相关的数据,适合用于没外键约束的关系表结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@listens_for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;after_delete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> after_del_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mapper,connection,target):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mapped)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># class User-&gt;user ,映射</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(connection) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;sqlalchemy.engine.base.Connection object at xxxxx&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(target.id)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># target就是user对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ....,写逻辑代码</span></span></code></pre></div>`,2),l=[t];function h(p,k,r,E,d,g){return i(),a("div",null,l)}const c=s(e,[["render",h]]);export{y as __pageData,c as default};
