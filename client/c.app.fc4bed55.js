import{n as e,s as t,S as s,i as r,e as n,a,c as o,b as c,d as l,f as i,g as u,h as f,j as h,t as p,k as v,l as d,m,o as g,p as $,q as b,r as E,u as y,v as w,w as S,x as _,y as P,z as x,A as O,B as k,C as A,D as R,E as D,F as j,G as I,H as L,I as C,J as V,K as N,L as T}from"./c.SEO.1ae5729d.js";const M=[];function U(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!M.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),M.push(t,s)}if(e){for(let e=0;e<M.length;e+=2)M[e][0](M[e+1]);M.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const l=[t,c];return a.push(l),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const q={},G=()=>({});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var H,B=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){"undefined"!=typeof window&&window,e.exports=function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.r(t);var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s;return t=e,(s=[{key:"getDescendantProperty",value:function(t,s){var r,n,a,o,c,l,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(s){if(-1===(a=s.indexOf("."))?r=s:(r=s.slice(0,a),n=s.slice(a+1)),null!=(o=t[r]))if(n||"string"!=typeof o&&"number"!=typeof o)if("[object Array]"===Object.prototype.toString.call(o))for(c=0,l=o.length;c<l;c++)e.getDescendantProperty(o[c],n,i);else n&&e.getDescendantProperty(o,n,i);else i.push(o)}else i.push(t);return i}}])&&r(t,s),e}();function a(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.d(t,"default",(function(){return o}));var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(s)||(r=s,s=[]),this.haystack=t,this.keys=s,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}var t,s,r;return t=e,r=[{key:"isMatch",value:function(e,t,s){s||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var r=t.split(""),n=[],a=0,o=0;o<r.length;o++){var c=r[o];if(-1===(a=e.indexOf(c,a)))return!1;n.push(a),a++}return e===t?1:n.reduce((function(e,t){return e+t}),2)}}],(s=[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t)return this.haystack;for(var s=[],r=0;r<this.haystack.length;r++){var a=this.haystack[r];if(0===this.keys.length){var o=e.isMatch(a,t,this.options.caseSensitive);o&&s.push({item:a,score:o})}else for(var c=0;c<this.keys.length;c++){for(var l=n.getDescendantProperty(a,this.keys[c]),i=!1,u=0;u<l.length;u++){var f=e.isMatch(l[u],t,this.options.caseSensitive);if(f){i=!0,s.push({item:a,score:f});break}}if(i)break}}return this.options.sort&&s.sort((function(e,t){return e.score-t.score})),s.map((function(e){return e.item}))}}])&&a(t.prototype,s),r&&a(t,r),e}()}]).default})),J=(H=B)&&H.__esModule&&Object.prototype.hasOwnProperty.call(H,"default")?H.default:H;B.FuzzySearch;function K(e,t,s){const r=Object.create(e);return r.result=t[s],r}function z(e){var t,s,r;let p=e.results,v=[];for(let t=0;t<p.length;t+=1)v[t]=W(K(e,p,t));var d=!e.results.length&&X();return{c(){t=n("div"),s=n("div");for(let e=0;e<v.length;e+=1)v[e].c();r=a(),d&&d.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,role:!0},!1);var n=c(t);s=o(n,"DIV",{class:!0},!1);var a=c(s);for(let e=0;e<v.length;e+=1)v[e].l(a);r=l(a),d&&d.l(a),a.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","dropdown-content"),u(t,"class","dropdown-menu svelte-17tnbbb"),u(t,"role","menu")},m(e,n){f(e,t,n),h(t,s);for(let e=0;e<v.length;e+=1)v[e].m(s,null);h(s,r),d&&d.m(s,null)},p(e,t){if(e.resultLink||e.results){let n;for(p=t.results,n=0;n<p.length;n+=1){const a=K(t,p,n);v[n]?v[n].p(e,a):(v[n]=W(a),v[n].c(),v[n].m(s,r))}for(;n<v.length;n+=1)v[n].d(1);v.length=p.length}t.results.length?d&&(d.d(1),d=null):d||((d=X()).c(),d.m(s,null))},d(e){e&&i(t),m(v,e),d&&d.d()}}}function F(e){var t,s,r,m,g=e.result.version+"";return{c(){t=n("span"),s=a(),r=n("span"),m=p(g),this.h()},l(e){t=o(e,"SPAN",{class:!0},!1),c(t).forEach(i),s=l(e),r=o(e,"SPAN",{class:!0},!1);var n=c(r);m=v(n,g),n.forEach(i),this.h()},h(){u(t,"class","space svelte-17tnbbb"),u(r,"class","tag is-light")},m(e,n){f(e,t,n),f(e,s,n),f(e,r,n),h(r,m)},p(e,t){e.results&&g!==(g=t.result.version+"")&&d(m,g)},d(e){e&&(i(t),i(s),i(r))}}}function W(e){var t,s,r,m,g,$,b,E,y=e.result.title+"",w=e.result.matches+"",S=e.result.version&&F(e);return{c(){t=n("a"),s=n("p"),r=n("strong"),m=p(y),g=a(),S&&S.c(),$=a(),b=n("p"),this.h()},l(e){t=o(e,"A",{href:!0,class:!0},!1);var n=c(t);s=o(n,"P",{class:!0},!1);var a=c(s);r=o(a,"STRONG",{},!1);var u=c(r);m=v(u,y),u.forEach(i),g=l(a),S&&S.l(a),a.forEach(i),$=l(n),b=o(n,"P",{class:!0},!1),c(b).forEach(i),n.forEach(i),this.h()},h(){u(s,"class","svelte-17tnbbb"),u(b,"class","content matches svelte-17tnbbb"),u(t,"href",E=e.resultLink(e.result)),u(t,"class","dropdown-item svelte-17tnbbb")},m(e,n){f(e,t,n),h(t,s),h(s,r),h(r,m),h(s,g),S&&S.m(s,null),h(t,$),h(t,b),b.innerHTML=w},p(e,r){e.results&&y!==(y=r.result.title+"")&&d(m,y),r.result.version?S?S.p(e,r):((S=F(r)).c(),S.m(s,null)):S&&(S.d(1),S=null),e.results&&w!==(w=r.result.matches+"")&&(b.innerHTML=w),e.results&&E!==(E=r.resultLink(r.result))&&u(t,"href",E)},d(e){e&&i(t),S&&S.d()}}}function X(e){var t,s;return{c(){t=n("p"),s=p("No results"),this.h()},l(e){t=o(e,"P",{class:!0},!1);var r=c(t);s=v(r,"No results"),r.forEach(i),this.h()},h(){u(t,"class","dropdown-item has-text-gray svelte-17tnbbb")},m(e,r){f(e,t,r),h(t,s)},d(e){e&&i(t)}}}function Y(t){var s,r,p,v,d,m,y,w,S,_,P;document.body.addEventListener("click",t.handleDocumentClick);var x=t.gotTerm&&z(t);return{c(){s=a(),r=n("div"),p=n("div"),v=n("div"),d=n("div"),m=n("input"),y=a(),w=n("span"),S=n("i"),_=a(),x&&x.c(),this.h()},l(e){s=l(e),r=o(e,"DIV",{class:!0},!1);var t=c(r);p=o(t,"DIV",{class:!0},!1);var n=c(p);v=o(n,"DIV",{class:!0},!1);var a=c(v);d=o(a,"DIV",{class:!0},!1);var u=c(d);m=o(u,"INPUT",{class:!0,type:!0,placeholder:!0},!1),c(m).forEach(i),y=l(u),w=o(u,"SPAN",{class:!0},!1);var f=c(w);S=o(f,"I",{class:!0},!1),c(S).forEach(i),f.forEach(i),u.forEach(i),a.forEach(i),n.forEach(i),_=l(t),x&&x.l(t),t.forEach(i),this.h()},h(){u(m,"class","input"),u(m,"type","search"),u(m,"placeholder","Search..."),u(S,"class","fas fa-search"),u(w,"class","icon is-small is-left"),u(d,"class","control has-icons-left"),u(v,"class","field"),u(p,"class","dropdown-trigger"),u(r,"class","dropdown"),g(r,"is-active",t.showResults),P=[$(m,"input",t.search),$(m,"focus",t.focus_handler),$(r,"click",b(ee))]},m(e,t){f(e,s,t),f(e,r,t),h(r,p),h(p,v),h(v,d),h(d,m),h(d,y),h(d,w),h(w,S),h(r,_),x&&x.m(r,null)},p(e,t){t.gotTerm?x?x.p(e,t):((x=z(t)).c(),x.m(r,null)):x&&(x.d(1),x=null),e.showResults&&g(r,"is-active",t.showResults)},i:e,o:e,d(e){document.body.removeEventListener("click",t.handleDocumentClick),e&&(i(s),i(r)),x&&x.d(),E(P)}}}const Q=70;function Z(e,t){let s=e;const r=e.indexOf(t);return r>Q/2&&(s=`...${s.slice(r-10)}`),s.slice(0,Q).replace(new RegExp(t,"gi"),e=>`<span class="match has-text-primary has-text-bold">${e}</span>`)}const ee=()=>{};function te(e,t,s){let r;const{page:n}=lt();y(e,n,e=>{s("$page",r=e)});let a,o,c=!1;let l=[],i=!1;w(()=>{a=fetch("search-index.json").then(e=>e.json()).then(({keys:e,items:t})=>{o=new J(t,e,{sort:!0})})});return{page:n,showResults:c,handleDocumentClick:function(){s("showResults",c=!1)},resultLink:function(e){return`${e.version||r.params.version||"latest"}${e.link?`/${e.link}`:""}`},results:l,gotTerm:i,search:async function(e){await a;const t=e.target.value.trim();s("gotTerm",i=Boolean(t)),s("results",l=i?o.search(t).slice(0,10).map(e=>({...e,matches:Z(e.text||e.title,t)})):[])},focus_handler:()=>s("showResults",c=!0)}}class se extends s{constructor(e){super(),r(this,e,te,Y,t,[])}}function re(e,t,s){const r=Object.create(e);return r.tag=t[s].tag,r.version=t[s].version,r}function ne(e){var t,s,r,g,$,b,E,y,w=e.$page.params.version+"";let S=e.tags,_=[];for(let t=0;t<S.length;t+=1)_[t]=ae(re(e,S,t));return{c(){t=n("div"),s=n("p"),r=n("span"),g=p("Version:\n                "),$=n("strong"),b=p(w),E=a(),y=n("div");for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var n=c(t);s=o(n,"P",{class:!0},!1);var a=c(s);r=o(a,"SPAN",{},!1);var u=c(r);g=v(u,"Version:\n                "),$=o(u,"STRONG",{},!1);var f=c($);b=v(f,w),f.forEach(i),u.forEach(i),a.forEach(i),E=l(n),y=o(n,"DIV",{class:!0},!1);var h=c(y);for(let e=0;e<_.length;e+=1)_[e].l(h);h.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","navbar-link"),u(y,"class","navbar-dropdown is-right"),u(t,"class","navbar-item has-dropdown is-hoverable")},m(e,n){f(e,t,n),h(t,s),h(s,r),h(r,g),h(r,$),h($,b),h(t,E),h(t,y);for(let e=0;e<_.length;e+=1)_[e].m(y,null)},p(e,t){if(e.$page&&w!==(w=t.$page.params.version+"")&&d(b,w),e.tags||e.$page){let s;for(S=t.tags,s=0;s<S.length;s+=1){const r=re(t,S,s);_[s]?_[s].p(e,r):(_[s]=ae(r),_[s].c(),_[s].m(y,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=S.length}},d(e){e&&i(t),m(_,e)}}}function ae(e){var t,s,r,d,m,$,b,E=e.tag+"",y=e.version+"";return{c(){t=n("a"),s=n("span"),r=p(E),d=p(" ("),m=p(y),$=p(")"),b=a(),this.h()},l(e){t=o(e,"A",{href:!0,class:!0},!1);var n=c(t);s=o(n,"SPAN",{},!1);var a=c(s);r=v(a,E),d=v(a," ("),m=v(a,y),$=v(a,")"),a.forEach(i),b=l(n),n.forEach(i),this.h()},h(){u(t,"href",e.tag),u(t,"class","navbar-item is-flex"),g(t,"is-active",e.tag===e.$page.params.version)},m(e,n){f(e,t,n),h(t,s),h(s,r),h(s,d),h(s,m),h(s,$),h(t,b)},p(e,s){(e.tags||e.$page)&&g(t,"is-active",s.tag===s.$page.params.version)},d(e){e&&i(t)}}}function oe(e){var t,s,r,a;return{c(){t=n("div"),s=n("div"),r=n("div"),a=p("Documentation for beta releases may be incomplete."),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var n=c(t);s=o(n,"DIV",{class:!0},!1);var l=c(s);r=o(l,"DIV",{class:!0},!1);var u=c(r);a=v(u,"Documentation for beta releases may be incomplete."),u.forEach(i),l.forEach(i),n.forEach(i),this.h()},h(){u(r,"class","message-body"),u(s,"class","message is-warning"),u(t,"class","container")},m(e,n){f(e,t,n),h(t,s),h(s,r),h(r,a)},d(e){e&&i(t)}}}function ce(e){var t,s,r,d,m,b,y,w,k,A,R,D,j,I,L,C,V,N,T,M,U,q,G,H,B,J,K,z,F,W,X,Y,Q,Z,ee,te,re,ae,ce,le,ie,ue=e.$page.params&&e.$page.params.version&&ne(e),fe=new se({}),he=e.$page.params&&e.$page.params.version&&"latest"!==e.$page.params.version&&oe();return{c(){t=n("nav"),s=n("div"),r=n("div"),d=n("a"),m=n("strong"),b=p("atscm"),y=a(),w=n("div"),k=n("span"),A=a(),R=n("span"),D=a(),j=n("span"),I=a(),L=n("div"),C=n("div"),V=n("a"),N=p("Readme"),M=a(),U=n("a"),q=p("Manual"),H=a(),B=n("a"),J=p("Reference"),z=a(),F=n("div"),ue&&ue.c(),W=a(),X=n("div"),fe.$$.fragment.c(),Y=a(),Q=n("div"),Z=n("div"),ee=n("a"),te=n("span"),re=n("i"),ae=a(),he&&he.c(),ce=S(),this.h()},l(e){t=o(e,"NAV",{class:!0},!1);var n=c(t);s=o(n,"DIV",{class:!0},!1);var a=c(s);r=o(a,"DIV",{class:!0},!1);var u=c(r);d=o(u,"A",{href:!0,class:!0},!1);var f=c(d);m=o(f,"STRONG",{},!1);var h=c(m);b=v(h,"atscm"),h.forEach(i),f.forEach(i),y=l(u),w=o(u,"DIV",{role:!0,class:!0},!1);var p=c(w);k=o(p,"SPAN",{"aria-hidden":!0},!1),c(k).forEach(i),A=l(p),R=o(p,"SPAN",{"aria-hidden":!0},!1),c(R).forEach(i),D=l(p),j=o(p,"SPAN",{"aria-hidden":!0},!1),c(j).forEach(i),p.forEach(i),u.forEach(i),I=l(a),L=o(a,"DIV",{class:!0},!1);var g=c(L);C=o(g,"DIV",{class:!0},!1);var $=c(C);V=o($,"A",{href:!0,class:!0},!1);var E=c(V);N=v(E,"Readme"),E.forEach(i),M=l($),U=o($,"A",{href:!0,class:!0},!1);var _=c(U);q=v(_,"Manual"),_.forEach(i),H=l($),B=o($,"A",{href:!0,class:!0},!1);var P=c(B);J=v(P,"Reference"),P.forEach(i),$.forEach(i),z=l(g),F=o(g,"DIV",{class:!0},!1);var x=c(F);ue&&ue.l(x),W=l(x),X=o(x,"DIV",{class:!0},!1);var O=c(X);fe.$$.fragment.l(O),O.forEach(i),Y=l(x),Q=o(x,"DIV",{class:!0},!1);var T=c(Q);Z=o(T,"DIV",{class:!0},!1);var G=c(Z);ee=o(G,"A",{href:!0,class:!0},!1);var K=c(ee);te=o(K,"SPAN",{class:!0},!1);var se=c(te);re=o(se,"I",{class:!0},!1),c(re).forEach(i),se.forEach(i),K.forEach(i),G.forEach(i),T.forEach(i),x.forEach(i),g.forEach(i),a.forEach(i),n.forEach(i),ae=l(e),he&&he.l(e),ce=S(),this.h()},h(){u(d,"href","."),u(d,"class","navbar-item"),g(d,"is-active",void 0===e.segment),u(k,"aria-hidden","true"),u(R,"aria-hidden","true"),u(j,"aria-hidden","true"),u(w,"role","button"),u(w,"class","navbar-burger burger"),g(w,"is-active",e.menuOpen),u(r,"class","navbar-brand"),u(V,"href",T=e.segment||"latest"),u(V,"class","navbar-item"),g(V,"is-active",e.$page.path.endsWith(e.segment)),u(U,"href",G=(e.segment||"latest")+"/docs"),u(U,"class","navbar-item"),g(U,"is-active",e.$page.path.includes("docs")),u(B,"href",K=(e.segment||"latest")+"/api"),u(B,"class","navbar-item"),g(B,"is-active",e.$page.path.includes("api")),u(C,"class","navbar-start"),u(X,"class","navbar-item search-item"),u(re,"class","fab fa-github"),u(te,"class","icon"),u(ee,"href","https://github.com/atscm"),u(ee,"class","button is-light"),u(Z,"class","buttons"),u(Q,"class","navbar-item"),u(F,"class","navbar-end"),u(L,"class","navbar-menu"),g(L,"is-active",e.menuOpen),u(s,"class","container"),u(t,"class","navbar is-spaced"),ie=[$(w,"click",e.click_handler),$(L,"click",e.click_handler_1)]},m(e,n){f(e,t,n),h(t,s),h(s,r),h(r,d),h(d,m),h(m,b),h(r,y),h(r,w),h(w,k),h(w,A),h(w,R),h(w,D),h(w,j),h(s,I),h(s,L),h(L,C),h(C,V),h(V,N),h(C,M),h(C,U),h(U,q),h(C,H),h(C,B),h(B,J),h(L,z),h(L,F),ue&&ue.m(F,null),h(F,W),h(F,X),_(fe,X,null),h(F,Y),h(F,Q),h(Q,Z),h(Z,ee),h(ee,te),h(te,re),f(e,ae,n),he&&he.m(e,n),f(e,ce,n),le=!0},p(e,t){e.segment&&g(d,"is-active",void 0===t.segment),e.menuOpen&&g(w,"is-active",t.menuOpen),le&&!e.segment||T===(T=t.segment||"latest")||u(V,"href",T),(e.$page||e.segment)&&g(V,"is-active",t.$page.path.endsWith(t.segment)),le&&!e.segment||G===(G=(t.segment||"latest")+"/docs")||u(U,"href",G),e.$page&&g(U,"is-active",t.$page.path.includes("docs")),le&&!e.segment||K===(K=(t.segment||"latest")+"/api")||u(B,"href",K),e.$page&&g(B,"is-active",t.$page.path.includes("api")),t.$page.params&&t.$page.params.version?ue?ue.p(e,t):((ue=ne(t)).c(),ue.m(F,W)):ue&&(ue.d(1),ue=null),e.menuOpen&&g(L,"is-active",t.menuOpen),t.$page.params&&t.$page.params.version&&"latest"!==t.$page.params.version?he||((he=oe()).c(),he.m(ce.parentNode,ce)):he&&(he.d(1),he=null)},i(e){le||(P(fe.$$.fragment,e),le=!0)},o(e){x(fe.$$.fragment,e),le=!1},d(e){e&&i(t),ue&&ue.d(),O(fe),e&&i(ae),he&&he.d(e),e&&i(ce),E(ie)}}}function le(e,t,s){let r,{segment:n}=t;const{page:a}=lt();y(e,a,e=>{s("$page",r=e)});const{tags:o}=k("index");let c=!1;return e.$set=e=>{"segment"in e&&s("segment",n=e.segment)},{segment:n,page:a,tags:o,menuOpen:c,$page:r,click_handler:()=>s("menuOpen",c=!c),click_handler_1:()=>s("menuOpen",c=!1)}}class ie extends s{constructor(e){super(),r(this,e,le,ce,t,["segment"])}}var ue=[{tag:"latest",version:"0.6.0"},{tag:"beta",version:"1.0.0-beta.43"}];function fe(e){var t,s,r,d,m,g,$,b,E,y,w,S,k,j,I,L,C,V,N,T,M,U,q=new ie({props:{segment:e.segment}});const G=e.$$slots.default,H=A(G,e,null);return{c(){t=n("div"),q.$$.fragment.c(),s=a(),H&&H.c(),r=a(),d=n("footer"),m=n("div"),g=n("p"),$=n("strong"),b=p("atscm"),E=p("\n      is an open source project by\n      "),y=n("a"),w=p("Bachmann electronics"),S=p("\n      · The source code is licensed\n      "),k=n("a"),j=p("MIT"),I=a(),L=n("p"),C=n("a"),V=p("Get involved"),N=p("\n      ·\n      "),T=n("a"),M=p("Improve this page"),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var n=c(t);q.$$.fragment.l(n),s=l(n),H&&H.l(n),n.forEach(i),r=l(e),d=o(e,"FOOTER",{class:!0},!1);var a=c(d);m=o(a,"DIV",{class:!0},!1);var u=c(m);g=o(u,"P",{},!1);var f=c(g);$=o(f,"STRONG",{},!1);var h=c($);b=v(h,"atscm"),h.forEach(i),E=v(f,"\n      is an open source project by\n      "),y=o(f,"A",{href:!0},!1);var p=c(y);w=v(p,"Bachmann electronics"),p.forEach(i),S=v(f,"\n      · The source code is licensed\n      "),k=o(f,"A",{href:!0},!1);var _=c(k);j=v(_,"MIT"),_.forEach(i),f.forEach(i),I=l(u),L=o(u,"P",{},!1);var P=c(L);C=o(P,"A",{href:!0},!1);var x=c(C);V=v(x,"Get involved"),x.forEach(i),N=v(P,"\n      ·\n      "),T=o(P,"A",{href:!0},!1);var O=c(T);M=v(O,"Improve this page"),O.forEach(i),P.forEach(i),u.forEach(i),a.forEach(i),this.h()},h(){u(t,"class","fullscreen-content svelte-30lnsi"),u(y,"href","https://bachmann.info"),u(k,"href","http://opensource.org/licenses/mit-license.php"),u(C,"href","https://github.com/atSCM/atscm"),u(T,"href","https://github.com/atSCM/atscm.github.io"),u(m,"class","content has-text-centered"),u(d,"class","footer")},m(e,n){f(e,t,n),_(q,t,null),h(t,s),H&&H.m(t,null),f(e,r,n),f(e,d,n),h(d,m),h(m,g),h(g,$),h($,b),h(g,E),h(g,y),h(y,w),h(g,S),h(g,k),h(k,j),h(m,I),h(m,L),h(L,C),h(C,V),h(L,N),h(L,T),h(T,M),U=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),q.$set(s),H&&H.p&&e.$$scope&&H.p(R(G,t,e,null),D(G,t,null))},i(e){U||(P(q.$$.fragment,e),P(H,e),U=!0)},o(e){x(q.$$.fragment,e),x(H,e),U=!1},d(e){e&&i(t),O(q),H&&H.d(e),e&&(i(r),i(d))}}}function he(e,t,s){let{segment:r}=t;j("index",{tags:ue});let{$$slots:n={},$$scope:a}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)},{segment:r,$$slots:n,$$scope:a}}class pe extends s{constructor(e){super(),r(this,e,he,fe,t,["segment"])}}function ve(e){var t,s,r,a=e.error.stack+"";return{c(){t=n("div"),s=n("pre"),r=p(a),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var n=c(t);s=o(n,"PRE",{},!1);var l=c(s);r=v(l,a),l.forEach(i),n.forEach(i),this.h()},h(){u(t,"class","content")},m(e,n){f(e,t,n),h(t,s),h(s,r)},p(e,t){e.error&&a!==(a=t.error.stack+"")&&d(r,a)},d(e){e&&i(t)}}}function de(e){var t,s,r,m,g,b,E,y,w,S,k,A,R,D,j,L,C=e.status<500||e.dev?e.error.message:"An error ocurred",V=new I({props:{title:e.status,description:e.description}}),N=e.dev&&e.error.stack&&ve(e);return{c(){V.$$.fragment.c(),t=a(),s=n("section"),r=n("div"),m=n("div"),g=n("h1"),b=p(e.status),E=a(),y=n("p"),w=p(C),S=a(),N&&N.c(),k=a(),A=n("div"),R=n("button"),D=p("Go back"),this.h()},l(n){V.$$.fragment.l(n),t=l(n),s=o(n,"SECTION",{class:!0},!1);var a=c(s);r=o(a,"DIV",{class:!0},!1);var u=c(r);m=o(u,"DIV",{class:!0},!1);var f=c(m);g=o(f,"H1",{class:!0},!1);var h=c(g);b=v(h,e.status),h.forEach(i),E=l(f),y=o(f,"P",{class:!0},!1);var p=c(y);w=v(p,C),p.forEach(i),S=l(f),N&&N.l(f),k=l(f),A=o(f,"DIV",{class:!0},!1);var d=c(A);R=o(d,"BUTTON",{class:!0},!1);var $=c(R);D=v($,"Go back"),$.forEach(i),d.forEach(i),f.forEach(i),u.forEach(i),a.forEach(i),this.h()},h(){u(g,"class","title svelte-o81gtr"),u(y,"class","subtitle"),u(R,"class","button"),u(A,"class","buttons is-centered"),u(m,"class","container has-text-centered"),u(r,"class","hero-body"),u(s,"class","hero is-fullheight-with-navbar"),L=$(R,"click",me)},m(e,n){_(V,e,n),f(e,t,n),f(e,s,n),h(s,r),h(r,m),h(m,g),h(g,b),h(m,E),h(m,y),h(y,w),h(m,S),N&&N.m(m,null),h(m,k),h(m,A),h(A,R),h(R,D),j=!0},p(e,t){var s={};e.status&&(s.title=t.status),V.$set(s),j&&!e.status||d(b,t.status),j&&!e.status&&!e.error||C===(C=t.status<500||t.dev?t.error.message:"An error ocurred")||d(w,C),t.dev&&t.error.stack?N?N.p(e,t):((N=ve(t)).c(),N.m(m,k)):N&&(N.d(1),N=null)},i(e){j||(P(V.$$.fragment,e),j=!0)},o(e){x(V.$$.fragment,e),j=!1},d(e){O(V,e),e&&(i(t),i(s)),N&&N.d(),L()}}}function me(){history.back()}function ge(e,t,s){let{status:r,error:n}=t;const a=r<500?n.message:"An error ocurred";return e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)},{status:r,error:n,dev:!1,description:a}}class $e extends s{constructor(e){super(),r(this,e,ge,de,t,["status","error"])}}function be(e){var t,s,r=[{segment:e.segments[1]},e.level1.props],n=e.level1.component;function a(e){let t={$$slots:{default:[we]},$$scope:{ctx:e}};for(var s=0;s<r.length;s+=1)t=L(t,r[s]);return{props:t}}if(n)var o=new n(a(e));return{c(){o&&o.$$.fragment.c(),t=S()},l(e){o&&o.$$.fragment.l(e),t=S()},m(e,r){o&&_(o,e,r),f(e,t,r),s=!0},p(e,s){var c=e.segments||e.level1?C(r,[e.segments&&{segment:s.segments[1]},e.level1&&V(s.level1.props)]):{};if((e.$$scope||e.level2)&&(c.$$scope={changed:e,ctx:s}),n!==(n=s.level1.component)){if(o){N();const e=o;x(e.$$.fragment,1,0,()=>{O(e,1)}),T()}n?((o=new n(a(s))).$$.fragment.c(),P(o.$$.fragment,1),_(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&P(o.$$.fragment,e),s=!0)},o(e){o&&x(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&O(o,e)}}}function Ee(e){var t,s=new $e({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){_(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(P(s.$$.fragment,e),t=!0)},o(e){x(s.$$.fragment,e),t=!1},d(e){O(s,e)}}}function ye(e){var t,s,r=[e.level2.props],n=e.level2.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=L(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=S()},l(e){o&&o.$$.fragment.l(e),t=S()},m(e,r){o&&_(o,e,r),f(e,t,r),s=!0},p(e,s){var c=e.level2?C(r,[V(s.level2.props)]):{};if(n!==(n=s.level2.component)){if(o){N();const e=o;x(e.$$.fragment,1,0,()=>{O(e,1)}),T()}n?((o=new n(a())).$$.fragment.c(),P(o.$$.fragment,1),_(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&P(o.$$.fragment,e),s=!0)},o(e){o&&x(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&O(o,e)}}}function we(e){var t,s,r=e.level2&&ye(e);return{c(){r&&r.c(),t=S()},l(e){r&&r.l(e),t=S()},m(e,n){r&&r.m(e,n),f(e,t,n),s=!0},p(e,s){s.level2?r?(r.p(e,s),P(r,1)):((r=ye(s)).c(),P(r,1),r.m(t.parentNode,t)):r&&(N(),x(r,1,1,()=>{r=null}),T())},i(e){s||(P(r),s=!0)},o(e){x(r),s=!1},d(e){r&&r.d(e),e&&i(t)}}}function Se(e){var t,s,r,n,a=[Ee,be],o=[];function c(e,t){return t.error?0:1}return t=c(0,e),s=o[t]=a[t](e),{c(){s.c(),r=S()},l(e){s.l(e),r=S()},m(e,s){o[t].m(e,s),f(e,r,s),n=!0},p(e,n){var l=t;(t=c(0,n))===l?o[t].p(e,n):(N(),x(o[l],1,1,()=>{o[l]=null}),T(),(s=o[t])||(s=o[t]=a[t](n)).c(),P(s,1),s.m(r.parentNode,r))},i(e){n||(P(s),n=!0)},o(e){x(s),n=!1},d(e){o[t].d(e),e&&i(r)}}}function _e(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[Se]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=L(r,s[n]);var a=new pe({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){_(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?C(s,[e.segments&&{segment:t.segments[0]},e.level0&&V(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1||e.segments||e.level2)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(P(a.$$.fragment,e),t=!0)},o(e){x(a.$$.fragment,e),t=!1},d(e){O(a,e)}}}function Pe(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:c,level1:l=null,level2:i=null}=t;return j(q,r),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",c=e.level0),"level1"in e&&s("level1",l=e.level1),"level2"in e&&s("level2",i=e.level2)},{stores:r,error:n,status:a,segments:o,level0:c,level1:l,level2:i}}class xe extends s{constructor(e){super(),r(this,e,Pe,_e,t,["stores","error","status","segments","level0","level1","level2"])}}const Oe=[/^\/search-index.json$/,/^\/([^\/]+?)\/readme.json$/,/^\/([^\/]+?)\/docs\/overview.json$/,/^\/([^\/]+?)\/docs\/toc.json$/,/^\/([^\/]+?)\/docs\/([^\/]+?).json$/,/^\/([^\/]+?)\/api\/data.json$/],ke=[{js:()=>import("./c.index.80a39bfb.js"),css:[]},{js:()=>import("./c.index.c740c1c3.js"),css:["c.app.fc4bed55.css"]},{js:()=>import("./c._layout.2db708e4.js"),css:["c.app.fc4bed55.css"]},{js:()=>import("./c.index.26690bd8.js"),css:["c.index.26690bd8.css","c.app.fc4bed55.css"]},{js:()=>import("./c.[manual].a945f4e4.js"),css:[]},{js:()=>import("./c.index.b6841f59.js"),css:["c.index.b6841f59.css","c.app.fc4bed55.css"]}],Ae=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:1,params:t=>({version:e(t[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/?$/,parts:[null,{i:2,params:t=>({version:e(t[1])})},{i:3,params:t=>({version:e(t[1])})}]},{pattern:/^\/([^\/]+?)\/docs\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({version:e(t[1])})},{i:4,params:t=>({version:e(t[1]),manual:e(t[2])})}]},{pattern:/^\/([^\/]+?)\/api\/?$/,parts:[null,{i:5,params:t=>({version:e(t[1])})}]}])(decodeURIComponent);const Re="undefined"!=typeof __SAPPER__&&__SAPPER__;let De,je,Ie,Le=!1,Ce=[],Ve="{}";const Ne={page:U({}),preloading:U(null),session:U(Re&&Re.session)};let Te,Me;Ne.session.subscribe(async e=>{if(Te=e,!Le)return;Me=!0;const t=ze(new URL(location.href)),s=je={},{redirect:r,props:n,branch:a}=await Ye(t);s===je&&await Xe(r,a,n,t.page)});let Ue,qe=null;let Ge,He=1;const Be="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Je={};function Ke(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ze(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Re.baseUrl))return null;let t=e.pathname.slice(Re.baseUrl.length);if(""===t&&(t="/"),!Oe.some(e=>e.test(t)))for(let s=0;s<Ae.length;s+=1){const r=Ae[s],n=r.pattern.exec(t);if(n){const s=Ke(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function Fe(){return{x:pageXOffset,y:pageYOffset}}async function We(e,t,s,r){if(t)Ge=t;else{const e=Fe();Je[Ge]=e,t=Ge=++He,Je[Ge]=s?e:{x:0,y:0}}Ge=t,De&&Ne.preloading.set(!0);const n=qe&&qe.href===e.href?qe.promise:Ye(e);qe=null;const a=je={},{redirect:o,props:c,branch:l}=await n;if(a===je&&(await Xe(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Je[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Je[Ge]=e,e&&scrollTo(e.x,e.y)}}async function Xe(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ze(new URL(e,document.baseURI));return s?(Be[t.replaceState?"replaceState":"pushState"]({id:Ge},"",e),We(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Ne.page.set(r),Ne.preloading.set(!1),De)De.$set(s);else{s.stores={page:{subscribe:Ne.page.subscribe},preloading:{subscribe:Ne.preloading.subscribe},session:Ne.session},s.level0={props:await Ie};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ze(e.nextSibling);Ze(e),Ze(t)}De=new xe({target:Ue,props:s,hydrate:!0})}Ce=t,Ve=JSON.stringify(r.query),Le=!0,Me=!1}async function Ye(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;Ie||(Ie=Re.preloaded[0]||G.call(o,{host:s.host,path:s.path,query:s.query,params:{}},Te));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,s,r){if(r!==Ve)return!0;const n=Ce[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(c,f,i,n)&&(u=!0),a.segments[l]=r[c+1],!t)return{segment:f};const h=l++;if(!Me&&!u&&Ce[c]&&Ce[c].part===t.i)return Ce[c];u=!1;const{default:p,preload:v}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Qe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ke[t.i]);let d;return d=Le||!Re.preloaded[c+1]?v?await v.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},Te):{}:Re.preloaded[c+1],a[`level${h}`]={component:p,props:d,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Qe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function Ze(e){e.parentNode.removeChild(e)}function et(e){const t=ze(new URL(e,document.baseURI));if(t)return qe&&e===qe.href||function(e,t){qe={href:e,promise:t}}(e,Ye(t)),qe.promise}function tt(e){return"scrollRestoration"in Be&&(Be.scrollRestoration="manual"),function(e){Ue=e}(e.target),addEventListener("click",at),addEventListener("popstate",ct),addEventListener("touchstart",nt),addEventListener("mousemove",rt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Be.replaceState({id:He},"",t);const s=new URL(location.href);if(Re.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=Re;Ie||(Ie=a&&a[0]),Xe(null,[],{error:c,status:o,session:n,level0:{props:Ie},level1:{props:{status:o,error:c},component:$e},segments:a},{host:t,path:s,query:Ke(r),params:{}})}();const r=ze(s);return r?We(r,He,!0,e):void 0})}let st;function rt(e){clearTimeout(st),st=setTimeout(()=>{nt(e)},20)}function nt(e){const t=ot(e.target);t&&"prefetch"===t.rel&&et(t.href)}function at(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ot(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ze(n);if(a){We(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),Be.pushState({id:Ge},"",n.href)}}function ot(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ct(e){if(Je[Ge]=Fe(),e.state){const t=ze(new URL(location.href));t?We(t,e.state.id):location.href=location.href}else(function(e){Ge=e})(He=He+1),Be.replaceState({id:Ge},"",location.href)}const lt=()=>k(q);export{lt as a,tt as s,ue as t};
