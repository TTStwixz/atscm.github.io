import{S as e,i as t,s as n,E as s,e as a,c as r,b as l,f as i,g as o,h as c,F as m,G as h,A as f,P as d,Q as p,B as u,t as g,a as $,k as v,d as b,p as E,R as k,j as x,l as L,M as y,N as I,o as S,m as w,T,U as D,n as P,I as A,w as V,y as _,z as O,C as j,u as N,V as H}from"./c.SEO.f912076f.js";import{a as M}from"./c.app.c32abd7b.js";function F(e){const t=e-1;return t*t*t+1}function B(e,{delay:t=0,duration:n=400,easing:s=F}){const a=getComputedStyle(e),r=+a.opacity,l=parseFloat(a.height),i=parseFloat(a.paddingTop),o=parseFloat(a.paddingBottom),c=parseFloat(a.marginTop),m=parseFloat(a.marginBottom),h=parseFloat(a.borderTopWidth),f=parseFloat(a.borderBottomWidth);return{delay:t,duration:n,easing:s,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*r};`+`height: ${e*l}px;`+`padding-top: ${e*i}px;`+`padding-bottom: ${e*o}px;`+`margin-top: ${e*c}px;`+`margin-bottom: ${e*m}px;`+`border-top-width: ${e*h}px;`+`border-bottom-width: ${e*f}px;`}}const R=({open:e})=>({open:e}),q=({open:e})=>({open:e});function C(e){let t,n,g;const $=e.$$slots.default,v=s($,e,null);return{c(){t=a("div"),v&&v.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var n=l(t);v&&v.l(n),n.forEach(i),this.h()},h(){o(t,"class","details-content svelte-1p261ik")},m(e,n){c(e,t,n),v&&v.m(t,null),g=!0},p(e,t){v&&v.p&&e.$$scope&&v.p(m($,t,e,null),h($,t,null))},i(e){g||(f(v,e),e&&d(()=>{n||(n=p(t,B,{},!0)),n.run(1)}),g=!0)},o(e){u(v,e),e&&(n||(n=p(t,B,{},!1)),n.run(0)),g=!1},d(e){e&&i(t),v&&v.d(e),e&&n&&n.end()}}}function G(e){let t,n,d,p,S,w;const T=e.$$slots.summary,D=s(T,e,q);let P=e.open&&C(e);return{c(){t=a("div"),n=a("p"),D||(d=g(e.summary)),D&&D.c(),p=$(),P&&P.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var a=l(t);n=r(a,"P",{class:!0});var o=l(n);D||(d=v(o,e.summary)),D&&D.l(o),o.forEach(i),p=b(a),P&&P.l(a),a.forEach(i),this.h()},h(){o(n,"class","button summary"),o(t,"class","details"),w=E(n,"click",k(e.click_handler))},m(e,s){c(e,t,s),x(t,n),D||x(n,d),D&&D.m(n,null),x(t,p),P&&P.m(t,null),S=!0},p(e,n){D||S&&!e.summary||L(d,n.summary),D&&D.p&&(e.$$scope||e.open)&&D.p(m(T,n,e,R),h(T,n,q)),n.open?P?(P.p(e,n),f(P,1)):((P=C(n)).c(),f(P,1),P.m(t,null)):P&&(y(),u(P,1,1,()=>{P=null}),I())},i(e){S||(f(D,e),f(P),S=!0)},o(e){u(D,e),u(P),S=!1},d(e){e&&i(t),D&&D.d(e),P&&P.d(),w()}}}function J(e,t,n){let{summary:s}=t,a=!0,{$$slots:r={},$$scope:l}=t;return e.$set=e=>{"summary"in e&&n("summary",s=e.summary),"$$scope"in e&&n("$$scope",l=e.$$scope)},{summary:s,open:a,click_handler:()=>n("open",a=!a),$$slots:r,$$scope:l}}class U extends e{constructor(e){super(),t(this,e,J,G,n,{summary:0})}}function W(e,t,n){const s=Object.create(e);return s.item=t[n],s}function z(e,t,n){const s=Object.create(e);return s.items=t[n].items,s.dirname=t[n].dirname,s}function Q(e){let t,n,s,m,h,f,d,p,u,E,k,y=e.item.kind.slice(0,1)+"",I=e.item.name+"";return{c(){t=a("li"),n=a("a"),s=a("span"),m=g(y),h=$(),f=a("span"),d=$(),p=a("span"),u=g(" "),E=g(I),this.h()},l(e){t=r(e,"LI",{});var a=l(t);n=r(a,"A",{href:!0,class:!0});var o=l(n);s=r(o,"SPAN",{class:!0});var c=l(s);m=v(c,y),c.forEach(i),h=b(o),f=r(o,"SPAN",{class:!0}),l(f).forEach(i),d=b(o),p=r(o,"SPAN",{});var g=l(p);u=v(g," "),E=v(g,I),g.forEach(i),o.forEach(i),a.forEach(i),this.h()},h(){o(s,"class","tag"),S(s,"is-success","class"===e.item.kind),S(s,"is-link","variable"===e.item.kind),S(s,"is-warning","function"===e.item.kind),o(f,"class","space svelte-vxblqn"),o(n,"href",k=e.apiLink(e.item)),o(n,"class","svelte-vxblqn")},m(e,a){c(e,t,a),x(t,n),x(n,s),x(s,m),x(n,h),x(n,f),x(n,d),x(n,p),x(p,u),x(p,E)},p(e,t){e.folders&&y!==(y=t.item.kind.slice(0,1)+"")&&L(m,y),e.folders&&S(s,"is-success","class"===t.item.kind),e.folders&&S(s,"is-link","variable"===t.item.kind),e.folders&&S(s,"is-warning","function"===t.item.kind),e.folders&&I!==(I=t.item.name+"")&&L(E,I),(e.apiLink||e.folders)&&k!==(k=t.apiLink(t.item))&&o(n,"href",k)},d(e){e&&i(t)}}}function K(e,t){let n,s,m,h,f,d=t.dirname+"",p=t.items,u=[];for(let e=0;e<p.length;e+=1)u[e]=Q(W(t,p,e));return{key:e,first:null,c(){n=a("p"),s=g(d),m=$(),h=a("ul");for(let e=0;e<u.length;e+=1)u[e].c();f=$(),this.h()},l(e){n=r(e,"P",{class:!0});var t=l(n);s=v(t,d),t.forEach(i),m=b(e),h=r(e,"UL",{class:!0});var a=l(h);for(let e=0;e<u.length;e+=1)u[e].l(a);f=b(a),a.forEach(i),this.h()},h(){o(n,"class","menu-label"),o(h,"class","menu-list svelte-vxblqn"),this.first=n},m(e,t){c(e,n,t),x(n,s),c(e,m,t),c(e,h,t);for(let e=0;e<u.length;e+=1)u[e].m(h,null);x(h,f)},p(e,t){if(e.folders&&d!==(d=t.dirname+"")&&L(s,d),e.apiLink||e.folders){let n;for(p=t.items,n=0;n<p.length;n+=1){const s=W(t,p,n);u[n]?u[n].p(e,s):(u[n]=Q(s),u[n].c(),u[n].m(h,f))}for(;n<u.length;n+=1)u[n].d(1);u.length=p.length}},d(e){e&&i(n),e&&i(m),e&&i(h),w(u,e)}}}function X(e){let t,n=[],s=new Map,m=e.folders;const h=e=>e.dirname;for(let t=0;t<m.length;t+=1){let a=z(e,m,t),r=h(a);s.set(r,n[t]=K(r,a))}return{c(){t=a("aside");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=r(e,"ASIDE",{class:!0});var s=l(t);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(i),this.h()},h(){o(t,"class","menu toc")},m(e,s){c(e,t,s);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,a){const r=a.folders;n=T(n,e,h,1,a,r,s,t,D,K,null,z)},i:P,o:P,d(e){e&&i(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function Y(e,t,n){let{apiLink:s}=t,{folders:a=[]}=t;return e.$set=e=>{"apiLink"in e&&n("apiLink",s=e.apiLink),"folders"in e&&n("folders",a=e.folders)},{apiLink:s,folders:a}}class Z extends e{constructor(e){super(),t(this,e,Y,X,n,{apiLink:0,folders:0})}}const{Map:ee}=H;function te(e,t,n){const s=Object.create(e);return s.member=t[n],s}function ne(e,t,n){const s=Object.create(e);return s.item=t[n],s}function se(e,t,n){const s=Object.create(e);return s.item=t[n],s}function ae(e,t,n){const s=Object.create(e);return s.items=t[n].items,s.dirname=t[n].dirname,s}function re(e){let t,n,s,o=e.item.name+"";return{c(){t=a("option"),n=g(o),this.h()},l(e){t=r(e,"OPTION",{value:!0});var s=l(t);n=v(s,o),s.forEach(i),this.h()},h(){t.__value=s=e.apiLink(e.item),t.value=t.__value},m(e,s){c(e,t,s),x(t,n)},p:P,d(e){e&&i(t)}}}function le(e,t){let n,s,m=t.items,h=[];for(let e=0;e<m.length;e+=1)h[e]=re(se(t,m,e));return{key:e,first:null,c(){n=a("optgroup");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){n=r(e,"OPTGROUP",{label:!0});var t=l(n);for(let e=0;e<h.length;e+=1)h[e].l(t);t.forEach(i),this.h()},h(){o(n,"label",s=t.dirname),this.first=n},m(e,t){c(e,n,t);for(let e=0;e<h.length;e+=1)h[e].m(n,null)},p(e,t){if(e.apiLink||e.folders){let s;for(m=t.items,s=0;s<m.length;s+=1){const a=se(t,m,s);h[s]?h[s].p(e,a):(h[s]=re(a),h[s].c(),h[s].m(n,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=m.length}},d(e){e&&i(n),w(h,e)}}}function ie(e){let t,n;const s=new U({props:{$$slots:{default:[fe],summary:[oe,({open:e})=>({open:e})]},$$scope:{ctx:e}}});return{c(){t=a("div"),V(s.$$.fragment),this.h()},l(e){t=r(e,"DIV",{class:!0});var n=l(t);_(s.$$.fragment,n),n.forEach(i),this.h()},h(){o(t,"class","members")},m(e,a){c(e,t,a),O(s,t,null),n=!0},p(e,t){const n={};(e.$$scope||e.index||e.open)&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(f(s.$$.fragment,e),n=!0)},o(e){u(s.$$.fragment,e),n=!1},d(e){e&&i(t),j(s)}}}function oe(e){let t,n,s=e.open?"Hide members":"Show members";return{c(){t=a("span"),n=g(s),this.h()},l(e){t=r(e,"SPAN",{slot:!0});var a=l(t);n=v(a,s),a.forEach(i),this.h()},h(){o(t,"slot","summary")},m(e,s){c(e,t,s),x(t,n)},p(e,t){e.open&&s!==(s=t.open?"Hide members":"Show members")&&L(n,s)},d(e){e&&i(t)}}}function ce(e){let t,n;return{c(){t=a("span"),n=g("static")},l(e){t=r(e,"SPAN",{});var s=l(t);n=v(s,"static"),s.forEach(i)},m(e,s){c(e,t,s),x(t,n)},d(e){e&&i(t)}}}function me(e){let t,n;return{c(){t=a("span"),n=g("get")},l(e){t=r(e,"SPAN",{});var s=l(t);n=v(s,"get"),s.forEach(i)},m(e,s){c(e,t,s),x(t,n)},d(e){e&&i(t)}}}function he(e){let t,n,s,m,h,f,d,p,u,E,k=e.member.name+"",y=e.paramString(e.member.params)+"",I=e.member.description+"",S=e.member.static&&ce(),w="get"===e.member.kind&&me();return{c(){t=a("tr"),n=a("td"),S&&S.c(),s=$(),w&&w.c(),m=$(),h=a("th"),f=g(k),d=g(y),p=$(),u=a("td"),E=$(),this.h()},l(e){t=r(e,"TR",{});var a=l(t);n=r(a,"TD",{class:!0});var o=l(n);S&&S.l(o),s=b(o),w&&w.l(o),o.forEach(i),m=b(a),h=r(a,"TH",{});var c=l(h);f=v(c,k),d=v(c,y),c.forEach(i),p=b(a),u=r(a,"TD",{}),l(u).forEach(i),E=b(a),a.forEach(i),this.h()},h(){o(n,"class","has-text-grey")},m(e,a){c(e,t,a),x(t,n),S&&S.m(n,null),x(n,s),w&&w.m(n,null),x(t,m),x(t,h),x(h,f),x(h,d),x(t,p),x(t,u),u.innerHTML=I,x(t,E)},p(e,t){t.member.static?S||((S=ce()).c(),S.m(n,s)):S&&(S.d(1),S=null),"get"===t.member.kind?w||((w=me()).c(),w.m(n,null)):w&&(w.d(1),w=null),e.index&&k!==(k=t.member.name+"")&&L(f,k),e.index&&y!==(y=t.paramString(t.member.params)+"")&&L(d,y),e.index&&I!==(I=t.member.description+"")&&(u.innerHTML=I)},d(e){e&&i(t),S&&S.d(),w&&w.d()}}}function fe(e){let t,n,s,m,h=e.item.members,f=[];for(let t=0;t<h.length;t+=1)f[t]=he(te(e,h,t));return{c(){t=$(),n=a("div"),s=a("div"),m=a("table");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){t=b(e),n=r(e,"DIV",{class:!0});var a=l(n);s=r(a,"DIV",{class:!0});var o=l(s);m=r(o,"TABLE",{class:!0});var c=l(m);for(let e=0;e<f.length;e+=1)f[e].l(c);c.forEach(i),o.forEach(i),a.forEach(i),this.h()},h(){o(m,"class","table"),o(s,"class","table-container"),o(n,"class","notification is-white")},m(e,a){c(e,t,a),c(e,n,a),x(n,s),x(s,m);for(let e=0;e<f.length;e+=1)f[e].m(m,null)},p(e,t){if(e.index||e.paramString){let n;for(h=t.item.members,n=0;n<h.length;n+=1){const s=te(t,h,n);f[n]?f[n].p(e,s):(f[n]=he(s),f[n].c(),f[n].m(m,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=h.length}},d(e){e&&i(t),e&&i(n),w(f,e)}}}function de(e){let t,n,s,m,h,d,p,E,k,S,w,T,D,P,A=e.item.name+"",V=e.paramString(e.item.params)+"",_=e.item.description+"",O=e.item.members.length&&ie(e);return{c(){t=a("div"),n=a("h2"),s=a("a"),m=g("#"),d=$(),p=g(A),E=g(V),S=$(),w=a("div"),T=$(),O&&O.c(),D=$(),this.h()},l(e){t=r(e,"DIV",{class:!0});var a=l(t);n=r(a,"H2",{id:!0,class:!0});var o=l(n);s=r(o,"A",{href:!0,class:!0});var c=l(s);m=v(c,"#"),c.forEach(i),d=b(o),p=v(o,A),E=v(o,V),o.forEach(i),S=b(a),w=r(a,"DIV",{class:!0}),l(w).forEach(i),T=b(a),O&&O.l(a),D=b(a),a.forEach(i),this.h()},h(){o(s,"href",h=e.apiLink(e.item)),o(s,"class","anchor"),o(n,"id",k=e.item.slug),o(n,"class","title is-5"),o(w,"class","content"),o(t,"class","item svelte-1f1b5ok")},m(e,a){c(e,t,a),x(t,n),x(n,s),x(s,m),x(n,d),x(n,p),x(n,E),x(t,S),x(t,w),w.innerHTML=_,x(t,T),O&&O.m(t,null),x(t,D),P=!0},p(e,a){(!P||e.index&&h!==(h=a.apiLink(a.item)))&&o(s,"href",h),P&&!e.index||A===(A=a.item.name+"")||L(p,A),P&&!e.index||V===(V=a.paramString(a.item.params)+"")||L(E,V),(!P||e.index&&k!==(k=a.item.slug))&&o(n,"id",k),P&&!e.index||_===(_=a.item.description+"")||(w.innerHTML=_),a.item.members.length?O?(O.p(e,a),f(O,1)):((O=ie(a)).c(),f(O,1),O.m(t,D)):O&&(y(),u(O,1,1,()=>{O=null}),I())},i(e){P||(f(O),P=!0)},o(e){u(O),P=!1},d(e){e&&i(t),O&&O.d()}}}function pe(e){let t,n,s,m,h,d,p,k,L,P,N,H,M,F,B,R,q,C,G,J=[],U=new ee;const W=new A({props:{title:"API Reference",description:"Guides & tutorials"}});let z=e.folders;const Q=e=>e.dirname;for(let t=0;t<z.length;t+=1){let n=ae(e,z,t),s=Q(n);U.set(s,J[t]=le(s,n))}const K=new Z({props:{folders:e.folders,apiLink:e.apiLink}});let X=e.index,Y=[];for(let t=0;t<X.length;t+=1)Y[t]=de(ne(e,X,t));const te=e=>u(Y[e],1,1,()=>{Y[e]=null});return{c(){V(W.$$.fragment),t=$(),n=a("div"),s=a("div"),m=a("nav"),h=a("div"),d=a("select"),p=a("option"),k=g("Jump to...");for(let e=0;e<J.length;e+=1)J[e].c();P=$(),N=a("div"),H=a("div"),V(K.$$.fragment),M=$(),F=a("div"),B=a("h1"),R=g("API Reference"),q=$();for(let e=0;e<Y.length;e+=1)Y[e].c();this.h()},l(e){_(W.$$.fragment,e),t=b(e),n=r(e,"DIV",{class:!0});var a=l(n);s=r(a,"DIV",{class:!0});var o=l(s);m=r(o,"NAV",{class:!0});var c=l(m);h=r(c,"DIV",{class:!0});var f=l(h);d=r(f,"SELECT",{value:!0});var u=l(d);p=r(u,"OPTION",{value:!0});var g=l(p);k=v(g,"Jump to..."),g.forEach(i);for(let e=0;e<J.length;e+=1)J[e].l(u);u.forEach(i),f.forEach(i),c.forEach(i),P=b(o),N=r(o,"DIV",{class:!0});var $=l(N);H=r($,"DIV",{class:!0});var E=l(H);_(K.$$.fragment,E),E.forEach(i),M=b($),F=r($,"DIV",{class:!0});var x=l(F);B=r(x,"H1",{class:!0});var L=l(B);R=v(L,"API Reference"),L.forEach(i),q=b(x);for(let e=0;e<Y.length;e+=1)Y[e].l(x);x.forEach(i),$.forEach(i),o.forEach(i),a.forEach(i),this.h()},h(){p.__value="Jump to...",p.value=p.__value,o(h,"class","select is-rounded"),S(h,"is-loading",e.$preloading),o(m,"class","field"),o(H,"class","column is-3 is-hidden-touch"),o(B,"class","title"),o(F,"class","column"),o(N,"class","columns"),o(s,"class","container"),o(n,"class","section"),G=E(d,"change",ge)},m(a,r){O(W,a,r),c(a,t,r),c(a,n,r),x(n,s),x(s,m),x(m,h),x(h,d),x(d,p),x(p,k);for(let e=0;e<J.length;e+=1)J[e].m(d,null);L=e.$page.params.slug;for(var l=0;l<d.options.length;l+=1){var i=d.options[l];if(i.__value===L){i.selected=!0;break}}x(s,P),x(s,N),x(N,H),O(K,H,null),x(N,M),x(N,F),x(F,B),x(B,R),x(F,q);for(let e=0;e<Y.length;e+=1)Y[e].m(F,null);C=!0},p(e,t){const n=t.folders;if(J=T(J,e,Q,1,t,n,U,d,D,le,null,ae),!C||e.$page&&L!==(L=t.$page.params.slug))for(var s=0;s<d.options.length;s+=1){var a=d.options[s];if(a.__value===L){a.selected=!0;break}}if(e.$preloading&&S(h,"is-loading",t.$preloading),e.index||e.paramString||e.open||e.apiLink){let n;for(X=t.index,n=0;n<X.length;n+=1){const s=ne(t,X,n);Y[n]?(Y[n].p(e,s),f(Y[n],1)):(Y[n]=de(s),Y[n].c(),f(Y[n],1),Y[n].m(F,null))}for(y(),n=X.length;n<Y.length;n+=1)te(n);I()}},i(e){if(!C){f(W.$$.fragment,e),f(K.$$.fragment,e);for(let e=0;e<X.length;e+=1)f(Y[e]);C=!0}},o(e){u(W.$$.fragment,e),u(K.$$.fragment,e),Y=Y.filter(Boolean);for(let e=0;e<Y.length;e+=1)u(Y[e]);C=!1},d(e){j(W,e),e&&i(t),e&&i(n);for(let e=0;e<J.length;e+=1)J[e].d();j(K),w(Y,e),G()}}}async function ue({params:{version:e}}){return{index:await this.fetch(`${e}/api/data.json`).then(e=>e.json())}}function ge(e){window.location=e.target.value}function $e(e,t,n){let s,a,{index:r}=t,l=[];const i=new Map;r.forEach(e=>{let t=i.get(e.dirname);t||(t={dirname:e.dirname,items:[]},l.push(t),i.set(e.dirname,t)),t.items.push(e)});const{page:o,preloading:c}=M();N(e,o,e=>n("$page",s=e)),N(e,c,e=>n("$preloading",a=e));return e.$set=e=>{"index"in e&&n("index",r=e.index)},{index:r,folders:l,page:o,preloading:c,apiLink:e=>`${s.params.version}/api/#${e.slug}`,paramString:e=>e?`(${e.map(e=>e.name).join(", ")})`:"",$page:s,$preloading:a}}export default class extends e{constructor(e){super(),t(this,e,$e,pe,n,{index:0})}}export{ue as preload};
