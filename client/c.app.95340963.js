import{n as e,s as t,S as s,i as r,e as n,a,c as o,b as c,d as l,f as i,g as u,h as p,j as h,t as f,k as d,l as m,m as g,o as v,p as $,q as b,r as y,u as E,v as w,w as S,x,y as k,z as _,A as P,B as O,C as A,D,E as I,F as R,G as j,H as C,I as L,J as T,K as N,L as V,M,N as U,O as B,P as q,Q as G}from"./c.SEO.e0f3a876.js";const F=[];function H(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!F.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),F.push(t,s)}if(e){for(let e=0;e<F.length;e+=2)F[e][0](F[e+1]);F.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const l=[t,c];return a.push(l),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const J={},W=()=>({});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var z,K=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){"undefined"!=typeof window&&window,e.exports=function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.r(t);var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s;return t=e,(s=[{key:"getDescendantProperty",value:function(t,s){var r,n,a,o,c,l,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(s){if(-1===(a=s.indexOf("."))?r=s:(r=s.slice(0,a),n=s.slice(a+1)),null!=(o=t[r]))if(n||"string"!=typeof o&&"number"!=typeof o)if("[object Array]"===Object.prototype.toString.call(o))for(c=0,l=o.length;c<l;c++)e.getDescendantProperty(o[c],n,i);else n&&e.getDescendantProperty(o,n,i);else i.push(o)}else i.push(t);return i}}])&&r(t,s),e}();function a(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.d(t,"default",(function(){return o}));var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(s)||(r=s,s=[]),this.haystack=t,this.keys=s,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}var t,s,r;return t=e,r=[{key:"isMatch",value:function(e,t,s){s||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var r=t.split(""),n=[],a=0,o=0;o<r.length;o++){var c=r[o];if(-1===(a=e.indexOf(c,a)))return!1;n.push(a),a++}return e===t?1:n.length>1?n[n.length-1]-n[0]+2:2+n[0]}}],(s=[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t)return this.haystack;for(var s=[],r=0;r<this.haystack.length;r++){var a=this.haystack[r];if(0===this.keys.length){var o=e.isMatch(a,t,this.options.caseSensitive);o&&s.push({item:a,score:o})}else for(var c=0;c<this.keys.length;c++){for(var l=n.getDescendantProperty(a,this.keys[c]),i=!1,u=0;u<l.length;u++){var p=e.isMatch(l[u],t,this.options.caseSensitive);if(p){i=!0,s.push({item:a,score:p});break}}if(i)break}}return this.options.sort&&s.sort((function(e,t){return e.score-t.score})),s.map((function(e){return e.item}))}}])&&a(t.prototype,s),r&&a(t,r),e}()}]).default})),Q=(z=K)&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z;K.FuzzySearch;function X(e,t,s){const r=Object.create(e);return r.result=t[s],r}function Y(e){let t,s,r,f=e.results,d=[];for(let t=0;t<f.length;t+=1)d[t]=ee(X(e,f,t));let m=!e.results.length&&te();return{c(){t=n("div"),s=n("div");for(let e=0;e<d.length;e+=1)d[e].c();r=a(),m&&m.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,role:!0});var n=c(t);s=o(n,"DIV",{class:!0});var a=c(s);for(let e=0;e<d.length;e+=1)d[e].l(a);r=l(a),m&&m.l(a),a.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","dropdown-content"),u(t,"class","dropdown-menu svelte-17tnbbb"),u(t,"role","menu")},m(e,n){p(e,t,n),h(t,s);for(let e=0;e<d.length;e+=1)d[e].m(s,null);h(s,r),m&&m.m(s,null)},p(e,t){if(e.resultLink||e.results){let n;for(f=t.results,n=0;n<f.length;n+=1){const a=X(t,f,n);d[n]?d[n].p(e,a):(d[n]=ee(a),d[n].c(),d[n].m(s,r))}for(;n<d.length;n+=1)d[n].d(1);d.length=f.length}t.results.length?m&&(m.d(1),m=null):m||((m=te()).c(),m.m(s,null))},d(e){e&&i(t),g(d,e),m&&m.d()}}}function Z(e){let t,s,r,g,v=e.result.version+"";return{c(){t=n("span"),s=a(),r=n("span"),g=f(v),this.h()},l(e){t=o(e,"SPAN",{class:!0}),c(t).forEach(i),s=l(e),r=o(e,"SPAN",{class:!0});var n=c(r);g=d(n,v),n.forEach(i),this.h()},h(){u(t,"class","space svelte-17tnbbb"),u(r,"class","tag is-light")},m(e,n){p(e,t,n),p(e,s,n),p(e,r,n),h(r,g)},p(e,t){e.results&&v!==(v=t.result.version+"")&&m(g,v)},d(e){e&&i(t),e&&i(s),e&&i(r)}}}function ee(e){let t,s,r,g,v,$,b,y,E=e.result.title+"",w=e.result.matches+"",S=e.result.version&&Z(e);return{c(){t=n("a"),s=n("p"),r=n("strong"),g=f(E),v=a(),S&&S.c(),$=a(),b=n("p"),this.h()},l(e){t=o(e,"A",{href:!0,class:!0});var n=c(t);s=o(n,"P",{class:!0});var a=c(s);r=o(a,"STRONG",{});var u=c(r);g=d(u,E),u.forEach(i),v=l(a),S&&S.l(a),a.forEach(i),$=l(n),b=o(n,"P",{class:!0}),c(b).forEach(i),n.forEach(i),this.h()},h(){u(s,"class","svelte-17tnbbb"),u(b,"class","content matches svelte-17tnbbb"),u(t,"href",y=e.resultLink(e.result)),u(t,"class","dropdown-item svelte-17tnbbb")},m(e,n){p(e,t,n),h(t,s),h(s,r),h(r,g),h(s,v),S&&S.m(s,null),h(t,$),h(t,b),b.innerHTML=w},p(e,r){e.results&&E!==(E=r.result.title+"")&&m(g,E),r.result.version?S?S.p(e,r):((S=Z(r)).c(),S.m(s,null)):S&&(S.d(1),S=null),e.results&&w!==(w=r.result.matches+"")&&(b.innerHTML=w),e.results&&y!==(y=r.resultLink(r.result))&&u(t,"href",y)},d(e){e&&i(t),S&&S.d()}}}function te(e){let t,s;return{c(){t=n("p"),s=f("No results"),this.h()},l(e){t=o(e,"P",{class:!0});var r=c(t);s=d(r,"No results"),r.forEach(i),this.h()},h(){u(t,"class","dropdown-item has-text-gray svelte-17tnbbb")},m(e,r){p(e,t,r),h(t,s)},d(e){e&&i(t)}}}function se(t){let s,r,f,d,m,g,E,w,S,x,k;document.body.addEventListener("click",t.handleDocumentClick);let _=t.gotTerm&&Y(t);return{c(){s=a(),r=n("div"),f=n("div"),d=n("div"),m=n("div"),g=n("input"),E=a(),w=n("span"),S=n("i"),x=a(),_&&_.c(),this.h()},l(e){s=l(e),r=o(e,"DIV",{class:!0});var t=c(r);f=o(t,"DIV",{class:!0});var n=c(f);d=o(n,"DIV",{class:!0});var a=c(d);m=o(a,"DIV",{class:!0});var u=c(m);g=o(u,"INPUT",{class:!0,type:!0,placeholder:!0}),E=l(u),w=o(u,"SPAN",{class:!0});var p=c(w);S=o(p,"I",{class:!0}),c(S).forEach(i),p.forEach(i),u.forEach(i),a.forEach(i),n.forEach(i),x=l(t),_&&_.l(t),t.forEach(i),this.h()},h(){u(g,"class","input"),u(g,"type","search"),u(g,"placeholder","Search..."),u(S,"class","fas fa-search"),u(w,"class","icon is-small is-left"),u(m,"class","control has-icons-left"),u(d,"class","field"),u(f,"class","dropdown-trigger"),u(r,"class","dropdown"),v(r,"is-active",t.showResults),k=[$(g,"input",t.search),$(g,"focus",t.focus_handler),$(r,"click",b(ae))]},m(e,t){p(e,s,t),p(e,r,t),h(r,f),h(f,d),h(d,m),h(m,g),h(m,E),h(m,w),h(w,S),h(r,x),_&&_.m(r,null)},p(e,t){t.gotTerm?_?_.p(e,t):((_=Y(t)).c(),_.m(r,null)):_&&(_.d(1),_=null),e.showResults&&v(r,"is-active",t.showResults)},i:e,o:e,d(e){document.body.removeEventListener("click",t.handleDocumentClick),e&&i(s),e&&i(r),_&&_.d(),y(k)}}}const re=70;function ne(e,t){let s=e;const r=e.indexOf(t);return r>re/2&&(s=`...${s.slice(r-10)}`),s.slice(0,re).replace(new RegExp(t,"gi"),e=>`<span class="match has-text-primary has-text-bold">${e}</span>`)}const ae=()=>{};function oe(e,t,s){let r;const{page:n}=xt();E(e,n,e=>s("$page",r=e));let a,o,c=!1;let l=[],i=!1;w(()=>{a=fetch("search-index.json").then(e=>e.json()).then(({keys:e,items:t})=>{o=new Q(t,e,{sort:!0})})});return{page:n,showResults:c,handleDocumentClick:function(){s("showResults",c=!1)},resultLink:function(e){return`${e.version||r.params.version||"latest"}${e.link?`/${e.link}`:""}`},results:l,gotTerm:i,search:async function(e){await a;const t=e.target.value.trim();s("gotTerm",i=Boolean(t)),s("results",l=i?o.search(t).slice(0,10).map(e=>({...e,matches:ne(e.text||e.title,t)})):[])},focus_handler:()=>s("showResults",c=!0)}}class ce extends s{constructor(e){super(),r(this,e,oe,se,t,{})}}function le(e,t,s){const r=Object.create(e);return r.tag=t[s].tag,r.version=t[s].version,r}function ie(e){let t,s,r,v,$,b,y,E,w=e.$page.params.version+"",S=e.tags,x=[];for(let t=0;t<S.length;t+=1)x[t]=ue(le(e,S,t));return{c(){t=n("div"),s=n("p"),r=n("span"),v=f("Version:\n                "),$=n("strong"),b=f(w),y=a(),E=n("div");for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"P",{class:!0});var a=c(s);r=o(a,"SPAN",{});var u=c(r);v=d(u,"Version:\n                "),$=o(u,"STRONG",{});var p=c($);b=d(p,w),p.forEach(i),u.forEach(i),a.forEach(i),y=l(n),E=o(n,"DIV",{class:!0});var h=c(E);for(let e=0;e<x.length;e+=1)x[e].l(h);h.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","navbar-link"),u(E,"class","navbar-dropdown is-right"),u(t,"class","navbar-item has-dropdown is-hoverable")},m(e,n){p(e,t,n),h(t,s),h(s,r),h(r,v),h(r,$),h($,b),h(t,y),h(t,E);for(let e=0;e<x.length;e+=1)x[e].m(E,null)},p(e,t){if(e.$page&&w!==(w=t.$page.params.version+"")&&m(b,w),e.tags||e.$page){let s;for(S=t.tags,s=0;s<S.length;s+=1){const r=le(t,S,s);x[s]?x[s].p(e,r):(x[s]=ue(r),x[s].c(),x[s].m(E,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=S.length}},d(e){e&&i(t),g(x,e)}}}function ue(e){let t,s,r,m,g,$,b,y,E=e.tag+"",w=e.version+"";return{c(){t=n("a"),s=n("span"),r=f(E),m=f(" ("),g=f(w),$=f(")"),b=a(),this.h()},l(e){t=o(e,"A",{href:!0,class:!0});var n=c(t);s=o(n,"SPAN",{});var a=c(s);r=d(a,E),m=d(a," ("),g=d(a,w),$=d(a,")"),a.forEach(i),b=l(n),n.forEach(i),this.h()},h(){u(t,"href",y=e.tag),u(t,"class","navbar-item is-flex"),v(t,"is-active",e.tag===e.$page.params.version)},m(e,n){p(e,t,n),h(t,s),h(s,r),h(s,m),h(s,g),h(s,$),h(t,b)},p(e,s){(e.tags||e.$page)&&v(t,"is-active",s.tag===s.$page.params.version)},d(e){e&&i(t)}}}function pe(e){let t,s,r,a;return{c(){t=n("div"),s=n("div"),r=n("div"),a=f("Documentation for beta releases may be incomplete."),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"DIV",{class:!0});var l=c(s);r=o(l,"DIV",{class:!0});var u=c(r);a=d(u,"Documentation for beta releases may be incomplete."),u.forEach(i),l.forEach(i),n.forEach(i),this.h()},h(){u(r,"class","message-body"),u(s,"class","message is-warning"),u(t,"class","container")},m(e,n){p(e,t,n),h(t,s),h(s,r),h(r,a)},d(e){e&&i(t)}}}function he(e){let t,s,r,m,g,b,E,w,D,I,R,j,C,L,T,N,V,M,U,B,q,G,F,H,J,W,z,K,Q,X,Y,Z,ee,te,se,re,ne,ae,oe,le,ue,he=e.$page.params&&e.$page.params.version&&ie(e);const fe=new ce({});let de=e.$page.params&&e.$page.params.version&&"latest"!==e.$page.params.version&&pe();return{c(){t=n("nav"),s=n("div"),r=n("div"),m=n("a"),g=n("strong"),b=f("atscm"),E=a(),w=n("div"),D=n("span"),I=a(),R=n("span"),j=a(),C=n("span"),L=a(),T=n("div"),N=n("div"),V=n("a"),M=f("Readme"),B=a(),q=n("a"),G=f("Manual"),H=a(),J=n("a"),W=f("Reference"),K=a(),Q=n("div"),he&&he.c(),X=a(),Y=n("div"),S(fe.$$.fragment),Z=a(),ee=n("div"),te=n("div"),se=n("a"),re=n("span"),ne=n("i"),ae=a(),de&&de.c(),oe=x(),this.h()},l(e){t=o(e,"NAV",{class:!0});var n=c(t);s=o(n,"DIV",{class:!0});var a=c(s);r=o(a,"DIV",{class:!0});var u=c(r);m=o(u,"A",{href:!0,class:!0});var p=c(m);g=o(p,"STRONG",{});var h=c(g);b=d(h,"atscm"),h.forEach(i),p.forEach(i),E=l(u),w=o(u,"DIV",{role:!0,class:!0});var f=c(w);D=o(f,"SPAN",{"aria-hidden":!0}),c(D).forEach(i),I=l(f),R=o(f,"SPAN",{"aria-hidden":!0}),c(R).forEach(i),j=l(f),C=o(f,"SPAN",{"aria-hidden":!0}),c(C).forEach(i),f.forEach(i),u.forEach(i),L=l(a),T=o(a,"DIV",{class:!0});var v=c(T);N=o(v,"DIV",{class:!0});var $=c(N);V=o($,"A",{href:!0,class:!0});var y=c(V);M=d(y,"Readme"),y.forEach(i),B=l($),q=o($,"A",{href:!0,class:!0});var S=c(q);G=d(S,"Manual"),S.forEach(i),H=l($),J=o($,"A",{href:!0,class:!0});var _=c(J);W=d(_,"Reference"),_.forEach(i),$.forEach(i),K=l(v),Q=o(v,"DIV",{class:!0});var P=c(Q);he&&he.l(P),X=l(P),Y=o(P,"DIV",{class:!0});var O=c(Y);k(fe.$$.fragment,O),O.forEach(i),Z=l(P),ee=o(P,"DIV",{class:!0});var A=c(ee);te=o(A,"DIV",{class:!0});var U=c(te);se=o(U,"A",{href:!0,class:!0});var F=c(se);re=o(F,"SPAN",{class:!0});var z=c(re);ne=o(z,"I",{class:!0}),c(ne).forEach(i),z.forEach(i),F.forEach(i),U.forEach(i),A.forEach(i),P.forEach(i),v.forEach(i),a.forEach(i),n.forEach(i),ae=l(e),de&&de.l(e),oe=x(),this.h()},h(){u(m,"href","."),u(m,"class","navbar-item"),v(m,"is-active",void 0===e.segment),u(D,"aria-hidden","true"),u(R,"aria-hidden","true"),u(C,"aria-hidden","true"),u(w,"role","button"),u(w,"class","navbar-burger burger"),v(w,"is-active",e.menuOpen),u(r,"class","navbar-brand"),u(V,"href",U=e.segment||"latest"),u(V,"class","navbar-item"),v(V,"is-active",e.$page.path.endsWith(e.segment)),u(q,"href",F=(e.segment||"latest")+"/docs"),u(q,"class","navbar-item"),v(q,"is-active",e.$page.path.includes("docs")),u(J,"href",z=(e.segment||"latest")+"/api"),u(J,"class","navbar-item"),v(J,"is-active",e.$page.path.includes("api")),u(N,"class","navbar-start"),u(Y,"class","navbar-item search-item"),u(ne,"class","fab fa-github"),u(re,"class","icon"),u(se,"href","https://github.com/atscm"),u(se,"class","button is-light"),u(te,"class","buttons"),u(ee,"class","navbar-item"),u(Q,"class","navbar-end"),u(T,"class","navbar-menu"),v(T,"is-active",e.menuOpen),u(s,"class","container"),u(t,"class","navbar is-spaced"),ue=[$(w,"click",e.click_handler),$(T,"click",e.click_handler_1)]},m(e,n){p(e,t,n),h(t,s),h(s,r),h(r,m),h(m,g),h(g,b),h(r,E),h(r,w),h(w,D),h(w,I),h(w,R),h(w,j),h(w,C),h(s,L),h(s,T),h(T,N),h(N,V),h(V,M),h(N,B),h(N,q),h(q,G),h(N,H),h(N,J),h(J,W),h(T,K),h(T,Q),he&&he.m(Q,null),h(Q,X),h(Q,Y),_(fe,Y,null),h(Q,Z),h(Q,ee),h(ee,te),h(te,se),h(se,re),h(re,ne),p(e,ae,n),de&&de.m(e,n),p(e,oe,n),le=!0},p(e,t){(e.segment||e.undefined)&&v(m,"is-active",void 0===t.segment),e.menuOpen&&v(w,"is-active",t.menuOpen),(!le||e.segment&&U!==(U=t.segment||"latest"))&&u(V,"href",U),(e.$page||e.segment)&&v(V,"is-active",t.$page.path.endsWith(t.segment)),(!le||e.segment&&F!==(F=(t.segment||"latest")+"/docs"))&&u(q,"href",F),e.$page&&v(q,"is-active",t.$page.path.includes("docs")),(!le||e.segment&&z!==(z=(t.segment||"latest")+"/api"))&&u(J,"href",z),e.$page&&v(J,"is-active",t.$page.path.includes("api")),t.$page.params&&t.$page.params.version?he?he.p(e,t):((he=ie(t)).c(),he.m(Q,X)):he&&(he.d(1),he=null),e.menuOpen&&v(T,"is-active",t.menuOpen),t.$page.params&&t.$page.params.version&&"latest"!==t.$page.params.version?de||((de=pe()).c(),de.m(oe.parentNode,oe)):de&&(de.d(1),de=null)},i(e){le||(P(fe.$$.fragment,e),le=!0)},o(e){O(fe.$$.fragment,e),le=!1},d(e){e&&i(t),he&&he.d(),A(fe),e&&i(ae),de&&de.d(e),e&&i(oe),y(ue)}}}function fe(e,t,s){let r,{segment:n}=t;const{page:a}=xt();E(e,a,e=>s("$page",r=e));const{tags:o}=D("index");let c=!1;return e.$set=e=>{"segment"in e&&s("segment",n=e.segment)},{segment:n,page:a,tags:o,menuOpen:c,$page:r,click_handler:()=>s("menuOpen",c=!c),click_handler_1:()=>s("menuOpen",c=!1)}}class de extends s{constructor(e){super(),r(this,e,fe,he,t,{segment:0})}}function me(e){const t=e-1;return t*t*t+1}function ge(e,{delay:t=0,duration:s=400,easing:r=I}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:r,css:e=>`opacity: ${e*n}`}}function ve(e,{delay:t=0,duration:s=400,easing:r=me}){const n=getComputedStyle(e),a=+n.opacity,o=parseFloat(n.height),c=parseFloat(n.paddingTop),l=parseFloat(n.paddingBottom),i=parseFloat(n.marginTop),u=parseFloat(n.marginBottom),p=parseFloat(n.borderTopWidth),h=parseFloat(n.borderBottomWidth);return{delay:t,duration:s,easing:r,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*a};`+`height: ${e*o}px;`+`padding-top: ${e*c}px;`+`padding-bottom: ${e*l}px;`+`margin-top: ${e*i}px;`+`margin-bottom: ${e*u}px;`+`border-top-width: ${e*p}px;`+`border-bottom-width: ${e*h}px;`}}function $e(t){let s,r,m,g,v,b,y,E,w,S,x;return{c(){s=n("div"),r=n("div"),m=n("strong"),g=f("Cookies:"),v=f("\n      This site uses cookies. Cookies store your preferred settings and other information that will\n      help us improve our service. By using our website, you agree to the use of cookies."),b=a(),y=n("button"),E=f("Close and accept"),this.h()},l(e){s=o(e,"DIV",{class:!0});var t=c(s);r=o(t,"DIV",{class:!0});var n=c(r);m=o(n,"STRONG",{});var a=c(m);g=d(a,"Cookies:"),a.forEach(i),v=d(n,"\n      This site uses cookies. Cookies store your preferred settings and other information that will\n      help us improve our service. By using our website, you agree to the use of cookies."),n.forEach(i),b=l(t),y=o(t,"BUTTON",{class:!0,type:!0});var u=c(y);E=d(u,"Close and accept"),u.forEach(i),t.forEach(i),this.h()},h(){u(r,"class","text svelte-k3rx9v"),u(y,"class","button is-dark is-small svelte-k3rx9v"),u(y,"type","submit"),u(s,"class","box notification cookie-notice is-light is-flex-desktop is-size-7 svelte-k3rx9v"),x=$(y,"click",t.accept)},m(e,t){p(e,s,t),h(s,r),h(r,m),h(m,g),h(r,v),h(s,b),h(s,y),h(y,E),S=!0},p:e,i(e){S||(R(()=>{w||(w=j(s,ge,{},!0)),w.run(1)}),S=!0)},o(e){w||(w=j(s,ge,{},!1)),w.run(0),S=!1},d(e){e&&i(s),e&&w&&w.end(),x()}}}function be(e){let t,s,r=e.show&&$e(e);return{c(){r&&r.c(),t=x()},l(e){r&&r.l(e),t=x()},m(e,n){r&&r.m(e,n),p(e,t,n),s=!0},p(e,s){s.show?r?(r.p(e,s),P(r,1)):((r=$e(s)).c(),P(r,1),r.m(t.parentNode,t)):r&&(C(),O(r,1,1,()=>{r=null}),L())},i(e){s||(P(r),s=!0)},o(e){O(r),s=!1},d(e){r&&r.d(e),e&&i(t)}}}function ye(e,t,s){let r=!1;return w(()=>{s("show",r="true"!==sessionStorage.getItem("cookiesAccepted"))}),{show:r,accept:function(){sessionStorage.setItem("cookiesAccepted","true"),s("show",r=!1)}}}class Ee extends s{constructor(e){super(),r(this,e,ye,be,t,{})}}function we(e,t,s){const r=e.ownerDocument.createElement(t);!function(e,t){Object.entries(t).forEach(([t,s])=>e.setAttribute(t,s))}(r,s),e.appendChild(r)}function Se(){dataLayer.push(arguments)}function xe(e){window.dataLayer=window.dataLayer||[],we(document.body,"script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${e}`}),Se("js",new Date),Se("config",e)}var ke=[{tag:"latest",version:"0.6.0"},{tag:"beta",version:"1.0.0-beta.45"}];const _e="UA-153685419-1";function Pe(e){let t,s,r,m,g,v,$,b,y,E,w,x,D,I,R,j,C,L,M,U,B,q,G,F,H,J;const W=new de({props:{segment:e.segment}}),z=e.$$slots.default,K=T(z,e,null),Q=new Ee({});return{c(){t=n("div"),S(W.$$.fragment),s=a(),K&&K.c(),r=a(),m=n("footer"),g=n("div"),v=n("p"),$=n("strong"),b=f("atscm"),y=f("\n      is an open source project by\n      "),E=n("a"),w=f("Bachmann electronics"),x=f("\n      · The source code is licensed\n      "),D=n("a"),I=f("MIT"),R=a(),j=n("p"),C=n("a"),L=f("Get involved"),M=f("\n      ·\n      "),U=n("a"),B=f("Improve this page"),q=f("\n      ·\n      "),G=n("a"),F=f("Imprint"),H=a(),S(Q.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);k(W.$$.fragment,n),s=l(n),K&&K.l(n),n.forEach(i),r=l(e),m=o(e,"FOOTER",{class:!0});var a=c(m);g=o(a,"DIV",{class:!0});var u=c(g);v=o(u,"P",{});var p=c(v);$=o(p,"STRONG",{});var h=c($);b=d(h,"atscm"),h.forEach(i),y=d(p,"\n      is an open source project by\n      "),E=o(p,"A",{href:!0});var f=c(E);w=d(f,"Bachmann electronics"),f.forEach(i),x=d(p,"\n      · The source code is licensed\n      "),D=o(p,"A",{href:!0});var S=c(D);I=d(S,"MIT"),S.forEach(i),p.forEach(i),R=l(u),j=o(u,"P",{});var _=c(j);C=o(_,"A",{href:!0,target:!0});var P=c(C);L=d(P,"Get involved"),P.forEach(i),M=d(_,"\n      ·\n      "),U=o(_,"A",{href:!0,target:!0});var O=c(U);B=d(O,"Improve this page"),O.forEach(i),q=d(_,"\n      ·\n      "),G=o(_,"A",{href:!0,target:!0});var A=c(G);F=d(A,"Imprint"),A.forEach(i),_.forEach(i),u.forEach(i),a.forEach(i),H=l(e),k(Q.$$.fragment,e),this.h()},h(){u(t,"class","fullscreen-content svelte-30lnsi"),u(E,"href","https://bachmann.info"),u(D,"href","http://opensource.org/licenses/mit-license.php"),u(C,"href","https://github.com/atSCM/atscm/blob/master/.github/CONTRIBUTING.md"),u(C,"target","_blank"),u(U,"href","https://github.com/atSCM/docs"),u(U,"target","_blank"),u(G,"href","https://www.bachmann.info/en/info/imprint/"),u(G,"target","_blank"),u(g,"class","content has-text-centered"),u(m,"class","footer")},m(e,n){p(e,t,n),_(W,t,null),h(t,s),K&&K.m(t,null),p(e,r,n),p(e,m,n),h(m,g),h(g,v),h(v,$),h($,b),h(v,y),h(v,E),h(E,w),h(v,x),h(v,D),h(D,I),h(g,R),h(g,j),h(j,C),h(C,L),h(j,M),h(j,U),h(U,B),h(j,q),h(j,G),h(G,F),p(e,H,n),_(Q,e,n),J=!0},p(e,t){const s={};e.segment&&(s.segment=t.segment),W.$set(s),K&&K.p&&e.$$scope&&K.p(N(z,t,e,null),V(z,t,null))},i(e){J||(P(W.$$.fragment,e),P(K,e),P(Q.$$.fragment,e),J=!0)},o(e){O(W.$$.fragment,e),O(K,e),O(Q.$$.fragment,e),J=!1},d(e){e&&i(t),A(W),K&&K.d(e),e&&i(r),e&&i(m),e&&i(H),A(Q,e)}}}function Oe(e,t,s){let r,{segment:n}=t;const{page:a}=xt();E(e,a,e=>s("$page",r=e)),M("index",{tags:ke});let{$$slots:o={},$$scope:c}=t;return e.$set=e=>{"segment"in e&&s("segment",n=e.segment),"$$scope"in e&&s("$$scope",c=e.$$scope)},e.$$.update=(e={$page:1})=>{e.$page&&Se("config",_e,{page_path:r.path})},{segment:n,page:a,$$slots:o,$$scope:c}}class Ae extends s{constructor(e){super(),r(this,e,Oe,Pe,t,{segment:0})}}function De(e){let t,s,r,a=e.error.stack+"";return{c(){t=n("div"),s=n("pre"),r=f(a),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=c(t);s=o(n,"PRE",{});var l=c(s);r=d(l,a),l.forEach(i),n.forEach(i),this.h()},h(){u(t,"class","content")},m(e,n){p(e,t,n),h(t,s),h(s,r)},p(e,t){e.error&&a!==(a=t.error.stack+"")&&m(r,a)},d(e){e&&i(t)}}}function Ie(e){let t,s,r,g,v,b,y,E,w,x,D,I,R,j,C,L,T=(e.status<500||e.dev?e.error.message:"An error ocurred")+"";const N=new U({props:{title:e.status,description:e.description}});let V=e.dev&&e.error.stack&&De(e);return{c(){S(N.$$.fragment),t=a(),s=n("section"),r=n("div"),g=n("div"),v=n("h1"),b=f(e.status),y=a(),E=n("p"),w=f(T),x=a(),V&&V.c(),D=a(),I=n("div"),R=n("button"),j=f("Go back"),this.h()},l(n){k(N.$$.fragment,n),t=l(n),s=o(n,"SECTION",{class:!0});var a=c(s);r=o(a,"DIV",{class:!0});var u=c(r);g=o(u,"DIV",{class:!0});var p=c(g);v=o(p,"H1",{class:!0});var h=c(v);b=d(h,e.status),h.forEach(i),y=l(p),E=o(p,"P",{class:!0});var f=c(E);w=d(f,T),f.forEach(i),x=l(p),V&&V.l(p),D=l(p),I=o(p,"DIV",{class:!0});var m=c(I);R=o(m,"BUTTON",{class:!0});var $=c(R);j=d($,"Go back"),$.forEach(i),m.forEach(i),p.forEach(i),u.forEach(i),a.forEach(i),this.h()},h(){u(v,"class","title svelte-o81gtr"),u(E,"class","subtitle"),u(R,"class","button"),u(I,"class","buttons is-centered"),u(g,"class","container has-text-centered"),u(r,"class","hero-body"),u(s,"class","hero is-fullheight-with-navbar"),L=$(R,"click",Re)},m(e,n){_(N,e,n),p(e,t,n),p(e,s,n),h(s,r),h(r,g),h(g,v),h(v,b),h(g,y),h(g,E),h(E,w),h(g,x),V&&V.m(g,null),h(g,D),h(g,I),h(I,R),h(R,j),C=!0},p(e,t){const s={};e.status&&(s.title=t.status),N.$set(s),C&&!e.status||m(b,t.status),C&&!e.status&&!e.error||T===(T=(t.status<500||t.dev?t.error.message:"An error ocurred")+"")||m(w,T),t.dev&&t.error.stack?V?V.p(e,t):((V=De(t)).c(),V.m(g,D)):V&&(V.d(1),V=null)},i(e){C||(P(N.$$.fragment,e),C=!0)},o(e){O(N.$$.fragment,e),C=!1},d(e){A(N,e),e&&i(t),e&&i(s),V&&V.d(),L()}}}function Re(){history.back()}function je(e,t,s){let{status:r}=t,{error:n}=t;const a=r<500?n.message:"An error ocurred";return e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)},{status:r,error:n,dev:!1,description:a}}class Ce extends s{constructor(e){super(),r(this,e,je,Ie,t,{status:0,error:0})}}function Le(e){let t,s;const r=[{segment:e.segments[1]},e.level1.props];var n=e.level1.component;function a(e){let t={$$slots:{default:[Ve]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)t=B(t,r[e]);return{props:t}}if(n)var o=new n(a(e));return{c(){o&&S(o.$$.fragment),t=x()},l(e){o&&k(o.$$.fragment,e),t=x()},m(e,r){o&&_(o,e,r),p(e,t,r),s=!0},p(e,s){const c=e.segments||e.level1?q(r,[e.segments&&{segment:s.segments[1]},e.level1&&G(s.level1.props)]):{};if((e.$$scope||e.level2)&&(c.$$scope={changed:e,ctx:s}),n!==(n=s.level1.component)){if(o){C();const e=o;O(e.$$.fragment,1,0,()=>{A(e,1)}),L()}n?(o=new n(a(s)),S(o.$$.fragment),P(o.$$.fragment,1),_(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&P(o.$$.fragment,e),s=!0)},o(e){o&&O(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&A(o,e)}}}function Te(e){let t;const s=new Ce({props:{error:e.error,status:e.status}});return{c(){S(s.$$.fragment)},l(e){k(s.$$.fragment,e)},m(e,r){_(s,e,r),t=!0},p(e,t){const r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(P(s.$$.fragment,e),t=!0)},o(e){O(s.$$.fragment,e),t=!1},d(e){A(s,e)}}}function Ne(e){let t,s;const r=[e.level2.props];var n=e.level2.component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=B(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&S(o.$$.fragment),t=x()},l(e){o&&k(o.$$.fragment,e),t=x()},m(e,r){o&&_(o,e,r),p(e,t,r),s=!0},p(e,s){const c=e.level2?q(r,[G(s.level2.props)]):{};if(n!==(n=s.level2.component)){if(o){C();const e=o;O(e.$$.fragment,1,0,()=>{A(e,1)}),L()}n?(o=new n(a()),S(o.$$.fragment),P(o.$$.fragment,1),_(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&P(o.$$.fragment,e),s=!0)},o(e){o&&O(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&A(o,e)}}}function Ve(e){let t,s,r=e.level2&&Ne(e);return{c(){r&&r.c(),t=x()},l(e){r&&r.l(e),t=x()},m(e,n){r&&r.m(e,n),p(e,t,n),s=!0},p(e,s){s.level2?r?(r.p(e,s),P(r,1)):((r=Ne(s)).c(),P(r,1),r.m(t.parentNode,t)):r&&(C(),O(r,1,1,()=>{r=null}),L())},i(e){s||(P(r),s=!0)},o(e){O(r),s=!1},d(e){r&&r.d(e),e&&i(t)}}}function Me(e){let t,s,r,n;const a=[Te,Le],o=[];function c(e,t){return t.error?0:1}return t=c(0,e),s=o[t]=a[t](e),{c(){s.c(),r=x()},l(e){s.l(e),r=x()},m(e,s){o[t].m(e,s),p(e,r,s),n=!0},p(e,n){let l=t;(t=c(0,n))===l?o[t].p(e,n):(C(),O(o[l],1,1,()=>{o[l]=null}),L(),(s=o[t])||(s=o[t]=a[t](n)).c(),P(s,1),s.m(r.parentNode,r))},i(e){n||(P(s),n=!0)},o(e){O(s),n=!1},d(e){o[t].d(e),e&&i(r)}}}function Ue(e){let t;const s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[Me]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=B(r,s[e]);const n=new Ae({props:r});return{c(){S(n.$$.fragment)},l(e){k(n.$$.fragment,e)},m(e,s){_(n,e,s),t=!0},p(e,t){const r=e.segments||e.level0?q(s,[e.segments&&{segment:t.segments[0]},e.level0&&G(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1||e.segments||e.level2)&&(r.$$scope={changed:e,ctx:t}),n.$set(r)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){O(n.$$.fragment,e),t=!1},d(e){A(n,e)}}}function Be(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t,{level2:i=null}=t;return M(J,r),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",c=e.level0),"level1"in e&&s("level1",l=e.level1),"level2"in e&&s("level2",i=e.level2)},{stores:r,error:n,status:a,segments:o,level0:c,level1:l,level2:i}}class qe extends s{constructor(e){super(),r(this,e,Be,Ue,t,{stores:0,error:0,status:0,segments:0,level0:0,level1:0,level2:0})}}const Ge=[/^\/search-index.json$/,/^\/([^\/]+?)\/readme.json$/,/^\/([^\/]+?)\/docs\/overview.json$/,/^\/([^\/]+?)\/docs\/toc.json$/,/^\/([^\/]+?)\/docs\/([^\/]+?).json$/,/^\/([^\/]+?)\/api\/data.json$/],Fe=[{js:()=>import("./c.index.366f5384.js"),css:[]},{js:()=>import("./c.index.5127cbb5.js"),css:["c.app.95340963.css"]},{js:()=>import("./c._layout.0dda65e0.js"),css:["c.app.95340963.css"]},{js:()=>import("./c.index.d7da1753.js"),css:["c.index.d7da1753.css","c.app.95340963.css"]},{js:()=>import("./c.[manual].024677fa.js"),css:[]},{js:()=>import("./c.index.cfee85b3.js"),css:["c.index.cfee85b3.css","c.app.95340963.css"]}],He=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:1,params:t=>({version:e(t[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/?$/,parts:[null,{i:2,params:t=>({version:e(t[1])})},{i:3,params:t=>({version:e(t[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({version:e(t[1])})},{i:4,params:t=>({version:e(t[1]),manual:e(t[2])})}]},{pattern:/^\/([^\/]+?)\/api\/?$/,parts:[null,{i:5,params:t=>({version:e(t[1])})}]}])(decodeURIComponent);const Je="undefined"!=typeof __SAPPER__&&__SAPPER__;let We,ze,Ke,Qe=!1,Xe=[],Ye="{}";const Ze={page:H({}),preloading:H(null),session:H(Je&&Je.session)};let et,tt;Ze.session.subscribe(async e=>{if(et=e,!Qe)return;tt=!0;const t=it(new URL(location.href)),s=ze={},{redirect:r,props:n,branch:a}=await ft(t);s===ze&&await ht(r,a,n,t.page)});let st,rt=null;let nt,at=1;const ot="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ct={};function lt(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function it(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Je.baseUrl))return null;let t=e.pathname.slice(Je.baseUrl.length);if(""===t&&(t="/"),!Ge.some(e=>e.test(t)))for(let s=0;s<He.length;s+=1){const r=He[s],n=r.pattern.exec(t);if(n){const s=lt(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function ut(){return{x:pageXOffset,y:pageYOffset}}async function pt(e,t,s,r){if(t)nt=t;else{const e=ut();ct[nt]=e,t=nt=++at,ct[nt]=s?e:{x:0,y:0}}nt=t,We&&Ze.preloading.set(!0);const n=rt&&rt.href===e.href?rt.promise:ft(e);rt=null;const a=ze={},{redirect:o,props:c,branch:l}=await n;if(a===ze&&(await ht(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ct[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ct[nt]=e,e&&scrollTo(e.x,e.y)}}async function ht(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=it(new URL(e,document.baseURI));return s?(ot[t.replaceState?"replaceState":"pushState"]({id:nt},"",e),pt(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Ze.page.set(r),Ze.preloading.set(!1),We)We.$set(s);else{s.stores={page:{subscribe:Ze.page.subscribe},preloading:{subscribe:Ze.preloading.subscribe},session:Ze.session},s.level0={props:await Ke};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)mt(e.nextSibling);mt(e),mt(t)}We=new qe({target:st,props:s,hydrate:!0})}Xe=t,Ye=JSON.stringify(r.query),Qe=!0,tt=!1}async function ft(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;Ke||(Ke=Je.preloaded[0]||W.call(o,{host:s.host,path:s.path,query:s.query,params:{}},et));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const p=r[c];if(function(e,t,s,r){if(r!==Ye)return!0;const n=Xe[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(c,p,i,n)&&(u=!0),a.segments[l]=r[c+1],!t)return{segment:p};const h=l++;if(!tt&&!u&&Xe[c]&&Xe[c].part===t.i)return Xe[c];u=!1;const{default:f,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(dt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Fe[t.i]);let m;return m=Qe||!Je.preloaded[c+1]?d?await d.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},et):{}:Je.preloaded[c+1],a[`level${h}`]={component:f,props:m,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function dt(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function mt(e){e.parentNode.removeChild(e)}function gt(e){const t=it(new URL(e,document.baseURI));if(t)return rt&&e===rt.href||function(e,t){rt={href:e,promise:t}}(e,ft(t)),rt.promise}function vt(e){return"scrollRestoration"in ot&&(ot.scrollRestoration="manual"),function(e){st=e}(e.target),addEventListener("click",Et),addEventListener("popstate",St),addEventListener("touchstart",yt),addEventListener("mousemove",bt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ot.replaceState({id:at},"",t);const s=new URL(location.href);if(Je.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=Je;Ke||(Ke=a&&a[0]),ht(null,[],{error:c,status:o,session:n,level0:{props:Ke},level1:{props:{status:o,error:c},component:Ce},segments:a},{host:t,path:s,query:lt(r),params:{}})}();const r=it(s);return r?pt(r,at,!0,e):void 0})}let $t;function bt(e){clearTimeout($t),$t=setTimeout(()=>{yt(e)},20)}function yt(e){const t=wt(e.target);t&&"prefetch"===t.rel&&gt(t.href)}function Et(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=wt(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=it(n);if(a){pt(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ot.pushState({id:nt},"",n.href)}}function wt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function St(e){if(ct[nt]=ut(),e.state){const t=it(new URL(location.href));t?pt(t,e.state.id):location.href=location.href}else(function(e){nt=e})(at=at+1),ot.replaceState({id:nt},"",location.href)}const xt=()=>D(J);export{_e as a,xt as b,ve as c,xe as i,vt as s,ke as t};
