import{c as O,p as sn}from"./constant-b644328d.Q005Z5CD.js";import{au as en,av as y,at as ln,aw as G,ax as w,ay as K,az as b,aA as an,aB as rn,aC as t,aD as un,aE as on,aF as tn}from"./theme.spTRpVdX.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,q,D,h,v,S,a){var s=q-l,n=D-x,m=S-h,i=a-v,r=i*s-m*n;if(!(r*r<y))return r=(m*(x-v)-i*(l-h))/r,[l+r*s,x+r*n]}function U(l,x,q,D,h,v,S){var a=l-q,s=x-D,n=(S?v:-v)/K(a*a+s*s),m=n*s,i=-n*a,r=l+m,f=x+i,c=q+m,z=D+i,o=(r+c)/2,B=(f+z)/2,p=c-r,g=z-f,A=p*p+g*g,C=h-v,P=r*z-c*f,F=(g<0?-1:1)*K(tn(0,C*C*A-P*P)),I=(P*g-p*F)/A,d=(-P*p-g*F)/A,R=(P*g+p*F)/A,T=(-P*p+g*F)/A,e=I-o,u=d-B,$=R-o,j=T-B;return e*e+u*u>$*$+j*j&&(I=R,d=T),{cx:I,cy:d,x01:-m,y01:-i,x11:I*(h/C-1),y11:d*(h/C-1)}}function hn(){var l=fn,x=cn,q=O(0),D=null,h=yn,v=gn,S=mn,a=null;function s(){var n,m,i=+l.apply(this,arguments),r=+x.apply(this,arguments),f=h.apply(this,arguments)-en,c=v.apply(this,arguments)-en,z=an(c-f),o=c>f;if(a||(a=n=sn()),r<i&&(m=r,r=i,i=m),!(r>y))a.moveTo(0,0);else if(z>ln-y)a.moveTo(r*G(f),r*w(f)),a.arc(0,0,r,f,c,!o),i>y&&(a.moveTo(i*G(c),i*w(c)),a.arc(0,0,i,c,f,o));else{var B=f,p=c,g=f,A=c,C=z,P=z,F=S.apply(this,arguments)/2,I=F>y&&(D?+D.apply(this,arguments):K(i*i+r*r)),d=b(an(r-i)/2,+q.apply(this,arguments)),R=d,T=d,e,u;if(I>y){var $=un(I/i*w(F)),j=un(I/r*w(F));(C-=$*2)>y?($*=o?1:-1,g+=$,A-=$):(C=0,g=A=(f+c)/2),(P-=j*2)>y?(j*=o?1:-1,B+=j,p-=j):(P=0,B=p=(f+c)/2)}var H=r*G(B),J=r*w(B),L=i*G(A),M=i*w(A);if(d>y){var N=r*G(p),Q=r*w(p),V=i*G(g),W=i*w(g),E;if(z<rn&&(E=pn(H,J,V,W,N,Q,L,M))){var X=H-E[0],Y=J-E[1],Z=N-E[0],k=Q-E[1],_=1/w(on((X*Z+Y*k)/(K(X*X+Y*Y)*K(Z*Z+k*k)))/2),nn=K(E[0]*E[0]+E[1]*E[1]);R=b(d,(i-nn)/(_-1)),T=b(d,(r-nn)/(_+1))}}P>y?T>y?(e=U(V,W,H,J,r,T,o),u=U(N,Q,L,M,r,T,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),T<d?a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,T,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(H,J),a.arc(0,0,r,B,p,!o)):a.moveTo(H,J),!(i>y)||!(C>y)?a.lineTo(L,M):R>y?(e=U(L,M,N,Q,i,-R,o),u=U(H,J,V,W,i,-R,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,R,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,i,A,g,o)}if(a.closePath(),n)return a=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-rn/2;return[G(m)*n,w(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:O(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:O(+n),s):x},s.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:O(+n),s):q},s.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:O(+n),s):D},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:O(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:O(+n),s):v},s.padAngle=function(n){return arguments.length?(S=typeof n=="function"?n:O(+n),s):S},s.context=function(n){return arguments.length?(a=n??null,s):a},s}export{hn as d};