import{_ as t,a as s,i as a,s as e,b as r,S as n,c,d as o,e as i,f,t as u,g as l,h,j as d,k as v,l as p,m as g,n as m,p as y,q as E,r as b,u as R,v as $,w,x as D,A as k,B as x,C as I,D as S,y as T,z as q,E as N,F as V}from"./c.client.a80ae6bb.js";function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function A(t){var s,a,e,r,n,k,x,I,S,T,q,N,V,j,A=new c({props:{title:"Redirecting...",description:"This should only take a few seconds"}});return{c:function(){o(A.$$.fragment),s=i(),a=f("section"),e=f("div"),r=f("div"),n=f("h1"),k=u("Redirecting..."),x=i(),I=f("p"),S=u("This should only take a few seconds"),T=i(),q=f("div"),N=f("a"),V=u("Jump to latests docs"),this.h()},l:function(t){l(A.$$.fragment,t),s=h(t),a=d(t,"SECTION",{class:!0});var c=v(a);e=d(c,"DIV",{class:!0});var o=v(e);r=d(o,"DIV",{class:!0});var i=v(r);n=d(i,"H1",{class:!0});var f=v(n);k=p(f,"Redirecting..."),f.forEach(g),x=h(i),I=d(i,"P",{class:!0});var u=v(I);S=p(u,"This should only take a few seconds"),u.forEach(g),T=h(i),q=d(i,"DIV",{class:!0});var m=v(q);N=d(m,"A",{href:!0,class:!0});var y=v(N);V=p(y,"Jump to latests docs"),y.forEach(g),m.forEach(g),i.forEach(g),o.forEach(g),c.forEach(g),this.h()},h:function(){m(n,"class","title"),m(I,"class","subtitle"),m(N,"href","latest"),m(N,"class","button is-link"),m(q,"class","buttons is-centered"),m(r,"class","container has-text-centered"),m(e,"class","hero-body"),m(a,"class","hero is-fullheight-with-navbar")},m:function(t,c){y(A,t,c),E(t,s,c),E(t,a,c),b(a,e),b(e,r),b(r,n),b(n,k),b(r,x),b(r,I),b(I,S),b(r,T),b(r,q),b(q,N),b(N,V),j=!0},p:R,i:function(t){j||($(A.$$.fragment,t),j=!0)},o:function(t){w(A.$$.fragment,t),j=!1},d:function(t){D(A,t),t&&g(s),t&&g(a)}}}function C(t){var s=t.match(/^(.*)\.[0-9]+/)||[];return V(s,2)[1]||null}function J(t,s,a){var e,r=k().page;x(t,r,(function(t){return a(1,e=t)}));var n=I("index").tags;return S((function(){var t,s=e.query.version;function a(t){var a=t.version===s,e="/".concat(t.tag||"latest","/");a||(e+="?requested=".concat(s||"none")),N(e,{replaceState:a})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});var r=s;do{t=n.find((function(t){return t.version.startsWith(r)}))}while(!t&&(r=C(r)));return t?a(t):(console.error("No match for ".concat(s,", redirect to latest")),a({version:"invalid"}))})),[r]}var P=function(c){t(f,n);var o,i=(o=f,function(){var t,s=T(o);if(j()){var a=T(this).constructor;t=Reflect.construct(s,arguments,a)}else t=s.apply(this,arguments);return q(this,t)});function f(t){var n;return s(this,f),n=i.call(this),a(r(n),t,J,A,e,{}),n}return f}();export default P;
