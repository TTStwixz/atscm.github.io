import{L as t,M as n,_ as a,a as e,b as r,c as s,i as c,s as i,d as u,S as o,e as f,f as l,g as p,h,j as m,k as v,l as d,m as $,o as y,p as g,r as x,u as R,F as j,x as k,y as w,z as D}from"./c.client.cf5ccc23.js";function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function M(t){var n,a,e,r=t[0].content+"",s=new f({props:{title:t[0].title,description:t[0].title+" in the atscm manual pages"}});return{c:function(){l(s.$$.fragment),n=p(),a=h("div"),this.h()},l:function(t){m(s.$$.fragment,t),n=v(t),a=d(t,"DIV",{class:!0}),$(a).forEach(y),this.h()},h:function(){g(a,"class","content")},m:function(t,c){x(s,t,c),R(t,n,c),R(t,a,c),a.innerHTML=r,e=!0},p:function(t,n){var c=j(n,1)[0],i={};1&c&&(i.title=t[0].title),1&c&&(i.description=t[0].title+" in the atscm manual pages"),s.$set(i),(!e||1&c)&&r!==(r=t[0].content+"")&&(a.innerHTML=r)},i:function(t){e||(k(s.$$.fragment,t),e=!0)},o:function(t){w(s.$$.fragment,t),e=!1},d:function(t){D(s,t),t&&y(n),t&&y(a)}}}function T(t){return b.apply(this,arguments)}function b(){return(b=t(n.mark((function t(a){var e,r,s,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.params,r=e.version,s=e.manual,t.next=3,this.fetch("".concat(r,"/docs/").concat(s,".json"));case 3:return(c=t.sent).ok||this.error(c.status,c.statusText),t.next=7,c.json();case 7:return t.t0=t.sent,t.abrupt("return",{manual:t.t0});case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function H(t,n,a){var e=n.manual;return t.$set=function(t){"manual"in t&&a(0,e=t.manual)},[e]}var S=function(t){a(e,o);var n=L(e);function e(t){var a;return s(this,e),a=n.call(this),c(u(a),t,H,M,i,{manual:0}),a}return e}();export default S;export{T as preload};
