import{B as s,S as a,i as e,s as t,a as n,e as r,t as l,b as c,g as o,h as i,j as h,k as f,f as m,l as u,o as d,p as g,C as v,c as p,d as E,n as $,r as I,u as w,v as D,G as L,w as V,x as j}from"./c.client.a350fe10.js";function x(s,a,e){const t=s.slice();return t[3]=a[e],t}function b(s){let a,e,t,n,p,E=s[3].title+"";return{c(){a=r("li"),e=r("a"),t=l(E),p=c(),this.h()},l(s){a=o(s,"LI",{});var n=i(a);e=o(n,"A",{href:!0});var r=i(e);t=h(r,E),r.forEach(f),p=m(n),n.forEach(f),this.h()},h(){u(e,"href",n=s[1].path+"#"+s[3].slug)},m(s,n){d(s,a,n),g(a,e),g(e,t),g(a,p)},p(s,a){1&a&&E!==(E=s[3].title+"")&&v(t,E),3&a&&n!==(n=s[1].path+"#"+s[3].slug)&&u(e,"href",n)},d(s){s&&f(a)}}}function A(s){let a,e,t,V,j,A,M,k,H,S,T,U,y,B,C=s[0].content+"",G=s[0].title+"";const N=new n({props:{title:"Readme",description:"Learn how to get started with atscm"}});let P=s[0].sections,R=[];for(let a=0;a<P.length;a+=1)R[a]=b(x(s,P,a));return{c(){p(N.$$.fragment),a=c(),e=r("div"),t=r("div"),V=r("div"),j=r("main"),A=r("div"),M=c(),k=r("div"),H=r("aside"),S=r("p"),T=l(G),U=c(),y=r("ul");for(let s=0;s<R.length;s+=1)R[s].c();this.h()},l(s){E(N.$$.fragment,s),a=m(s),e=o(s,"DIV",{class:!0});var n=i(e);t=o(n,"DIV",{class:!0});var r=i(t);V=o(r,"DIV",{class:!0});var l=i(V);j=o(l,"MAIN",{class:!0});var c=i(j);A=o(c,"DIV",{class:!0}),i(A).forEach(f),c.forEach(f),M=m(l),k=o(l,"DIV",{class:!0});var u=i(k);H=o(u,"ASIDE",{class:!0});var d=i(H);S=o(d,"P",{class:!0});var g=i(S);T=h(g,G),g.forEach(f),U=m(d),y=o(d,"UL",{class:!0});var v=i(y);for(let s=0;s<R.length;s+=1)R[s].l(v);v.forEach(f),d.forEach(f),u.forEach(f),l.forEach(f),r.forEach(f),n.forEach(f),this.h()},h(){u(A,"class","content"),u(j,"class","column"),u(S,"class","menu-label"),u(y,"class","menu-list"),u(H,"class","menu"),u(k,"class","column is-3 is-hidden-mobile"),u(V,"class","columns"),u(t,"class","container"),u(e,"class","section")},m(s,n){$(N,s,n),d(s,a,n),d(s,e,n),g(e,t),g(t,V),g(V,j),g(j,A),A.innerHTML=C,g(V,M),g(V,k),g(k,H),g(H,S),g(S,T),g(H,U),g(H,y);for(let s=0;s<R.length;s+=1)R[s].m(y,null);B=!0},p(s,[a]){if((!B||1&a)&&C!==(C=s[0].content+"")&&(A.innerHTML=C),(!B||1&a)&&G!==(G=s[0].title+"")&&v(T,G),3&a){let e;for(P=s[0].sections,e=0;e<P.length;e+=1){const t=x(s,P,e);R[e]?R[e].p(t,a):(R[e]=b(t),R[e].c(),R[e].m(y,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=P.length}},i(s){B||(I(N.$$.fragment,s),B=!0)},o(s){w(N.$$.fragment,s),B=!1},d(s){D(N,s),s&&f(a),s&&f(e),L(R,s)}}}async function M({params:{version:a}}){if(!s.find(({tag:s})=>s===a))return this.error(404,`Unknown release tag '${a}'`);return{readme:await this.fetch(`${a}/readme.json`).then(s=>s.json())}}function k(s,a,e){let t,{readme:n}=a;const{page:r}=V();return j(s,r,s=>e(1,t=s)),s.$set=s=>{"readme"in s&&e(0,n=s.readme)},[n,t,r]}export default class extends a{constructor(s){super(),e(this,s,k,A,t,{readme:0})}}export{M as preload};
