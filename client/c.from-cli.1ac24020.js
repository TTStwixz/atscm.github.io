import{S as s,i as a,s as e,a as t,c as r,b as o,e as n,t as c,d as i,f as l,g as h,h as d,j as f,k as u,l as v,n as p,o as g,p as m,q as $,r as E,u as w,v as b,w as y,x as k,y as x,z as I,A as T}from"./c.client.a350fe10.js";function q(s){let a,e,y,k,x,I,T,q,D,N,R,S,V,j;const A=new t({props:{title:"Redirecting...",description:"This should only take a few seconds"}});return{c(){r(A.$$.fragment),a=o(),e=n("section"),y=n("div"),k=n("div"),x=n("h1"),I=c("Redirecting..."),T=o(),q=n("p"),D=c("This should only take a few seconds"),N=o(),R=n("div"),S=n("a"),V=c("Jump to latests docs"),this.h()},l(s){i(A.$$.fragment,s),a=l(s),e=h(s,"SECTION",{class:!0});var t=d(e);y=h(t,"DIV",{class:!0});var r=d(y);k=h(r,"DIV",{class:!0});var o=d(k);x=h(o,"H1",{class:!0});var n=d(x);I=f(n,"Redirecting..."),n.forEach(u),T=l(o),q=h(o,"P",{class:!0});var c=d(q);D=f(c,"This should only take a few seconds"),c.forEach(u),N=l(o),R=h(o,"DIV",{class:!0});var v=d(R);S=h(v,"A",{href:!0,class:!0});var p=d(S);V=f(p,"Jump to latests docs"),p.forEach(u),v.forEach(u),o.forEach(u),r.forEach(u),t.forEach(u),this.h()},h(){v(x,"class","title"),v(q,"class","subtitle"),v(S,"href","latest"),v(S,"class","button is-link"),v(R,"class","buttons is-centered"),v(k,"class","container has-text-centered"),v(y,"class","hero-body"),v(e,"class","hero is-fullheight-with-navbar")},m(s,t){p(A,s,t),g(s,a,t),g(s,e,t),m(e,y),m(y,k),m(k,x),m(x,I),m(k,T),m(k,q),m(q,D),m(k,N),m(k,R),m(R,S),m(S,V),j=!0},p:$,i(s){j||(E(A.$$.fragment,s),j=!0)},o(s){w(A.$$.fragment,s),j=!1},d(s){b(A,s),s&&u(a),s&&u(e)}}}function D(s){const[,a]=s.match(/^(.*)\.[0-9]+/)||[];return a||null}function N(s,a,e){let t;const{page:r}=y();k(s,r,s=>e(1,t=s));const{tags:o}=x("index");return I(()=>{const{version:s}=t.query;function a(a){const e=a.version===s;let t=`/${a.tag||"latest"}/`;e||(t+=`?requested=${s||"none"}`),T(t,{replaceState:e})}if(!s)return console.error("No version passed, redirect to latest"),a({version:"missing"});let e,r=s;do{e=o.find(s=>s.version.startsWith(r))}while(!e&&(r=D(r)));return e?a(e):(console.error(`No match for ${s}, redirect to latest`),a({version:"invalid"}))}),[r]}export default class extends s{constructor(s){super(),a(this,s,N,q,e,{})}}
