import{_ as s,o as a,c as n,O as o}from"./chunks/framework.72ba6402.js";const h=JSON.parse('{"title":"git解决push报错","description":"","frontmatter":{"title":"git解决push报错","date":"2017-04-22T18:04:30.000Z","tags":["git"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/git-解决push报错.md","filePath":"technology/other/git-解决push报错.md","lastUpdated":1684394809000}'),p={name:"technology/other/git-解决push报错.md"},l=o(`<h1 id="git-解决push报错问题" tabindex="-1">git -解决push报错问题 <a class="header-anchor" href="#git-解决push报错问题" aria-label="Permalink to &quot;git -解决push报错问题&quot;">​</a></h1><h3 id="问题出现场景" tabindex="-1">问题出现场景 <a class="header-anchor" href="#问题出现场景" aria-label="Permalink to &quot;问题出现场景&quot;">​</a></h3><p>github新建仓库,想把本地仓库推送到github</p><hr><p>操作步骤</p><ol><li><p>进入本地仓库,假设项目为test</p><p><code>cd test</code></p><p><code>git init</code></p></li><li><p>查看状态</p><p><code>git status</code></p></li><li><p>把更改的文件添加到本地git仓库</p><p><code>git add .</code></p></li><li><p>设置用户名邮箱</p><p><code>git config --global user.name &#39;jimi&#39;</code></p><p><code>git config --global user.email &#39;jimi@163.com</code></p></li><li><p>提交</p><p><code>git commit -m &quot;first commit&quot;</code></p></li><li><p>把本地test项目和githhub的test项目进行关联</p><p><code>git remote add origin xxxxx@xxxx</code></p></li><li><p>向远程仓库提交代码(配置好ssh或者密码)</p><p><code>git push origin master</code></p><p>可能会出现问题:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">To</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com:JasonLi-cn/test.git</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">rejected</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">master</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> (fetch </span><span style="color:#C3E88D;">first</span><span style="color:#A6ACCD;">)  </span></span>
<span class="line"><span style="color:#FFCB6B;">error:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">some</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">refs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git@github.com:JasonLi-cn/test.git</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">hint:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Updates</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">were</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rejected</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">because</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">work</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">that</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">do</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">hint:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">have</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">locally.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">This</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">usually</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">caused</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">another</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repository</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pushing</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">hint:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">same</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">You</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">may</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">want</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">first</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">integrate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">changes</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">hint:</span><span style="color:#A6ACCD;"> (e.g., </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git pull ...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) before pushing again.  </span></span>
<span class="line"><span style="color:#FFCB6B;">hint:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">See</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Note about fast-forwards</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git push --help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">details.</span></span></code></pre></div><p>说明远程仓库有本地仓库没有的文件,需要先pull</p><p><code>git pull origin master</code></p><p>这时可能会遇到问题:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git pull origin master  </span></span>
<span class="line"><span style="color:#A6ACCD;">From github.com:JasonLi-cn/test  </span></span>
<span class="line"><span style="color:#A6ACCD;"> * branch            master     -&gt; FETCH_HEAD  </span></span>
<span class="line"><span style="color:#A6ACCD;">fatal: refusing to merge unrelated histories</span></span></code></pre></div><p>解决办法:</p><p><code>git pull origin master --allow-unrelated-histories</code></p><p>这时就可以push了.</p><p>如果远程仓库有和本地仓库一样的文件还不能直接push,git status发现:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">On branch master</span></span>
<span class="line"><span style="color:#A6ACCD;">You have unmerged paths.</span></span>
<span class="line"><span style="color:#A6ACCD;">  (fix conflicts and run &quot;git commit&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  (use &quot;git merge --abort&quot; to abort the merge)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Unmerged paths:</span></span>
<span class="line"><span style="color:#A6ACCD;">  (use &quot;git add &lt;file&gt;...&quot; to mark resolution)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	both added:      LICENSE</span></span></code></pre></div><p>只需要执行如下操作然后重新提交就行了</p><div class="language-Shell"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LICENSE</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">merge</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div></li></ol><hr><p>最好推荐几篇写的非常不错的git入门文章:</p><p><a href="http://stormzhang.com/github/2016/05/25/learn-github-from-zero1/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「初识 GitHub」</a></p><p><a href="http://stormzhang.com/github/2016/05/26/learn-github-from-zero2/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「加入 GitHub」</a></p><p><a href="http://stormzhang.com/github/2016/05/30/learn-github-from-zero3/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「Git 速成」</a></p><p><a href="http://stormzhang.com/github/2016/06/04/learn-github-from-zero4/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「向GitHub 提交代码」</a></p><p><a href="http://stormzhang.com/github/2016/06/16/learn-github-from-zero5/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「Git 进阶」</a></p><p><a href="http://stormzhang.com/github/2016/07/09/learn-from-github-from-zero6/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「团队合作利器 BRANCH」</a></p><p><a href="http://stormzhang.com/github/2016/07/28/learn-github-from-zero7/" target="_blank" rel="noreferrer">从0开始学习 GitHub 系列之「如何发现优秀的开源项目？」</a></p>`,15),e=[l];function t(r,c,C,i,y,A){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
