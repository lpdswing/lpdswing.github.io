---
title: Sublime text 常用插件
date: 2018-04-21 00:15:21
tags:
 - ide
categories:
 - 知识库
---

# Sublime text3常用插件

集成插件：

(1)Alignment: 代码对齐插件，即”=”号对齐，变量定义太多，长短不一，可一键对齐，默认快捷键Ctrl+Alt+A可能和QQ截屏功能冲突，可设置其他快捷键如：Ctrl+Shift+Alt+A
(2)AutoFileName: 快捷输入文件名插件，自动完成文件名的输入，如图片选取，输入”/”即可看到相对于本项目文件夹的其他文件。
(3)BracketHighlighter: 代码匹配插件，可匹配[], (), {}, “”, ”, ，高亮标记，便于查看起始和结束标记，点击对应代码即可。
(4)ClipboardHistory: 剪切板历史记录插件，方便使用复制/剪切的内容，Ctrl+alt+v：显示历史记录，Ctrl+alt+d：清空历史记录，Ctrl+shift+v：粘贴上一条记录（最旧），Ctrl+shift+alt+v：粘贴下一条记录（最新）
(5)CodeFormatter: 代码格式化插件，支持PHP、JavaScript/JSON、HTML、CSS/SCSS、Python、Visual Basic、Coldfusion/Railo/Lucee等等。
(6)ConvertToUTF8: 编辑并保存目前编码不被 Sublime Text 支持的文件，特别是中日韩用户使用的GB2312，GBK，BIG5，EUC-KR，EUC-JP ，ANSI等。
(7)DocBlockr: 代码注释插件，标准的注释，包括函数名、参数、返回值等，并以多行显示，省去手动编写。
(8)Emmet: HTML/CSS代码快速编写插件，对于前端来说，可是必备插件。
(9)FileDiffs: 强大的比较代码不同工具，比较当前文件与选中的代码、剪切板中代码、另一文件、未保存文件之间的差别，右键标签页，出现FileDiffs Menu或者Diff with Tab…选择对应文件比较即可。
(10)Git: Git管理插件，基本上实现了Git的所有功能。
(11)IMESupport: 实现中文输入法鼠标跟随插件。
(12)KeymapManager: 快捷键管理插件，通过Ctrl+alt+k或者通过顶部菜单“查看 -> 快捷键管理”打开面板。
(13)PackageControl: 插件管理插件，提供添加、删除、禁用、查找插件等功能。
(14)SideBarEnhancements: 侧边栏右键增强插件，可以自定义打开方式快捷键，非常实用。
(15)SublimeCodeIntel: 代码自动提示插件，支持绝大多数前端开发语言。
(16)SublimeLinter: 代码语法检测插件，支持C/C++、CSS、HTML、Java、JavaScript、Lua、Perl、PHP、Python、Ruby、XML等等。
(17)SyncedSidebarBg: 侧边栏与主题颜色同步更新插件，自动同步侧边栏底色为编辑窗口底色。
(18)Theme-Nil: 完美的编码主题，用过的都说很好。

## 常见问题

Q：如何安装插件？
A：按快捷键Ctrl+Shift+P，输入 install 并回车，选择相应插件安装即可。或者依次点击“首选项 – 插件控制 – Install Package”进行插件安装。
Q：如何修改侧边栏背景颜色？
A：修改主题的配置文件即可。例如：使用流风清音汉化版，其默认主题为“Nil-Theme”，那么配置文件的相应路径是“Data\Packages\Nil-Theme\Nil.sublime-theme”。

```json
/** Sidebar tree (bg) **/
{
“class”: “sidebar_tree”,
“dark_content”: true,
“row_padding”: [12, 4],
“indent”: 13,
“indent_offset”: 15,
“indent_top_level”: false,
“layer0.tint”: [32,32,32], /* darker gray */ /* 输入喜欢的颜色的对应RGB值即可 */
“layer0.opacity”: 1.0,
“dark_content”: true
},
```

Q：为什么在Win8系统出现中文乱码？
A：这是Win8权限问题，一种方法是卸载后重装到系统之外的分区，另一种方法则是以管理员身份运行。
Q：为什么输入光标变得很粗？
A：依次点击“首选项” – “设置 – 用户”打开文件，按原有格式添加以下配置即可。提示：记得给原来的最后一行末尾添加一个半角逗号。
“caret_style”: “phase”,
“caret_extra_top”: 0,
“caret_extra_bottom”: 0,
“caret_extra_width”: 1,
Q：为什么侧边栏出现双文件夹图标？
A：在主题模板规则中添加如下配置即可。

```json
{

“class”: “icon_folder”,

“content_margin”: [0,0]

},

{

“class”: “icon_file_type”,

“content_margin”: [0,0]

},

{

“class”: “icon_folder_loading”,

“content_margin”: [0,0]

}

```


Q：为什么侧边栏和标签栏上中文的文件名显示“口口”，而英文的文件名显示正常？
A：这里以Win7来说明，桌面 – 鼠标右键 – 个性化 – 显示 – 设置自定义文本大小(DPI) – 选择“较小 – 100%(默认)”即可。或者点击“首选项” – “设置 – 用户”打开文件，在末尾加上一行代码覆盖系统的DPI。
“dpi_scale”: 1.0,