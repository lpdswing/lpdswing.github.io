import{j as n,b as r,c as s,i as t,f as e}from"./chunks/framework.BrpFzWtI.js";const c=JSON.parse('{"title":"NginxProxyManager非标准端口http自动跳转https配置方法","description":"","frontmatter":{"title":"NginxProxyManager非标准端口http自动跳转https配置方法","comment":true,"tags":["Nas","Nginx"],"categories":["Nas","家庭网络"],"sticky":1,"date":"2024-08-01T19:00:00.000Z","top":1},"headers":[],"relativePath":"nas/note/nginx-proxy-manager.md","filePath":"nas/note/nginx-proxy-manager.md","lastUpdated":1727595969000}'),o={name:"nas/note/nginx-proxy-manager.md"};function p(i,a,g,d,h,l){return r(),s("div",{"data-pagefind-body":!0},a[0]||(a[0]=[t("h1",{id:"nginxproxymanager非标准端口http自动跳转https配置方法",tabindex:"-1"},[e("NginxProxyManager非标准端口http自动跳转https配置方法 "),t("a",{class:"header-anchor",href:"#nginxproxymanager非标准端口http自动跳转https配置方法","aria-label":'Permalink to "NginxProxyManager非标准端口http自动跳转https配置方法"'},"​")],-1),t("p",null,[e("家庭网络的80/443端口一般都封锁的, NPM配置强制https, 非标准端口会提示"),t("code",null,"the plain http was sent to https port"),e(", 而不是像我们预期的那样自动跳转到https.")],-1),t("p",null,[e("在"),t("code",null,"Advanced"),e("里添加配置 "),t("code",null,"error_page 497 https://$http_host$request_uri;"),e(" 如图: "),t("img",{src:"https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202408011723691.png",alt:""})],-1)]))}const m=n(o,[["render",p]]);export{c as __pageData,m as default};
