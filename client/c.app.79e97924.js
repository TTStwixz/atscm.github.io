import{n as e,s as t,S as s,i as r,e as n,a,c as o,b as c,d as i,f as l,g as f,h as u,j as h,t as p,k as d,l as m,m as v,o as g,p as $,q as b,r as y,u as E,v as w,w as S,x as _,y as x,z as P,A,B as k,C as I,D as j,E as D,F as O,G as R,H as C,I as N,J as L,K as V,L as T,M as U,N as M,O as B,P as q,Q as G}from"./c.SEO.49605989.js";const H=[];function F(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!H.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),H.push(t,s)}if(e){for(let e=0;e<H.length;e+=2)H[e][0](H[e+1]);H.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const i=[t,c];return a.push(i),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const J={},W=()=>({});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var z,K=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){"undefined"!=typeof window&&window,e.exports=function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.r(t);var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s;return t=e,(s=[{key:"getDescendantProperty",value:function(t,s){var r,n,a,o,c,i,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(s){if(-1===(a=s.indexOf("."))?r=s:(r=s.slice(0,a),n=s.slice(a+1)),null!=(o=t[r]))if(n||"string"!=typeof o&&"number"!=typeof o)if("[object Array]"===Object.prototype.toString.call(o))for(c=0,i=o.length;c<i;c++)e.getDescendantProperty(o[c],n,l);else n&&e.getDescendantProperty(o,n,l);else l.push(o)}else l.push(t);return l}}])&&r(t,s),e}();function a(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.d(t,"default",(function(){return o}));var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(s)||(r=s,s=[]),this.haystack=t,this.keys=s,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}var t,s,r;return t=e,r=[{key:"isMatch",value:function(e,t,s){s||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var r=t.split(""),n=[],a=0,o=0;o<r.length;o++){var c=r[o];if(-1===(a=e.indexOf(c,a)))return!1;n.push(a),a++}return e===t?1:n.length>1?n[n.length-1]-n[0]+2:2+n[0]}}],(s=[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t)return this.haystack;for(var s=[],r=0;r<this.haystack.length;r++){var a=this.haystack[r];if(0===this.keys.length){var o=e.isMatch(a,t,this.options.caseSensitive);o&&s.push({item:a,score:o})}else for(var c=0;c<this.keys.length;c++){for(var i=n.getDescendantProperty(a,this.keys[c]),l=!1,f=0;f<i.length;f++){var u=e.isMatch(i[f],t,this.options.caseSensitive);if(u){l=!0,s.push({item:a,score:u});break}}if(l)break}}return this.options.sort&&s.sort((function(e,t){return e.score-t.score})),s.map((function(e){return e.item}))}}])&&a(t.prototype,s),r&&a(t,r),e}()}]).default})),Q=(z=K)&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z;K.FuzzySearch;function X(e,t,s){const r=e.slice();return r[11]=t[s],r}function Y(e){let t,s,r,p=e[1],d=[];for(let t=0;t<p.length;t+=1)d[t]=ee(X(e,p,t));let m=!e[1].length&&te();return{c(){t=n("div"),s=n("div");for(let e=0;e<d.length;e+=1)d[e].c();r=a(),m&&m.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,role:!0});var n=c(t);s=o(n,"DIV",{class:!0});var a=c(s);for(let e=0;e<d.length;e+=1)d[e].l(a);r=i(a),m&&m.l(a),a.forEach(l),n.forEach(l),this.h()},h(){f(s,"class","dropdown-content"),f(t,"class","dropdown-menu svelte-17tnbbb"),f(t,"role","menu")},m(e,n){u(e,t,n),h(t,s);for(let e=0;e<d.length;e+=1)d[e].m(s,null);h(s,r),m&&m.m(s,null)},p(e,t){if(34&t){let n;for(p=e[1],n=0;n<p.length;n+=1){const a=X(e,p,n);d[n]?d[n].p(a,t):(d[n]=ee(a),d[n].c(),d[n].m(s,r))}for(;n<d.length;n+=1)d[n].d(1);d.length=p.length}e[1].length?m&&(m.d(1),m=null):m||(m=te(),m.c(),m.m(s,null))},d(e){e&&l(t),v(d,e),m&&m.d()}}}function Z(e){let t,s,r,v,g=e[11].version+"";return{c(){t=n("span"),s=a(),r=n("span"),v=p(g),this.h()},l(e){t=o(e,"SPAN",{class:!0}),c(t).forEach(l),s=i(e),r=o(e,"SPAN",{class:!0});var n=c(r);v=d(n,g),n.forEach(l),this.h()},h(){f(t,"class","space svelte-17tnbbb"),f(r,"class","tag is-light")},m(e,n){u(e,t,n),u(e,s,n),u(e,r,n),h(r,v)},p(e,t){2&t&&g!==(g=e[11].version+"")&&m(v,g)},d(e){e&&l(t),e&&l(s),e&&l(r)}}}function ee(e){let t,s,r,v,g,$,b,y,E=e[11].title+"",w=e[11].matches+"",S=e[11].version&&Z(e);return{c(){t=n("a"),s=n("p"),r=n("strong"),v=p(E),g=a(),S&&S.c(),$=a(),b=n("p"),this.h()},l(e){t=o(e,"A",{href:!0,class:!0});var n=c(t);s=o(n,"P",{class:!0});var a=c(s);r=o(a,"STRONG",{});var f=c(r);v=d(f,E),f.forEach(l),g=i(a),S&&S.l(a),a.forEach(l),$=i(n),b=o(n,"P",{class:!0}),c(b).forEach(l),n.forEach(l),this.h()},h(){f(s,"class","svelte-17tnbbb"),f(b,"class","content matches svelte-17tnbbb"),f(t,"href",y=e[5](e[11])),f(t,"class","dropdown-item svelte-17tnbbb")},m(e,n){u(e,t,n),h(t,s),h(s,r),h(r,v),h(s,g),S&&S.m(s,null),h(t,$),h(t,b),b.innerHTML=w},p(e,r){2&r&&E!==(E=e[11].title+"")&&m(v,E),e[11].version?S?S.p(e,r):(S=Z(e),S.c(),S.m(s,null)):S&&(S.d(1),S=null),2&r&&w!==(w=e[11].matches+"")&&(b.innerHTML=w),2&r&&y!==(y=e[5](e[11]))&&f(t,"href",y)},d(e){e&&l(t),S&&S.d()}}}function te(e){let t,s;return{c(){t=n("p"),s=p("No results"),this.h()},l(e){t=o(e,"P",{class:!0});var r=c(t);s=d(r,"No results"),r.forEach(l),this.h()},h(){f(t,"class","dropdown-item has-text-gray svelte-17tnbbb")},m(e,r){u(e,t,r),h(t,s)},d(e){e&&l(t)}}}function se(t){let s,r,p,d,m,v,E,w,S,_,x;document.body.addEventListener("click",t[4]);let P=t[2]&&Y(t);return{c(){s=a(),r=n("div"),p=n("div"),d=n("div"),m=n("div"),v=n("input"),E=a(),w=n("span"),S=n("i"),_=a(),P&&P.c(),this.h()},l(e){s=i(e),r=o(e,"DIV",{class:!0});var t=c(r);p=o(t,"DIV",{class:!0});var n=c(p);d=o(n,"DIV",{class:!0});var a=c(d);m=o(a,"DIV",{class:!0});var f=c(m);v=o(f,"INPUT",{class:!0,type:!0,placeholder:!0}),E=i(f),w=o(f,"SPAN",{class:!0});var u=c(w);S=o(u,"I",{class:!0}),c(S).forEach(l),u.forEach(l),f.forEach(l),a.forEach(l),n.forEach(l),_=i(t),P&&P.l(t),t.forEach(l),this.h()},h(){f(v,"class","input"),f(v,"type","search"),f(v,"placeholder","Search..."),f(S,"class","fas fa-search"),f(w,"class","icon is-small is-left"),f(m,"class","control has-icons-left"),f(d,"class","field"),f(p,"class","dropdown-trigger"),f(r,"class","dropdown"),g(r,"is-active",t[0]),x=[$(v,"input",t[6]),$(v,"focus",t[10]),$(r,"click",b(ne))]},m(e,t){u(e,s,t),u(e,r,t),h(r,p),h(p,d),h(d,m),h(m,v),h(m,E),h(m,w),h(w,S),h(r,_),P&&P.m(r,null)},p(e,[t]){e[2]?P?P.p(e,t):(P=Y(e),P.c(),P.m(r,null)):P&&(P.d(1),P=null),1&t&&g(r,"is-active",e[0])},i:e,o:e,d(e){document.body.removeEventListener("click",t[4]),e&&l(s),e&&l(r),P&&P.d(),y(x)}}}function re(e,t){let s=e;const r=e.indexOf(t);return r>35&&(s=`...${s.slice(r-10)}`),s.slice(0,70).replace(new RegExp(t,"gi"),e=>`<span class="match has-text-primary has-text-bold">${e}</span>`)}const ne=()=>{};function ae(e,t,s){let r;const{page:n}=At();E(e,n,e=>s(9,r=e));let a,o,c=!1;let i=[],l=!1;w(()=>{a=fetch("search-index.json").then(e=>e.json()).then(({keys:e,items:t})=>{o=new Q(t,e,{sort:!0})})});return[c,i,l,n,function(){s(0,c=!1)},function(e){return`${e.version||r.params.version||"latest"}${e.link?`/${e.link}`:""}`},async function(e){await a;const t=e.target.value.trim();s(2,l=Boolean(t)),s(1,i=l?o.search(t).slice(0,10).map(e=>({...e,matches:re(e.text||e.title,t)})):[])},a,o,r,()=>s(0,c=!0)]}class oe extends s{constructor(e){super(),r(this,e,ae,se,t,{})}}function ce(e,t,s){const r=e.slice();return r[8]=t[s].tag,r[3]=t[s].version,r}function ie(e){let t,s,r,g,$,b,y,E,w=e[2].params.version+"",S=e[5],_=[];for(let t=0;t<S.length;t+=1)_[t]=le(ce(e,S,t));return{c(){t=n("div"),s=n("p"),r=n("span"),g=p("Version:\n                "),$=n("strong"),b=p(w),y=a(),E=n("div");for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"P",{class:!0});var a=c(s);r=o(a,"SPAN",{});var f=c(r);g=d(f,"Version:\n                "),$=o(f,"STRONG",{});var u=c($);b=d(u,w),u.forEach(l),f.forEach(l),a.forEach(l),y=i(n),E=o(n,"DIV",{class:!0});var h=c(E);for(let e=0;e<_.length;e+=1)_[e].l(h);h.forEach(l),n.forEach(l),this.h()},h(){f(s,"class","navbar-link"),f(E,"class","navbar-dropdown is-right"),f(t,"class","navbar-item has-dropdown is-hoverable")},m(e,n){u(e,t,n),h(t,s),h(s,r),h(r,g),h(r,$),h($,b),h(t,y),h(t,E);for(let e=0;e<_.length;e+=1)_[e].m(E,null)},p(e,t){if(4&t&&w!==(w=e[2].params.version+"")&&m(b,w),36&t){let s;for(S=e[5],s=0;s<S.length;s+=1){const r=ce(e,S,s);_[s]?_[s].p(r,t):(_[s]=le(r),_[s].c(),_[s].m(E,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=S.length}},d(e){e&&l(t),v(_,e)}}}function le(e){let t,s,r,m,v,$,b,y,E=e[8]+"",w=e[3]+"";return{c(){t=n("a"),s=n("span"),r=p(E),m=p(" ("),v=p(w),$=p(")"),b=a(),this.h()},l(e){t=o(e,"A",{href:!0,class:!0});var n=c(t);s=o(n,"SPAN",{});var a=c(s);r=d(a,E),m=d(a," ("),v=d(a,w),$=d(a,")"),a.forEach(l),b=i(n),n.forEach(l),this.h()},h(){f(t,"href",y=e[8]),f(t,"class","navbar-item is-flex"),g(t,"is-active",e[8]===e[2].params.version)},m(e,n){u(e,t,n),h(t,s),h(s,r),h(s,m),h(s,v),h(s,$),h(t,b)},p(e,s){36&s&&g(t,"is-active",e[8]===e[2].params.version)},d(e){e&&l(t)}}}function fe(e){let t,s,r,a,i;return{c(){t=n("div"),s=n("div"),r=n("div"),a=n("div"),i=p("Documentation for beta releases may be incomplete."),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"DIV",{class:!0});var f=c(s);r=o(f,"DIV",{class:!0});var u=c(r);a=o(u,"DIV",{class:!0});var h=c(a);i=d(h,"Documentation for beta releases may be incomplete."),h.forEach(l),u.forEach(l),f.forEach(l),n.forEach(l),this.h()},h(){f(a,"class","message-body"),f(r,"class","message is-warning"),f(s,"class","container"),f(t,"class","message-section")},m(e,n){u(e,t,n),h(t,s),h(s,r),h(r,a),h(a,i)},d(e){e&&l(t)}}}function ue(e){let t,s,r,m,v,b,E,w,j,D,O,R,C,N,L,V,T,U,M,B,q,G,H,F,J,W,z,K,Q,X,Y,Z,ee,te,se,re,ne,ae,ce,le,ue=e[2].params&&e[2].params.version&&"from-cli"!==e[2].params.version&&ie(e);const he=new oe({});let pe=e[2].params&&e[2].params.version&&"latest"!==e[2].params.version&&fe();return{c(){t=n("nav"),s=n("div"),r=n("div"),m=n("a"),v=n("strong"),b=p("atscm"),E=a(),w=n("div"),j=n("span"),D=a(),O=n("span"),R=a(),C=n("span"),N=a(),L=n("div"),V=n("div"),T=n("a"),U=p("Readme"),M=a(),B=n("a"),q=p("Manual"),H=a(),F=n("a"),J=p("Reference"),z=a(),K=n("div"),ue&&ue.c(),Q=a(),X=n("div"),S(he.$$.fragment),Y=a(),Z=n("div"),ee=n("div"),te=n("a"),se=n("span"),re=n("i"),ne=a(),pe&&pe.c(),ae=_(),this.h()},l(e){t=o(e,"NAV",{class:!0});var n=c(t);s=o(n,"DIV",{class:!0});var a=c(s);r=o(a,"DIV",{class:!0});var f=c(r);m=o(f,"A",{href:!0,class:!0});var u=c(m);v=o(u,"STRONG",{});var h=c(v);b=d(h,"atscm"),h.forEach(l),u.forEach(l),E=i(f),w=o(f,"DIV",{role:!0,class:!0});var p=c(w);j=o(p,"SPAN",{"aria-hidden":!0}),c(j).forEach(l),D=i(p),O=o(p,"SPAN",{"aria-hidden":!0}),c(O).forEach(l),R=i(p),C=o(p,"SPAN",{"aria-hidden":!0}),c(C).forEach(l),p.forEach(l),f.forEach(l),N=i(a),L=o(a,"DIV",{class:!0});var g=c(L);V=o(g,"DIV",{class:!0});var $=c(V);T=o($,"A",{href:!0,class:!0});var y=c(T);U=d(y,"Readme"),y.forEach(l),M=i($),B=o($,"A",{href:!0,class:!0});var S=c(B);q=d(S,"Manual"),S.forEach(l),H=i($),F=o($,"A",{href:!0,class:!0});var P=c(F);J=d(P,"Reference"),P.forEach(l),$.forEach(l),z=i(g),K=o(g,"DIV",{class:!0});var A=c(K);ue&&ue.l(A),Q=i(A),X=o(A,"DIV",{class:!0});var k=c(X);x(he.$$.fragment,k),k.forEach(l),Y=i(A),Z=o(A,"DIV",{class:!0});var I=c(Z);ee=o(I,"DIV",{class:!0});var G=c(ee);te=o(G,"A",{href:!0,class:!0});var W=c(te);se=o(W,"SPAN",{class:!0});var oe=c(se);re=o(oe,"I",{class:!0}),c(re).forEach(l),oe.forEach(l),W.forEach(l),G.forEach(l),I.forEach(l),A.forEach(l),g.forEach(l),a.forEach(l),n.forEach(l),ne=i(e),pe&&pe.l(e),ae=_(),this.h()},h(){f(m,"href","."),f(m,"class","navbar-item"),f(j,"aria-hidden","true"),f(O,"aria-hidden","true"),f(C,"aria-hidden","true"),f(w,"role","button"),f(w,"class","navbar-burger burger"),g(w,"is-active",e[1]),f(r,"class","navbar-brand"),f(T,"href",e[3]),f(T,"class","navbar-item"),g(T,"is-active",e[2].path.endsWith(e[0])),f(B,"href",G=e[3]+"/docs"),f(B,"class","navbar-item"),g(B,"is-active",e[2].path.includes("docs")),f(F,"href",W=e[3]+"/api"),f(F,"class","navbar-item"),g(F,"is-active",e[2].path.includes("api")),f(V,"class","navbar-start"),f(X,"class","navbar-item search-item"),f(re,"class","fab fa-github"),f(se,"class","icon"),f(te,"href","https://github.com/atscm"),f(te,"class","button is-light"),f(ee,"class","buttons"),f(Z,"class","navbar-item"),f(K,"class","navbar-end"),f(L,"class","navbar-menu"),g(L,"is-active",e[1]),f(s,"class","container"),f(t,"class","navbar is-spaced"),le=[$(w,"click",e[6]),$(L,"click",e[7])]},m(e,n){u(e,t,n),h(t,s),h(s,r),h(r,m),h(m,v),h(v,b),h(r,E),h(r,w),h(w,j),h(w,D),h(w,O),h(w,R),h(w,C),h(s,N),h(s,L),h(L,V),h(V,T),h(T,U),h(V,M),h(V,B),h(B,q),h(V,H),h(V,F),h(F,J),h(L,z),h(L,K),ue&&ue.m(K,null),h(K,Q),h(K,X),P(he,X,null),h(K,Y),h(K,Z),h(Z,ee),h(ee,te),h(te,se),h(se,re),u(e,ne,n),pe&&pe.m(e,n),u(e,ae,n),ce=!0},p(e,[t]){2&t&&g(w,"is-active",e[1]),(!ce||8&t)&&f(T,"href",e[3]),5&t&&g(T,"is-active",e[2].path.endsWith(e[0])),(!ce||8&t&&G!==(G=e[3]+"/docs"))&&f(B,"href",G),4&t&&g(B,"is-active",e[2].path.includes("docs")),(!ce||8&t&&W!==(W=e[3]+"/api"))&&f(F,"href",W),4&t&&g(F,"is-active",e[2].path.includes("api")),e[2].params&&e[2].params.version&&"from-cli"!==e[2].params.version?ue?ue.p(e,t):(ue=ie(e),ue.c(),ue.m(K,Q)):ue&&(ue.d(1),ue=null),2&t&&g(L,"is-active",e[1]),e[2].params&&e[2].params.version&&"latest"!==e[2].params.version?pe||(pe=fe(),pe.c(),pe.m(ae.parentNode,ae)):pe&&(pe.d(1),pe=null)},i(e){ce||(A(he.$$.fragment,e),ce=!0)},o(e){k(he.$$.fragment,e),ce=!1},d(e){e&&l(t),ue&&ue.d(),I(he),e&&l(ne),pe&&pe.d(e),e&&l(ae),y(le)}}}function he(e,t,s){let r,{segment:n}=t;const{page:a}=At();E(e,a,e=>s(2,r=e));const{tags:o}=j("index");let c=!1;let i;return e.$set=e=>{"segment"in e&&s(0,n=e.segment)},e.$$.update=()=>{1&e.$$.dirty&&s(3,i=n&&"from-cli"!==n?n:"latest")},[n,c,r,i,a,o,()=>s(1,c=!c),()=>s(1,c=!1)]}class pe extends s{constructor(e){super(),r(this,e,he,ue,t,{segment:0})}}function de(e){const t=e-1;return t*t*t+1}function me(e,{delay:t=0,duration:s=400,easing:r=D}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:r,css:e=>`opacity: ${e*n}`}}function ve(e,{delay:t=0,duration:s=400,easing:r=de}){const n=getComputedStyle(e),a=+n.opacity,o=parseFloat(n.height),c=parseFloat(n.paddingTop),i=parseFloat(n.paddingBottom),l=parseFloat(n.marginTop),f=parseFloat(n.marginBottom),u=parseFloat(n.borderTopWidth),h=parseFloat(n.borderBottomWidth);return{delay:t,duration:s,easing:r,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*a};`+`height: ${e*o}px;`+`padding-top: ${e*c}px;`+`padding-bottom: ${e*i}px;`+`margin-top: ${e*l}px;`+`margin-bottom: ${e*f}px;`+`border-top-width: ${e*u}px;`+`border-bottom-width: ${e*h}px;`}}function ge(t){let s,r,m,v,g,b,y,E,w,S,_;return{c(){s=n("div"),r=n("div"),m=n("strong"),v=p("Cookies:"),g=p("\n      This site uses cookies. Cookies store your preferred settings and other information that will\n      help us improve our service. By using our website, you agree to the use of cookies."),b=a(),y=n("button"),E=p("Close and accept"),this.h()},l(e){s=o(e,"DIV",{class:!0});var t=c(s);r=o(t,"DIV",{class:!0});var n=c(r);m=o(n,"STRONG",{});var a=c(m);v=d(a,"Cookies:"),a.forEach(l),g=d(n,"\n      This site uses cookies. Cookies store your preferred settings and other information that will\n      help us improve our service. By using our website, you agree to the use of cookies."),n.forEach(l),b=i(t),y=o(t,"BUTTON",{class:!0,type:!0});var f=c(y);E=d(f,"Close and accept"),f.forEach(l),t.forEach(l),this.h()},h(){f(r,"class","text svelte-k3rx9v"),f(y,"class","button is-dark is-small svelte-k3rx9v"),f(y,"type","submit"),f(s,"class","box notification cookie-notice is-light is-flex-desktop is-size-7 svelte-k3rx9v"),_=$(y,"click",t[1])},m(e,t){u(e,s,t),h(s,r),h(r,m),h(m,v),h(r,g),h(s,b),h(s,y),h(y,E),S=!0},p:e,i(e){S||(O(()=>{w||(w=R(s,me,{},!0)),w.run(1)}),S=!0)},o(e){w||(w=R(s,me,{},!1)),w.run(0),S=!1},d(e){e&&l(s),e&&w&&w.end(),_()}}}function $e(e){let t,s,r=e[0]&&ge(e);return{c(){r&&r.c(),t=_()},l(e){r&&r.l(e),t=_()},m(e,n){r&&r.m(e,n),u(e,t,n),s=!0},p(e,[s]){e[0]?r?(r.p(e,s),A(r,1)):(r=ge(e),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(C(),k(r,1,1,()=>{r=null}),N())},i(e){s||(A(r),s=!0)},o(e){k(r),s=!1},d(e){r&&r.d(e),e&&l(t)}}}function be(e,t,s){let r=!1;return w(()=>{s(0,r="true"!==sessionStorage.getItem("cookiesAccepted"))}),[r,function(){sessionStorage.setItem("cookiesAccepted","true"),s(0,r=!1)}]}class ye extends s{constructor(e){super(),r(this,e,be,$e,t,{})}}function Ee(e,t,s){const r=e.ownerDocument.createElement(t);!function(e,t){Object.entries(t).forEach(([t,s])=>e.setAttribute(t,s))}(r,s),e.appendChild(r)}function we(){dataLayer.push(arguments)}function Se(e){window.dataLayer=window.dataLayer||[],Ee(document.body,"script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${e}`}),we("js",new Date),we("config",e)}var _e=[{tag:"latest",version:"0.6.0"},{tag:"beta",version:"1.0.0-beta.46"}];const xe="UA-153685419-1";function Pe(e){let t,s,r,m,v,g,$,b,y,E,w,_,j,D,O,R,C,N,U,M,B,q,G,H,F,J;const W=new pe({props:{segment:e[0]}}),z=e[4].default,K=L(z,e,e[3],null),Q=new ye({});return{c(){t=n("div"),S(W.$$.fragment),s=a(),K&&K.c(),r=a(),m=n("footer"),v=n("div"),g=n("p"),$=n("strong"),b=p("atscm"),y=p("\n      is an open source project by\n      "),E=n("a"),w=p("Bachmann electronics"),_=p("\n      · The source code is licensed\n      "),j=n("a"),D=p("MIT"),O=a(),R=n("p"),C=n("a"),N=p("Get involved"),U=p("\n      ·\n      "),M=n("a"),B=p("Improve this page"),q=p("\n      ·\n      "),G=n("a"),H=p("Imprint"),F=a(),S(Q.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);x(W.$$.fragment,n),s=i(n),K&&K.l(n),n.forEach(l),r=i(e),m=o(e,"FOOTER",{class:!0});var a=c(m);v=o(a,"DIV",{class:!0});var f=c(v);g=o(f,"P",{});var u=c(g);$=o(u,"STRONG",{});var h=c($);b=d(h,"atscm"),h.forEach(l),y=d(u,"\n      is an open source project by\n      "),E=o(u,"A",{href:!0});var p=c(E);w=d(p,"Bachmann electronics"),p.forEach(l),_=d(u,"\n      · The source code is licensed\n      "),j=o(u,"A",{href:!0});var S=c(j);D=d(S,"MIT"),S.forEach(l),u.forEach(l),O=i(f),R=o(f,"P",{});var P=c(R);C=o(P,"A",{href:!0,target:!0});var A=c(C);N=d(A,"Get involved"),A.forEach(l),U=d(P,"\n      ·\n      "),M=o(P,"A",{href:!0,target:!0});var k=c(M);B=d(k,"Improve this page"),k.forEach(l),q=d(P,"\n      ·\n      "),G=o(P,"A",{href:!0,target:!0});var I=c(G);H=d(I,"Imprint"),I.forEach(l),P.forEach(l),f.forEach(l),a.forEach(l),F=i(e),x(Q.$$.fragment,e),this.h()},h(){f(t,"class","fullscreen-content svelte-30lnsi"),f(E,"href","https://bachmann.info"),f(j,"href","http://opensource.org/licenses/mit-license.php"),f(C,"href","https://github.com/atSCM/atscm/blob/master/.github/CONTRIBUTING.md"),f(C,"target","_blank"),f(M,"href","https://github.com/atSCM/docs"),f(M,"target","_blank"),f(G,"href","https://www.bachmann.info/en/info/imprint/"),f(G,"target","_blank"),f(v,"class","content has-text-centered"),f(m,"class","footer")},m(e,n){u(e,t,n),P(W,t,null),h(t,s),K&&K.m(t,null),u(e,r,n),u(e,m,n),h(m,v),h(v,g),h(g,$),h($,b),h(g,y),h(g,E),h(E,w),h(g,_),h(g,j),h(j,D),h(v,O),h(v,R),h(R,C),h(C,N),h(R,U),h(R,M),h(M,B),h(R,q),h(R,G),h(G,H),u(e,F,n),P(Q,e,n),J=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),W.$set(s),K&&K.p&&8&t&&K.p(V(z,e,e[3],null),T(z,e[3],t,null))},i(e){J||(A(W.$$.fragment,e),A(K,e),A(Q.$$.fragment,e),J=!0)},o(e){k(W.$$.fragment,e),k(K,e),k(Q.$$.fragment,e),J=!1},d(e){e&&l(t),I(W),K&&K.d(e),e&&l(r),e&&l(m),e&&l(F),I(Q,e)}}}function Ae(e,t,s){let r,{segment:n}=t;const{page:a}=At();E(e,a,e=>s(2,r=e)),U("index",{tags:_e});let{$$slots:o={},$$scope:c}=t;return e.$set=e=>{"segment"in e&&s(0,n=e.segment),"$$scope"in e&&s(3,c=e.$$scope)},e.$$.update=()=>{4&e.$$.dirty&&we("config","UA-153685419-1",{page_path:r.path})},[n,a,r,c,o]}class ke extends s{constructor(e){super(),r(this,e,Ae,Pe,t,{segment:0})}}function Ie(e){let t,s,r,a=e[1].stack+"";return{c(){t=n("div"),s=n("pre"),r=p(a),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"PRE",{});var i=c(s);r=d(i,a),i.forEach(l),n.forEach(l),this.h()},h(){f(t,"class","content")},m(e,n){u(e,t,n),h(t,s),h(s,r)},p(e,t){2&t&&a!==(a=e[1].stack+"")&&m(r,a)},d(e){e&&l(t)}}}function je(e){let t,s,r,v,g,b,y,E,w,_,j,D,O,R,C,N,L=(e[0]<500||e[2]?e[1].message:"An error ocurred")+"";const V=new M({props:{title:e[0],description:e[3]}});let T=e[2]&&e[1].stack&&Ie(e);return{c(){S(V.$$.fragment),t=a(),s=n("section"),r=n("div"),v=n("div"),g=n("h1"),b=p(e[0]),y=a(),E=n("p"),w=p(L),_=a(),T&&T.c(),j=a(),D=n("div"),O=n("button"),R=p("Go back"),this.h()},l(n){x(V.$$.fragment,n),t=i(n),s=o(n,"SECTION",{class:!0});var a=c(s);r=o(a,"DIV",{class:!0});var f=c(r);v=o(f,"DIV",{class:!0});var u=c(v);g=o(u,"H1",{class:!0});var h=c(g);b=d(h,e[0]),h.forEach(l),y=i(u),E=o(u,"P",{class:!0});var p=c(E);w=d(p,L),p.forEach(l),_=i(u),T&&T.l(u),j=i(u),D=o(u,"DIV",{class:!0});var m=c(D);O=o(m,"BUTTON",{class:!0});var $=c(O);R=d($,"Go back"),$.forEach(l),m.forEach(l),u.forEach(l),f.forEach(l),a.forEach(l),this.h()},h(){f(g,"class","title svelte-o81gtr"),f(E,"class","subtitle"),f(O,"class","button"),f(D,"class","buttons is-centered"),f(v,"class","container has-text-centered"),f(r,"class","hero-body"),f(s,"class","hero is-fullheight-with-navbar"),N=$(O,"click",De)},m(e,n){P(V,e,n),u(e,t,n),u(e,s,n),h(s,r),h(r,v),h(v,g),h(g,b),h(v,y),h(v,E),h(E,w),h(v,_),T&&T.m(v,null),h(v,j),h(v,D),h(D,O),h(O,R),C=!0},p(e,[t]){const s={};1&t&&(s.title=e[0]),V.$set(s),(!C||1&t)&&m(b,e[0]),(!C||3&t)&&L!==(L=(e[0]<500||e[2]?e[1].message:"An error ocurred")+"")&&m(w,L),e[2]&&e[1].stack?T?T.p(e,t):(T=Ie(e),T.c(),T.m(v,j)):T&&(T.d(1),T=null)},i(e){C||(A(V.$$.fragment,e),C=!0)},o(e){k(V.$$.fragment,e),C=!1},d(e){I(V,e),e&&l(t),e&&l(s),T&&T.d(),N()}}}function De(){history.back()}function Oe(e,t,s){let{status:r}=t,{error:n}=t;const a=r<500?n.message:"An error ocurred";return e.$set=e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)},[r,n,!1,a]}class Re extends s{constructor(e){super(),r(this,e,Oe,je,t,{status:0,error:1})}}function Ce(e){let t,s;const r=[{segment:e[2][1]},e[4].props];var n=e[4].component;function a(e){let t={$$slots:{default:[Ue]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)t=B(t,r[e]);return{props:t}}if(n)var o=new n(a(e));return{c(){o&&S(o.$$.fragment),t=_()},l(e){o&&x(o.$$.fragment,e),t=_()},m(e,r){o&&P(o,e,r),u(e,t,r),s=!0},p(e,s){const c=20&s?q(r,[4&s&&{segment:e[2][1]},16&s&&G(e[4].props)]):{};if(356&s&&(c.$$scope={dirty:s,ctx:e}),n!==(n=e[4].component)){if(o){C();const e=o;k(e.$$.fragment,1,0,()=>{I(e,1)}),N()}n?(o=new n(a(e)),S(o.$$.fragment),A(o.$$.fragment,1),P(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&A(o.$$.fragment,e),s=!0)},o(e){o&&k(o.$$.fragment,e),s=!1},d(e){e&&l(t),o&&I(o,e)}}}function Ne(e){let t;const s=new Re({props:{error:e[0],status:e[1]}});return{c(){S(s.$$.fragment)},l(e){x(s.$$.fragment,e)},m(e,r){P(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(A(s.$$.fragment,e),t=!0)},o(e){k(s.$$.fragment,e),t=!1},d(e){I(s,e)}}}function Le(e){let t,s;const r=[{segment:e[2][2]},e[5].props];var n=e[5].component;function a(e){let t={$$slots:{default:[Te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)t=B(t,r[e]);return{props:t}}if(n)var o=new n(a(e));return{c(){o&&S(o.$$.fragment),t=_()},l(e){o&&x(o.$$.fragment,e),t=_()},m(e,r){o&&P(o,e,r),u(e,t,r),s=!0},p(e,s){const c=36&s?q(r,[4&s&&{segment:e[2][2]},32&s&&G(e[5].props)]):{};if(320&s&&(c.$$scope={dirty:s,ctx:e}),n!==(n=e[5].component)){if(o){C();const e=o;k(e.$$.fragment,1,0,()=>{I(e,1)}),N()}n?(o=new n(a(e)),S(o.$$.fragment),A(o.$$.fragment,1),P(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&A(o.$$.fragment,e),s=!0)},o(e){o&&k(o.$$.fragment,e),s=!1},d(e){e&&l(t),o&&I(o,e)}}}function Ve(e){let t,s;const r=[e[6].props];var n=e[6].component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=B(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&S(o.$$.fragment),t=_()},l(e){o&&x(o.$$.fragment,e),t=_()},m(e,r){o&&P(o,e,r),u(e,t,r),s=!0},p(e,s){const c=64&s?q(r,[G(e[6].props)]):{};if(n!==(n=e[6].component)){if(o){C();const e=o;k(e.$$.fragment,1,0,()=>{I(e,1)}),N()}n?(o=new n(a()),S(o.$$.fragment),A(o.$$.fragment,1),P(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&A(o.$$.fragment,e),s=!0)},o(e){o&&k(o.$$.fragment,e),s=!1},d(e){e&&l(t),o&&I(o,e)}}}function Te(e){let t,s,r=e[6]&&Ve(e);return{c(){r&&r.c(),t=_()},l(e){r&&r.l(e),t=_()},m(e,n){r&&r.m(e,n),u(e,t,n),s=!0},p(e,s){e[6]?r?(r.p(e,s),A(r,1)):(r=Ve(e),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(C(),k(r,1,1,()=>{r=null}),N())},i(e){s||(A(r),s=!0)},o(e){k(r),s=!1},d(e){r&&r.d(e),e&&l(t)}}}function Ue(e){let t,s,r=e[5]&&Le(e);return{c(){r&&r.c(),t=_()},l(e){r&&r.l(e),t=_()},m(e,n){r&&r.m(e,n),u(e,t,n),s=!0},p(e,s){e[5]?r?(r.p(e,s),A(r,1)):(r=Le(e),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(C(),k(r,1,1,()=>{r=null}),N())},i(e){s||(A(r),s=!0)},o(e){k(r),s=!1},d(e){r&&r.d(e),e&&l(t)}}}function Me(e){let t,s,r,n;const a=[Ne,Ce],o=[];function c(e,t){return e[0]?0:1}return t=c(e),s=o[t]=a[t](e),{c(){s.c(),r=_()},l(e){s.l(e),r=_()},m(e,s){o[t].m(e,s),u(e,r,s),n=!0},p(e,n){let i=t;t=c(e),t===i?o[t].p(e,n):(C(),k(o[i],1,1,()=>{o[i]=null}),N(),s=o[t],s||(s=o[t]=a[t](e),s.c()),A(s,1),s.m(r.parentNode,r))},i(e){n||(A(s),n=!0)},o(e){k(s),n=!1},d(e){o[t].d(e),e&&l(r)}}}function Be(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Me]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=B(r,s[e]);const n=new ke({props:r});return{c(){S(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,s){P(n,e,s),t=!0},p(e,[t]){const r=12&t?q(s,[4&t&&{segment:e[2][0]},8&t&&G(e[3].props)]):{};375&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(A(n.$$.fragment,e),t=!0)},o(e){k(n.$$.fragment,e),t=!1},d(e){I(n,e)}}}function qe(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:i=null}=t,{level2:l=null}=t,{level3:f=null}=t;return U(J,r),e.$set=e=>{"stores"in e&&s(7,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,i=e.level1),"level2"in e&&s(5,l=e.level2),"level3"in e&&s(6,f=e.level3)},[n,a,o,c,i,l,f,r]}class Ge extends s{constructor(e){super(),r(this,e,qe,Be,t,{stores:7,error:0,status:1,segments:2,level0:3,level1:4,level2:5,level3:6})}}const He=[/^\/search-index.json$/,/^\/([^\/]+?)\/readme.json$/,/^\/([^\/]+?)\/docs\/overview.json$/,/^\/([^\/]+?)\/docs\/toc.json$/,/^\/([^\/]+?)\/docs\/([^\/]+?).json$/,/^\/([^\/]+?)\/api\/data.json$/],Fe=[{js:()=>import("./c.index.889aeb2c.js"),css:[]},{js:()=>import("./c.from-cli.e764aa71.js"),css:["c.app.79e97924.css"]},{js:()=>import("./c._layout.aefb30c6.js"),css:["c.app.79e97924.css"]},{js:()=>import("./c.index.1396d893.js"),css:["c.app.79e97924.css"]},{js:()=>import("./c._layout.685401b7.js"),css:["c.app.79e97924.css"]},{js:()=>import("./c.index.0655802a.js"),css:["c.index.0655802a.css","c.app.79e97924.css"]},{js:()=>import("./c.[manual].1b462000.js"),css:[]},{js:()=>import("./c.index.b960033e.js"),css:["c.index.b960033e.css","c.app.79e97924.css"]}],Je=(We=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/from-cli\/?$/,parts:[{i:1}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:2,params:e=>({version:We(e[1])})},{i:3,params:e=>({version:We(e[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/?$/,parts:[{i:2,params:e=>({version:We(e[1])})},{i:4,params:e=>({version:We(e[1])})},{i:5,params:e=>({version:We(e[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/([^\/]+?)\/?$/,parts:[{i:2,params:e=>({version:We(e[1])})},{i:4,params:e=>({version:We(e[1])})},{i:6,params:e=>({version:We(e[1]),manual:We(e[2])})}]},{pattern:/^\/([^\/]+?)\/api\/?$/,parts:[{i:2,params:e=>({version:We(e[1])})},{i:7,params:e=>({version:We(e[1])})}]}]);var We;function ze(e,t={replaceState:!1}){const s=ht(new URL(e,document.baseURI));return s?(lt[t.replaceState?"replaceState":"pushState"]({id:ct},"",e),dt(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}const Ke="undefined"!=typeof __SAPPER__&&__SAPPER__;let Qe,Xe,Ye,Ze=!1,et=[],tt="{}";const st={page:F({}),preloading:F(null),session:F(Ke&&Ke.session)};let rt,nt;st.session.subscribe(async e=>{if(rt=e,!Ze)return;nt=!0;const t=ht(new URL(location.href)),s=Xe={},{redirect:r,props:n,branch:a}=await vt(t);s===Xe&&await mt(r,a,n,t.page)});let at,ot=null;let ct,it=1;const lt="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ft={};function ut(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ht(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ke.baseUrl))return null;let t=e.pathname.slice(Ke.baseUrl.length);if(""===t&&(t="/"),!He.some(e=>e.test(t)))for(let s=0;s<Je.length;s+=1){const r=Je[s],n=r.pattern.exec(t);if(n){const s=ut(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function pt(){return{x:pageXOffset,y:pageYOffset}}async function dt(e,t,s,r){if(t)ct=t;else{const e=pt();ft[ct]=e,t=ct=++it,ft[ct]=s?e:{x:0,y:0}}ct=t,Qe&&st.preloading.set(!0);const n=ot&&ot.href===e.href?ot.promise:vt(e);ot=null;const a=Xe={},{redirect:o,props:c,branch:i}=await n;if(a===Xe&&(await mt(o,i,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ft[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ft[ct]=e,e&&scrollTo(e.x,e.y)}}async function mt(e,t,s,r){if(e)return ze(e.location,{replaceState:!0});if(st.page.set(r),st.preloading.set(!1),Qe)Qe.$set(s);else{s.stores={page:{subscribe:st.page.subscribe},preloading:{subscribe:st.preloading.subscribe},session:st.session},s.level0={props:await Ye};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)$t(e.nextSibling);$t(e),$t(t)}Qe=new Ge({target:at,props:s,hydrate:!0})}et=t,tt=JSON.stringify(r.query),Ze=!0,nt=!1}async function vt(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;Ye||(Ye=Ke.preloaded[0]||W.call(o,{host:s.host,path:s.path,query:s.query,params:{}},rt));let i=1;try{const n=JSON.stringify(s.query),l=t.pattern.exec(s.path);let f=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const u=r[c];if(function(e,t,s,r){if(r!==tt)return!0;const n=et[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(c,u,l,n)&&(f=!0),a.segments[i]=r[c+1],!t)return{segment:u};const h=i++;if(!nt&&!f&&et[c]&&et[c].part===t.i)return et[c];f=!1;const{default:p,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(gt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Fe[t.i]);let m;return m=Ze||!Ke.preloaded[c+1]?d?await d.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},rt):{}:Ke.preloaded[c+1],a[`level${h}`]={component:p,props:m,segment:u,match:l,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function gt(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function $t(e){e.parentNode.removeChild(e)}function bt(e){const t=ht(new URL(e,document.baseURI));if(t)return ot&&e===ot.href||function(e,t){ot={href:e,promise:t}}(e,vt(t)),ot.promise}function yt(e){return"scrollRestoration"in lt&&(lt.scrollRestoration="manual"),function(e){at=e}(e.target),addEventListener("click",_t),addEventListener("popstate",Pt),addEventListener("touchstart",St),addEventListener("mousemove",wt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;lt.replaceState({id:it},"",t);const s=new URL(location.href);if(Ke.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=Ke;Ye||(Ye=a&&a[0]),mt(null,[],{error:c,status:o,session:n,level0:{props:Ye},level1:{props:{status:o,error:c},component:Re},segments:a},{host:t,path:s,query:ut(r),params:{}})}();const r=ht(s);return r?dt(r,it,!0,e):void 0})}let Et;function wt(e){clearTimeout(Et),Et=setTimeout(()=>{St(e)},20)}function St(e){const t=xt(e.target);t&&"prefetch"===t.rel&&bt(t.href)}function _t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=xt(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ht(n);if(a){dt(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),lt.pushState({id:ct},"",n.href)}}function xt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Pt(e){if(ft[ct]=pt(),e.state){const t=ht(new URL(location.href));t?dt(t,e.state.id):location.href=location.href}else it=it+1,function(e){ct=e}(it),lt.replaceState({id:ct},"",location.href)}const At=()=>j(J);export{xe as a,At as b,ve as c,ze as g,Se as i,yt as s,_e as t};
