import{a as t,b as n,c as a,d as s,i as e,e as r,S as i,s as c,T as o,B as u,g as f,f as l,D as m,k as h,h as p,j as d,l as $,m as v,E as g,o as x,F as j,G as b,H as w}from"./c.SEO.cb3d488d.js";import{_ as T}from"./c.index.f22b3509.js";function E(t){var n,a,s,e=t[0].content+"",r=new o({props:{title:t[0].title,description:t[0].title+" in the atscm manual pages"}});return{c:function(){u(r.$$.fragment),n=f(),a=l("div"),this.h()},l:function(t){m(r.$$.fragment,t),n=h(t),a=p(t,"DIV",{class:!0}),d(a).forEach($),this.h()},h:function(){v(a,"class","content")},m:function(t,i){g(r,t,i),x(t,n,i),x(t,a,i),a.innerHTML=e,s=!0},p:function(t,n){var i={};1&n[0]&&(i.title=t[0].title),1&n[0]&&(i.description=t[0].title+" in the atscm manual pages"),r.$set(i),(!s||1&n[0])&&e!==(e=t[0].content+"")&&(a.innerHTML=e)},i:function(t){s||(j(r.$$.fragment,t),s=!0)},o:function(t){b(r.$$.fragment,t),s=!1},d:function(t){w(r,t),t&&$(n),t&&$(a)}}}function H(t){var n,a,s,e;return T.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.params,a=n.version,s=n.manual,r.next=3,T.awrap(this.fetch("".concat(a,"/docs/").concat(s,".json")));case 3:return(e=r.sent).ok||this.error(e.status,e.statusText),r.next=7,T.awrap(e.json());case 7:return r.t0=r.sent,r.abrupt("return",{manual:r.t0});case 9:case"end":return r.stop()}}),null,this)}function k(t,n,a){var s=n.manual;return t.$set=function(t){"manual"in t&&a(0,s=t.manual)},[s]}var D=function(o){function u(t){var i;return n(this,u),i=a(this,s(u).call(this)),e(r(i),t,k,E,c,{manual:0}),i}return t(u,i),u}();export default D;export{H as preload};
