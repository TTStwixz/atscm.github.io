import{S as s,i as a,s as e,N as t,w as r,a as o,e as n,t as c,y as i,d as l,c as h,b as d,k as f,f as u,g as v,z as p,h as g,j as m,n as $,A as E,B as b,C as w,u as y,D as k,v as x}from"./c.SEO.e0f3a876.js";import{b as D,g as I}from"./c.app.2542dfc9.js";function N(s){let a,e,y,k,x,D,I,N,S,T,j,R,V,q;const A=new t({props:{title:"Redirecting...",description:"This should only take a few seconds"}});return{c(){r(A.$$.fragment),a=o(),e=n("section"),y=n("div"),k=n("div"),x=n("h1"),D=c("Redirecting..."),I=o(),N=n("p"),S=c("This should only take a few seconds"),T=o(),j=n("div"),R=n("a"),V=c("Jump to latests docs"),this.h()},l(s){i(A.$$.fragment,s),a=l(s),e=h(s,"SECTION",{class:!0});var t=d(e);y=h(t,"DIV",{class:!0});var r=d(y);k=h(r,"DIV",{class:!0});var o=d(k);x=h(o,"H1",{class:!0});var n=d(x);D=f(n,"Redirecting..."),n.forEach(u),I=l(o),N=h(o,"P",{class:!0});var c=d(N);S=f(c,"This should only take a few seconds"),c.forEach(u),T=l(o),j=h(o,"DIV",{class:!0});var v=d(j);R=h(v,"A",{href:!0,class:!0});var p=d(R);V=f(p,"Jump to latests docs"),p.forEach(u),v.forEach(u),o.forEach(u),r.forEach(u),t.forEach(u),this.h()},h(){v(x,"class","title"),v(N,"class","subtitle"),v(R,"href","latest"),v(R,"class","button is-link"),v(j,"class","buttons is-centered"),v(k,"class","container has-text-centered"),v(y,"class","hero-body"),v(e,"class","hero is-fullheight-with-navbar")},m(s,t){p(A,s,t),g(s,a,t),g(s,e,t),m(e,y),m(y,k),m(k,x),m(x,D),m(k,I),m(k,N),m(N,S),m(k,T),m(k,j),m(j,R),m(R,V),q=!0},p:$,i(s){q||(E(A.$$.fragment,s),q=!0)},o(s){b(A.$$.fragment,s),q=!1},d(s){w(A,s),s&&u(a),s&&u(e)}}}function S(s){const[,a]=s.match(/^(.*)\.[0-9]+/)||[];return a||null}function T(s,a,e){let t;const{page:r}=D();y(s,r,s=>e("$page",t=s));const{tags:o}=k("index");return x(()=>{const{version:s}=t.query;function a(a){const e=a.version===s;let t=`/${a.tag||"latest"}/`;e||(t+=`?requested=${s||"none"}`),I(t,{replaceState:e})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});let e,r=s;do{e=o.find(s=>s.version.startsWith(r))}while(!e&&(r=S(r)));return e?a(e):(console.error(`No match for ${s}, redirect to latest`),a({version:"invalid"}))}),{page:r}}export default class extends s{constructor(s){super(),a(this,s,T,N,e,{})}}
