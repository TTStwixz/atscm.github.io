import{S as s,i as t,s as l,e as c,t as a,a as n,c as e,b as o,k as r,f as i,d as h,g as f,o as u,h as p,j as m,l as $,m as g,n as d,u as v,J as E,w as I,y as j,z as D,K as L,L as x,A,B as S,C as V}from"./c.SEO.8f6d8728.js";import{b as w}from"./c.app.7c25ca7a.js";function y(s,t,l){const c=s.slice();return c[9]=t[l],c}function b(s,t,l){const c=s.slice();return c[6]=t[l],c[8]=l,c}function C(s){let t,l=s[6].sections,a=[];for(let t=0;t<l.length;t+=1)a[t]=O(y(s,l,t));return{c(){t=c("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=e(s,"UL",{class:!0});var l=o(t);for(let s=0;s<a.length;s+=1)a[s].l(l);l.forEach(i),this.h()},h(){f(t,"class","menu-list")},m(s,l){p(s,t,l);for(let s=0;s<a.length;s+=1)a[s].m(t,null)},p(s,c){if(17&c[0]){let n;for(l=s[6].sections,n=0;n<l.length;n+=1){const e=y(s,l,n);a[n]?a[n].p(e,c):(a[n]=O(e),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=l.length}},d(s){s&&i(t),g(a,s)}}}function O(s){let t,l,u,g,d,v=s[9].title+"";return{c(){t=c("li"),l=c("a"),u=a(v),d=n(),this.h()},l(s){t=e(s,"LI",{});var c=o(t);l=e(c,"A",{href:!0});var a=o(l);u=r(a,v),a.forEach(i),d=h(c),c.forEach(i),this.h()},h(){f(l,"href",g=s[4](s[6],s[9]))},m(s,c){p(s,t,c),m(t,l),m(l,u),m(t,d)},p(s,t){1&t[0]&&v!==(v=s[9].title+"")&&$(u,v),1&t[0]&&g!==(g=s[4](s[6],s[9]))&&f(l,"href",g)},d(s){s&&i(t)}}}function U(s){let t,l,g,d,v,E,I=s[6].title+"",j=s[1][s[8]]&&s[6].sections.length&&C(s);return{c(){t=c("li"),l=c("a"),g=a(I),v=n(),j&&j.c(),E=n(),this.h()},l(s){t=e(s,"LI",{});var c=o(t);l=e(c,"A",{href:!0});var a=o(l);g=r(a,I),a.forEach(i),v=h(c),j&&j.l(c),E=h(c),c.forEach(i),this.h()},h(){f(l,"href",d=s[4](s[6])),u(l,"is-active",s[3](s[6]))},m(s,c){p(s,t,c),m(t,l),m(l,g),m(t,v),j&&j.m(t,null),m(t,E)},p(s,c){1&c[0]&&I!==(I=s[6].title+"")&&$(g,I),1&c[0]&&d!==(d=s[4](s[6]))&&f(l,"href",d),9&c[0]&&u(l,"is-active",s[3](s[6])),s[1][s[8]]&&s[6].sections.length?j?j.p(s,c):(j=C(s),j.c(),j.m(t,E)):j&&(j.d(1),j=null)},d(s){s&&i(t),j&&j.d()}}}function k(s){let t,l,a=s[0],n=[];for(let t=0;t<a.length;t+=1)n[t]=U(b(s,a,t));return{c(){t=c("aside"),l=c("ul");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=e(s,"ASIDE",{class:!0});var c=o(t);l=e(c,"UL",{class:!0});var a=o(l);for(let s=0;s<n.length;s+=1)n[s].l(a);a.forEach(i),c.forEach(i),this.h()},h(){f(l,"class","menu-list"),f(t,"class","menu")},m(s,c){p(s,t,c),m(t,l);for(let s=0;s<n.length;s+=1)n[s].m(l,null)},p(s,t){if(27&t[0]){let c;for(a=s[0],c=0;c<a.length;c+=1){const e=b(s,a,c);n[c]?n[c].p(e,t):(n[c]=U(e),n[c].c(),n[c].m(l,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=a.length}},i:d,o:d,d(s){s&&i(t),g(n,s)}}}function z(s,t,l){let c,{topics:a}=t;const{page:n}=w();v(s,n,s=>l(5,c=s));const e=s=>c.params.manual===s.slug;let o;return s.$set=s=>{"topics"in s&&l(0,a=s.topics)},s.$$.update=()=>{1&s.$$.dirty[0]&&l(1,o=a.map(s=>e(s)))},[a,o,n,e,(s,t)=>`${c.params.version}/docs/${s.slug}${t?`/#${t.slug}`:""}`]}class B extends s{constructor(s){super(),t(this,s,z,k,l,{topics:0})}}function J(s){let t,l,a,r,u,$,g;const d=s[2].default,v=E(d,s,s[1],null),w=new B({props:{topics:s[0]}});return{c(){t=c("section"),l=c("div"),a=c("div"),r=c("div"),v&&v.c(),u=n(),$=c("div"),I(w.$$.fragment),this.h()},l(s){t=e(s,"SECTION",{class:!0});var c=o(t);l=e(c,"DIV",{class:!0});var n=o(l);a=e(n,"DIV",{class:!0});var f=o(a);r=e(f,"DIV",{class:!0});var p=o(r);v&&v.l(p),p.forEach(i),u=h(f),$=e(f,"DIV",{class:!0});var m=o($);j(w.$$.fragment,m),m.forEach(i),f.forEach(i),n.forEach(i),c.forEach(i),this.h()},h(){f(r,"class","column"),f($,"class","column is-3"),f(a,"class","columns"),f(l,"class","container"),f(t,"class","section")},m(s,c){p(s,t,c),m(t,l),m(l,a),m(a,r),v&&v.m(r,null),m(a,u),m(a,$),D(w,$,null),g=!0},p(s,t){v&&v.p&&2&t[0]&&v.p(L(d,s,s[1],null),x(d,s[1],t,null));const l={};1&t[0]&&(l.topics=s[0]),w.$set(l)},i(s){g||(A(v,s),A(w.$$.fragment,s),g=!0)},o(s){S(v,s),S(w.$$.fragment,s),g=!1},d(s){s&&i(t),v&&v.d(s),V(w)}}}async function K({params:{version:s}}){return{topics:await this.fetch(`${s}/docs/toc.json`).then(s=>s.json())}}function N(s,t,l){let{topics:c}=t,{$$slots:a={},$$scope:n}=t;return s.$set=s=>{"topics"in s&&l(0,c=s.topics),"$$scope"in s&&l(1,n=s.$$scope)},[c,n,a]}export default class extends s{constructor(s){super(),t(this,s,N,J,l,{topics:0})}}export{K as preload};
