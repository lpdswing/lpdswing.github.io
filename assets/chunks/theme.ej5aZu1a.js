import{d as S,o as c,c as p,r as _,a as te,t as H,n as B,_ as L,b as A,w as y,e as C,T as Ke,u as rt,i as ts,l as ns,f as We,g as P,h as M,j as me,k as h,m as u,p as ie,q as le,s as $e,v as Ie,x as it,y as W,z as _e,A as bt,B as pn,C as ss,D as Pe,F as K,E as ee,G as Qe,H as Ve,I as $,J as fn,K as we,L as Ae,M as De,N as Je,O as os,P as ce,Q as mn,R as vn,S as yt,U as Se,V as wt,W as $t,X as as,Y as gn,Z as _n,$ as rs,a0 as Be,a1 as kn,a2 as bn,a3 as is,a4 as ls,a5 as cs,a6 as us,a7 as yn,a8 as ds,a9 as hs,aa as ps,ab as fs}from"./framework.UjIW6W3V.js";const ms=S({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),p("span",{class:B(["VPBadge",e.type])},[_(e.$slots,"default",{},()=>[te(H(e.text),1)],!0)],2))}}),vs=L(ms,[["__scopeId","data-v-3b1a861f"]]),gs={key:0,class:"VPBackdrop"},_s=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),A(Ke,{name:"fade"},{default:y(()=>[e.show?(c(),p("div",gs)):C("",!0)]),_:1}))}}),ks=L(_s,[["__scopeId","data-v-f297908e"]]),R=rt;function bs(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),(s=!0)&&setTimeout(()=>s=!1,e))}}function lt(t){return/^\//.test(t)?t:`/${t}`}function St(t){const{pathname:e,search:n,hash:s,protocol:o}=new URL(t,"http://a.com");if(ts(t)||t.startsWith("#")||!o.startsWith("http")||/\.(?!html|md)\w+($|\?)/i.test(t)&&ns(t))return t;const{site:a}=R(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${n}${s}`);return We(r)}function Te({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:s,page:o,theme:a}=R(),r=P(()=>{var l,d;return{label:(l=n.value.locales[s.value])==null?void 0:l.label,link:((d=n.value.locales[s.value])==null?void 0:d.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:P(()=>Object.entries(n.value.locales).flatMap(([l,d])=>t&&r.value.label===d.label?[]:{text:d.label,link:ys(d.link||(l==="root"?"/":`/${l}/`),a.value.i18nRouting!==!1&&e,o.value.relativePath.slice(r.value.link.length-1),!n.value.cleanUrls)})),currentLang:r}}function ys(t,e,n,s){return e?t.replace(/\/$/,"")+lt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):t}const ws=t=>(ie("data-v-9e502ee3"),t=t(),le(),t),$s={class:"NotFound"},Ss={class:"code"},Cs={class:"title"},Ps=ws(()=>h("div",{class:"divider"},null,-1)),Ms={class:"quote"},Ls={class:"action"},Is=["href","aria-label"],Es=S({__name:"NotFound",setup(t){const{site:e,theme:n}=R(),{localeLinks:s}=Te({removeCurrent:!1}),o=M("/");return me(()=>{var r;const a=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(o.value=((r=s.value.find(({link:i})=>i.startsWith(a)))==null?void 0:r.link)||s.value[0].link)}),(a,r)=>{var i,l,d,f,k;return c(),p("div",$s,[h("p",Ss,H(((i=u(n).notFound)==null?void 0:i.code)??"404"),1),h("h1",Cs,H(((l=u(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Ps,h("blockquote",Ms,H(((d=u(n).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",Ls,[h("a",{class:"link",href:u(We)(o.value),"aria-label":((f=u(n).notFound)==null?void 0:f.linkLabel)??"go to home"},H(((k=u(n).notFound)==null?void 0:k.linkText)??"Take me home"),9,Is)])])}}}),Os=L(Es,[["__scopeId","data-v-9e502ee3"]]);function wn(t,e){if(Array.isArray(t))return je(t);if(t==null)return[];e=lt(e);const n=Object.keys(t).sort((o,a)=>a.split("/").length-o.split("/").length).find(o=>e.startsWith(lt(o))),s=n?t[n]:[];return Array.isArray(s)?je(s):je(s.items,s.base)}function Vs(t){const e=[];let n=0;for(const s in t){const o=t[s];if(o.items){n=e.push(o);continue}e[n]||e.push({items:[]}),e[n].items.push(o)}return e}function xs(t){const e=[];function n(s){for(const o of s)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(t),e}function ct(t,e){return Array.isArray(e)?e.some(n=>ct(t,n)):$e(t,e.link)?!0:e.items?ct(t,e.items):!1}function je(t,e){return[...t].map(n=>{const s={...n},o=s.base||e;return o&&s.link&&(s.link=o+s.link),s.items&&(s.items=je(s.items,o)),s})}function ve(){const{frontmatter:t,page:e,theme:n}=R(),s=it("(min-width: 960px)"),o=M(!1),a=P(()=>{const m=n.value.sidebar,g=e.value.relativePath;return m?wn(m,g):[]}),r=M(a.value);W(a,(m,g)=>{JSON.stringify(m)!==JSON.stringify(g)&&(r.value=a.value)});const i=P(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),l=P(()=>d?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),d=P(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),f=P(()=>i.value&&s.value),k=P(()=>i.value?Vs(r.value):[]);function v(){o.value=!0}function b(){o.value=!1}function w(){o.value?b():v()}return{isOpen:o,sidebar:r,sidebarGroups:k,hasSidebar:i,hasAside:d,leftAside:l,isSidebarEnabled:f,open:v,close:b,toggle:w}}function As(t,e){let n;_e(()=>{n=t.value?document.activeElement:void 0}),me(()=>{window.addEventListener("keyup",s)}),bt(()=>{window.removeEventListener("keyup",s)});function s(o){o.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const $n=M(Ie?location.hash:"");Ie&&window.addEventListener("hashchange",()=>{$n.value=location.hash});function Ts(t){const{page:e}=R(),n=M(!1),s=P(()=>t.value.collapsed!=null),o=P(()=>!!t.value.link),a=M(!1),r=()=>{a.value=$e(e.value.relativePath,t.value.link)};W([e,t,$n],r),me(r);const i=P(()=>a.value?!0:t.value.items?ct(e.value.relativePath,t.value.items):!1),l=P(()=>!!(t.value.items&&t.value.items.length));_e(()=>{n.value=!!(s.value&&t.value.collapsed)}),pn(()=>{(a.value||i.value)&&(n.value=!1)});function d(){s.value&&(n.value=!n.value)}return{collapsed:n,collapsible:s,isLink:o,isActiveLink:a,hasActiveLink:i,hasChildren:l,toggle:d}}function Ns(){const{hasSidebar:t}=ve(),e=it("(min-width: 960px)"),n=it("(min-width: 1280px)");return{isAsideEnabled:P(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const zs=71;function Ct(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Pt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{title:Hs(n),link:"#"+n.id,level:s}});return Rs(e,t)}function Hs(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Rs(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(r=>r.level>=s&&r.level<=o);const a=[];e:for(let r=0;r<t.length;r++){const i=t[r];if(r===0)a.push(i);else{for(let l=r-1;l>=0;l--){const d=t[l];if(d.level<i.level){(d.children||(d.children=[])).push(i);continue e}}a.push(i)}}return a}function Ds(t,e){const{isAsideEnabled:n}=Ns(),s=bs(a,100);let o=null;me(()=>{requestAnimationFrame(a),window.addEventListener("scroll",s)}),ss(()=>{r(location.hash)}),bt(()=>{window.removeEventListener("scroll",s)});function a(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(b=>i.some(w=>w.hash===b.hash&&b.offsetParent!==null)),d=window.scrollY,f=window.innerHeight,k=document.body.offsetHeight,v=Math.abs(d+f-k)<1;if(l.length&&v){r(l[l.length-1].hash);return}for(let b=0;b<l.length;b++){const w=l[b],m=l[b+1],[g,V]=js(b,w,m);if(g){r(V);return}}}function r(i){o&&o.classList.remove("active"),i==null?o=null:o=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=o;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Nt(t){return t.parentElement.offsetTop-zs}function js(t,e,n){const s=window.scrollY;return t===0&&s===0?[!0,null]:s<Nt(e)?[!1,null]:!n||s<Nt(n)?[!0,e.hash]:[!1,null]}const Fs=["href","title"],Bs=S({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const s=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(s));o==null||o.focus({preventScroll:!0})}return(n,s)=>{const o=Pe("VPDocOutlineItem",!0);return c(),p("ul",{class:B(n.root?"root":"nested")},[(c(!0),p(K,null,ee(n.headers,({children:a,link:r,title:i})=>(c(),p("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:i},H(i),9,Fs),a!=null&&a.length?(c(),A(o,{key:0,headers:a},null,8,["headers"])):C("",!0)]))),256))],2)}}}),Mt=L(Bs,[["__scopeId","data-v-71efbea9"]]),qs=t=>(ie("data-v-ad912b11"),t=t(),le(),t),Gs={class:"content"},Us={class:"outline-title",role:"heading","aria-level":"2"},Ks={"aria-labelledby":"doc-outline-aria-label"},Ws=qs(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Qs=S({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=R(),s=Qe([]);Ve(()=>{s.value=Pt(e.value.outline??n.value.outline)});const o=M(),a=M();return Ds(o,a),(r,i)=>(c(),p("div",{class:B(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[h("div",Gs,[h("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),h("div",Us,H(u(Ct)(u(n))),1),h("nav",Ks,[Ws,$(Mt,{headers:s.value,root:!0},null,8,["headers"])])])],2))}}),Js=L(Qs,[["__scopeId","data-v-ad912b11"]]),Zs={class:"VPDocAsideCarbonAds"},Ys=S({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,s)=>(c(),p("div",Zs,[$(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Xs=t=>(ie("data-v-d20586be"),t=t(),le(),t),eo={class:"VPDocAside"},to=Xs(()=>h("div",{class:"spacer"},null,-1)),no=S({__name:"VPDocAside",setup(t){const{theme:e}=R();return(n,s)=>(c(),p("div",eo,[_(n.$slots,"aside-top",{},void 0,!0),_(n.$slots,"aside-outline-before",{},void 0,!0),$(Js),_(n.$slots,"aside-outline-after",{},void 0,!0),to,_(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),A(Ys,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):C("",!0),_(n.$slots,"aside-ads-after",{},void 0,!0),_(n.$slots,"aside-bottom",{},void 0,!0)]))}}),so=L(no,[["__scopeId","data-v-d20586be"]]);function oo(){const{theme:t,page:e}=R();return P(()=>{const{text:n="Edit this page",pattern:s=""}=t.value.editLink||{};let o;return typeof s=="function"?o=s(e.value):o=s.replace(/:path/g,e.value.filePath),{url:o,text:n}})}function ao(){const{page:t,theme:e,frontmatter:n}=R();return P(()=>{var l,d,f,k,v,b,w,m;const s=wn(e.value.sidebar,t.value.relativePath),o=xs(s),a=o.findIndex(g=>$e(t.value.relativePath,g.link)),r=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((d=e.value.docFooter)==null?void 0:d.next)===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((f=o[a-1])==null?void 0:f.docFooterText)??((k=o[a-1])==null?void 0:k.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=o[a-1])==null?void 0:v.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((b=o[a+1])==null?void 0:b.docFooterText)??((w=o[a+1])==null?void 0:w.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((m=o[a+1])==null?void 0:m.link)}}})}const ro={},io={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},lo=h("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),co=h("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),uo=[lo,co];function ho(t,e){return c(),p("svg",io,uo)}const po=L(ro,[["render",ho]]),he=S({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=P(()=>e.tag??(e.href?"a":"span")),s=P(()=>e.href&&fn.test(e.href));return(o,a)=>(c(),A(we(n.value),{class:B(["VPLink",{link:o.href,"vp-external-link-icon":s.value,"no-icon":o.noIcon}]),href:o.href?u(St)(o.href):void 0,target:o.target??(s.value?"_blank":void 0),rel:o.rel??(s.value?"noreferrer":void 0)},{default:y(()=>[_(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),fo={class:"VPLastUpdated"},mo=["datetime"],vo=S({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:s,lang:o}=R(),a=P(()=>new Date(s.value.lastUpdated??n.value.lastUpdated)),r=P(()=>a.value.toISOString()),i=M("");return me(()=>{_e(()=>{var l,d,f;i.value=new Intl.DateTimeFormat((d=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&d.forceLocale?o.value:void 0,((f=e.value.lastUpdated)==null?void 0:f.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(l,d)=>{var f;return c(),p("p",fo,[te(H(((f=u(e).lastUpdated)==null?void 0:f.text)||u(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},H(i.value),9,mo)])}}}),go=L(vo,[["__scopeId","data-v-4bcaebaf"]]),_o={key:0,class:"VPDocFooter"},ko={key:0,class:"edit-info"},bo={key:0,class:"edit-link"},yo={key:1,class:"last-updated"},wo={key:1,class:"prev-next"},$o={class:"pager"},So=["innerHTML"],Co=["innerHTML"],Po={class:"pager"},Mo=["innerHTML"],Lo=["innerHTML"],Io=S({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:s}=R(),o=oo(),a=ao(),r=P(()=>e.value.editLink&&s.value.editLink!==!1),i=P(()=>n.value.lastUpdated&&s.value.lastUpdated!==!1),l=P(()=>r.value||i.value||a.value.prev||a.value.next);return(d,f)=>{var k,v,b,w;return l.value?(c(),p("footer",_o,[_(d.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(c(),p("div",ko,[r.value?(c(),p("div",bo,[$(he,{class:"edit-link-button",href:u(o).url,"no-icon":!0},{default:y(()=>[$(po,{class:"edit-link-icon","aria-label":"edit icon"}),te(" "+H(u(o).text),1)]),_:1},8,["href"])])):C("",!0),i.value?(c(),p("div",yo,[$(go)])):C("",!0)])):C("",!0),(k=u(a).prev)!=null&&k.link||(v=u(a).next)!=null&&v.link?(c(),p("nav",wo,[h("div",$o,[(b=u(a).prev)!=null&&b.link?(c(),A(he,{key:0,class:"pager-link prev",href:u(a).prev.link},{default:y(()=>{var m;return[h("span",{class:"desc",innerHTML:((m=u(e).docFooter)==null?void 0:m.prev)||"Previous page"},null,8,So),h("span",{class:"title",innerHTML:u(a).prev.text},null,8,Co)]}),_:1},8,["href"])):C("",!0)]),h("div",Po,[(w=u(a).next)!=null&&w.link?(c(),A(he,{key:0,class:"pager-link next",href:u(a).next.link},{default:y(()=>{var m;return[h("span",{class:"desc",innerHTML:((m=u(e).docFooter)==null?void 0:m.next)||"Next page"},null,8,Mo),h("span",{class:"title",innerHTML:u(a).next.text},null,8,Lo)]}),_:1},8,["href"])):C("",!0)])])):C("",!0)])):C("",!0)}}}),Eo=L(Io,[["__scopeId","data-v-643acc1d"]]),Oo={},Vo={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},xo=h("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Ao=[xo];function To(t,e){return c(),p("svg",Vo,Ao)}const Lt=L(Oo,[["render",To]]),No={key:0,class:"VPDocOutlineDropdown"},zo={key:0,class:"items"},Ho=S({__name:"VPDocOutlineDropdown",setup(t){const{frontmatter:e,theme:n}=R(),s=M(!1);Ve(()=>{s.value=!1});const o=Qe([]);return Ve(()=>{o.value=Pt(e.value.outline??n.value.outline)}),(a,r)=>o.value.length>0?(c(),p("div",No,[h("button",{onClick:r[0]||(r[0]=i=>s.value=!s.value),class:B({open:s.value})},[te(H(u(Ct)(u(n)))+" ",1),$(Lt,{class:"icon"})],2),s.value?(c(),p("div",zo,[$(Mt,{headers:o.value},null,8,["headers"])])):C("",!0)])):C("",!0)}}),Ro=L(Ho,[["__scopeId","data-v-c5596bae"]]),Do=t=>(ie("data-v-9ac9bab3"),t=t(),le(),t),jo={class:"container"},Fo=Do(()=>h("div",{class:"aside-curtain"},null,-1)),Bo={class:"aside-container"},qo={class:"aside-content"},Go={class:"content"},Uo={class:"content-container"},Ko={class:"main"},Wo=S({__name:"VPDoc",setup(t){const{theme:e}=R(),n=Ae(),{hasSidebar:s,hasAside:o,leftAside:a}=ve(),r=P(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const d=Pe("Content");return c(),p("div",{class:B(["VPDoc",{"has-sidebar":u(s),"has-aside":u(o)}])},[_(i.$slots,"doc-top",{},void 0,!0),h("div",jo,[u(o)?(c(),p("div",{key:0,class:B(["aside",{"left-aside":u(a)}])},[Fo,h("div",Bo,[h("div",qo,[$(so,null,{"aside-top":y(()=>[_(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":y(()=>[_(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":y(()=>[_(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[_(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[_(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[_(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):C("",!0),h("div",Go,[h("div",Uo,[_(i.$slots,"doc-before",{},void 0,!0),$(Ro),h("main",Ko,[$(d,{class:B(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(Eo,null,{"doc-footer-before":y(()=>[_(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),_(i.$slots,"doc-after",{},void 0,!0)])])]),_(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Qo=L(Wo,[["__scopeId","data-v-9ac9bab3"]]),Jo=S({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=P(()=>e.href&&fn.test(e.href)),s=P(()=>e.tag||e.href?"a":"button");return(o,a)=>(c(),A(we(s.value),{class:B(["VPButton",[o.size,o.theme]]),href:o.href?u(St)(o.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:y(()=>[te(H(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),Zo=L(Jo,[["__scopeId","data-v-6c85a6ff"]]),Yo=["src","alt"],Xo=S({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const s=Pe("VPImage",!0);return e.image?(c(),p(K,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),p("img",De({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(We)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Yo)):(c(),p(K,{key:1},[$(s,De({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),$(s,De({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):C("",!0)}}}),qe=L(Xo,[["__scopeId","data-v-cf2ceff8"]]),ea=t=>(ie("data-v-ea9f1464"),t=t(),le(),t),ta={class:"container"},na={class:"main"},sa={key:0,class:"name"},oa=["innerHTML"],aa=["innerHTML"],ra=["innerHTML"],ia={key:0,class:"actions"},la={key:0,class:"image"},ca={class:"image-container"},ua=ea(()=>h("div",{class:"image-bg"},null,-1)),da=S({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Je("hero-image-slot-exists");return(n,s)=>(c(),p("div",{class:B(["VPHero",{"has-image":n.image||u(e)}])},[h("div",ta,[h("div",na,[_(n.$slots,"home-hero-info",{},()=>[n.name?(c(),p("h1",sa,[h("span",{innerHTML:n.name,class:"clip"},null,8,oa)])):C("",!0),n.text?(c(),p("p",{key:1,innerHTML:n.text,class:"text"},null,8,aa)):C("",!0),n.tagline?(c(),p("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,ra)):C("",!0)],!0),n.actions?(c(),p("div",ia,[(c(!0),p(K,null,ee(n.actions,o=>(c(),p("div",{key:o.link,class:"action"},[$(Zo,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link},null,8,["theme","text","href"])]))),128))])):C("",!0)]),n.image||u(e)?(c(),p("div",la,[h("div",ca,[ua,_(n.$slots,"home-hero-image",{},()=>[n.image?(c(),A(qe,{key:0,class:"image-src",image:n.image},null,8,["image"])):C("",!0)],!0)])])):C("",!0)])],2))}}),ha=L(da,[["__scopeId","data-v-ea9f1464"]]),pa=S({__name:"VPHomeHero",setup(t){const{frontmatter:e}=R();return(n,s)=>u(e).hero?(c(),A(ha,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info":y(()=>[_(n.$slots,"home-hero-info")]),"home-hero-image":y(()=>[_(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):C("",!0)}}),fa={},ma={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},va=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),ga=[va];function _a(t,e){return c(),p("svg",ma,ga)}const ka=L(fa,[["render",_a]]),ba={class:"box"},ya={key:0,class:"icon"},wa=["innerHTML"],$a=["innerHTML"],Sa=["innerHTML"],Ca={key:4,class:"link-text"},Pa={class:"link-text-value"},Ma=S({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),A(he,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:y(()=>[h("article",ba,[typeof e.icon=="object"&&e.icon.wrap?(c(),p("div",ya,[$(qe,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),A(qe,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,wa)):C("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,$a),e.details?(c(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Sa)):C("",!0),e.linkText?(c(),p("div",Ca,[h("p",Pa,[te(H(e.linkText)+" ",1),$(ka,{class:"link-text-icon"})])])):C("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),La=L(Ma,[["__scopeId","data-v-4b552155"]]),Ia={key:0,class:"VPFeatures"},Ea={class:"container"},Oa={class:"items"},Va=S({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=P(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,o)=>s.features?(c(),p("div",Ia,[h("div",Ea,[h("div",Oa,[(c(!0),p(K,null,ee(s.features,a=>(c(),p("div",{key:a.title,class:B(["item",[n.value]])},[$(La,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):C("",!0)}}),xa=L(Va,[["__scopeId","data-v-aa952518"]]),Aa=S({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=R();return(n,s)=>u(e).features?(c(),A(xa,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):C("",!0)}}),Ta={class:"VPHome"},Na=S({__name:"VPHome",setup(t){return(e,n)=>{const s=Pe("Content");return c(),p("div",Ta,[_(e.$slots,"home-hero-before",{},void 0,!0),$(pa,null,{"home-hero-info":y(()=>[_(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":y(()=>[_(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),_(e.$slots,"home-hero-after",{},void 0,!0),_(e.$slots,"home-features-before",{},void 0,!0),$(Aa),_(e.$slots,"home-features-after",{},void 0,!0),$(s)])}}}),za=L(Na,[["__scopeId","data-v-c26aa4d2"]]),Ha={},Ra={class:"VPPage"};function Da(t,e){const n=Pe("Content");return c(),p("div",Ra,[_(t.$slots,"page-top"),$(n),_(t.$slots,"page-bottom")])}const ja=L(Ha,[["render",Da]]),Fa=S({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=R(),{hasSidebar:s}=ve();return(o,a)=>(c(),p("div",{class:B(["VPContent",{"has-sidebar":u(s),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?_(o.$slots,"not-found",{key:0},()=>[$(Os)],!0):u(n).layout==="page"?(c(),A(ja,{key:1},{"page-top":y(()=>[_(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":y(()=>[_(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),A(za,{key:2},{"home-hero-before":y(()=>[_(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":y(()=>[_(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":y(()=>[_(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":y(()=>[_(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":y(()=>[_(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":y(()=>[_(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),A(we(u(n).layout),{key:3})):(c(),A(Qo,{key:4},{"doc-top":y(()=>[_(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":y(()=>[_(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":y(()=>[_(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":y(()=>[_(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":y(()=>[_(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":y(()=>[_(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":y(()=>[_(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[_(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[_(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[_(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":y(()=>[_(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ba=L(Fa,[["__scopeId","data-v-54a52440"]]),qa={class:"container"},Ga=["innerHTML"],Ua=["innerHTML"],Ka=S({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=R(),{hasSidebar:s}=ve();return(o,a)=>u(e).footer&&u(n).footer!==!1?(c(),p("footer",{key:0,class:B(["VPFooter",{"has-sidebar":u(s)}])},[h("div",qa,[u(e).footer.message?(c(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Ga)):C("",!0),u(e).footer.copyright?(c(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Ua)):C("",!0)])],2)):C("",!0)}}),Wa=L(Ka,[["__scopeId","data-v-b4d94707"]]),Qa={class:"header"},Ja={class:"outline"},Za=S({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=R(),s=M(!1),o=M(0),a=M();Ve(()=>{s.value=!1});function r(){s.value=!s.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function i(d){d.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),ce(()=>{s.value=!1}))}function l(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,f)=>(c(),p("div",{class:"VPLocalNavOutlineDropdown",style:os({"--vp-vh":o.value+"px"})},[d.headers.length>0?(c(),p("button",{key:0,onClick:r,class:B({open:s.value})},[te(H(u(Ct)(u(n)))+" ",1),$(Lt,{class:"icon"})],2)):(c(),p("button",{key:1,onClick:l},H(u(n).returnToTopLabel||"Return to top"),1)),$(Ke,{name:"flyout"},{default:y(()=>[s.value?(c(),p("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:i},[h("div",Qa,[h("a",{class:"top-link",href:"#",onClick:l},H(u(n).returnToTopLabel||"Return to top"),1)]),h("div",Ja,[$(Mt,{headers:d.headers},null,8,["headers"])])],512)):C("",!0)]),_:1})],4))}}),Ya=L(Za,[["__scopeId","data-v-74016e35"]]),Xa={},er={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},tr=h("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),nr=h("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),sr=h("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),or=h("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),ar=[tr,nr,sr,or];function rr(t,e){return c(),p("svg",er,ar)}const ir=L(Xa,[["render",rr]]),lr=["aria-expanded"],cr={class:"menu-text"},ur=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=R(),{hasSidebar:s}=ve(),{y:o}=mn(),a=Qe([]),r=M(0);me(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ve(()=>{a.value=Pt(n.value.outline??e.value.outline)});const i=P(()=>a.value.length===0&&!s.value),l=P(()=>({VPLocalNav:!0,fixed:i.value,"reached-top":o.value>=r.value}));return(d,f)=>u(n).layout!=="home"&&(!i.value||u(o)>=r.value)?(c(),p("div",{key:0,class:B(l.value)},[u(s)?(c(),p("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:f[0]||(f[0]=k=>d.$emit("open-menu"))},[$(ir,{class:"menu-icon"}),h("span",cr,H(u(e).sidebarMenuLabel||"Menu"),1)],8,lr)):C("",!0),$(Ya,{headers:a.value,navHeight:r.value},null,8,["headers","navHeight"])],2)):C("",!0)}}),dr=L(ur,[["__scopeId","data-v-36173170"]]);function hr(){const t=M(!1);function e(){t.value=!0,window.addEventListener("resize",o)}function n(){t.value=!1,window.removeEventListener("resize",o)}function s(){t.value?n():e()}function o(){window.outerWidth>=768&&n()}const a=Ae();return W(()=>a.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:s}}const pr={},fr={class:"VPSwitch",type:"button",role:"switch"},mr={class:"check"},vr={key:0,class:"icon"};function gr(t,e){return c(),p("button",fr,[h("span",mr,[t.$slots.default?(c(),p("span",vr,[_(t.$slots,"default",{},void 0,!0)])):C("",!0)])])}const _r=L(pr,[["render",gr],["__scopeId","data-v-519ef10c"]]),kr={},br={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yr=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),wr=[yr];function $r(t,e){return c(),p("svg",br,wr)}const Sr=L(kr,[["render",$r]]),Cr={},Pr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Mr=vn('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Lr=[Mr];function Ir(t,e){return c(),p("svg",Pr,Lr)}const Er=L(Cr,[["render",Ir]]),Or=S({__name:"VPSwitchAppearance",setup(t){const{isDark:e}=R(),n=Je("toggle-appearance",()=>{e.value=!e.value}),s=P(()=>e.value?"Switch to light theme":"Switch to dark theme");return(o,a)=>(c(),A(_r,{title:s.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(n)},{default:y(()=>[$(Er,{class:"sun"}),$(Sr,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),It=L(Or,[["__scopeId","data-v-dbf784cc"]]),Vr={key:0,class:"VPNavBarAppearance"},xr=S({__name:"VPNavBarAppearance",setup(t){const{site:e}=R();return(n,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",Vr,[$(It)])):C("",!0)}}),Ar=L(xr,[["__scopeId","data-v-0b0f759c"]]),Et=M();let Sn=!1,st=0;function Tr(t){const e=M(!1);if(Ie){!Sn&&Nr(),st++;const n=W(Et,s=>{var o,a,r;s===t.el.value||(o=t.el.value)!=null&&o.contains(s)?(e.value=!0,(a=t.onFocus)==null||a.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});bt(()=>{n(),st--,st||zr()})}return yt(e)}function Nr(){document.addEventListener("focusin",Cn),Sn=!0,Et.value=document.activeElement}function zr(){document.removeEventListener("focusin",Cn)}function Cn(){Et.value=document.activeElement}const Hr={},Rr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Dr=h("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),jr=[Dr];function Fr(t,e){return c(),p("svg",Rr,jr)}const Pn=L(Hr,[["render",Fr]]),Br={},qr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Gr=h("circle",{cx:"12",cy:"12",r:"2"},null,-1),Ur=h("circle",{cx:"19",cy:"12",r:"2"},null,-1),Kr=h("circle",{cx:"5",cy:"12",r:"2"},null,-1),Wr=[Gr,Ur,Kr];function Qr(t,e){return c(),p("svg",qr,Wr)}const Jr=L(Br,[["render",Qr]]),Zr={class:"VPMenuLink"},Yr=S({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=R();return(n,s)=>(c(),p("div",Zr,[$(he,{class:B({active:u($e)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:y(()=>[te(H(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ze=L(Yr,[["__scopeId","data-v-7d7d9748"]]),Xr={class:"VPMenuGroup"},ei={key:0,class:"title"},ti=S({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),p("div",Xr,[e.text?(c(),p("p",ei,H(e.text),1)):C("",!0),(c(!0),p(K,null,ee(e.items,s=>(c(),p(K,null,["link"in s?(c(),A(Ze,{key:0,item:s},null,8,["item"])):C("",!0)],64))),256))]))}}),ni=L(ti,[["__scopeId","data-v-df023ea6"]]),si={class:"VPMenu"},oi={key:0,class:"items"},ai=S({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),p("div",si,[e.items?(c(),p("div",oi,[(c(!0),p(K,null,ee(e.items,s=>(c(),p(K,{key:s.text},["link"in s?(c(),A(Ze,{key:0,item:s},null,8,["item"])):(c(),A(ni,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):C("",!0),_(e.$slots,"default",{},void 0,!0)]))}}),ri=L(ai,[["__scopeId","data-v-f0d348c8"]]),ii=["aria-expanded","aria-label"],li={key:0,class:"text"},ci=["innerHTML"],ui={class:"menu"},di=S({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=M(!1),n=M();Tr({el:n,onBlur:s});function s(){e.value=!1}return(o,a)=>(c(),p("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:a[1]||(a[1]=r=>e.value=!0),onMouseleave:a[2]||(a[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:a[0]||(a[0]=r=>e.value=!e.value)},[o.button||o.icon?(c(),p("span",li,[o.icon?(c(),A(we(o.icon),{key:0,class:"option-icon"})):C("",!0),o.button?(c(),p("span",{key:1,innerHTML:o.button},null,8,ci)):C("",!0),$(Pn,{class:"text-icon"})])):(c(),A(Jr,{key:1,class:"icon"}))],8,ii),h("div",ui,[$(ri,{items:o.items},{default:y(()=>[_(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ot=L(di,[["__scopeId","data-v-c01492dd"]]),hi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},pi=["href","aria-label","innerHTML"],fi=S({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=P(()=>typeof e.icon=="object"?e.icon.svg:hi[e.icon]);return(s,o)=>(c(),p("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,pi))}}),mi=L(fi,[["__scopeId","data-v-e8b9874f"]]),vi={class:"VPSocialLinks"},gi=S({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),p("div",vi,[(c(!0),p(K,null,ee(e.links,({link:s,icon:o,ariaLabel:a})=>(c(),A(mi,{key:s,icon:o,link:s,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),Vt=L(gi,[["__scopeId","data-v-a9c501d0"]]),_i={key:0,class:"group translations"},ki={class:"trans-title"},bi={key:1,class:"group"},yi={class:"item appearance"},wi={class:"label"},$i={class:"appearance-action"},Si={key:2,class:"group"},Ci={class:"item social-links"},Pi=S({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=R(),{localeLinks:s,currentLang:o}=Te({correspondingLink:!0}),a=P(()=>s.value.length&&o.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>a.value?(c(),A(Ot,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:y(()=>[u(s).length&&u(o).label?(c(),p("div",_i,[h("p",ki,H(u(o).label),1),(c(!0),p(K,null,ee(u(s),l=>(c(),A(Ze,{key:l.link,item:l},null,8,["item"]))),128))])):C("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",bi,[h("div",yi,[h("p",wi,H(u(n).darkModeSwitchLabel||"Appearance"),1),h("div",$i,[$(It)])])])):C("",!0),u(n).socialLinks?(c(),p("div",Si,[h("div",Ci,[$(Vt,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):C("",!0)]),_:1})):C("",!0)}}),Mi=L(Pi,[["__scopeId","data-v-8b954518"]]),Li=t=>(ie("data-v-a344f9b7"),t=t(),le(),t),Ii=["aria-expanded"],Ei=Li(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),Oi=[Ei],Vi=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),p("button",{type:"button",class:B(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>e.$emit("click"))},Oi,10,Ii))}}),xi=L(Vi,[["__scopeId","data-v-a344f9b7"]]),Ai=["innerHTML"],Ti=S({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=R();return(n,s)=>(c(),A(he,{class:B({VPNavBarMenuLink:!0,active:u($e)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:y(()=>[h("span",{innerHTML:n.item.text},null,8,Ai)]),_:1},8,["class","href","target","rel"]))}}),Ni=L(Ti,[["__scopeId","data-v-c37c5485"]]),zi=S({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=R(),s=a=>"link"in a?$e(n.value.relativePath,a.link,!!e.item.activeMatch):a.items.some(s),o=P(()=>s(e.item));return(a,r)=>(c(),A(Ot,{class:B({VPNavBarMenuGroup:!0,active:u($e)(u(n).relativePath,a.item.activeMatch,!!a.item.activeMatch)||o.value}),button:a.item.text,items:a.item.items},null,8,["class","button","items"]))}}),Hi=t=>(ie("data-v-5f97b9f5"),t=t(),le(),t),Ri={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Di=Hi(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),ji=S({__name:"VPNavBarMenu",setup(t){const{theme:e}=R();return(n,s)=>u(e).nav?(c(),p("nav",Ri,[Di,(c(!0),p(K,null,ee(u(e).nav,o=>(c(),p(K,{key:o.text},["link"in o?(c(),A(Ni,{key:0,item:o},null,8,["item"])):(c(),A(zi,{key:1,item:o},null,8,["item"]))],64))),128))])):C("",!0)}}),Fi=L(ji,[["__scopeId","data-v-5f97b9f5"]]);var zt;const Mn=typeof window<"u",Bi=t=>typeof t=="string",Fe=()=>{};Mn&&((zt=window==null?void 0:window.navigator)!=null&&zt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ut(t){return typeof t=="function"?t():u(t)}function qi(t,e){function n(...s){t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})}return n}function Gi(t,e={}){let n,s;return o=>{const a=ut(t),r=ut(e.maxWait);if(n&&clearTimeout(n),a<=0||r!==void 0&&r<=0)return s&&(clearTimeout(s),s=null),o();r&&!s&&(s=setTimeout(()=>{n&&clearTimeout(n),s=null,o()},r)),n=setTimeout(()=>{s&&clearTimeout(s),s=null,o()},a)}}function Ui(t){return t}function Ki(t){return kn()?(bn(t),!0):!1}function Ln(t,e=200,n={}){return qi(Gi(e,n),t)}function ot(t,e=200,n={}){if(e<=0)return t;const s=M(t.value),o=Ln(()=>{s.value=t.value},e,n);return W(t,()=>o()),s}function In(t,e,n){return W(t,(s,o,a)=>{s&&e(s,o,a)},n)}function Wi(t){var e;const n=ut(t);return(e=n==null?void 0:n.$el)!=null?e:n}const En=Mn?window:void 0;function He(...t){let e,n,s,o;if(Bi(t[0])?([n,s,o]=t,e=En):[e,n,s,o]=t,!e)return Fe;let a=Fe;const r=W(()=>Wi(e),l=>{a(),l&&(l.addEventListener(n,s,o),a=()=>{l.removeEventListener(n,s,o),a=Fe})},{immediate:!0,flush:"post"}),i=()=>{r(),a()};return Ki(i),i}const Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rt="__vueuse_ssr_handlers__";Ht[Rt]=Ht[Rt]||{};const Qi={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ji(t={}){const{reactive:e=!1,target:n=En,aliasMap:s=Qi,passive:o=!0,onEventFired:a=Fe}=t,r=Se(new Set),i={toJSON(){return{}},current:r},l=e?Se(i):i,d=new Set,f=new Set;function k(m,g){m in l&&(e?l[m]=g:l[m].value=g)}function v(){for(const m of f)k(m,!1)}function b(m,g){var V,I;const x=(V=m.key)==null?void 0:V.toLowerCase(),z=[(I=m.code)==null?void 0:I.toLowerCase(),x].filter(Boolean);x&&(g?r.add(x):r.delete(x));for(const q of z)f.add(q),k(q,g);x==="meta"&&!g?(d.forEach(q=>{r.delete(q),k(q,!1)}),d.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&g&&[...r,...z].forEach(q=>d.add(q))}He(n,"keydown",m=>(b(m,!0),a(m)),{passive:o}),He(n,"keyup",m=>(b(m,!1),a(m)),{passive:o}),He("blur",v,{passive:!0}),He("focus",v,{passive:!0});const w=new Proxy(l,{get(m,g,V){if(typeof g!="string")return Reflect.get(m,g,V);if(g=g.toLowerCase(),g in s&&(g=s[g]),!(g in l))if(/[+_-]/.test(g)){const x=g.split(/[+_-]/g).map(z=>z.trim());l[g]=P(()=>x.every(z=>u(w[z])))}else l[g]=M(!1);const I=Reflect.get(m,g,V);return e?u(I):I}});return w}var Dt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Dt||(Dt={}));var Zi=Object.defineProperty,jt=Object.getOwnPropertySymbols,Yi=Object.prototype.hasOwnProperty,Xi=Object.prototype.propertyIsEnumerable,Ft=(t,e,n)=>e in t?Zi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,el=(t,e)=>{for(var n in e||(e={}))Yi.call(e,n)&&Ft(t,n,e[n]);if(jt)for(var n of jt(e))Xi.call(e,n)&&Ft(t,n,e[n]);return t};const tl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};el({linear:Ui},tl);function fe(t){return Array.isArray?Array.isArray(t):xn(t)==="[object Array]"}const nl=1/0;function sl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-nl?"-0":e}function ol(t){return t==null?"":sl(t)}function ue(t){return typeof t=="string"}function On(t){return typeof t=="number"}function al(t){return t===!0||t===!1||rl(t)&&xn(t)=="[object Boolean]"}function Vn(t){return typeof t=="object"}function rl(t){return Vn(t)&&t!==null}function ae(t){return t!=null}function at(t){return!t.trim().length}function xn(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const il="Incorrect 'index' type",ll=t=>`Invalid value for key ${t}`,cl=t=>`Pattern length exceeds max of ${t}.`,ul=t=>`Missing ${t} property in key`,dl=t=>`Property 'weight' in key '${t}' must be a positive integer`,Bt=Object.prototype.hasOwnProperty;class hl{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(s=>{let o=An(s);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(s=>{s.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function An(t){let e=null,n=null,s=null,o=1,a=null;if(ue(t)||fe(t))s=t,e=qt(t),n=dt(t);else{if(!Bt.call(t,"name"))throw new Error(ul("name"));const r=t.name;if(s=r,Bt.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(dl(r));e=qt(r),n=dt(r),a=t.getFn}return{path:e,id:n,weight:o,src:s,getFn:a}}function qt(t){return fe(t)?t:t.split(".")}function dt(t){return fe(t)?t.join("."):t}function pl(t,e){let n=[],s=!1;const o=(a,r,i)=>{if(ae(a))if(!r[i])n.push(a);else{let l=r[i];const d=a[l];if(!ae(d))return;if(i===r.length-1&&(ue(d)||On(d)||al(d)))n.push(ol(d));else if(fe(d)){s=!0;for(let f=0,k=d.length;f<k;f+=1)o(d[f],r,i+1)}else r.length&&o(d,r,i+1)}};return o(t,ue(e)?e.split("."):e,0),s?n:n[0]}const fl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ml={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},vl={location:0,threshold:.6,distance:100},gl={useExtendedSearch:!1,getFn:pl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var T={...ml,...fl,...vl,...gl};const _l=/[^ ]+/g;function kl(t=1,e=3){const n=new Map,s=Math.pow(10,e);return{get(o){const a=o.match(_l).length;if(n.has(a))return n.get(a);const r=1/Math.pow(a,.5*t),i=parseFloat(Math.round(r*s)/s);return n.set(a,i),i},clear(){n.clear()}}}class xt{constructor({getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){this.norm=kl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ue(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();ue(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!ae(e)||at(e))return;let s={v:e,i:n,n:this.norm.get(e)};this.records.push(s)}_addObject(e,n){let s={i:n,$:{}};this.keys.forEach((o,a)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(ae(r)){if(fe(r)){let i=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:d,value:f}=l.pop();if(ae(f))if(ue(f)&&!at(f)){let k={v:f,i:d,n:this.norm.get(f)};i.push(k)}else fe(f)&&f.forEach((k,v)=>{l.push({nestedArrIndex:v,value:k})})}s.$[a]=i}else if(ue(r)&&!at(r)){let i={v:r,n:this.norm.get(r)};s.$[a]=i}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Tn(t,e,{getFn:n=T.getFn,fieldNormWeight:s=T.fieldNormWeight}={}){const o=new xt({getFn:n,fieldNormWeight:s});return o.setKeys(t.map(An)),o.setSources(e),o.create(),o}function bl(t,{getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){const{keys:s,records:o}=t,a=new xt({getFn:e,fieldNormWeight:n});return a.setKeys(s),a.setIndexRecords(o),a}function Re(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:o=T.distance,ignoreLocation:a=T.ignoreLocation}={}){const r=e/t.length;if(a)return r;const i=Math.abs(s-n);return o?r+i/o:i?1:r}function yl(t=[],e=T.minMatchCharLength){let n=[],s=-1,o=-1,a=0;for(let r=t.length;a<r;a+=1){let i=t[a];i&&s===-1?s=a:!i&&s!==-1&&(o=a-1,o-s+1>=e&&n.push([s,o]),s=-1)}return t[a-1]&&a-s>=e&&n.push([s,a-1]),n}const ye=32;function wl(t,e,n,{location:s=T.location,distance:o=T.distance,threshold:a=T.threshold,findAllMatches:r=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,includeMatches:l=T.includeMatches,ignoreLocation:d=T.ignoreLocation}={}){if(e.length>ye)throw new Error(cl(ye));const f=e.length,k=t.length,v=Math.max(0,Math.min(s,k));let b=a,w=v;const m=i>1||l,g=m?Array(k):[];let V;for(;(V=t.indexOf(e,w))>-1;){let G=Re(e,{currentLocation:V,expectedLocation:v,distance:o,ignoreLocation:d});if(b=Math.min(G,b),w=V+f,m){let N=0;for(;N<f;)g[V+N]=1,N+=1}}w=-1;let I=[],x=1,z=f+k;const q=1<<f-1;for(let G=0;G<f;G+=1){let N=0,D=z;for(;N<D;)Re(e,{errors:G,currentLocation:v+D,expectedLocation:v,distance:o,ignoreLocation:d})<=b?N=D:z=D,D=Math.floor((z-N)/2+N);z=D;let ne=Math.max(1,v-D+1),pe=r?k:Math.min(v+D,k)+f,oe=Array(pe+2);oe[pe+1]=(1<<G)-1;for(let E=pe;E>=ne;E-=1){let F=E-1,X=n[t.charAt(F)];if(m&&(g[F]=+!!X),oe[E]=(oe[E+1]<<1|1)&X,G&&(oe[E]|=(I[E+1]|I[E])<<1|1|I[E+1]),oe[E]&q&&(x=Re(e,{errors:G,currentLocation:F,expectedLocation:v,distance:o,ignoreLocation:d}),x<=b)){if(b=x,w=F,w<=v)break;ne=Math.max(1,2*v-w)}}if(Re(e,{errors:G+1,currentLocation:v,expectedLocation:v,distance:o,ignoreLocation:d})>b)break;I=oe}const Z={isMatch:w>=0,score:Math.max(.001,x)};if(m){const G=yl(g,i);G.length?l&&(Z.indices=G):Z.isMatch=!1}return Z}function $l(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<s-n-1}return e}class Nn{constructor(e,{location:n=T.location,threshold:s=T.threshold,distance:o=T.distance,includeMatches:a=T.includeMatches,findAllMatches:r=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:o,includeMatches:a,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(v,b)=>{this.chunks.push({pattern:v,alphabet:$l(v),startIndex:b})},k=this.pattern.length;if(k>ye){let v=0;const b=k%ye,w=k-b;for(;v<w;)f(this.pattern.substr(v,ye),v),v+=ye;if(b){const m=k-ye;f(this.pattern.substr(m),m)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return s&&(w.indices=[[0,e.length-1]]),w}const{location:o,distance:a,threshold:r,findAllMatches:i,minMatchCharLength:l,ignoreLocation:d}=this.options;let f=[],k=0,v=!1;this.chunks.forEach(({pattern:w,alphabet:m,startIndex:g})=>{const{isMatch:V,score:I,indices:x}=wl(e,w,m,{location:o+g,distance:a,threshold:r,findAllMatches:i,minMatchCharLength:l,includeMatches:s,ignoreLocation:d});V&&(v=!0),k+=I,V&&x&&(f=[...f,...x])});let b={isMatch:v,score:v?k/this.chunks.length:1};return v&&s&&(b.indices=f),b}}class ke{constructor(e){this.pattern=e}static isMultiMatch(e){return Gt(e,this.multiRegex)}static isSingleMatch(e){return Gt(e,this.singleRegex)}search(){}}function Gt(t,e){const n=t.match(e);return n?n[1]:null}class Sl extends ke{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Cl extends ke{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Pl extends ke{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ml extends ke{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ll extends ke{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Il extends ke{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zn extends ke{constructor(e,{location:n=T.location,threshold:s=T.threshold,distance:o=T.distance,includeMatches:a=T.includeMatches,findAllMatches:r=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){super(e),this._bitapSearch=new Nn(e,{location:n,threshold:s,distance:o,includeMatches:a,findAllMatches:r,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Hn extends ke{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,s;const o=[],a=this.pattern.length;for(;(s=e.indexOf(this.pattern,n))>-1;)n=s+a,o.push([s,n-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const ht=[Sl,Hn,Pl,Ml,Il,Ll,Cl,zn],Ut=ht.length,El=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ol="|";function Vl(t,e={}){return t.split(Ol).map(n=>{let s=n.trim().split(El).filter(a=>a&&!!a.trim()),o=[];for(let a=0,r=s.length;a<r;a+=1){const i=s[a];let l=!1,d=-1;for(;!l&&++d<Ut;){const f=ht[d];let k=f.isMultiMatch(i);k&&(o.push(new f(k,e)),l=!0)}if(!l)for(d=-1;++d<Ut;){const f=ht[d];let k=f.isSingleMatch(i);if(k){o.push(new f(k,e));break}}}return o})}const xl=new Set([zn.type,Hn.type]);class Al{constructor(e,{isCaseSensitive:n=T.isCaseSensitive,includeMatches:s=T.includeMatches,minMatchCharLength:o=T.minMatchCharLength,ignoreLocation:a=T.ignoreLocation,findAllMatches:r=T.findAllMatches,location:i=T.location,threshold:l=T.threshold,distance:d=T.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:o,findAllMatches:r,ignoreLocation:a,location:i,threshold:l,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=Vl(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,r=[],i=0;for(let l=0,d=n.length;l<d;l+=1){const f=n[l];r.length=0,a=0;for(let k=0,v=f.length;k<v;k+=1){const b=f[k],{isMatch:w,indices:m,score:g}=b.search(e);if(w){if(a+=1,i+=g,s){const V=b.constructor.type;xl.has(V)?r=[...r,...m]:r.push(m)}}else{i=0,a=0,r.length=0;break}}if(a){let k={isMatch:!0,score:i/a};return s&&(k.indices=r),k}}return{isMatch:!1,score:1}}}const pt=[];function Tl(...t){pt.push(...t)}function ft(t,e){for(let n=0,s=pt.length;n<s;n+=1){let o=pt[n];if(o.condition(t,e))return new o(t,e)}return new Nn(t,e)}const Ge={AND:"$and",OR:"$or"},mt={PATH:"$path",PATTERN:"$val"},vt=t=>!!(t[Ge.AND]||t[Ge.OR]),Nl=t=>!!t[mt.PATH],zl=t=>!fe(t)&&Vn(t)&&!vt(t),Kt=t=>({[Ge.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Rn(t,e,{auto:n=!0}={}){const s=o=>{let a=Object.keys(o);const r=Nl(o);if(!r&&a.length>1&&!vt(o))return s(Kt(o));if(zl(o)){const l=r?o[mt.PATH]:a[0],d=r?o[mt.PATTERN]:o[l];if(!ue(d))throw new Error(ll(l));const f={keyId:dt(l),pattern:d};return n&&(f.searcher=ft(d,e)),f}let i={children:[],operator:a[0]};return a.forEach(l=>{const d=o[l];fe(d)&&d.forEach(f=>{i.children.push(s(f))})}),i};return vt(t)||(t=Kt(t)),s(t)}function Hl(t,{ignoreFieldNorm:e=T.ignoreFieldNorm}){t.forEach(n=>{let s=1;n.matches.forEach(({key:o,norm:a,score:r})=>{const i=o?o.weight:null;s*=Math.pow(r===0&&i?Number.EPSILON:r,(i||1)*(e?1:a))}),n.score=s})}function Rl(t,e){const n=t.matches;e.matches=[],ae(n)&&n.forEach(s=>{if(!ae(s.indices)||!s.indices.length)return;const{indices:o,value:a}=s;let r={indices:o,value:a};s.key&&(r.key=s.key.src),s.idx>-1&&(r.refIndex=s.idx),e.matches.push(r)})}function Dl(t,e){e.score=t.score}function jl(t,e,{includeMatches:n=T.includeMatches,includeScore:s=T.includeScore}={}){const o=[];return n&&o.push(Rl),s&&o.push(Dl),t.map(a=>{const{idx:r}=a,i={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(a,i)}),i})}class Ce{constructor(e,n={},s){this.options={...T,...n},this.options.useExtendedSearch,this._keyStore=new hl(this.options.keys),this.setCollection(e,s)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof xt))throw new Error(il);this._myIndex=n||Tn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!ae(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let s=0,o=this._docs.length;s<o;s+=1){const a=this._docs[s];e(a,s)&&(this.removeAt(s),s-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:s,includeScore:o,shouldSort:a,sortFn:r,ignoreFieldNorm:i}=this.options;let l=ue(e)?ue(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Hl(l,{ignoreFieldNorm:i}),a&&l.sort(r),On(n)&&n>-1&&(l=l.slice(0,n)),jl(l,this._docs,{includeMatches:s,includeScore:o})}_searchStringList(e){const n=ft(e,this.options),{records:s}=this._myIndex,o=[];return s.forEach(({v:a,i:r,n:i})=>{if(!ae(a))return;const{isMatch:l,score:d,indices:f}=n.searchIn(a);l&&o.push({item:a,idx:r,matches:[{score:d,value:a,norm:i,indices:f}]})}),o}_searchLogical(e){const n=Rn(e,this.options),s=(i,l,d)=>{if(!i.children){const{keyId:k,searcher:v}=i,b=this._findMatches({key:this._keyStore.get(k),value:this._myIndex.getValueForItemAtKeyId(l,k),searcher:v});return b&&b.length?[{idx:d,item:l,matches:b}]:[]}const f=[];for(let k=0,v=i.children.length;k<v;k+=1){const b=i.children[k],w=s(b,l,d);if(w.length)f.push(...w);else if(i.operator===Ge.AND)return[]}return f},o=this._myIndex.records,a={},r=[];return o.forEach(({$:i,i:l})=>{if(ae(i)){let d=s(n,i,l);d.length&&(a[l]||(a[l]={idx:l,item:i,matches:[]},r.push(a[l])),d.forEach(({matches:f})=>{a[l].matches.push(...f)}))}}),r}_searchObjectList(e){const n=ft(e,this.options),{keys:s,records:o}=this._myIndex,a=[];return o.forEach(({$:r,i})=>{if(!ae(r))return;let l=[];s.forEach((d,f)=>{l.push(...this._findMatches({key:d,value:r[f],searcher:n}))}),l.length&&a.push({idx:i,item:r,matches:l})}),a}_findMatches({key:e,value:n,searcher:s}){if(!ae(n))return[];let o=[];if(fe(n))n.forEach(({v:a,i:r,n:i})=>{if(!ae(a))return;const{isMatch:l,score:d,indices:f}=s.searchIn(a);l&&o.push({score:d,key:e,value:a,idx:r,norm:i,indices:f})});else{const{v:a,n:r}=n,{isMatch:i,score:l,indices:d}=s.searchIn(a);i&&o.push({score:l,key:e,value:a,norm:r,indices:d})}return o}}Ce.version="6.6.2";Ce.createIndex=Tn;Ce.parseIndex=bl;Ce.config=T;Ce.parseQuery=Rn;Tl(Al);const Wt=Se({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ee=()=>({isSearching:P(()=>Wt.search!==""),...rs(Wt)});function Fl(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(o){o(n)}),(s=t.get("*"))&&s.slice().map(function(o){o(e,n)})}}}const Bl=Fl(),Ye=()=>({emitter:Bl});function ql(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function Gl(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const Ul=["command-theme"],Kl={"command-root":""},Wl=S({name:"Command"}),Ql=S({...Wl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,s='[command-item=""]',o="command-item-key",a='[command-group=""]',r="command-group-key",i='[command-group-heading=""]',l=`${s}:not([aria-disabled="true"])`,d=`${s}[aria-selected="true"]`,f="command-item-select",k="data-value";wt("theme",n.theme||"default");const{selectedNode:v,search:b,dataValue:w,filtered:m}=Ee(),{emitter:g}=Ye(),V=M(),I=ot(M(new Map),333),x=ot(M(new Set),333),z=ot(M(new Map)),q=P(()=>{const O=[];for(const[U,j]of I.value.entries())O.push({key:U,label:j});return O}),Z=P(()=>{const O=Ce.createIndex(n.fuseOptions.keys,q.value);return new Ce(q.value,n.fuseOptions,O)}),G=()=>{var O,U,j;const Q=N();Q&&(((O=Q.parentElement)==null?void 0:O.firstElementChild)===Q&&((j=(U=Q.closest(a))==null?void 0:U.querySelector(i))==null||j.scrollIntoView({block:"nearest"})),Q.scrollIntoView({block:"nearest"}))},N=()=>{var O;return(O=V.value)==null?void 0:O.querySelector(d)},D=(O=V.value)=>{const U=O==null?void 0:O.querySelectorAll(l);return U?Array.from(U):[]},ne=()=>{var O;const U=(O=V.value)==null?void 0:O.querySelectorAll(a);return U?Array.from(U):[]},pe=()=>{const[O]=D();O&&O.getAttribute(o)&&(v.value=O.getAttribute(o)||"")},oe=O=>{const U=D()[O];U&&(v.value=U.getAttribute(o)||"")},E=O=>{const U=N(),j=D(),Q=j.findIndex(ze=>ze===U),ge=j[Q+O];ge?v.value=ge.getAttribute(o)||"":O>0?oe(0):oe(j.length-1)},F=O=>{const U=N();let j=U==null?void 0:U.closest(a),Q=null;for(;j&&!Q;)j=O>0?ql(j,a):Gl(j,a),Q=j==null?void 0:j.querySelector(l);Q?v.value=Q.getAttribute(o)||"":E(O)},X=()=>oe(0),J=()=>oe(D().length-1),Me=O=>{O.preventDefault(),O.metaKey?J():O.altKey?F(1):E(1)},tt=O=>{O.preventDefault(),O.metaKey?X():O.altKey?F(-1):E(-1)},nt=O=>{switch(O.key){case"n":case"j":{O.ctrlKey&&Me(O);break}case"ArrowDown":{Me(O);break}case"p":case"k":{O.ctrlKey&&tt(O);break}case"ArrowUp":{tt(O);break}case"Home":{X();break}case"End":{J();break}case"Enter":{const U=N();if(U){const j=new Event(f);U.dispatchEvent(j)}}}},se=()=>{if(!b.value){m.value.count=x.value.size;return}m.value.groups=new Set("");const O=new Map,U=Z.value.search(b.value).map(j=>j.item);for(const{key:j,label:Q}of U)O.set(j,Q);for(const[j,Q]of z.value)for(const ge of Q)O.get(ge)&&m.value.groups.add(j);ce(()=>{m.value.count=O.size,m.value.items=O})},be=()=>{const O=D(),U=ne();for(const j of O){const Q=j.getAttribute(o)||"",ge=j.getAttribute(k)||"";x.value.add(Q),I.value.set(Q,ge),m.value.count=I.value.size}for(const j of U){const Q=D(j),ge=j.getAttribute(r)||"",ze=new Set("");for(const Xn of Q){const es=Xn.getAttribute(o)||"";ze.add(es)}z.value.set(ge,ze)}};W(()=>v.value,O=>{O&&ce(G)},{deep:!0}),W(()=>b.value,O=>{se(),ce(pe)}),g.on("selectItem",O=>{e("select-item",O)});const Yn=Ln(O=>{O&&(be(),ce(pe))},100);return g.on("rerenderList",Yn),me(()=>{be(),pe()}),(O,U)=>(c(),p("div",{class:B(t.theme),onKeydown:nt,ref_key:"commandRef",ref:V,"command-theme":t.theme},[h("div",Kl,[_(O.$slots,"default")])],42,Ul))}}),Oe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,o]of e)n[s]=o;return n},gt=Oe(Ql,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Jl={"command-dialog":""},Zl={"command-dialog-mask":""},Yl={"command-dialog-wrapper":""},Xl={"command-dialog-header":""},ec={"command-dialog-body":""},tc={key:0,"command-dialog-footer":""},nc=S({name:"Command.Dialog"}),sc=S({...nc,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:s,filtered:o}=Ee(),{emitter:a}=Ye(),r=M();a.on("selectItem",l=>{e("select-item",l)});const i=()=>{s.value="",o.value.count=0,o.value.items=new Map,o.value.groups=new Set};return In(()=>n.visible,i),$t(i),(l,d)=>(c(),A(as,{to:"body",ref_key:"dialogRef",ref:r},[$(Ke,{name:"command-dialog",appear:""},{default:y(()=>[t.visible?(c(),A(gt,{key:0,theme:t.theme},{default:y(()=>[h("div",Jl,[h("div",Zl,[h("div",Yl,[h("div",Xl,[_(l.$slots,"header")]),h("div",ec,[_(l.$slots,"body")]),l.$slots.footer?(c(),p("div",tc,[_(l.$slots,"footer")])):C("v-if",!0)])])])]),_:3},8,["theme"])):C("v-if",!0)]),_:3})],512))}}),oc=Oe(sc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Dn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const ac=["command-group-key","data-value"],rc={key:0,"command-group-heading":""},ic={"command-group-items":"",role:"group"},lc=S({name:"Command.Group"}),cc=S({...lc,props:{heading:{type:String,required:!0}},setup(t){const e=P(()=>`command-group-${Dn()}`),{filtered:n,isSearching:s}=Ee(),o=P(()=>s.value?n.value.groups.has(e.value):!0);return(a,r)=>gn((c(),p("div",{"command-group":"",role:"presentation",key:u(e),"command-group-key":u(e),"data-value":t.heading},[t.heading?(c(),p("div",rc,H(t.heading),1)):C("v-if",!0),h("div",ic,[_(a.$slots,"default")])],8,ac)),[[_n,u(o)]])}}),uc=Oe(cc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),dc=["placeholder","value"],hc=S({name:"Command.Input"}),pc=S({...hc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=M(null),{search:s}=Ee(),o=P(()=>s.value),a=r=>{const i=r,l=r.target;s.value=l==null?void 0:l.value,e("input",i),e("update:value",s.value)};return _e(()=>{var r;(r=n.value)==null||r.focus()}),(r,i)=>(c(),p("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:u(o),onInput:a},null,40,dc))}}),fc=Oe(pc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),mc=["aria-selected","aria-disabled","command-item-key"],vc=S({name:"Command.Item"}),gc=S({...vc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,s="command-item-select",o="data-value",{current:a}=Ji(),{selectedNode:r,filtered:i,isSearching:l}=Ee(),{emitter:d}=Ye(),f=M(),k=P(()=>`command-item-${Dn()}`),v=P(()=>{const m=i.value.items.get(k.value);return l.value?m!==void 0:!0}),b=P(()=>Array.from(a)),w=()=>{var m;const g={key:k.value,value:((m=f.value)==null?void 0:m.getAttribute(o))||""};e("select",g),d.emit("selectItem",g)};return In(b,m=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(g=>a.has(g.toLowerCase()))&&n.perform&&n.perform()}),_e(()=>{var m;(m=f.value)==null||m.addEventListener(s,w)}),$t(()=>{var m;(m=f.value)==null||m.removeEventListener(s,w)}),(m,g)=>gn((c(),p("div",{ref_key:"itemRef",ref:f,"command-item":"",role:"option","aria-selected":u(r)===u(k),"aria-disabled":!u(v),key:u(k),"command-item-key":u(k),onClick:w},[_(m.$slots,"default")],8,mc)),[[_n,u(v)]])}}),_c=Oe(gc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),kc=S({name:"Command.List"}),bc=S({...kc,setup(t){const{emitter:e}=Ye(),n=M(),s=M();let o=null,a;return _e(()=>{a=s.value;const r=n.value;a&&r&&(o=new ResizeObserver(i=>{ce(()=>{const l=a==null?void 0:a.offsetHeight;r==null||r.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),o.observe(a))}),$t(()=>{o!==null&&a&&o.unobserve(a)}),(r,i)=>(c(),p("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[h("div",{"command-list-sizer":"",ref_key:"heightRef",ref:s},[_(r.$slots,"default")],512)],512))}}),yc=Oe(bc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),wc=S({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:s}=Ee(),o=P(()=>s.value.count===0);return()=>o.value?Be("div",{"command-empty":"",role:"presentation",...e},n):Be("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),$c=S({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>Be("div",{"command-loading":"",role:"progressbar",...e},n)}}),Sc=S({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>Be("div",{"command-separator":"",role:"separator",...e})}}),Le=Object.assign(gt,{Dialog:oc,Empty:wc,Group:uc,Input:fc,Item:_c,List:yc,Loading:$c,Separator:Sc,Root:gt});var Qt;const At=typeof window<"u",Cc=t=>typeof t=="function",Pc=t=>typeof t=="string",xe=()=>{},Mc=At&&((Qt=window==null?void 0:window.navigator)==null?void 0:Qt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ne(t){return typeof t=="function"?t():u(t)}function jn(t,e){function n(...s){return new Promise((o,a)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(o).catch(a)})}return n}const Fn=t=>t();function Lc(t,e=!0,n=!0,s=!1){let o=0,a,r=!0,i=xe,l;const d=()=>{a&&(clearTimeout(a),a=void 0,i(),i=xe)};return k=>{const v=Ne(t),b=Date.now()-o,w=()=>l=k();return d(),v<=0?(o=Date.now(),w()):(b>v&&(n||!r)?(o=Date.now(),w()):e&&(l=new Promise((m,g)=>{i=s?g:m,a=setTimeout(()=>{o=Date.now(),r=!0,m(w()),d()},Math.max(0,v-b))})),!n&&!a&&(a=setTimeout(()=>r=!0,v)),r=!1,l)}}function Ic(t=Fn){const e=M(!0);function n(){e.value=!1}function s(){e.value=!0}const o=(...a)=>{e.value&&t(...a)};return{isActive:yt(e),pause:n,resume:s,eventFilter:o}}function Ec(t){return t}function Xe(t){return kn()?(bn(t),!0):!1}function u1(t,e=200,n=!1,s=!0,o=!1){return jn(Lc(e,n,s,o),t)}function Oc(t){return typeof t=="function"?P(t):M(t)}function et(t,e=!0){is()?me(t):e?t():ce(t)}function d1(t,e,n={}){const{immediate:s=!0}=n,o=M(!1);let a=null;function r(){a&&(clearTimeout(a),a=null)}function i(){o.value=!1,r()}function l(...d){r(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,t(...d)},Ne(e))}return s&&(o.value=!0,At&&l()),Xe(i),{isPending:yt(o),start:l,stop:i}}var Jt=Object.getOwnPropertySymbols,Vc=Object.prototype.hasOwnProperty,xc=Object.prototype.propertyIsEnumerable,Ac=(t,e)=>{var n={};for(var s in t)Vc.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&Jt)for(var s of Jt(t))e.indexOf(s)<0&&xc.call(t,s)&&(n[s]=t[s]);return n};function Tc(t,e,n={}){const s=n,{eventFilter:o=Fn}=s,a=Ac(s,["eventFilter"]);return W(t,jn(o,e),a)}var Nc=Object.defineProperty,zc=Object.defineProperties,Hc=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,Bn=Object.prototype.hasOwnProperty,qn=Object.prototype.propertyIsEnumerable,Zt=(t,e,n)=>e in t?Nc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Rc=(t,e)=>{for(var n in e||(e={}))Bn.call(e,n)&&Zt(t,n,e[n]);if(Ue)for(var n of Ue(e))qn.call(e,n)&&Zt(t,n,e[n]);return t},Dc=(t,e)=>zc(t,Hc(e)),jc=(t,e)=>{var n={};for(var s in t)Bn.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&Ue)for(var s of Ue(t))e.indexOf(s)<0&&qn.call(t,s)&&(n[s]=t[s]);return n};function Gn(t,e,n={}){const s=n,{eventFilter:o}=s,a=jc(s,["eventFilter"]),{eventFilter:r,pause:i,resume:l,isActive:d}=Ic(o);return{stop:Tc(t,e,Dc(Rc({},a),{eventFilter:r})),pause:i,resume:l,isActive:d}}function de(t){var e;const n=Ne(t);return(e=n==null?void 0:n.$el)!=null?e:n}const re=At?window:void 0;function Y(...t){let e,n,s,o;if(Pc(t[0])||Array.isArray(t[0])?([n,s,o]=t,e=re):[e,n,s,o]=t,!e)return xe;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const a=[],r=()=>{a.forEach(f=>f()),a.length=0},i=(f,k,v,b)=>(f.addEventListener(k,v,b),()=>f.removeEventListener(k,v,b)),l=W(()=>[de(e),Ne(o)],([f,k])=>{r(),f&&a.push(...n.flatMap(v=>s.map(b=>i(f,v,b,k))))},{immediate:!0,flush:"post"}),d=()=>{l(),r()};return Xe(d),d}let Yt=!1;function h1(t,e,n={}){const{window:s=re,ignore:o=[],capture:a=!0,detectIframe:r=!1}=n;if(!s)return;Mc&&!Yt&&(Yt=!0,Array.from(s.document.body.children).forEach(v=>v.addEventListener("click",xe)));let i=!0;const l=v=>o.some(b=>{if(typeof b=="string")return Array.from(s.document.querySelectorAll(b)).some(w=>w===v.target||v.composedPath().includes(w));{const w=de(b);return w&&(v.target===w||v.composedPath().includes(w))}}),f=[Y(s,"click",v=>{const b=de(t);if(!(!b||b===v.target||v.composedPath().includes(b))){if(v.detail===0&&(i=!l(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:a}),Y(s,"pointerdown",v=>{const b=de(t);b&&(i=!v.composedPath().includes(b)&&!l(v))},{passive:!0}),r&&Y(s,"blur",v=>{var b;const w=de(t);((b=s.document.activeElement)==null?void 0:b.tagName)==="IFRAME"&&!(w!=null&&w.contains(s.document.activeElement))&&e(v)})].filter(Boolean);return()=>f.forEach(v=>v())}function Un(t,e=!1){const n=M(),s=()=>n.value=!!t();return s(),et(s,e),n}function Fc(t,e={}){const{window:n=re}=e,s=Un(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const a=M(!1),r=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{s.value&&(r(),o=n.matchMedia(Oc(t).value),a.value=o.matches,"addEventListener"in o?o.addEventListener("change",i):o.addListener(i))};return _e(i),Xe(()=>r()),a}function p1({window:t=re}={}){const e=s=>{const{state:o,length:a}=(t==null?void 0:t.history)||{},{hash:r,host:i,hostname:l,href:d,origin:f,pathname:k,port:v,protocol:b,search:w}=(t==null?void 0:t.location)||{};return{trigger:s,state:o,length:a,hash:r,host:i,hostname:l,href:d,origin:f,pathname:k,port:v,protocol:b,search:w}},n=M(e("load"));return t&&(Y(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),Y(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kt="__vueuse_ssr_handlers__";_t[kt]=_t[kt]||{};const Bc=_t[kt];function Kn(t,e){return Bc[t]||e}function qc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Gc=Object.defineProperty,Xt=Object.getOwnPropertySymbols,Uc=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?Gc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tn=(t,e)=>{for(var n in e||(e={}))Uc.call(e,n)&&en(t,n,e[n]);if(Xt)for(var n of Xt(e))Kc.call(e,n)&&en(t,n,e[n]);return t};const Wc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},nn="vueuse-storage";function Qc(t,e,n,s={}){var o;const{flush:a="pre",deep:r=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:d=!1,shallow:f,window:k=re,eventFilter:v,onError:b=N=>{console.error(N)}}=s,w=(f?Qe:M)(e);if(!n)try{n=Kn("getDefaultStorage",()=>{var N;return(N=re)==null?void 0:N.localStorage})()}catch(N){b(N)}if(!n)return w;const m=Ne(e),g=qc(m),V=(o=s.serializer)!=null?o:Wc[g],{pause:I,resume:x}=Gn(w,()=>z(w.value),{flush:a,deep:r,eventFilter:v});return k&&i&&(Y(k,"storage",G),Y(k,nn,Z)),G(),w;function z(N){try{if(N==null)n.removeItem(t);else{const D=V.write(N),ne=n.getItem(t);ne!==D&&(n.setItem(t,D),k&&k.dispatchEvent(new CustomEvent(nn,{detail:{key:t,oldValue:ne,newValue:D,storageArea:n}})))}}catch(D){b(D)}}function q(N){const D=N?N.newValue:n.getItem(t);if(D==null)return l&&m!==null&&n.setItem(t,V.write(m)),m;if(!N&&d){const ne=V.read(D);return Cc(d)?d(ne,m):g==="object"&&!Array.isArray(ne)?tn(tn({},m),ne):ne}else return typeof D!="string"?D:V.read(D)}function Z(N){G(N.detail)}function G(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){w.value=m;return}if(!(N&&N.key!==t)){I();try{w.value=q(N)}catch(D){b(D)}finally{N?ce(x):x()}}}}}function Wn(t){return Fc("(prefers-color-scheme: dark)",t)}var Jc=Object.defineProperty,sn=Object.getOwnPropertySymbols,Zc=Object.prototype.hasOwnProperty,Yc=Object.prototype.propertyIsEnumerable,on=(t,e,n)=>e in t?Jc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xc=(t,e)=>{for(var n in e||(e={}))Zc.call(e,n)&&on(t,n,e[n]);if(sn)for(var n of sn(e))Yc.call(e,n)&&on(t,n,e[n]);return t};function eu(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:o=re,storage:a,storageKey:r="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:d}=t,f=Xc({auto:"",light:"light",dark:"dark"},t.modes||{}),k=Wn({window:o}),v=P(()=>k.value?"dark":"light"),b=l||(r==null?M(s):Qc(r,s,a,{window:o,listenToStorageChanges:i})),w=P({get(){return b.value==="auto"&&!d?v.value:b.value},set(I){b.value=I}}),m=Kn("updateHTMLAttrs",(I,x,z)=>{const q=o==null?void 0:o.document.querySelector(I);if(q)if(x==="class"){const Z=z.split(/\s/g);Object.values(f).flatMap(G=>(G||"").split(/\s/g)).filter(Boolean).forEach(G=>{Z.includes(G)?q.classList.add(G):q.classList.remove(G)})}else q.setAttribute(x,z)});function g(I){var x;const z=I==="auto"?v.value:I;m(e,n,(x=f[z])!=null?x:z)}function V(I){t.onChanged?t.onChanged(I,g):g(I)}return W(w,V,{flush:"post",immediate:!0}),d&&W(v,()=>V(w.value),{flush:"post"}),et(()=>V(w.value)),w}var tu=Object.defineProperty,nu=Object.defineProperties,su=Object.getOwnPropertyDescriptors,an=Object.getOwnPropertySymbols,ou=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,rn=(t,e,n)=>e in t?tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ru=(t,e)=>{for(var n in e||(e={}))ou.call(e,n)&&rn(t,n,e[n]);if(an)for(var n of an(e))au.call(e,n)&&rn(t,n,e[n]);return t},iu=(t,e)=>nu(t,su(e));function f1(t={}){const{valueDark:e="dark",valueLight:n="",window:s=re}=t,o=eu(iu(ru({},t),{onChanged:(i,l)=>{var d;t.onChanged?(d=t.onChanged)==null||d.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),a=Wn({window:s});return P({get(){return o.value==="dark"},set(i){i===a.value?o.value="auto":o.value=i?"dark":"light"}})}var ln=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable,uu=(t,e)=>{var n={};for(var s in t)lu.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&ln)for(var s of ln(t))e.indexOf(s)<0&&cu.call(t,s)&&(n[s]=t[s]);return n};function du(t,e,n={}){const s=n,{window:o=re}=s,a=uu(s,["window"]);let r;const i=Un(()=>o&&"ResizeObserver"in o),l=()=>{r&&(r.disconnect(),r=void 0)},d=W(()=>de(t),k=>{l(),i.value&&o&&k&&(r=new ResizeObserver(e),r.observe(k,a))},{immediate:!0,flush:"post"}),f=()=>{l(),d()};return Xe(f),{isSupported:i,stop:f}}function m1(t,e={}){const{reset:n=!0,windowResize:s=!0,windowScroll:o=!0,immediate:a=!0}=e,r=M(0),i=M(0),l=M(0),d=M(0),f=M(0),k=M(0),v=M(0),b=M(0);function w(){const m=de(t);if(!m){n&&(r.value=0,i.value=0,l.value=0,d.value=0,f.value=0,k.value=0,v.value=0,b.value=0);return}const g=m.getBoundingClientRect();r.value=g.height,i.value=g.bottom,l.value=g.left,d.value=g.right,f.value=g.top,k.value=g.width,v.value=g.x,b.value=g.y}return du(t,w),W(()=>de(t),m=>!m&&w()),o&&Y("scroll",w,{capture:!0,passive:!0}),s&&Y("resize",w,{passive:!0}),et(()=>{a&&w()}),{height:r,bottom:i,left:l,right:d,top:f,width:k,x:v,y:b,update:w}}function v1(t,{window:e=re,scrollTarget:n}={}){const s=M(!1),o=()=>{if(!e)return;const a=e.document,r=de(t);if(!r)s.value=!1;else{const i=r.getBoundingClientRect();s.value=i.top<=(e.innerHeight||a.documentElement.clientHeight)&&i.left<=(e.innerWidth||a.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return W(()=>de(t),()=>o(),{immediate:!0,flush:"post"}),e&&Y(n||e,"scroll",o,{capture:!1,passive:!0}),s}const hu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function pu(t={}){const{reactive:e=!1,target:n=re,aliasMap:s=hu,passive:o=!0,onEventFired:a=xe}=t,r=Se(new Set),i={toJSON(){return{}},current:r},l=e?Se(i):i,d=new Set,f=new Set;function k(m,g){m in l&&(e?l[m]=g:l[m].value=g)}function v(){r.clear();for(const m of f)k(m,!1)}function b(m,g){var V,I;const x=(V=m.key)==null?void 0:V.toLowerCase(),q=[(I=m.code)==null?void 0:I.toLowerCase(),x].filter(Boolean);x&&(g?r.add(x):r.delete(x));for(const Z of q)f.add(Z),k(Z,g);x==="meta"&&!g?(d.forEach(Z=>{r.delete(Z),k(Z,!1)}),d.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&g&&[...r,...q].forEach(Z=>d.add(Z))}Y(n,"keydown",m=>(b(m,!0),a(m)),{passive:o}),Y(n,"keyup",m=>(b(m,!1),a(m)),{passive:o}),Y("blur",v,{passive:!0}),Y("focus",v,{passive:!0});const w=new Proxy(l,{get(m,g,V){if(typeof g!="string")return Reflect.get(m,g,V);if(g=g.toLowerCase(),g in s&&(g=s[g]),!(g in l))if(/[+_-]/.test(g)){const x=g.split(/[+_-]/g).map(z=>z.trim());l[g]=P(()=>x.every(z=>u(w[z])))}else l[g]=M(!1);const I=Reflect.get(m,g,V);return e?u(I):I}});return w}var cn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cn||(cn={}));var fu=Object.defineProperty,un=Object.getOwnPropertySymbols,mu=Object.prototype.hasOwnProperty,vu=Object.prototype.propertyIsEnumerable,dn=(t,e,n)=>e in t?fu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gu=(t,e)=>{for(var n in e||(e={}))mu.call(e,n)&&dn(t,n,e[n]);if(un)for(var n of un(e))vu.call(e,n)&&dn(t,n,e[n]);return t};const _u={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gu({linear:Ec},_u);function g1(t="history",e={}){const{initialValue:n={},removeNullishValues:s=!0,removeFalsyValues:o=!1,write:a=!0,window:r=re}=e;if(!r)return Se(n);const i=Se({});function l(){if(t==="history")return r.location.search||"";if(t==="hash"){const V=r.location.hash||"",I=V.indexOf("?");return I>0?V.slice(I):""}else return(r.location.hash||"").replace(/^#/,"")}function d(V){const I=V.toString();if(t==="history")return`${I?`?${I}`:""}${r.location.hash||""}`;if(t==="hash-params")return`${r.location.search||""}${I?`#${I}`:""}`;const x=r.location.hash||"#",z=x.indexOf("?");return z>0?`${x.slice(0,z)}${I?`?${I}`:""}`:`${x}${I?`?${I}`:""}`}function f(){return new URLSearchParams(l())}function k(V){const I=new Set(Object.keys(i));for(const x of V.keys()){const z=V.getAll(x);i[x]=z.length>1?z:V.get(x)||"",I.delete(x)}Array.from(I).forEach(x=>delete i[x])}const{pause:v,resume:b}=Gn(i,()=>{const V=new URLSearchParams("");Object.keys(i).forEach(I=>{const x=i[I];Array.isArray(x)?x.forEach(z=>V.append(I,z)):s&&x==null||o&&!x?V.delete(I):V.set(I,x)}),w(V)},{deep:!0});function w(V,I){v(),I&&k(V),r.history.replaceState(r.history.state,r.document.title,r.location.pathname+d(V)),b()}function m(){a&&w(f(),!0)}Y(r,"popstate",m,!1),t!=="history"&&Y(r,"hashchange",m,!1);const g=f();return g.keys().next().value?k(g):Object.assign(i,n),i}function ku(t={}){const{window:e=re,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:o=!0,includeScrollbar:a=!0}=t,r=M(n),i=M(s),l=()=>{e&&(a?(r.value=e.innerWidth,i.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),et(l),Y("resize",l,{passive:!0}),o&&Y("orientationchange",l,{passive:!0}),{width:r,height:i}}const hn=M([{route:"/about.html",meta:{description:"",sticky:1,title:"",date:"2023-05-18 07:26:49"}},{route:"/booklet/design/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/booklet/distributed/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/booklet/highConcurrency/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/booklet/k8s/etcd.html",meta:{description:"",title:"etcd",comment:!0,tags:["k8s","Docker"],categories:["学习小册"],sticky:1,date:"2023-08-01 09:14:32"}},{route:"/booklet/k8s/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/booklet/k8s/初识k8s和动手实践.html",meta:{description:`
## 什么是Kubernetes

Kubernetes 是一个可扩展的，用于容器化应用程序编排，管理的平台。Kubernetes 建立在 [Google 大规模运行生产工作负载十几年经验](https://research.google/pubs/pub43438)的基础上， 结合了社区中最优秀的想法和实践。由Google于2014年开源出来，目前在国内外大大小小的公司都得到了广泛的应用。

**Kubernetes** 这个名字源于希腊语，意为“舵手”或“飞行员”。k8s 这个缩写是因为 k 和 s 之间有八个字符的关系。后面都用简称k8s。

k8s 可支持公有云，私有云及混合云等，具备良好的可移植性。我们可直接使用它或在其之上构建自己的容器/云平台，以达到快速部署，快速扩展，及优化资源使用等。它致力于提供通用接口类似 CNI( Container Network Interface ), CSI(Container Storage Interface), CRI(Container Runtime Interface)等规范，以便有更多可能, 让更多的厂商共同加入其生态 体系内。

## 为什么需要k8s

不论是前端，后端，或者运维人员，可能都遇到过node安装版本不一致，服务器和本地环境不一致，频繁部署环境中间出现各种安装不了等问题。对于这些问题，目前来看最好的解决办法是标准化，容器化。目前用的最多的是Docker，通过Dockerfile对环境进行描述，对镜像进行交付，使用时不再关注环境不一致的问题。

作为一个技术人员，我们应该对整体的体系架构有所了解, 掌握更多 的技能，了解软件的完整生命周期，包括开发，交付，部署，以及当 流量变大时的扩容等。

在容器编排领域目前用的比较多的是k8s，docker-compose，swarm等。

## 基础概念

### Node

我们项目中跑服务的物理机或者虚拟机，对k8s来说这台服务器就是k8s中的Node。

- Node状态

  拿到服务器之后，我们一般会查看一下服务器的基本配置和信息，对加入k8s中的Node也是一样的，需要先检查它的状态，并上报到集群。

- 地址

  内部ip在集群内访问，外部ip在集群外访问，在k8s中每个Node的主机名会被记录下来。类似主机中用hostname命令获取的主机名。

- 信息

  类似在主机中cat /etc/issue、cat /etc/os-release等方法查看的信息，k8s也会把Node的基础信息记录下来。

- 容量

  统计CPU、内存等信息，以便于计算Node中可用Pod数量。

- 条件

  如果上述信息都满足我们需求，在集群内该Node被标记为Ready，这样我们的服务器就完成了交付。

### Deployment和Pod

假设我们现在需要用Nginx对一个静态html提供访问，对k8s来说，能提供html的访问服务就是deployment，对Nginx和html的组合可以理解为Pod，作为最小的调度单元。

### Container Runtime

虽然目前只提供了一个静态网页的访问，但是为了避免故障，我们再申请2个服务器，对原来的服务进行扩容，增加一台服务器我们做的是完全重复的事情，我们可选方案有kvm，Docker等技术，对于k8s来说，Docker就是container Runtime。

## 本地搭建k8s集群

### 方案选择

- [kind](https://github.com/kubernetes-sigs/kind)(Kubernetes in Docker) 
- minikube(是 K8S 官方为了开发者能在个人电脑上运行 K8S 而提供 的一套工具。实现上是通过 Go 语言编写，通过调用虚拟化管理程 序，创建出一个运行在虚拟机内的单节点集群。)
- Docker desktop
- Kubeadm(官方推荐用于生产环境)

### 创建集群

为了方便，我们选择Docker desktop默认的k8s创建方案。首先需要安装好Docker环境，不再赘述。

安装好kubectl，方便对搭建好的集群进行管理。kubectl 版本和集群之间的差异必须在一个小版本号之内。 例如：v1.27 版本的客户端能与 v1.26、 v1.27 和 v1.28 版本的控制面通信。 用最新兼容版本的 kubectl 有助于避免不可预见的问题。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306061724997.png)

验证集群是否正常启动，出现以下信息表示正常启动。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202306061737059.png)

## 搭建一个生成环境可以的集群

大多数人的需求并不只是包含一个虚拟机节点的本地测试集群，而是 一个可在服务器运行，可自行扩/缩容，具备全部功能的，达到生产 可用的集群。我们选择一个 Kubernetes 官方推荐的方案 kubeadm 进行搭建。

kubeadm 是 Kubernetes 官方提供的一个 CLI 工具，可以很方便的 搭建一套符合官方最佳实践的最小化可用集群。

安装kubeadm([安装 kubeadm | Kubernetes](https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/))

支持的Docker的最新版本为20.10.17。

当前使用k8s最新版本为1.27.2。

### 准备

- 禁用swap
  - 通过\`sudo swapoff -a\`临时关闭swap
  
  - \`\`\`swift
    sudo vim /etc/fstab     注释swap相关
    \`\`\`
  
- \`sudo cat /sys/class/dmi/id/product_uuid\`可查看机器的 product_uuid 请确保要搭建集群的所有节点的 product_uuid 均不相同。

-  \`sudo ufw disable \`禁用防火墙。

- 配置主机hosts。

  \`\`\`shell
  # sudo vim /etc/hosts
  10.211.55.3 k8s-master
  \`\`\`

- 安装Docker

  \`\`\`shell
   sudo apt update
   sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
   # 导入源仓库的 GPG key
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   # 添加Docker软件源
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt update
   # 查看所有可用Docker版本
   apt list -a docker-ce
   sudo apt install docker-ce=5:20.10.17~3-0~ubuntu-jammy docker-ce-cli=5:20.10.17~3-0~ubuntu-jammy containerd.io
   sudo systemctl status docker
   # 锁定版本
   sudo apt-mark hold docker-ce
   sudo vi /etc/docker/daemon.json
   # 输入下面json
   {
    "registry-mirrors": [
      "https://dockerhub.azk8s.cn",
      "https://reg-mirror.qiniu.com",
      "https://quay-mirror.qiniu.com"
    ],
    "exec-opts": [ "native.cgroupdriver=systemd" ] 
  }
  systemctl daemon-reload
  systemctl restart docker
  #查看修改后的 docker cgroup 状态
  docker info | grep Cgroup
  # 当前用户加入Docker组
  sudo usermod -aG docker $USER
  \`\`\`

  

- 安装kubeadm，kubectl，kubelet，安装步骤参考上面链接。\`apt-cache madison kubeadm|head\`查看版本

- \`sudo netstat -ntlp |grep -E '6443|23[79,80]|1025[0,1,2]' \`检查是否有端口占用，如果有就手动释放。

### 配置

为了保证生产环境的稳定运行，我们增加kubelet的systemd配置，对服务进行管理。

\`\`\`shell
cat <<EOF > /etc/systemd/system/kubelet.service
[Unit]
Description=kubelet: The Kubernetes Node Agent
Documentation=https://kubernetes.io/docs/home/
Wants=network-online.target
After=network-online.target

[Service]
ExecStart=/usr/bin/kubelet
Restart=always
StartLimitInterval=0
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
\`\`\`

\`\`\`shell
mkdir -p /etc/systemd/system/kubelet.service.d
# 设置kubelet开机自启
systemctl enable kubelet

\`\`\`

配置containerd，常见的CRI有：containerd、CRI-O、Docker Engine、Mirantis Container Runtime。containerd需要和kubelet使用一样的systemd。

\`\`\`shell
containerd config default > /etc/containerd/config.toml
vim /etc/containerd/config.toml

SystemdCgroup = false 改为 SystemdCgroup = true
#重新加载并重启containerd
systemctl daemon-reload && systemctl restart containerd
\`\`\`



### 启动

#### 安装crictl(目前apt安装已经带了，不需要手动安装了)

- \`crictl\` 是 \`kubelet\` CRI (Container Runtime Interface) 的 CLI
- \`critest\` 是 \`kubelet\` CRI 的测试工具集。

\`\`\`shell
# install crictl
VERSION="v1.26.0"
wget https://github.com/kubernetes-sigs/cri-tools/releases/download/$VERSION/crictl-$VERSION-linux-amd64.tar.gz
sudo tar zxvf crictl-$VERSION-linux-amd64.tar.gz -C /usr/local/bin
rm -f crictl-$VERSION-linux-amd64.tar.gz
# install critest
VERSION="v1.26.0"
wget https://github.com/kubernetes-sigs/cri-tools/releases/download/$VERSION/critest-$VERSION-linux-amd64.tar.gz
sudo tar zxvf critest-$VERSION-linux-amd64.tar.gz -C /usr/local/bin
rm -f critest-$VERSION-linux-amd64.tar.gz
\`\`\`

#### 安装socat

- \`socat\` 是一款很强大的命令行工具，可以建立两个双向字节流并在其中传输数据。它其中的一个功能是可以实现端口转发。
- ubuntu下使用\`sudo apt-get install -y socat\`进行安装。

#### 初始化集群

\`\`\`bash
kubeadm config print init-defaults > kubeadm.yaml
# 配置文件如下
apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 10.211.55.3
  bindPort: 6443
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  name: k8s-master
  taints: null
`,title:"初识k8s和动手实践",comment:!0,tags:["k8s","Docker"],categories:["学习小册"],sticky:1,date:"2023-09-24 02:28:07"}},{route:"/booklet/mysql45/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/interviews/algorithm/",meta:{description:"",hidden:!0,title:"",date:"2023-05-19 09:45:47"}},{route:"/interviews/algorithm/二分法套路总结.html",meta:{description:"",title:"二分法套路总结",comment:!0,tags:["go"],categories:["面试"],sticky:1,date:"2023-05-30 08:58:22"}},{route:"/interviews/algorithm/常见算法套路.html",meta:{description:"",title:"常见算法套路",comment:!0,tags:["go"],categories:["面试"],sticky:1,date:"2023-05-30 08:58:22"}},{route:"/interviews/algorithm/算法框架思维.html",meta:{description:"",title:"算法框架思维",comment:!0,tags:["go"],categories:["面试"],sticky:1,date:"2023-05-30 08:58:22"}},{route:"/interviews/leetcode/203移除链表元素.html",meta:{description:"",title:"203. 移除链表元素",comment:!0,tags:["go","python"],categories:["面试"],sticky:1,date:"2023-05-19 09:45:47"}},{route:"/interviews/leetcode/",meta:{description:"",hidden:!0,title:"",date:"2023-05-19 09:45:47"}},{route:"/lang/go/fuzz.html",meta:{description:`
# 前言

​		软件系统越复杂，测试就越重要。然而手动测试可能会非常费时和乏味。这就是为什么自动化测试变的越来越流行的原因。今天我们来聊一聊自动化测试中的一种测试技术就是fuzz测试，它是一种随机测试技术，可以帮助发现软件系统中的漏洞和错误。

​		Go语言目前已经是非常流行的语言了，具有高效、并发等特性。今天我们浅谈使用Go语言进行fuzz测试。从Go1.18开始，Go在其标准工具链中支持模糊测试。

## 什么是fuzz测试

​		**模糊测试** （fuzz testing, fuzzing）是一种[软件测试](https://zh.wikipedia.org/wiki/软件测试)技术。其核心思想是将自动或半自动生成的随机数据输入到一个[程序](https://zh.wikipedia.org/wiki/计算机程序)中，并监视程序异常，如崩溃，[断言](https://zh.wikipedia.org/wiki/斷言_(程式))（assertion）失败，以发现可能的程序错误，比如内存泄漏。模糊测试常常用于检测软件或计算机系统的安全漏洞。

## Go语言中的模糊测试

​		Go为开发者提供了一套强大的工具，用于实施模糊测试，核心是\`testing\`包中的\`Fuzz\`函数。通过创建以\`Fuzz\`为前缀的函数，按特定的签名定义输入输出，可以很容易集成模糊测试到我们的Go程序中。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202312212044424.png)

上图是一个模糊测试的例子，突出显示了它的主要组件。

模糊测试必须要遵循的规则：

1. Fuzz测试必须是一个函数，函数名必须以"Fuzz"开头，后面必须是一个大写字母开头的名称，例如"FuzzAdd"。
2. Fuzz测试函数必须接受一个*testing.F类型的参数，不能有返回值。
3. Fuzz测试函数必须在*_test.go文件中定义才能运行。
4. Fuzz目标必须是一个方法调用，第一个参数必须是*testing.F类型，后面跟随着fuzz测试的参数。
5. 每个fuzz测试函数只能有一个fuzz目标。
6. 所有的种子语料库条目的类型必须与fuzz测试的参数类型相同，顺序也必须相同。这适用于对Fuzz函数的调用以及fuzz测试的testdata/fuzz目录中的任何语料库文件。
7. Fuzz测试的参数类型只能是以下类型：
   - string, []byte
   - int, uint, uintptr, int8, int16, int32, rune, int64, uint8, uint16, uint32, uint64
   - float32, float64
   - bool

这些规则和要求是Go语言fuzz测试的基本要求，遵循这些规则可以帮助我们编写有效的fuzz测试并提高测试覆盖率。

​		接下来我们通过一些简单代码来体验一下Fuzz test。

### 代码编写

1. 我们创建一个名为fuzz的目录

   \`\`\`shell
   > mkdir fuzz
   > cd fuzz
   > go mod init example/fuzz
   > touch main.go
   \`\`\`

2. 在main.go中我们贴如以下代码

   \`\`\`go
   package main
   
   import "fmt"
   
   func Add(a, b int) int {
     	return a + b
   }
   
   func main(){
     	fmt.Printf("Add(1, 2) = %d\\n", Add(1, 2))
   }
   \`\`\`

3. 运行代码

   \`\`\`shell
   go run .
   Add(1, 2) = 3
   \`\`\`

   现在代码正常运行，接下来我们来测试它。

### 添加单元测试

​		我们先为Add函数编写一个基本的单元测试。

1. 在\`fuzz\`目录创建一个文件为\`add_test.go\`。

2. 贴如以下代码到\`add_test.go\`。

   \`\`\`go
   package main
   
   import "testing"
   
   func TestAdd(t *testing.T) {
   	testcases := []struct {
   		a, b, want int
   	}{
   		{1, 2, 3},
   		{0, 0, 0},
   		{-1, -2, -3},
   		{1, -2, -1},
   	}
   	for _, tc := range testcases {
   		got := Add(tc.a, tc.b)
   		if got != tc.want {
   			t.Errorf("Add(%d, %d) == %d, want %d", tc.a, tc.b, got, tc.want)
   		}
   	}
   }
   \`\`\`

3. 执行单元测试

   \`\`\`shell
   > go test -v
   
   === RUN   TestAdd
   `,title:"go语言模糊测试",comment:!0,tags:["go","golang"],categories:["语言"],sticky:1,date:"2023-12-21 12:54:24"}},{route:"/lang/go/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/lang/go/泛型.html",meta:{description:"",title:"go语言泛型",comment:!0,tags:["go","golang"],categories:["语言"],sticky:1,date:"2023-12-08 12:37:28"}},{route:"/lang/python/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/lang/rust/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/lang/ts/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/technology/learn/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}},{route:"/technology/learn/k8s_dashboard.html",meta:{description:`

Kubernetes（通常简称为K8s）已成为容器编排和管理的事实标准，为开发人员和运维团队提供了强大的工具和功能集。在Kubernetes生态系统中，"Top"和"Dashboard"是两个非常有用的组件，它们为用户提供了实时监控和可视化管理容器集群的能力。本文将深入探讨Kubernetes的Top和Dashboard功能，介绍它们的特点和用法，以及如何在日常工作中充分利用它们。

## Kubernetes的Top功能
Kubernetes的Top功能提供了对集群中资源使用情况的实时监控。它可以帮助用户了解各个节点和容器的资源消耗情况，包括CPU、内存、存储等方面的指标。通过使用Top命令，用户可以获得集群的整体性能概览，并深入了解资源的分配和利用情况。

### 资源监控
Top功能通过收集和展示节点和容器的资源使用指标，帮助用户了解系统的健康状况。用户可以查看各个节点的负载情况，以及容器的资源消耗情况，从而及时识别出资源瓶颈和性能问题。

### 资源调优
Top功能提供了对资源使用情况的实时监控，用户可以根据监控数据进行资源调优。通过查看资源使用情况的变化趋势，用户可以调整容器的资源配额，优化资源分配，提高系统的整体性能和稳定性。

## Kubernetes的Dashboard功能
Kubernetes的Dashboard是一个基于Web的用户界面，提供了对Kubernetes集群的可视化管理和操作。它为用户提供了一个直观的界面，用于监控和管理集群中的各种资源，如节点、Pod、服务、存储等。

### 集群概览
Dashboard功能提供了集群的整体概览，用户可以一目了然地查看集群中的节点数量、运行的Pod数量、服务数量等关键信息。通过Dashboard，用户可以快速了解集群的规模和状态，为后续的管理和操作提供参考。

### 资源管理
Dashboard功能允许用户对集群中的各种资源进行管理和操作。用户可以创建、删除和编辑Pod、服务等对象，也可以扩展和收缩节点的数量。通过Dashboard，用户可以轻松管理集群中的资源，提高工作效率。

### 日志和事件查看
Dashboard功能还提供了查看Pod日志和事件的能力。用户可以方便地查看Pod的日志输出，以便快速定位和解决问题。同时，用户还可以查看集群中发生的事件，如Pod的创建、删除和调度等，帮助用户了解系统的运行情况。

## 实操开启Top和Dashboard

### Top

对于较新的Kubernetes版本，Metrics Server是默认的资源监控组件。如果执行\`kubectl top node\`出现\`error: Metrics API not available\`说明没有安装好metrics server, 我们需要先安装好metrics server。

1. 执行\`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\`安装，具体版本信息可以参考[metrics-server](https://github.com/kubernetes-sigs/metrics-server)。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241045945.png)

2. 执行\`kubectl get pods -n kube-system\`查看metris-server是否已经启动。如下图所示说明已经启动成功。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241049444.png)

3. 执行\`kubectl top node\`查看node状态, :grin::grin: 搞定收工。

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241051783.png)

4. Trouble shooting

   如果网络环境不好，镜像下不下来可以使用阿里云镜像，我们把components.yaml下载下来。

   \`\`\`yaml
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     labels:
       k8s-app: metrics-server
     name: metrics-server
     namespace: kube-system
   `,title:"深入了解Kubernetes的Top和Dashboard功能",comment:!0,tags:["k8s","Kubernetes"],categories:["技术教程"],sticky:1,cover:"https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202309241117935.png",date:"2023-09-24 04:48:56"}},{route:"/technology/learn/pessimistic_lock.html",meta:{description:`
![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202402021718881.png)

在[关系数据库管理系统](https://zh.wikipedia.org/wiki/关系数据库管理系统)里，**悲观并发控制**（又名“**悲观锁**”，Pessimistic Concurrency Control，缩写“PCC”）是一种并发控制的方法。它可以阻止一个事务以影响其他用户的方式来修改数据。如果一个事务执行的操作读某行数据应用了锁，那只有当这个事务把锁释放，其他事务才能够执行与该锁冲突的操作。 `,title:"并发控制中的悲观锁",comment:!0,tags:["go","技术教程"],categories:["知识库"],sticky:1,date:"2024-02-02 09:19:25"}},{route:"/technology/learn/traefik.html",meta:{description:"",title:"traefik在docker中的使用",comment:!0,tags:["traefik","Docker","技术教程"],categories:["知识库"],sticky:1,date:"2023-08-01 09:14:32"}},{route:"/technology/other/Django_advanced.html",meta:{description:`
# Django 进阶
\`\`\`
1.  [HTTP Objects](https://docs.djangoproject.com/en/2.0/ref/request-response/)

    - HttpRequest
      - 自身属性
        request.path -> \`/foo/bar/\`
        request.method
        request.GET
        request.POST
        request.COOKIES
        request.FILES -> \`{name1: file1, name2: file2, ...}\`
        request.META['REMOTE_ADDR']
        request.META['HTTP_USER_AGENT']
      - 中间件添加的属性
        - request.session
        - request.user
      - 方法
        - request.get_full_path() -> \`/foo/bar/?a=123\`
        - request.get_signed_cookie(key)
    - HttpResponse
      - 属性
        - response.status_code
        - response.content
      - 方法
        - response.set_cookie(key, value, max_age=None)
    - JsonHttpResponse
      - \`response = JsonHttpResponse({'a': 12, 'b': 'xyz'})\`

2.  Django 中间件

    - 最简单的中间件
      \`\`\`python
              def simple_middleware(get_response):
                  # do_something_for_init()

                  def middleware(request):
                      # do_something_before_views()

                      response = get_response(request)  # views 函数在这里执行

                      # do_something_after_views()

                      return response

                  return middleware
      \`\`\`
    - 中间件类

      \`\`\`python
          class MyMiddleware:
              def __init__(self, get_response):
                  self.get_response = get_response

              def __call__(self, request):
                  response = self.get_response(request)
                  return response

              def process_view(self, request, view_func, view_args, view_kwargs):
                  pass
      \`\`\`

    - Django-1.10 以前的中间件

      \`\`\`python
          from django.utils.deprecation import MiddlewareMixin

          class MyMiddleware(MiddlewareMixin):
              def process_request(self, request):
                  pass

              def process_view(self, request, view_func, view_args, view_kwargs):
                  pass

              def process_response(self, request, response):
                  return response
      \`\`\`

    - 执行顺序
      - process_request, process_view 从上往下执行
      - process_response 从下往上执行
    - [内置中间件的排序](https://docs.djangoproject.com/en/2.0/ref/middleware/#middleware-ordering)

3.  Form 表单

    - form 的 method 只能是 POST 或 GET
    - method=GET 时, 表单提交的参数会出现在 URL 里
    - 属性和方法
      - form.is_valid()
      - form.has_changed()
      - form.cleaned_data['fieldname']
    - Form 的定义和使用

      \`\`\`python
          from django.forms import Form
          from django.forms import IntegerField, CharField, DateField, ChoiceField

          class TestForm(Form):
              TAGS = (
                  ('py', 'python'),
                  ('ln', 'linux'),
                  ('dj', 'django'),
              )
              fid = IntegerField()
              name = CharField(max_length=10)
              tag = ChoiceField(choices=TAGS)
              date = DateField()

          data = {'fid': 123, 'name': '1234567890', 'tag': 'dj', 'date': '2017-12-17'}
          form = TestForm(data)
          print(form.is_valid())
          print(form.cleaned_data)  # cleaned_data 属性是 is_valid 函数执行时动态添加的
      \`\`\`

    - ModelForm
      \`\`\`python
          class UserForm(ModelForm):
              class Meta:
                  model = User
                  fields = ['name', 'birth']
      \`\`\`

4.  模板

    - base.html 模板推荐布局
      \`\`\`html
      <!DOCTYPE html>
      <html>
        <head>
          <title>{{title}}</title>
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
          {% block "ext_css" %}{% endblock %}
        </head>
        <body>
          <!-- {% block "navbar" %}{% endblock %} -->
          {% block "sidebar" %}{% endblock %} {% block "content" %}{% endblock
          %}
          <!-- {% block "foot" %}{% endblock %} -->
          {% block "ext_js" %}{% endblock %}
        </body>
      </html>
      \`\`\`
    - [内建 Tags](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#ref-templates-builtins-tags)

      - \`autoescape\`

              {% autoescape off %}
                  {{ body }}
              {% endautoescape %}

      - \`csrf_token\`

              <form>
              {% csrf_token %}
              </form>

      - \`for...endfor\` 中的变量
        - \`forloop.counter\` 从 1 开始计数
        - \`forloop.counter0\` 从 0 开始计数
        - \`forloop.revcounter\` 逆序计数到 1
        - \`forloop.revcounter0\` 逆序计数到 0
        - \`forloop.first\` 是否是循环中的第一个
        - \`forloop.last\` 是否是循环中的最后一个
        - \`forloop.parentloop\` 用于引用上级循环中的变量, 如 \`{{ forloop.parentloop.counter }}\`
      - empty 子句

              {% for x in lst %}
                  <div>...</div>
              {% empty %}
                  <div>Sorry</div>
              {% endfor %}

      - load: 加载自定义 Tag {\`%\`load foo.bar \`%\`}
      - url: 根据 url name 替换 {\`%\` url 'your-url-name' v1 v2 \`%\`}
      - static

              {% load static %}
              <img src="{% static "img/smile.jpg" %}">

        或

              {% load static %}
              <img src="{% get_static_prefix %}img/smile.jpg">

    - [内建的 filter](https://docs.djangoproject.com/en/2.0/ref/templates/builtins/#built-in-filter-reference)

      - safe 和 escape: \`{{ var|safe|escape }}\`

    - [使用 Jinja2 替换内置模板引擎](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2)

5.  ORM

    - 什么是 ORM
    - CURD (Create/Update/Retrieve/Delete)
    - [Field](https://docs.djangoproject.com/en/2.0/ref/models/fields/)
    - Field 选项
      - \`null\` 针对数据库, 允许数据库该字段为 Null
      - \`blank\` 针对 Model 本身, 允许传入字段为空. blank 为 True 时, 对数据库来说, 该字段依然为必填项
      - \`default\` 尽量使用 default, 少用 null 和 blank
      - \`choices\`
      - \`primary_key\` 非必要时不要设置, 用默认 id, 保持条目自增、有序
      - \`unique\`
      - \`db_index\` (True | False)
      - \`max_length\`
      - \`auto_now\` 每次 save 时，更新为当前时间
      - \`auto_now_add\` 只记录创建时的时间, 保存时不更新
    - [QuerySet](https://docs.djangoproject.com/en/2.0/ref/models/querysets/)
      - 方法
        - 创建: \`create() / get_or_create() / update_or_create() / bulk_create()\`
        - 条件过滤和排除: \`filter() / exclude()\`
        - 只加载需要的字段: \`only() / defer()\`
        - \`order_by() / count() / exists()\`
        - \`latest() / earliest()\`
        - \`first() / last()\`
      - 查找条件
        - \`filter(id__in=[123, 555, 231])\`
        - \`filter(id__range=[123, 456])\`
        - \`filter(name__contains='123')\`
        - \`filter(name__regex='^\\w+\\d+')\`
        - \`gt / gte / lt / lte\`
    - 其他 ORM
      - sqlalchemy
      - peewee
    - 主键和外键约束
      - 内部系统、传统企业级应用可以使用 (需要数据量可控，数据库服务器数量可控)
      - 互联网行业不建议使用
        - 性能缺陷
        - 不能用于分布式环境
        - 不容易做到数据解耦

6.  Cache

    - 默认缓存: \`from django.core.cache import cache\`
    - BACKEND: \`DatabaseCache / MemcachedCache / LocMemCache\`
    - LOCATION: IP:Port 绑定, 只有一个时配制成字符串链接, 有多台时配制为列表
    - 使用 Redis 做缓存

            CACHES = {
                "default": {
                    "BACKEND": "django_redis.cache.RedisCache",
                    "LOCATION": "redis://127.0.0.1:6379/1",
                    "OPTIONS": {
                        "CLIENT_CLASS": "django_redis.client.DefaultClient",
                        "PICKLE_VERSION": -1,
                    }
                }
            }

    - 基本方法
      - \`cache.set(key, value, timeout=None)\`
      - \`cache.get(key, default=None)\`
      - \`cache.delete(key)\`
      - \`cache.incr('num')\`
      - \`cache.decr('num')\`
      - \`cache.get_or_set(key, default, timeout=None)\`
      - \`cache.set_many({'a': 1, 'b': 2, 'c': 3})\`
      - \`cache.get_many(['a', 'b', 'c'])\`
    - 全站缓存中间件: \`django.middleware.cache.UpdateCacheMiddleware\`
      - 前置中间件
      - 缓存期限: CACHE_MIDDLEWARE_SECONDS
    - 页面缓存装饰器: \`from django.views.decorators.cache import cache_page\`
    - 属性缓存装饰器: \`from django.utils.functional import cached_property\`
    - pickle
      - dumps
      - loads

7.  Cookie 和 Session

    - Cookie: \`response.set_cookie(key, value, max_age=None)\`
    - Session 配置
      1. 开启 Session 中间件: \`django.contrib.sessions.middleware.SessionMiddleware\`
      2. 配置缓存
      3. 配置 Session 引擎: \`SESSION_ENGINE = "django.contrib.sessions.backends.cache"\`
    - 可选项
      - \`SESSION_COOKIE_AGE\` 缓存时间, 默认 2 周
      - \`SESSION_COOKIE_NAME\` Session 名, 默认 'sessionid'
      - \`SESSION_EXPIRE_AT_BROWSER_CLOSE\` 浏览器关闭页面时, Session 是否设为过期
      - \`SESSION_SAVE_EVERY_REQUEST\` 每次请求时, 是否强制保存一次 Session
    - 用法
      - \`request.session.session_key\` 查看 session_id
      - \`request.session.modified\` session 是否发生过修改
      - \`request.session['uid'] = 1234\` 当 session 发生更改时会自动保存
      - \`request.session.get('uid')\` 取值
      - \`request.session.save()\` 手动保存

8.  Logging

    - 日志级别
      - DEBUG
      - INFO
      - WARNING
      - ERROR
      - FATAL
    - 使用
      - logger.debug('xxxxxxxx')
      - logger.info('xxxxxxxx')
      - logger.warning('xxxxxxxx')
      - logger.error('xxxxxxxx')
      - logger.fatal('xxxxxxxx')
    - 查找、分析
      - tail
      - head
      - less
      - awk
      - grep
    - [配置](https://docs.python.org/2/library/logging.html)

            LOGGING = {
                'version': 1,
                'disable_existing_loggers': True,
                'formatters': {
                    'simple': {
                        'format': '%(asctime)s %(module)s.%(funcName)s: %(message)s',
                        'datefmt': '%Y-%m-%d %H:%M:%S',
                    },
                    'verbose': {
                        'format': '%(asctime)s %(levelname)s [%(process)d-%(threadName)s] '
                                  '%(module)s.%(funcName)s line %(lineno)d: %(message)s',
                        'datefmt': '%Y-%m-%d %H:%M:%S',
                    }
                },

                'handlers': {
                    'inf': {
                        'class': 'logging.handlers.TimedRotatingFileHandler',
                        'filename': '/data/web/gnt.out',
                        'when': 'W0',  # 每周一切割日志
                        'backupCount': 5,
                        'formatter': 'simple',
                        'level': 'DEBUG' if DEBUG else 'INFO',
                    },
                    'err': {
                        'class': 'logging.handlers.TimedRotatingFileHandler',
                        'filename': '/data/web/gnt.err',
                        'when': 'D',  # 每天切割日志
                        'backupCount': 5,
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

9.  Django 的性能

    - Django 自身优化
      - 充分之用缓存
      - 惰性求值和迭代器
      - 尽量使用 \`defer()\` 和 \`only()\` 查找
      - 尽量使用 \`count()\` 和 \`exists()\`
      - 模板中 \`{% block %}\` 性能优于 \`{% include %}\`
      - [开启模板缓存](https://docs.djangoproject.com/en/2.0/ref/templates/api/#django.template.loaders.cached.Loader)
      - **不要使用外键！不要使用外键！不要使用外键！**
    - 其他优化
      - I/O 密集型: 异步化
        - 请求异步化
        - 数据操作异步化
        - gevent, asyncio, aiopg, aiohttp, tornado
      - 计算密集型
        - 耗时操作用 [Celery](http://docs.jinkan.org/docs/celery/) 等工具异步完成
      - 分库分表
        - 取余、哈希
        - 范围
        - 一致性哈希
      - 索引优化
      - 慢查询优化 ([相关工具: DjangoDebugToolbar](https://django-debug-toolbar.readthedocs.io))
      - Gunicorn 开启多进程模式利用多核
      - PyPy
      - Cython

10. Python / Django 环境加载

    - sys.argv
    - sys.path
    - os.environ

11. Git

    - 常用操作
      - git init
      - git clone
      - git add
      - git commit -m 'xxxxxxxx'
      - git push
      - git pull
      - git fetch
      - git log
      - git checkout
      - git branch
      - git merge
    - 代码管理
      - code review
        - 发现代码逻辑问题
        - 代码风格及规范化问题
        - 算法问题
        - 错误的使用方式
        - 能够学习其他人的优秀代码
      - 分支: master / dev / feature

12. Blog

    1.  基础功能
        1. 看文章
        2. 写文章
        3. 查看文章列表
        4. 根据正文搜索文章
        5. 可以评论
    2.  扩展功能 0. 实现分页功能: 首页文章列表每页显示 5 篇文章

        1.  实现一个基于 redis 的文章缓存
        2.  给首页增加一个模块, 显示最受欢迎的 10 篇文章 (点击率最高的)
        3.  创建用户模块
            - 实现注册、登录功能
            - 添加用户个人信息展示
            - 开发头像上传功能
        4.  写一个装饰器, 在 blog.log 文件中输出阅读文章的用户 IP, 及所读文章的 ID
        5.  基于日志的简单统计

            - 计算出阅读次数最多的文章: \`awk '{print $6}' blog6.log | sort | uniq -c | sort -r\`

            - 计算出每个访客读了多少篇文章: \`awk '{print $5}' blog6.log | sort | uniq -c | sort -r\`

        6.  写一个中间件, 限制用户的访问频率最大为每秒 2 次，超过 2 次时，等待至合理时间再返回
        7.  给文章增加 Tag 功能:
            - 每篇文章可以添加多个 Tag
            - 每个 Tag 分类下有多篇文章
            - 点击每个 Tag 直接跳转到此 tag 的文章列表
            - 不要使用外键
        8.  实现权限管理功能
            - 未登录用户只能查看文章
            - 普通注册用户，可以发表评论
            - 管理员，可以发表和删除文章、评论
        9.  [使用 Gunicorn 驱动 Django, 对比性能差异](http://docs.gunicorn.org/en/latest/install.html)
            - 文件描述符
            - 单台服务器最大连接数
            - TCP 连接上限
        10. Nginx

            - 负载均衡: 轮询, 权重, IP 哈希

                                   User Requests
                                 |    |    |    |
                                 V    V    V    V
                                 www.example.com
                                     DNS 轮训
                                   /         \\
                                  V           V
                              Nginx            Nginx
                           113.5.3.10        110.2.9.11         `,title:"django进阶-笔记",date:"2017-05-03 10:16:44",tags:["python","django"],categories:["知识库"]}},{route:"/technology/other/Hexo：语雀云端写作 Coding 持续集成实现自动部署.html",meta:{description:"",title:"Hexo：语雀云端写作 Coding 持续集成实现自动部署",date:"2020-05-10 11:28:00",tags:["hexo"],categories:["知识库"]}},{route:"/technology/other/Python算法之栈.html",meta:{description:`
栈(stack)又称之为堆栈是一个特殊的有序表，其插入和删除操作都在栈顶进行操作，并且按照先进后出，后进先出的规则进行运作。

## 栈的接口

list 就类似一个栈

| 接口      | list 对应方法 |
| `,title:"python算法之栈",date:"2019-04-24 08:10:15",tags:["python","算法"],categories:["知识库"]}},{route:"/technology/other/Python进阶.html",meta:{description:"",title:"python进阶笔记",date:"2017-05-03 10:16:36",tags:["python"],categories:["知识库"]}},{route:"/technology/other/Sublime-text-常用插件.html",meta:{description:"",title:"Sublime text 常用插件",date:"2018-04-20 16:15:21",tags:["ide"],categories:["知识库"]}},{route:"/technology/other/U盘量产修复金士顿PS2251-07-PS2307.html",meta:{description:"",title:"U盘量产修复金士顿PS2251-07(PS2307)",date:"2018-04-16 13:49:32",tags:["硬件"],categories:["知识库"]}},{route:"/technology/other/Web基础.html",meta:{description:"",title:"web基础-django",date:"2017-05-03 10:16:44",tags:["django","python"],categories:["知识库"]}},{route:"/technology/other/django进阶-web基础.html",meta:{description:`
# web基础

##最简单的web框架:

\`\`\`python
# coding: utf-8
import socket

(HOST, PORT) = '0.0.0.0', 8888

RESPONSE = b'''
HTTP/1.1 200 OK

<!DOCTYPE html>
<html>
<head>
    <title>Hello</title>
</head>
<body>
<img src="https://www.baidu.com/img/bd_logo1.png">
</body>
</html>
'''

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)   # 建立 SOCK 连接
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) # 设置参数
server_socket.bind((HOST, PORT))                                    # 绑定 IP:端口
server_socket.listen(100)                                           # 开始监听

print('Serving HTTP on port %s ...' % PORT)

while True:
    client_socket, client_address = server_socket.accept()  # 接收客户端发起的连接请求
    request = client_socket.recv(1024)                      # 接收客户端数据, 一次最多 1024 字节

    # WSGI

    print('Request >>>')
    print(request.decode('utf-8'))
    http_response = RESPONSE

    # WSGI

    client_socket.sendall(http_response)
    client_socket.close()

\`\`\`

三次握手的过程

\`client\`—————————————\`server\`

1                 syn   ->

2 <-         ack + syn   ack是对syn的应答

3                    ->ack

`,title:"django进阶-web基础",date:"2017-05-03 10:16:33",tags:["python","django"],categories:["知识库"]}},{route:"/technology/other/django进阶-中间件.html",meta:{description:`
# django进阶

1. **HTTP Objects**

    **HttpRequest** 

   ​	**自身属性** 

   ​		\`request.path -> /foo/bar/ \`

   ​		\`request.method \`

   ​		\`request.GET \`

   ​		\`request.POST \`

   ​		\`request.COOKIES \`

   ​		\`request.FILES -> {name1: file1, name2: file2, ...} \`

   ​		\`request.META['REMOTE_ADDR'] \`

   ​		\`request.META['HTTP_USER_AGENT'] 	\`

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

   	\`response = JsonHttpResponse({'a': 12, 'b': 'xyz'})\`

2. django 中间件

   最简单的中间件:aop面向切片编程

   自己写一个获取接口数据的中间件

   \`\`\`python
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
   \`\`\`

   最简单的装饰器—装饰器形式

\`\`\`python
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
\`\`\`

装饰器的运行方式

\`\`\`python
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
\`\`\`

中间件类

\`\`\`python
class MyMiddleware:
    def __init__(self,view_func):
        self.view_func = view_func  #动态添加属性
    def __call__(self,request):
        response = self.view_func(request)
        return response
    def process_view(self,request,view_func,view_args,view_kwargs):
        pass
`,title:"django进阶学习-中间件",date:"2017-05-03 11:19:39",tags:["python","django"],categories:["知识库"]}},{route:"/technology/other/git-解决push报错.html",meta:{description:`
# git -解决push报错问题

### 问题出现场景

github新建仓库,想把本地仓库推送到github

`,title:"git解决push报错",date:"2017-04-22 10:04:30",tags:["git"],categories:["知识库"]}},{route:"/technology/other/",meta:{description:"",hidden:!0,title:"杂谈",date:"2023-05-18 07:26:49"}},{route:"/technology/other/pycharm操作技巧.html",meta:{description:"",title:"pycharm操作技巧",date:"2017-04-19 16:42:43",tags:["python","ide"],categories:["知识库"]}},{route:"/technology/other/sqlalchemy之event使用.html",meta:{description:"",title:"sqlalchemy之event使用",date:"2020-04-24 02:50:10",tags:["flask","sqlalchemy"],categories:["知识库"]}},{route:"/technology/other/vitepress.html",meta:{description:"列举了一些常用参数。",title:"vitepress博客主题参数配置",comment:!0,tags:["vitepress"],categories:["知识库"],sticky:999,date:"2023-05-19 03:40:44"}},{route:"/technology/other/windows使用tornado启动django应用.html",meta:{description:"",title:"windows使用tornado启动django应用",date:"2020-05-10 11:42:05",tags:["tornado","django","python"],categories:["知识库"]}},{route:"/technology/other/学习笔记.html",meta:{description:`
学习笔记
========

开发工具栈
`,title:"python学习笔记",date:"2017-04-24 08:10:15",tags:["python","django"],categories:["知识库"]}},{route:"/technology/other/理解进程线程协程.html",meta:{description:"",title:"理解进程线程协程",date:"2019-04-24 08:10:15",tags:["技术笔记","go"],categories:["知识库"]}},{route:"/technology/other/面试总结.html",meta:{description:`
## 技术面试准备

https://github.com/taizilongxu/interview_python

### python基础

* 面向对象

  三大特性:继承,多态,封装

  面向过程vs面向对象: 面向过程的优点是程序复杂度低,只要顺着执行步骤堆叠代码即可,缺点是一套流程解决一个问题,牵一发而动全身.

  著名的应用:Linux内核,git,Apache server等

  面向对象的核心思想万物皆对象,解决了程序的扩展性,对某个对象修改会立刻反应到体系中.缺点是可控性差,解决问题一开始就是由对象之间的交互来解决.

  - 类,对象,实例,实例化

    类:具有相同特征的一类事物     对象/实例:具体的某个事物

    实例化,类—>对象的过程

    \`\`\`
    >>> dict #类型dict就是类dict
    <class 'dict'>
    >>> d=dict(name='eva') #实例化
    >>> d.pop('name') #向d发一条消息，执行d的方法pop
    'eva'
    `,title:"python常用面试",date:"2017-04-24 08:10:15",tags:["python"],categories:["面试"]}},{route:"/technology/source/",meta:{description:"",hidden:!0,title:"",date:"2023-05-18 07:26:49"}}]),bu={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()}};function yu(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const s in n)new RegExp(`(${s})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[s]:`00${n[s]}`.substr(`${n[s]}`.length)));return e}const wu={},$u={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Su=vn('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Cu=[Su];function Pu(t,e){return c(),p("svg",$u,Cu)}const Mu=L(wu,[["render",Pu]]),Tt=t=>(ie("data-v-14f865e8"),t=t(),le(),t),Lu={class:"blog-search","data-pagefind-ignore":"all"},Iu=Tt(()=>h("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[h("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Eu={key:0,class:"search-tip"},Ou={key:1,class:"metaKey"},Vu={class:"search-dialog"},xu={class:"link"},Au={class:"title"},Tu={key:0,class:"date"},Nu=["innerHTML"],zu={class:"command-palette-logo"},Hu={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Ru=Tt(()=>h("span",{class:"command-palette-Label"},"Search by",-1)),Du=Tt(()=>h("ul",{class:"command-palette-commands"},[h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),h("span",{class:"command-palette-Label"},"to select")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),h("span",{class:"command-palette-Label"},"to navigate")]),h("li",null,[h("kbd",{class:"command-palette-commands-key"},[h("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[h("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[h("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),h("span",{class:"command-palette-Label"},"to close")])],-1)),ju=S({__name:"Search",setup(t){ls(E=>({f8ba968a:d.value}));const e=M([]),n=bu,{localeIndex:s,site:o}=rt(),a=P(()=>{var E;return{...n,...((E=n==null?void 0:n.locales)==null?void 0:E[s.value])||{}}}),r=P(()=>{var E;return((E=a.value)==null?void 0:E.showDate)??!0}),i=ku(),l=P(()=>i.width.value<760),d=P(()=>l.value?0:1),f=P(()=>{var E;return(E=a.value)!=null&&E.heading?a.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),k=M("");me(()=>{k.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=M(!1),b=M(""),w=pu({passive:!1,onEventFired(E){E.ctrlKey&&E.key==="k"&&E.type==="keydown"&&E.preventDefault()}}),m=w["Meta+K"],g=w["Ctrl+K"],V=w.Escape;W(m,E=>{E&&(v.value=!0)}),W(g,E=>{E&&(v.value=!0)}),W(V,E=>{E&&(v.value=!1)});function I(){if(!b.value){e.value=[];return}e.value=hn.value.filter(E=>`${E.meta.description}${E.meta.title}`.includes(b.value)).map(E=>{var F,X;return{...E,meta:{...E.meta,description:((X=(F=E.meta)==null?void 0:F.description)==null?void 0:X.replace(new RegExp(`(${b.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((E,F)=>+new Date(F.meta.date)-+new Date(E.meta.date))}const x=P(()=>{var E;return((E=a.value)==null?void 0:E.resultOptimization)??!0});W(()=>b.value,async()=>{var E,F,X;if(!((E=window==null?void 0:window.__pagefind__)!=null&&E.search))I();else{const J=typeof a.value.customSearchQuery=="function"?a.value.customSearchQuery(b.value):b.value;await((X=(F=window==null?void 0:window.__pagefind__)==null?void 0:F.search)==null?void 0:X.call(F,J).then(async Me=>{const nt=(await Promise.all(Me.results.map(se=>se.data()))).map(se=>{var be;return{route:se.url.startsWith(o.value.base)?se.url:We(se.url),meta:{title:se.meta.title,description:se.excerpt,date:(be=se==null?void 0:se.meta)==null?void 0:be.date}}}).filter(se=>!x.value||hn.value.some(be=>be.route===se.route));e.value=nt.filter(a.value.filter??(()=>!0))}))}ce(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(J=>{J.setAttribute("aria-disabled","false")})})});function z(E){E.target===E.currentTarget&&(v.value=!1)}W(()=>v.value,E=>{var F;E?ce(()=>{var X;(X=document.querySelector("div[command-dialog-mask]"))==null||X.addEventListener("click",z)}):(F=document.querySelector("div[command-dialog-mask]"))==null||F.removeEventListener("click",z)});const q=M(999),Z=M(0),G=P(()=>{const F=Z.value%Math.ceil(e.value.length/q.value)*q.value;return e.value.slice(F,F+q.value)}),N=cs(),D=Ae();function ne(E){v.value=!1,D.path!==E.value&&N.go(E.value)}const{lang:pe}=rt(),oe=P(()=>a.value.langReload??!0);return W(()=>pe.value,()=>{oe.value&&window.location.reload()}),(E,F)=>{var X;return c(),p("div",Lu,[h("div",{class:"nav-search-btn-wait",onClick:F[0]||(F[0]=J=>v.value=!0)},[Iu,l.value?C("",!0):(c(),p("span",Eu,H(((X=a.value)==null?void 0:X.btnPlaceholder)||"Search"),1)),l.value?C("",!0):(c(),p("span",Ou,H(k.value)+" K ",1))]),$(u(Le).Dialog,{visible:v.value,theme:"algolia"},us({header:y(()=>{var J;return[$(u(Le).Input,{value:b.value,"onUpdate:value":F[1]||(F[1]=Me=>b.value=Me),placeholder:((J=a.value)==null?void 0:J.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:y(()=>[h("div",Vu,[$(u(Le).List,null,{default:y(()=>[e.value.length?(c(),A(u(Le).Group,{key:1,heading:f.value},{default:y(()=>[(c(!0),p(K,null,ee(G.value,J=>(c(),A(u(Le).Item,{key:J.route,"data-value":J.route,onSelect:ne},{default:y(()=>[h("div",xu,[h("div",Au,[h("span",null,H(J.meta.title),1),r.value&&J.meta.date?(c(),p("span",Tu,H(u(yu)(J.meta.date,"yyyy-MM-dd")),1)):C("",!0)]),h("div",{class:"des",innerHTML:J.meta.description},null,8,Nu)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),A(u(Le).Empty,{key:0},{default:y(()=>{var J;return[te(H(((J=a.value)==null?void 0:J.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:y(()=>[h("div",zu,[h("a",Hu,[Ru,$(Mu,{style:{width:"77px"}})])]),Du]),key:"0"}:void 0]),1032,["visible"])])}}}),Fu=L(ju,[["__scopeId","data-v-14f865e8"]]),Bu=S({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=R();return(n,s)=>u(e).socialLinks?(c(),A(Vt,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),qu=L(Bu,[["__scopeId","data-v-109b1f34"]]),Gu=["href"],Uu=S({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=R(),{hasSidebar:s}=ve(),{currentLang:o}=Te();return(a,r)=>(c(),p("div",{class:B(["VPNavBarTitle",{"has-sidebar":u(s)}])},[h("a",{class:"title",href:u(n).logoLink??u(St)(u(o).link)},[_(a.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),A(qe,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):C("",!0),u(n).siteTitle?(c(),p(K,{key:1},[te(H(u(n).siteTitle),1)],64)):u(n).siteTitle===void 0?(c(),p(K,{key:2},[te(H(u(e).title),1)],64)):C("",!0),_(a.$slots,"nav-bar-title-after",{},void 0,!0)],8,Gu)],2))}}),Ku=L(Uu,[["__scopeId","data-v-ce135769"]]),Wu={},Qu={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ju=h("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Zu=h("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Yu=[Ju,Zu];function Xu(t,e){return c(),p("svg",Qu,Yu)}const Qn=L(Wu,[["render",Xu]]),ed={class:"items"},td={class:"title"},nd=S({__name:"VPNavBarTranslations",setup(t){const{theme:e}=R(),{localeLinks:n,currentLang:s}=Te({correspondingLink:!0});return(o,a)=>u(n).length&&u(s).label?(c(),A(Ot,{key:0,class:"VPNavBarTranslations",icon:Qn,label:u(e).langMenuLabel||"Change language"},{default:y(()=>[h("div",ed,[h("p",td,H(u(s).label),1),(c(!0),p(K,null,ee(u(n),r=>(c(),A(Ze,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):C("",!0)}}),sd=L(nd,[["__scopeId","data-v-94e028cf"]]),od=t=>(ie("data-v-b46daea1"),t=t(),le(),t),ad={class:"container"},rd={class:"title"},id={class:"content"},ld=od(()=>h("div",{class:"curtain"},null,-1)),cd={class:"content-body"},ud=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=mn(),{hasSidebar:n}=ve(),{frontmatter:s}=R(),o=M({});return pn(()=>{o.value={"has-sidebar":n.value,top:s.value.layout==="home"&&e.value===0}}),(a,r)=>(c(),p("div",{class:B(["VPNavBar",o.value])},[h("div",ad,[h("div",rd,[$(Ku,null,{"nav-bar-title-before":y(()=>[_(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[_(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",id,[ld,h("div",cd,[_(a.$slots,"nav-bar-content-before",{},void 0,!0),$(Fu,{class:"search"}),$(Fi,{class:"menu"}),$(sd,{class:"translations"}),$(Ar,{class:"appearance"}),$(qu,{class:"social-links"}),$(Mi,{class:"extra"}),_(a.$slots,"nav-bar-content-after",{},void 0,!0),$(xi,{class:"hamburger",active:a.isScreenOpen,onClick:r[0]||(r[0]=i=>a.$emit("toggle-screen"))},null,8,["active"])])])])],2))}}),dd=L(ud,[["__scopeId","data-v-b46daea1"]]),hd={key:0,class:"VPNavScreenAppearance"},pd={class:"text"},fd=S({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=R();return(s,o)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",hd,[h("p",pd,H(u(n).darkModeSwitchLabel||"Appearance"),1),$(It)])):C("",!0)}}),md=L(fd,[["__scopeId","data-v-0e8c3175"]]),vd=S({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,s)=>(c(),A(he,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:y(()=>[te(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),gd=L(vd,[["__scopeId","data-v-c83bb7bf"]]),_d={},kd={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},bd=h("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),yd=[bd];function wd(t,e){return c(),p("svg",kd,yd)}const $d=L(_d,[["render",wd]]),Sd=S({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,s)=>(c(),A(he,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:y(()=>[te(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Jn=L(Sd,[["__scopeId","data-v-f40b9c63"]]),Cd={class:"VPNavScreenMenuGroupSection"},Pd={key:0,class:"title"},Md=S({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),p("div",Cd,[e.text?(c(),p("p",Pd,H(e.text),1)):C("",!0),(c(!0),p(K,null,ee(e.items,s=>(c(),A(Jn,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Ld=L(Md,[["__scopeId","data-v-869a8822"]]),Id=["aria-controls","aria-expanded"],Ed=["innerHTML"],Od=["id"],Vd={key:1,class:"group"},xd=S({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=M(!1),s=P(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(a,r)=>(c(),p("div",{class:B(["VPNavScreenMenuGroup",{open:n.value}])},[h("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:o},[h("span",{class:"button-text",innerHTML:a.text},null,8,Ed),$($d,{class:"button-icon"})],8,Id),h("div",{id:s.value,class:"items"},[(c(!0),p(K,null,ee(a.items,i=>(c(),p(K,{key:i.text},["link"in i?(c(),p("div",{key:i.text,class:"item"},[$(Jn,{item:i},null,8,["item"])])):(c(),p("div",Vd,[$(Ld,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Od)],2))}}),Ad=L(xd,[["__scopeId","data-v-9726efc5"]]),Td={key:0,class:"VPNavScreenMenu"},Nd=S({__name:"VPNavScreenMenu",setup(t){const{theme:e}=R();return(n,s)=>u(e).nav?(c(),p("nav",Td,[(c(!0),p(K,null,ee(u(e).nav,o=>(c(),p(K,{key:o.text},["link"in o?(c(),A(gd,{key:0,item:o},null,8,["item"])):(c(),A(Ad,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):C("",!0)}}),zd=S({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=R();return(n,s)=>u(e).socialLinks?(c(),A(Vt,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),Hd={class:"list"},Rd=S({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Te({correspondingLink:!0}),s=M(!1);function o(){s.value=!s.value}return(a,r)=>u(e).length&&u(n).label?(c(),p("div",{key:0,class:B(["VPNavScreenTranslations",{open:s.value}])},[h("button",{class:"title",onClick:o},[$(Qn,{class:"icon lang"}),te(" "+H(u(n).label)+" ",1),$(Pn,{class:"icon chevron"})]),h("ul",Hd,[(c(!0),p(K,null,ee(u(e),i=>(c(),p("li",{key:i.link,class:"item"},[$(he,{class:"link",href:i.link},{default:y(()=>[te(H(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):C("",!0)}}),Dd=L(Rd,[["__scopeId","data-v-2ba10a7e"]]),jd={class:"container"},Fd=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=M(null),n=yn(Ie?document.body:null);return(s,o)=>(c(),A(Ke,{name:"fade",onEnter:o[0]||(o[0]=a=>n.value=!0),onAfterLeave:o[1]||(o[1]=a=>n.value=!1)},{default:y(()=>[s.open?(c(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",jd,[_(s.$slots,"nav-screen-content-before",{},void 0,!0),$(Nd,{class:"menu"}),$(Dd,{class:"translations"}),$(md,{class:"appearance"}),$(zd,{class:"social-links"}),_(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):C("",!0)]),_:3}))}}),Bd=L(Fd,[["__scopeId","data-v-f2c3fc55"]]),qd={key:0,class:"VPNav"},Gd=S({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:s}=hr(),{frontmatter:o}=R(),a=P(()=>o.value.navbar!==!1);return wt("close-screen",n),_e(()=>{Ie&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(r,i)=>a.value?(c(),p("header",qd,[$(dd,{"is-screen-open":u(e),onToggleScreen:u(s)},{"nav-bar-title-before":y(()=>[_(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[_(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":y(()=>[_(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":y(()=>[_(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(Bd,{open:u(e)},{"nav-screen-content-before":y(()=>[_(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":y(()=>[_(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):C("",!0)}}),Ud=L(Gd,[["__scopeId","data-v-b9ef7aed"]]),Kd=t=>(ie("data-v-a460e0f3"),t=t(),le(),t),Wd=["role","tabindex"],Qd=Kd(()=>h("div",{class:"indicator"},null,-1)),Jd=["onKeydown"],Zd={key:1,class:"items"},Yd=S({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:s,isLink:o,isActiveLink:a,hasActiveLink:r,hasChildren:i,toggle:l}=Ts(P(()=>e.item)),d=P(()=>i.value?"section":"div"),f=P(()=>o.value?"a":"div"),k=P(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=P(()=>o.value?void 0:"button"),b=P(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":o.value},{"is-active":a.value},{"has-active":r.value}]);function w(g){"key"in g&&g.key!=="Enter"||!e.item.link&&l()}function m(){e.item.link&&l()}return(g,V)=>{const I=Pe("VPSidebarItem",!0);return c(),A(we(d.value),{class:B(["VPSidebarItem",b.value])},{default:y(()=>[g.item.text?(c(),p("div",De({key:0,class:"item",role:v.value},ds(g.item.items?{click:w,keydown:w}:{},!0),{tabindex:g.item.items&&0}),[Qd,g.item.link?(c(),A(he,{key:0,tag:f.value,class:"link",href:g.item.link,rel:g.item.rel,target:g.item.target},{default:y(()=>[(c(),A(we(k.value),{class:"text",innerHTML:g.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),A(we(k.value),{key:1,class:"text",innerHTML:g.item.text},null,8,["innerHTML"])),g.item.collapsed!=null?(c(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:m,onKeydown:hs(m,["enter"]),tabindex:"0"},[$(Lt,{class:"caret-icon"})],40,Jd)):C("",!0)],16,Wd)):C("",!0),g.item.items&&g.item.items.length?(c(),p("div",Zd,[g.depth<5?(c(!0),p(K,{key:0},ee(g.item.items,x=>(c(),A(I,{key:x.text,item:x,depth:g.depth+1},null,8,["item","depth"]))),128)):C("",!0)])):C("",!0)]),_:1},8,["class"])}}}),Xd=L(Yd,[["__scopeId","data-v-a460e0f3"]]),Zn=t=>(ie("data-v-dbada717"),t=t(),le(),t),e1=Zn(()=>h("div",{class:"curtain"},null,-1)),t1={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},n1=Zn(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),s1=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const e=t,{sidebarGroups:n,hasSidebar:s}=ve(),o=M(null),a=yn(Ie?document.body:null);return W([e,o],()=>{var r;e.open?(a.value=!0,(r=o.value)==null||r.focus()):a.value=!1},{immediate:!0,flush:"post"}),(r,i)=>u(s)?(c(),p("aside",{key:0,class:B(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:o,onClick:i[0]||(i[0]=ps(()=>{},["stop"]))},[e1,h("nav",t1,[n1,_(r.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),p(K,null,ee(u(n),l=>(c(),p("div",{key:l.text,class:"group"},[$(Xd,{item:l,depth:0},null,8,["item"])]))),128)),_(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):C("",!0)}}),o1=L(s1,[["__scopeId","data-v-dbada717"]]),a1=S({__name:"VPSkipLink",setup(t){const e=Ae(),n=M();W(()=>e.path,()=>n.value.focus());function s({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const r=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",r)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",r),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(c(),p(K,null,[h("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),r1=L(a1,[["__scopeId","data-v-bc198fc7"]]),i1=S({__name:"Layout",setup(t){const{isOpen:e,open:n,close:s}=ve(),o=Ae();W(()=>o.path,s),As(e,s);const{frontmatter:a}=R(),r=fs(),i=P(()=>!!r["home-hero-image"]);return wt("hero-image-slot-exists",i),(l,d)=>{const f=Pe("Content");return u(a).layout!==!1?(c(),p("div",{key:0,class:B(["Layout",u(a).pageClass])},[_(l.$slots,"layout-top",{},void 0,!0),$(r1),$(ks,{class:"backdrop",show:u(e),onClick:u(s)},null,8,["show","onClick"]),$(Ud,null,{"nav-bar-title-before":y(()=>[_(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[_(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":y(()=>[_(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":y(()=>[_(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":y(()=>[_(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":y(()=>[_(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(dr,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),$(o1,{open:u(e)},{"sidebar-nav-before":y(()=>[_(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":y(()=>[_(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(Ba,{"data-pagefind-body":""},{"page-top":y(()=>[_(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":y(()=>[_(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":y(()=>[_(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":y(()=>[_(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":y(()=>[_(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":y(()=>[_(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":y(()=>[_(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":y(()=>[_(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":y(()=>[_(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":y(()=>[_(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":y(()=>[_(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":y(()=>[_(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":y(()=>[_(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":y(()=>[_(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":y(()=>[_(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":y(()=>[_(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":y(()=>[_(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[_(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[_(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[_(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(Wa),_(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),A(f,{key:1}))}}}),l1=L(i1,[["__scopeId","data-v-bb4ad0f4"]]),_1={Layout:l1,enhanceApp:({app:t})=>{t.component("Badge",vs)}};export{Js as V,Y as a,ku as b,m1 as c,du as d,de as e,u1 as f,Mc as g,d1 as h,At as i,f1 as j,p1 as k,g1 as l,v1 as m,_1 as n,h1 as o,Xe as t,eu as u};
