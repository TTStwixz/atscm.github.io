import{L as t,M as n,_ as a,a as s,b as e,c as r,i,s as c,d as u,S as o,e as f,f as l,g as m,h as p,j as h,k as $,l as v,m as d,o as g,p as x,r as j,u as b,F as k,x as w,y,z as L}from"./c.client.765e2b46.js";function M(t){var n,a,s,e=t[0].content+"",r=new f({props:{title:t[0].title,description:t[0].title+" in the atscm manual pages"}});return{c:function(){l(r.$$.fragment),n=m(),a=p("div"),this.h()},l:function(t){h(r.$$.fragment,t),n=$(t),a=v(t,"DIV",{class:!0}),d(a).forEach(g),this.h()},h:function(){x(a,"class","content")},m:function(t,i){j(r,t,i),b(t,n,i),b(t,a,i),a.innerHTML=e,s=!0},p:function(t,n){var i=k(n,1)[0],c={};1&i&&(c.title=t[0].title),1&i&&(c.description=t[0].title+" in the atscm manual pages"),r.$set(c),(!s||1&i)&&e!==(e=t[0].content+"")&&(a.innerHTML=e)},i:function(t){s||(w(r.$$.fragment,t),s=!0)},o:function(t){y(r.$$.fragment,t),s=!1},d:function(t){L(r,t),t&&g(n),t&&g(a)}}}function T(t){return H.apply(this,arguments)}function H(){return(H=t(n.mark((function t(a){var s,e,r,i;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.params,e=s.version,r=s.manual,t.next=3,this.fetch("".concat(e,"/docs/").concat(r,".json"));case 3:return(i=t.sent).ok||this.error(i.status,i.statusText),t.next=7,i.json();case 7:return t.t0=t.sent,t.abrupt("return",{manual:t.t0});case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(t,n,a){var s=n.manual;return t.$set=function(t){"manual"in t&&a(0,s=t.manual)},[s]}var D=function(t){function n(t){var a;return s(this,n),a=e(this,r(n).call(this)),i(u(a),t,z,M,c,{manual:0}),a}return a(n,o),n}();export default D;export{T as preload};
