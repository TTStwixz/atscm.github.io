import{S as s,i as t,s as a,G as e,e as o,a as c,t as r,c as i,b as n,f as l,d as p,k as h,g as f,h as u,j as g,w as v,x as d,y as m,z as $,A as b,m as w,u as E}from"./SEO.d01c8e11.js";import{a as j}from"./app.347942f9.js";function x(s,t,a){const e=Object.create(s);return e.topic=t[a],e}function M(s){var t,a,e,v,d,m,$,b,w=s.topic.description+"";return{c(){t=o("a"),a=o("div"),e=c(),v=o("div"),d=o("div"),m=r("View"),$=c(),this.h()},l(s){t=i(s,"A",{class:!0,href:!0},!1);var o=n(t);a=i(o,"DIV",{class:!0},!1),n(a).forEach(l),e=p(o),v=i(o,"DIV",{class:!0},!1);var c=n(v);d=i(c,"DIV",{class:!0},!1);var r=n(d);m=h(r,"View"),r.forEach(l),c.forEach(l),$=p(o),o.forEach(l),this.h()},h(){f(a,"class","content svelte-5eavl3"),f(d,"class","button is-link"),f(v,"class","buttons is-right"),f(t,"class","box svelte-5eavl3"),f(t,"href",b=s.$page.params.version+"/docs/"+s.topic.slug)},m(s,o){u(s,t,o),g(t,a),a.innerHTML=w,g(t,e),g(t,v),g(v,d),g(d,m),g(t,$)},p(s,e){s.topics&&w!==(w=e.topic.description+"")&&(a.innerHTML=w),(s.$page||s.topics)&&b!==(b=e.$page.params.version+"/docs/"+e.topic.slug)&&f(t,"href",b)},d(s){s&&l(t)}}}function V(s){var t,a,E,j,V,S,D,H,I,k=new e({props:{title:"Manual",description:"Guides & tutorials"}});let y=s.topics,A=[];for(let t=0;t<y.length;t+=1)A[t]=M(x(s,y,t));return{c(){k.$$.fragment.c(),t=c(),a=o("h1"),E=r("Manual"),j=c(),V=o("p"),S=r("Select one of the manuals below:"),D=c();for(let s=0;s<A.length;s+=1)A[s].c();H=v(),this.h()},l(s){k.$$.fragment.l(s),t=p(s),a=i(s,"H1",{class:!0},!1);var e=n(a);E=h(e,"Manual"),e.forEach(l),j=p(s),V=i(s,"P",{class:!0},!1);var o=n(V);S=h(o,"Select one of the manuals below:"),o.forEach(l),D=p(s);for(let t=0;t<A.length;t+=1)A[t].l(s);H=v(),this.h()},h(){f(a,"class","title"),f(V,"class","subtitle")},m(s,e){d(k,s,e),u(s,t,e),u(s,a,e),g(a,E),u(s,j,e),u(s,V,e),g(V,S),u(s,D,e);for(let t=0;t<A.length;t+=1)A[t].m(s,e);u(s,H,e),I=!0},p(s,t){if(s.$page||s.topics){let a;for(y=t.topics,a=0;a<y.length;a+=1){const e=x(t,y,a);A[a]?A[a].p(s,e):(A[a]=M(e),A[a].c(),A[a].m(H.parentNode,H))}for(;a<A.length;a+=1)A[a].d(1);A.length=y.length}},i(s){I||(m(k.$$.fragment,s),I=!0)},o(s){$(k.$$.fragment,s),I=!1},d(s){b(k,s),s&&(l(t),l(a),l(j),l(V),l(D)),w(A,s),s&&l(H)}}}async function S({params:{version:s}}){return{topics:await this.fetch(`${s}/docs/overview.json`).then(s=>s.json())}}function D(s,t,a){let e,{topics:o=[]}=t;const{page:c}=j();return E(s,c,s=>{a("$page",e=s)}),s.$set=s=>{"topics"in s&&a("topics",o=s.topics)},{topics:o,page:c,$page:e}}export default class extends s{constructor(s){super(),t(this,s,D,V,a,["topics"])}}export{S as preload};
