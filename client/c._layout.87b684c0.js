import{S as s,i as t,s as l,e as n,t as c,b as e,g as a,h as o,j as r,k as i,f as h,l as f,H as u,o as p,p as m,C as $,G as g,q as d,w as v,x as E,D as I,c as D,d as x,n as j,E as L,F as V,r as w,u as A,v as S}from"./c.client.3e07c984.js";function y(s,t,l){const n=s.slice();return n[9]=t[l],n}function C(s,t,l){const n=s.slice();return n[6]=t[l],n[8]=l,n}function U(s){let t,l=s[6].sections,c=[];for(let t=0;t<l.length;t+=1)c[t]=b(y(s,l,t));return{c(){t=n("ul");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){t=a(s,"UL",{class:!0});var l=o(t);for(let s=0;s<c.length;s+=1)c[s].l(l);l.forEach(i),this.h()},h(){f(t,"class","menu-list")},m(s,l){p(s,t,l);for(let s=0;s<c.length;s+=1)c[s].m(t,null)},p(s,n){if(17&n){let e;for(l=s[6].sections,e=0;e<l.length;e+=1){const a=y(s,l,e);c[e]?c[e].p(a,n):(c[e]=b(a),c[e].c(),c[e].m(t,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=l.length}},d(s){s&&i(t),g(c,s)}}}function b(s){let t,l,u,g,d,v=s[9].title+"";return{c(){t=n("li"),l=n("a"),u=c(v),d=e(),this.h()},l(s){t=a(s,"LI",{});var n=o(t);l=a(n,"A",{href:!0});var c=o(l);u=r(c,v),c.forEach(i),d=h(n),n.forEach(i),this.h()},h(){f(l,"href",g=s[4](s[6],s[9]))},m(s,n){p(s,t,n),m(t,l),m(l,u),m(t,d)},p(s,t){1&t&&v!==(v=s[9].title+"")&&$(u,v),1&t&&g!==(g=s[4](s[6],s[9]))&&f(l,"href",g)},d(s){s&&i(t)}}}function k(s){let t,l,g,d,v,E,I=s[6].title+"",D=s[1][s[8]]&&s[6].sections.length&&U(s);return{c(){t=n("li"),l=n("a"),g=c(I),v=e(),D&&D.c(),E=e(),this.h()},l(s){t=a(s,"LI",{});var n=o(t);l=a(n,"A",{href:!0});var c=o(l);g=r(c,I),c.forEach(i),v=h(n),D&&D.l(n),E=h(n),n.forEach(i),this.h()},h(){f(l,"href",d=s[4](s[6])),u(l,"is-active",s[3](s[6]))},m(s,n){p(s,t,n),m(t,l),m(l,g),m(t,v),D&&D.m(t,null),m(t,E)},p(s,n){1&n&&I!==(I=s[6].title+"")&&$(g,I),1&n&&d!==(d=s[4](s[6]))&&f(l,"href",d),9&n&&u(l,"is-active",s[3](s[6])),s[1][s[8]]&&s[6].sections.length?D?D.p(s,n):(D=U(s),D.c(),D.m(t,E)):D&&(D.d(1),D=null)},d(s){s&&i(t),D&&D.d()}}}function q(s){let t,l,c=s[0],e=[];for(let t=0;t<c.length;t+=1)e[t]=k(C(s,c,t));return{c(){t=n("aside"),l=n("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=a(s,"ASIDE",{class:!0});var n=o(t);l=a(n,"UL",{class:!0});var c=o(l);for(let s=0;s<e.length;s+=1)e[s].l(c);c.forEach(i),n.forEach(i),this.h()},h(){f(l,"class","menu-list"),f(t,"class","menu")},m(s,n){p(s,t,n),m(t,l);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(s,[t]){if(27&t){let n;for(c=s[0],n=0;n<c.length;n+=1){const a=C(s,c,n);e[n]?e[n].p(a,t):(e[n]=k(a),e[n].c(),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=c.length}},i:d,o:d,d(s){s&&i(t),g(e,s)}}}function F(s,t,l){let n,{topics:c}=t;const{page:e}=v();E(s,e,s=>l(5,n=s));const a=s=>n.params.manual===s.slug;let o;return s.$set=s=>{"topics"in s&&l(0,c=s.topics)},s.$$.update=()=>{1&s.$$.dirty&&l(1,o=c.map(s=>a(s)))},[c,o,e,a,(s,t)=>`${n.params.version}/docs/${s.slug}${t?`/#${t.slug}`:""}`]}class G extends s{constructor(s){super(),t(this,s,F,q,l,{topics:0})}}function H(s){let t,l,c,r,u,$,g;const d=s[2].default,v=I(d,s,s[1],null),E=new G({props:{topics:s[0]}});return{c(){t=n("section"),l=n("div"),c=n("div"),r=n("div"),v&&v.c(),u=e(),$=n("div"),D(E.$$.fragment),this.h()},l(s){t=a(s,"SECTION",{class:!0});var n=o(t);l=a(n,"DIV",{class:!0});var e=o(l);c=a(e,"DIV",{class:!0});var f=o(c);r=a(f,"DIV",{class:!0});var p=o(r);v&&v.l(p),p.forEach(i),u=h(f),$=a(f,"DIV",{class:!0});var m=o($);x(E.$$.fragment,m),m.forEach(i),f.forEach(i),e.forEach(i),n.forEach(i),this.h()},h(){f(r,"class","column"),f($,"class","column is-3"),f(c,"class","columns"),f(l,"class","container"),f(t,"class","section")},m(s,n){p(s,t,n),m(t,l),m(l,c),m(c,r),v&&v.m(r,null),m(c,u),m(c,$),j(E,$,null),g=!0},p(s,[t]){v&&v.p&&2&t&&v.p(L(d,s,s[1],null),V(d,s[1],t,null));const l={};1&t&&(l.topics=s[0]),E.$set(l)},i(s){g||(w(v,s),w(E.$$.fragment,s),g=!0)},o(s){A(v,s),A(E.$$.fragment,s),g=!1},d(s){s&&i(t),v&&v.d(s),S(E)}}}async function N({params:{version:s}}){return{topics:await this.fetch(`${s}/docs/toc.json`).then(s=>s.json())}}function O(s,t,l){let{topics:n}=t,{$$slots:c={},$$scope:e}=t;return s.$set=s=>{"topics"in s&&l(0,n=s.topics),"$$scope"in s&&l(1,e=s.$$scope)},[n,e,c]}export default class extends s{constructor(s){super(),t(this,s,O,H,l,{topics:0})}}export{N as preload};
