import{_ as n,a as t,b as r,c,i as a,s as i,d as e,S as o,I as s,h as u,l as f,m as l,o as h,p as v,u as m,J as p,K as d,x as g,Q as E,R as $,y,g as b,k,v as D,T as I,U as R,F as x,V as P,W as w,X as A,t as V,n as L,H as S,O as T,N as _,Y as H,Z as N,w as M,L as O,M as j,e as J,f as q,j as B,r as U,z as G,A as z,B as C,$ as F}from"./c.client.cf5ccc23.js";function K(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}var Q=function(n){return{open:2&n}},W=function(n){return{open:n[1]}};function X(n){var t,r,c,a=n[3].default,i=s(a,n,n[2],null);return{c:function(){t=u("div"),i&&i.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var r=l(t);i&&i.l(r),r.forEach(h),this.h()},h:function(){v(t,"class","details-content svelte-1p261ik")},m:function(n,r){m(n,t,r),i&&i.m(t,null),c=!0},p:function(n,t){i&&i.p&&4&t&&i.p(p(a,n,n[2],null),d(a,n[2],t,null))},i:function(n){c||(g(i,n),n&&E((function(){r||(r=$(t,A,{},!0)),r.run(1)})),c=!0)},o:function(n){y(i,n),n&&(r||(r=$(t,A,{},!1)),r.run(0)),c=!1},d:function(n){n&&h(t),i&&i.d(n),n&&r&&r.end()}}}function Y(n){var t,r,c,a,i,e=n[3].summary,o=s(e,n,n[2],W),E=o||function(n){var t;return{c:function(){t=V(n[0])},l:function(r){t=L(r,n[0])},m:function(n,r){m(n,t,r)},p:function(n,r){1&r&&S(t,n[0])},d:function(n){n&&h(t)}}}(n),$=n[1]&&X(n);return{c:function(){t=u("div"),r=u("p"),E&&E.c(),c=b(),$&&$.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"P",{class:!0});var i=l(r);E&&E.l(i),i.forEach(h),c=k(a),$&&$.l(a),a.forEach(h),this.h()},h:function(){v(r,"class","button summary"),v(t,"class","details")},m:function(e,o,s){m(e,t,o),D(t,r),E&&E.m(r,null),D(t,c),$&&$.m(t,null),a=!0,s&&i(),i=I(r,"click",R(n[4]))},p:function(n,r){var c=x(r,1)[0];o?o.p&&6&c&&o.p(p(e,n,n[2],W),d(e,n[2],c,Q)):E&&E.p&&1&c&&E.p(n,c),n[1]?$?($.p(n,c),2&c&&g($,1)):(($=X(n)).c(),g($,1),$.m(t,null)):$&&(P(),y($,1,1,(function(){$=null})),w())},i:function(n){a||(g(E,n),g($),a=!0)},o:function(n){y(E,n),y($),a=!1},d:function(n){n&&h(t),E&&E.d(n),$&&$.d(),i()}}}function Z(n,t,r){var c=t.summary,a=!0,i=t.$$slots,e=void 0===i?{}:i,o=t.$$scope;return n.$set=function(n){"summary"in n&&r(0,c=n.summary),"$$scope"in n&&r(2,o=n.$$scope)},[c,a,o,e,function(){return r(1,a=!a)}]}var nn=function(t){n(s,o);var r=K(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,Z,Y,i,{summary:0}),t}return s}();function tn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}function rn(n,t,r){var c=n.slice();return c[6]=t[r],c}function cn(n,t,r){var c=n.slice();return c[2]=t[r].items,c[3]=t[r].dirname,c}function an(n){var t,r,c,a,i,e,o,s,p,d,g,E=n[6].kind.slice(0,1)+"",$=n[6].name+"";return{c:function(){t=u("li"),r=u("a"),c=u("span"),a=V(E),i=b(),e=u("span"),o=b(),s=u("span"),p=V(" "),d=V($),this.h()},l:function(n){t=f(n,"LI",{});var u=l(t);r=f(u,"A",{href:!0,class:!0});var v=l(r);c=f(v,"SPAN",{class:!0});var m=l(c);a=L(m,E),m.forEach(h),i=k(v),e=f(v,"SPAN",{class:!0}),l(e).forEach(h),o=k(v),s=f(v,"SPAN",{});var g=l(s);p=L(g," "),d=L(g,$),g.forEach(h),v.forEach(h),u.forEach(h),this.h()},h:function(){v(c,"class","tag"),T(c,"is-success","class"===n[6].kind),T(c,"is-link","variable"===n[6].kind),T(c,"is-warning","function"===n[6].kind),v(e,"class","space svelte-vxblqn"),v(r,"href",g=n[0](n[6])),v(r,"class","svelte-vxblqn")},m:function(n,u){m(n,t,u),D(t,r),D(r,c),D(c,a),D(r,i),D(r,e),D(r,o),D(r,s),D(s,p),D(s,d)},p:function(n,t){2&t&&E!==(E=n[6].kind.slice(0,1)+"")&&S(a,E),2&t&&T(c,"is-success","class"===n[6].kind),2&t&&T(c,"is-link","variable"===n[6].kind),2&t&&T(c,"is-warning","function"===n[6].kind),2&t&&$!==($=n[6].name+"")&&S(d,$),3&t&&g!==(g=n[0](n[6]))&&v(r,"href",g)},d:function(n){n&&h(t)}}}function en(n,t){for(var r,c,a,i,e,o=t[3]+"",s=t[2],p=[],d=0;d<s.length;d+=1)p[d]=an(rn(t,s,d));return{key:n,first:null,c:function(){r=u("p"),c=V(o),a=b(),i=u("ul");for(var n=0;n<p.length;n+=1)p[n].c();e=b(),this.h()},l:function(n){r=f(n,"P",{class:!0});var t=l(r);c=L(t,o),t.forEach(h),a=k(n),i=f(n,"UL",{class:!0});for(var s=l(i),u=0;u<p.length;u+=1)p[u].l(s);e=k(s),s.forEach(h),this.h()},h:function(){v(r,"class","menu-label"),v(i,"class","menu-list svelte-vxblqn"),this.first=r},m:function(n,t){m(n,r,t),D(r,c),m(n,a,t),m(n,i,t);for(var o=0;o<p.length;o+=1)p[o].m(i,null);D(i,e)},p:function(n,t){if(2&t&&o!==(o=n[3]+"")&&S(c,o),3&t){var r;for(s=n[2],r=0;r<s.length;r+=1){var a=rn(n,s,r);p[r]?p[r].p(a,t):(p[r]=an(a),p[r].c(),p[r].m(i,e))}for(;r<p.length;r+=1)p[r].d(1);p.length=s.length}},d:function(n){n&&h(r),n&&h(a),n&&h(i),_(p,n)}}}function on(n){for(var t,r=[],c=new Map,a=n[1],i=function(n){return n[3]},e=0;e<a.length;e+=1){var o=cn(n,a,e),s=i(o);c.set(s,r[e]=en(s,o))}return{c:function(){t=u("aside");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=f(n,"ASIDE",{class:!0});for(var c=l(t),a=0;a<r.length;a+=1)r[a].l(c);c.forEach(h),this.h()},h:function(){v(t,"class","menu toc")},m:function(n,c){m(n,t,c);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p:function(n,a){var e=x(a,1)[0];if(3&e){var o=n[1];r=H(r,e,i,1,n,o,c,t,N,en,null,cn)}},i:M,o:M,d:function(n){n&&h(t);for(var c=0;c<r.length;c+=1)r[c].d()}}}function sn(n,t,r){var c=t.apiLink,a=t.folders,i=void 0===a?[]:a;return n.$set=function(n){"apiLink"in n&&r(0,c=n.apiLink),"folders"in n&&r(1,i=n.folders)},[c,i]}var un=function(t){n(s,o);var r=tn(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,sn,on,i,{apiLink:0,folders:1}),t}return s}();function fn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(c){var e=t(this).constructor;a=Reflect.construct(i,arguments,e)}else a=i.apply(this,arguments);return r(this,a)}}var ln=F.Map;function hn(n,t,r){var c=n.slice();return c[12]=t[r],c}function vn(n,t,r){var c=n.slice();return c[9]=t[r],c}function mn(n,t,r){var c=n.slice();return c[9]=t[r],c}function pn(n,t,r){var c=n.slice();return c[16]=t[r].items,c[17]=t[r].dirname,c}function dn(n){var t,r,c=n[9].name+"";return{c:function(){t=u("option"),r=V(c),this.h()},l:function(n){t=f(n,"OPTION",{value:!0});var a=l(t);r=L(a,c),a.forEach(h),this.h()},h:function(){t.__value=n[6](n[9]),t.value=t.__value},m:function(n,c){m(n,t,c),D(t,r)},p:M,d:function(n){n&&h(t)}}}function gn(n,t){for(var r,c=t[16],a=[],i=0;i<c.length;i+=1)a[i]=dn(mn(t,c,i));return{key:n,first:null,c:function(){r=u("optgroup");for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){r=f(n,"OPTGROUP",{label:!0});for(var t=l(r),c=0;c<a.length;c+=1)a[c].l(t);t.forEach(h),this.h()},h:function(){v(r,"label",t[17]),this.first=r},m:function(n,t){m(n,r,t);for(var c=0;c<a.length;c+=1)a[c].m(r,null)},p:function(n,t){if(72&t){var i;for(c=n[16],i=0;i<c.length;i+=1){var e=mn(n,c,i);a[i]?a[i].p(e,t):(a[i]=dn(e),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=c.length}},d:function(n){n&&h(r),_(a,n)}}}function En(n){var t,r,c=new nn({props:{$$slots:{default:[Dn],summary:[$n,function(n){return{15:n.open}},function(n){return n.open?32768:0}]},$$scope:{ctx:n}}});return{c:function(){t=u("div"),q(c.$$.fragment),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var r=l(t);B(c.$$.fragment,r),r.forEach(h),this.h()},h:function(){v(t,"class","members")},m:function(n,a){m(n,t,a),U(c,t,null),r=!0},p:function(n,t){var r={};4227073&t&&(r.$$scope={dirty:t,ctx:n}),c.$set(r)},i:function(n){r||(g(c.$$.fragment,n),r=!0)},o:function(n){y(c.$$.fragment,n),r=!1},d:function(n){n&&h(t),G(c)}}}function $n(n){var t,r,c=n[15]?"Hide members":"Show members";return{c:function(){t=u("span"),r=V(c),this.h()},l:function(n){t=f(n,"SPAN",{slot:!0});var a=l(t);r=L(a,c),a.forEach(h),this.h()},h:function(){v(t,"slot","summary")},m:function(n,c){m(n,t,c),D(t,r)},p:function(n,t){32768&t&&c!==(c=n[15]?"Hide members":"Show members")&&S(r,c)},d:function(n){n&&h(t)}}}function yn(n){var t,r;return{c:function(){t=u("span"),r=V("static")},l:function(n){t=f(n,"SPAN",{});var c=l(t);r=L(c,"static"),c.forEach(h)},m:function(n,c){m(n,t,c),D(t,r)},d:function(n){n&&h(t)}}}function bn(n){var t,r;return{c:function(){t=u("span"),r=V("get")},l:function(n){t=f(n,"SPAN",{});var c=l(t);r=L(c,"get"),c.forEach(h)},m:function(n,c){m(n,t,c),D(t,r)},d:function(n){n&&h(t)}}}function kn(n){var t,r,c,a,i,e,o,s,p,d,g=n[12].name+"",E=n[7](n[12].params)+"",$=n[12].description+"",y=n[12].static&&yn(),I="get"===n[12].kind&&bn();return{c:function(){t=u("tr"),r=u("td"),y&&y.c(),c=b(),I&&I.c(),a=b(),i=u("th"),e=V(g),o=V(E),s=b(),p=u("td"),d=b(),this.h()},l:function(n){t=f(n,"TR",{});var u=l(t);r=f(u,"TD",{class:!0});var v=l(r);y&&y.l(v),c=k(v),I&&I.l(v),v.forEach(h),a=k(u),i=f(u,"TH",{});var m=l(i);e=L(m,g),o=L(m,E),m.forEach(h),s=k(u),p=f(u,"TD",{}),l(p).forEach(h),d=k(u),u.forEach(h),this.h()},h:function(){v(r,"class","has-text-grey")},m:function(n,u){m(n,t,u),D(t,r),y&&y.m(r,null),D(r,c),I&&I.m(r,null),D(t,a),D(t,i),D(i,e),D(i,o),D(t,s),D(t,p),p.innerHTML=$,D(t,d)},p:function(n,t){n[12].static?y||((y=yn()).c(),y.m(r,c)):y&&(y.d(1),y=null),"get"===n[12].kind?I||((I=bn()).c(),I.m(r,null)):I&&(I.d(1),I=null),1&t&&g!==(g=n[12].name+"")&&S(e,g),1&t&&E!==(E=n[7](n[12].params)+"")&&S(o,E),1&t&&$!==($=n[12].description+"")&&(p.innerHTML=$)},d:function(n){n&&h(t),y&&y.d(),I&&I.d()}}}function Dn(n){for(var t,r,c,a,i=n[9].members,e=[],o=0;o<i.length;o+=1)e[o]=kn(hn(n,i,o));return{c:function(){t=b(),r=u("div"),c=u("div"),a=u("table");for(var n=0;n<e.length;n+=1)e[n].c();this.h()},l:function(n){t=k(n),r=f(n,"DIV",{class:!0});var i=l(r);c=f(i,"DIV",{class:!0});var o=l(c);a=f(o,"TABLE",{class:!0});for(var s=l(a),u=0;u<e.length;u+=1)e[u].l(s);s.forEach(h),o.forEach(h),i.forEach(h),this.h()},h:function(){v(a,"class","table"),v(c,"class","table-container"),v(r,"class","notification is-white")},m:function(n,i){m(n,t,i),m(n,r,i),D(r,c),D(c,a);for(var o=0;o<e.length;o+=1)e[o].m(a,null)},p:function(n,t){if(129&t){var r;for(i=n[9].members,r=0;r<i.length;r+=1){var c=hn(n,i,r);e[r]?e[r].p(c,t):(e[r]=kn(c),e[r].c(),e[r].m(a,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=i.length}},d:function(n){n&&h(t),n&&h(r),_(e,n)}}}function In(n){var t,r,c,a,i,e,o,s,p,d,E,$,I,R,x=n[9].name+"",A=n[7](n[9].params)+"",T=n[9].description+"",_=n[9].members.length&&En(n);return{c:function(){t=u("div"),r=u("h2"),c=u("a"),a=V("#"),e=b(),o=V(x),s=V(A),d=b(),E=u("div"),$=b(),_&&_.c(),I=b(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var i=l(t);r=f(i,"H2",{id:!0,class:!0});var u=l(r);c=f(u,"A",{href:!0,class:!0});var v=l(c);a=L(v,"#"),v.forEach(h),e=k(u),o=L(u,x),s=L(u,A),u.forEach(h),d=k(i),E=f(i,"DIV",{class:!0}),l(E).forEach(h),$=k(i),_&&_.l(i),I=k(i),i.forEach(h),this.h()},h:function(){v(c,"href",i=n[6](n[9])),v(c,"class","anchor"),v(r,"id",p=n[9].slug),v(r,"class","title is-5"),v(E,"class","content"),v(t,"class","item svelte-1f1b5ok")},m:function(n,i){m(n,t,i),D(t,r),D(r,c),D(c,a),D(r,e),D(r,o),D(r,s),D(t,d),D(t,E),E.innerHTML=T,D(t,$),_&&_.m(t,null),D(t,I),R=!0},p:function(n,a){(!R||1&a&&i!==(i=n[6](n[9])))&&v(c,"href",i),(!R||1&a)&&x!==(x=n[9].name+"")&&S(o,x),(!R||1&a)&&A!==(A=n[7](n[9].params)+"")&&S(s,A),(!R||1&a&&p!==(p=n[9].slug))&&v(r,"id",p),(!R||1&a)&&T!==(T=n[9].description+"")&&(E.innerHTML=T),n[9].members.length?_?(_.p(n,a),1&a&&g(_,1)):((_=En(n)).c(),g(_,1),_.m(t,I)):_&&(P(),y(_,1,1,(function(){_=null})),w())},i:function(n){R||(g(_),R=!0)},o:function(n){y(_),R=!1},d:function(n){n&&h(t),_&&_.d()}}}function Rn(n){for(var t,r,c,a,i,e,o,s,p,d,E,$,R,A,S,M,O,j,z,C=[],F=new ln,K=new J({props:{title:"API Reference",description:"Guides & tutorials"}}),Q=n[3],W=function(n){return n[17]},X=0;X<Q.length;X+=1){var Y=pn(n,Q,X),Z=W(Y);F.set(Z,C[X]=gn(Z,Y))}for(var nn=new un({props:{folders:n[3],apiLink:n[6]}}),tn=n[0],rn=[],cn=0;cn<tn.length;cn+=1)rn[cn]=In(vn(n,tn,cn));var an=function(n){return y(rn[n],1,1,(function(){rn[n]=null}))};return{c:function(){q(K.$$.fragment),t=b(),r=u("div"),c=u("div"),a=u("nav"),i=u("div"),e=u("select"),o=u("option"),s=V("Jump to...");for(var n=0;n<C.length;n+=1)C[n].c();d=b(),E=u("div"),$=u("div"),q(nn.$$.fragment),R=b(),A=u("div"),S=u("h1"),M=V("API Reference"),O=b();for(var f=0;f<rn.length;f+=1)rn[f].c();this.h()},l:function(n){B(K.$$.fragment,n),t=k(n),r=f(n,"DIV",{class:!0});var u=l(r);c=f(u,"DIV",{class:!0});var v=l(c);a=f(v,"NAV",{class:!0});var m=l(a);i=f(m,"DIV",{class:!0});var p=l(i);e=f(p,"SELECT",{value:!0});var g=l(e);o=f(g,"OPTION",{value:!0});var y=l(o);s=L(y,"Jump to..."),y.forEach(h);for(var b=0;b<C.length;b+=1)C[b].l(g);g.forEach(h),p.forEach(h),m.forEach(h),d=k(v),E=f(v,"DIV",{class:!0});var D=l(E);$=f(D,"DIV",{class:!0});var I=l($);B(nn.$$.fragment,I),I.forEach(h),R=k(D),A=f(D,"DIV",{class:!0});var x=l(A);S=f(x,"H1",{class:!0});var P=l(S);M=L(P,"API Reference"),P.forEach(h),O=k(x);for(var w=0;w<rn.length;w+=1)rn[w].l(x);x.forEach(h),D.forEach(h),v.forEach(h),u.forEach(h),this.h()},h:function(){o.__value="Jump to...",o.value=o.__value,v(i,"class","select is-rounded"),T(i,"is-loading",n[2]),v(a,"class","field"),v($,"class","column is-3 is-hidden-touch"),v(S,"class","title"),v(A,"class","column"),v(E,"class","columns"),v(c,"class","container"),v(r,"class","section")},m:function(u,f,l){U(K,u,f),m(u,t,f),m(u,r,f),D(r,c),D(c,a),D(a,i),D(i,e),D(e,o),D(o,s);for(var h=0;h<C.length;h+=1)C[h].m(e,null);p=n[1].params.slug;for(var v=0;v<e.options.length;v+=1){var g=e.options[v];if(g.__value===p){g.selected=!0;break}}D(c,d),D(c,E),D(E,$),U(nn,$,null),D(E,R),D(E,A),D(A,S),D(S,M),D(A,O);for(var y=0;y<rn.length;y+=1)rn[y].m(A,null);j=!0,l&&z(),z=I(e,"change",wn)},p:function(n,t){var r=x(t,1)[0];if(72&r){var c=n[3];C=H(C,r,W,1,n,c,F,e,N,gn,null,pn)}if(!j||2&r&&p!==(p=n[1].params.slug))for(var a=0;a<e.options.length;a+=1){var o=e.options[a];if(o.__value===p){o.selected=!0;break}}if(4&r&&T(i,"is-loading",n[2]),32961&r){var s;for(tn=n[0],s=0;s<tn.length;s+=1){var u=vn(n,tn,s);rn[s]?(rn[s].p(u,r),g(rn[s],1)):(rn[s]=In(u),rn[s].c(),g(rn[s],1),rn[s].m(A,null))}for(P(),s=tn.length;s<rn.length;s+=1)an(s);w()}},i:function(n){if(!j){g(K.$$.fragment,n),g(nn.$$.fragment,n);for(var t=0;t<tn.length;t+=1)g(rn[t]);j=!0}},o:function(n){y(K.$$.fragment,n),y(nn.$$.fragment,n),rn=rn.filter(Boolean);for(var t=0;t<rn.length;t+=1)y(rn[t]);j=!1},d:function(n){G(K,n),n&&h(t),n&&h(r);for(var c=0;c<C.length;c+=1)C[c].d();G(nn),_(rn,n),z()}}}function xn(n){return Pn.apply(this,arguments)}function Pn(){return(Pn=O(j.mark((function n(t){var r,c;return j.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.params.version,n.next=3,this.fetch("".concat(r,"/api/data.json")).then((function(n){return n.json()}));case 3:return c=n.sent,n.abrupt("return",{index:c});case 5:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function wn(n){window.location=n.target.value}function An(n,t,r){var c,a,i=t.index,e=[],o=new Map;i.forEach((function(n){var t=o.get(n.dirname);t||(t={dirname:n.dirname,items:[]},e.push(t),o.set(n.dirname,t)),t.items.push(n)}));var s=z(),u=s.page,f=s.preloading;C(n,u,(function(n){return r(1,c=n)})),C(n,f,(function(n){return r(2,a=n)}));return n.$set=function(n){"index"in n&&r(0,i=n.index)},[i,c,a,e,u,f,function(n){return"".concat(c.params.version,"/api/#").concat(n.slug)},function(n){return n?"(".concat(n.map((function(n){return n.name})).join(", "),")"):""}]}var Vn=function(t){n(s,o);var r=fn(s);function s(n){var t;return c(this,s),t=r.call(this),a(e(t),n,An,Rn,i,{index:0}),t}return s}();export default Vn;export{xn as preload};
