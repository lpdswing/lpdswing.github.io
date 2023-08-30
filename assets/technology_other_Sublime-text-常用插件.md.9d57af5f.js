import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d7865772.js";const _=JSON.parse('{"title":"Sublime text 常用插件","description":"","frontmatter":{"title":"Sublime text 常用插件","date":"2018-04-21T00:15:21.000Z","tags":["ide"],"categories":["知识库"]},"headers":[],"relativePath":"technology/other/Sublime-text-常用插件.md","filePath":"technology/other/Sublime-text-常用插件.md","lastUpdated":1684394809000}'),p={name:"technology/other/Sublime-text-常用插件.md"},o=l(`<h1 id="sublime-text3常用插件" tabindex="-1">Sublime text3常用插件 <a class="header-anchor" href="#sublime-text3常用插件" aria-label="Permalink to &quot;Sublime text3常用插件&quot;">​</a></h1><p>集成插件：</p><p>(1)Alignment: 代码对齐插件，即”=”号对齐，变量定义太多，长短不一，可一键对齐，默认快捷键Ctrl+Alt+A可能和QQ截屏功能冲突，可设置其他快捷键如：Ctrl+Shift+Alt+A (2)AutoFileName: 快捷输入文件名插件，自动完成文件名的输入，如图片选取，输入”/”即可看到相对于本项目文件夹的其他文件。 (3)BracketHighlighter: 代码匹配插件，可匹配[], (), {}, “”, ”, ，高亮标记，便于查看起始和结束标记，点击对应代码即可。 (4)ClipboardHistory: 剪切板历史记录插件，方便使用复制/剪切的内容，Ctrl+alt+v：显示历史记录，Ctrl+alt+d：清空历史记录，Ctrl+shift+v：粘贴上一条记录（最旧），Ctrl+shift+alt+v：粘贴下一条记录（最新） (5)CodeFormatter: 代码格式化插件，支持PHP、JavaScript/JSON、HTML、CSS/SCSS、Python、Visual Basic、Coldfusion/Railo/Lucee等等。 (6)ConvertToUTF8: 编辑并保存目前编码不被 Sublime Text 支持的文件，特别是中日韩用户使用的GB2312，GBK，BIG5，EUC-KR，EUC-JP ，ANSI等。 (7)DocBlockr: 代码注释插件，标准的注释，包括函数名、参数、返回值等，并以多行显示，省去手动编写。 (8)Emmet: HTML/CSS代码快速编写插件，对于前端来说，可是必备插件。 (9)FileDiffs: 强大的比较代码不同工具，比较当前文件与选中的代码、剪切板中代码、另一文件、未保存文件之间的差别，右键标签页，出现FileDiffs Menu或者Diff with Tab…选择对应文件比较即可。 (10)Git: Git管理插件，基本上实现了Git的所有功能。 (11)IMESupport: 实现中文输入法鼠标跟随插件。 (12)KeymapManager: 快捷键管理插件，通过Ctrl+alt+k或者通过顶部菜单“查看 -&gt; 快捷键管理”打开面板。 (13)PackageControl: 插件管理插件，提供添加、删除、禁用、查找插件等功能。 (14)SideBarEnhancements: 侧边栏右键增强插件，可以自定义打开方式快捷键，非常实用。 (15)SublimeCodeIntel: 代码自动提示插件，支持绝大多数前端开发语言。 (16)SublimeLinter: 代码语法检测插件，支持C/C++、CSS、HTML、Java、JavaScript、Lua、Perl、PHP、Python、Ruby、XML等等。 (17)SyncedSidebarBg: 侧边栏与主题颜色同步更新插件，自动同步侧边栏底色为编辑窗口底色。 (18)Theme-Nil: 完美的编码主题，用过的都说很好。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>Q：如何安装插件？ A：按快捷键Ctrl+Shift+P，输入 install 并回车，选择相应插件安装即可。或者依次点击“首选项 – 插件控制 – Install Package”进行插件安装。 Q：如何修改侧边栏背景颜色？ A：修改主题的配置文件即可。例如：使用流风清音汉化版，其默认主题为“Nil-Theme”，那么配置文件的相应路径是“Data\\Packages\\Nil-Theme\\Nil.sublime-theme”。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/** Sidebar tree (bg) **/</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“class”</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">“sidebar_tree”</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“dark_content”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“row_padding”</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“indent”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“indent_offset”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“indent_top_level”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“layer0.tint”</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">/* darker gray */</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* 输入喜欢的颜色的对应RGB值即可 */</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“layer0.opacity”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“dark_content”</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** Sidebar tree (bg) **/</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“class”</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">“sidebar_tree”</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“dark_content”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“row_padding”</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“indent”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“indent_offset”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“indent_top_level”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“layer0.tint”</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">/* darker gray */</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* 输入喜欢的颜色的对应RGB值即可 */</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“layer0.opacity”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“dark_content”</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><p>Q：为什么在Win8系统出现中文乱码？ A：这是Win8权限问题，一种方法是卸载后重装到系统之外的分区，另一种方法则是以管理员身份运行。 Q：为什么输入光标变得很粗？ A：依次点击“首选项” – “设置 – 用户”打开文件，按原有格式添加以下配置即可。提示：记得给原来的最后一行末尾添加一个半角逗号。 “caret_style”: “phase”, “caret_extra_top”: 0, “caret_extra_bottom”: 0, “caret_extra_width”: 1, Q：为什么侧边栏出现双文件夹图标？ A：在主题模板规则中添加如下配置即可。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“class”</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">“icon_folder”</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“content_margin”</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“class”</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">“icon_file_type”</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“content_margin”</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“class”</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">“icon_folder_loading”</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">“content_margin”</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“class”</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">“icon_folder”</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“content_margin”</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“class”</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">“icon_file_type”</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“content_margin”</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“class”</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">“icon_folder_loading”</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">“content_margin”</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Q：为什么侧边栏和标签栏上中文的文件名显示“口口”，而英文的文件名显示正常？ A：这里以Win7来说明，桌面 – 鼠标右键 – 个性化 – 显示 – 设置自定义文本大小(DPI) – 选择“较小 – 100%(默认)”即可。或者点击“首选项” – “设置 – 用户”打开文件，在末尾加上一行代码覆盖系统的DPI。 “dpi_scale”: 1.0,</p>`,9),e=[o];function t(c,r,i,y,E,d){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{_ as __pageData,B as default};
