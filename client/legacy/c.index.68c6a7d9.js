import{a as t,b as a,c as s,d as n,i as e,e as o,S as r,s as c,U as i,f,g as u,t as p,h as l,j as h,l as v,k as g,q as d,m,o as $,p as b,C as w,D as E,E as j,F as x,G as M,H as V,I as D,u as H,z as I}from"./c.SEO.a8c9fde0.js";import{b as S}from"./c.app.2ba9025a.js";import{_ as k}from"./c.index.786e8391.js";function G(t,a,s){var n=Object.create(t);return n.topic=a[s],n}function L(t){var a,s,n,e,o,r,c,i,w=t.topic.description+"";return{c:function(){a=f("a"),s=f("div"),n=u(),e=f("div"),o=f("div"),r=p("View"),c=u(),this.h()},l:function(t){a=l(t,"A",{class:!0,href:!0});var i=h(a);s=l(i,"DIV",{class:!0}),h(s).forEach(v),n=g(i),e=l(i,"DIV",{class:!0});var f=h(e);o=l(f,"DIV",{class:!0});var u=h(o);r=d(u,"View"),u.forEach(v),f.forEach(v),c=g(i),i.forEach(v),this.h()},h:function(){m(s,"class","content svelte-5eavl3"),m(o,"class","button is-link"),m(e,"class","buttons is-right"),m(a,"class","box svelte-5eavl3"),m(a,"href",i=t.$page.params.version+"/docs/"+t.topic.slug)},m:function(t,i){$(t,a,i),b(a,s),s.innerHTML=w,b(a,n),b(a,e),b(e,o),b(o,r),b(a,c)},p:function(t,n){t.topics&&w!==(w=n.topic.description+"")&&(s.innerHTML=w),(t.$page||t.topics)&&i!==(i=n.$page.params.version+"/docs/"+n.topic.slug)&&m(a,"href",i)},d:function(t){t&&v(a)}}}function O(t){for(var a,s,n,e,o,r,c,I,S,k=new i({props:{title:"Manual",description:"Guides & tutorials"}}),O=t.topics,T=[],q=0;q<O.length;q+=1)T[q]=L(G(t,O,q));return{c:function(){w(k.$$.fragment),a=u(),s=f("h1"),n=p("Manual"),e=u(),o=f("p"),r=p("Select one of the manuals below:"),c=u();for(var t=0;t<T.length;t+=1)T[t].c();I=E(),this.h()},l:function(t){j(k.$$.fragment,t),a=g(t),s=l(t,"H1",{class:!0});var i=h(s);n=d(i,"Manual"),i.forEach(v),e=g(t),o=l(t,"P",{class:!0});var f=h(o);r=d(f,"Select one of the manuals below:"),f.forEach(v),c=g(t);for(var u=0;u<T.length;u+=1)T[u].l(t);I=E(),this.h()},h:function(){m(s,"class","title"),m(o,"class","subtitle")},m:function(t,i){x(k,t,i),$(t,a,i),$(t,s,i),b(s,n),$(t,e,i),$(t,o,i),b(o,r),$(t,c,i);for(var f=0;f<T.length;f+=1)T[f].m(t,i);$(t,I,i),S=!0},p:function(t,a){if(t.$page||t.topics){var s;for(O=a.topics,s=0;s<O.length;s+=1){var n=G(a,O,s);T[s]?T[s].p(t,n):(T[s]=L(n),T[s].c(),T[s].m(I.parentNode,I))}for(;s<T.length;s+=1)T[s].d(1);T.length=O.length}},i:function(t){S||(M(k.$$.fragment,t),S=!0)},o:function(t){V(k.$$.fragment,t),S=!1},d:function(t){D(k,t),t&&v(a),t&&v(s),t&&v(e),t&&v(o),t&&v(c),H(T,t),t&&v(I)}}}function T(t){var a,s;return k.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.params.version,n.next=3,k.awrap(this.fetch("".concat(a,"/docs/overview.json")).then((function(t){return t.json()})));case 3:return s=n.sent,n.abrupt("return",{topics:s});case 5:case"end":return n.stop()}}),null,this)}function q(t,a,s){var n,e=a.topics,o=void 0===e?[]:e,r=S().page;return I(t,r,(function(t){return s("$page",n=t)})),t.$set=function(t){"topics"in t&&s("topics",o=t.topics)},{topics:o,page:r,$page:n}}var y=function(i){function f(t){var r;return a(this,f),r=s(this,n(f).call(this)),e(o(r),t,q,O,c,{topics:0}),r}return t(f,r),f}();export default y;export{T as preload};
