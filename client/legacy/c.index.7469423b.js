import{a as t,b as s,c as a,d as n,i as e,e as o,S as c,s as r,U as i,f,g as u,t as p,h as l,j as h,l as v,k as g,q as m,m as d,o as $,p as b,C as w,D as E,E as j,F as x,G as M,H as V,I as D,u as H,z as I}from"./c.SEO.c18e6e8b.js";import{b as S}from"./c.app.155fa67c.js";import{_ as k}from"./c.index.36572018.js";function G(t,s,a){var n=Object.create(t);return n.topic=s[a],n}function L(t){var s,a,n,e,o,c,r,i,w=t.topic.description+"";return{c:function(){s=f("a"),a=f("div"),n=u(),e=f("div"),o=f("div"),c=p("View"),r=u(),this.h()},l:function(t){s=l(t,"A",{class:!0,href:!0});var i=h(s);a=l(i,"DIV",{class:!0}),h(a).forEach(v),n=g(i),e=l(i,"DIV",{class:!0});var f=h(e);o=l(f,"DIV",{class:!0});var u=h(o);c=m(u,"View"),u.forEach(v),f.forEach(v),r=g(i),i.forEach(v),this.h()},h:function(){d(a,"class","content svelte-5eavl3"),d(o,"class","button is-link"),d(e,"class","buttons is-right"),d(s,"class","box svelte-5eavl3"),d(s,"href",i=t.$page.params.version+"/docs/"+t.topic.slug)},m:function(t,i){$(t,s,i),b(s,a),a.innerHTML=w,b(s,n),b(s,e),b(e,o),b(o,c),b(s,r)},p:function(t,n){t.topics&&w!==(w=n.topic.description+"")&&(a.innerHTML=w),(t.$page||t.topics)&&i!==(i=n.$page.params.version+"/docs/"+n.topic.slug)&&d(s,"href",i)},d:function(t){t&&v(s)}}}function O(t){for(var s,a,n,e,o,c,r,I,S,k=new i({props:{title:"Manual",description:"Guides & tutorials"}}),O=t.topics,T=[],q=0;q<O.length;q+=1)T[q]=L(G(t,O,q));return{c:function(){w(k.$$.fragment),s=u(),a=f("h1"),n=p("Manual"),e=u(),o=f("p"),c=p("Select one of the manuals below:"),r=u();for(var t=0;t<T.length;t+=1)T[t].c();I=E(),this.h()},l:function(t){j(k.$$.fragment,t),s=g(t),a=l(t,"H1",{class:!0});var i=h(a);n=m(i,"Manual"),i.forEach(v),e=g(t),o=l(t,"P",{class:!0});var f=h(o);c=m(f,"Select one of the manuals below:"),f.forEach(v),r=g(t);for(var u=0;u<T.length;u+=1)T[u].l(t);I=E(),this.h()},h:function(){d(a,"class","title"),d(o,"class","subtitle")},m:function(t,i){x(k,t,i),$(t,s,i),$(t,a,i),b(a,n),$(t,e,i),$(t,o,i),b(o,c),$(t,r,i);for(var f=0;f<T.length;f+=1)T[f].m(t,i);$(t,I,i),S=!0},p:function(t,s){if(t.$page||t.topics){var a;for(O=s.topics,a=0;a<O.length;a+=1){var n=G(s,O,a);T[a]?T[a].p(t,n):(T[a]=L(n),T[a].c(),T[a].m(I.parentNode,I))}for(;a<T.length;a+=1)T[a].d(1);T.length=O.length}},i:function(t){S||(M(k.$$.fragment,t),S=!0)},o:function(t){V(k.$$.fragment,t),S=!1},d:function(t){D(k,t),t&&v(s),t&&v(a),t&&v(e),t&&v(o),t&&v(r),H(T,t),t&&v(I)}}}function T(t){var s,a;return k.async((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.params.version,n.next=3,k.awrap(this.fetch("".concat(s,"/docs/overview.json")).then((function(t){return t.json()})));case 3:return a=n.sent,n.abrupt("return",{topics:a});case 5:case"end":return n.stop()}}),null,this)}function q(t,s,a){var n,e=s.topics,o=void 0===e?[]:e,c=S().page;return I(t,c,(function(t){return a("$page",n=t)})),t.$set=function(t){"topics"in t&&a("topics",o=t.topics)},{topics:o,page:c,$page:n}}var y=function(i){function f(t){var c;return s(this,f),c=a(this,n(f).call(this)),e(o(c),t,q,O,r,{topics:0}),c}return t(f,c),f}();export default y;export{T as preload};
