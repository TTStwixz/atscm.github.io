!function(){"use strict";const e=["client/e.client.e91e6bd2.js","client/c.[manual].078f4ff8.js","client/c.index.2da13553.js","client/c.index.195ddabf.js","client/c.index.431a3fee.js","client/c._layout.63221f27.js","client/c.SEO.c9f7bbdd.js","client/c.index.d6e5dee9.js","client/c.app.9fb34ab5.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1574420324238").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1574420324238"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1574420324238").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
