!function(){"use strict";const e=["client/e.client.afddcec8.js","client/c.from-cli.40e8dc58.js","client/c.index.372e850a.js","client/c.[manual].41bd63e1.js","client/c.index.059d9425.js","client/c.index.a2b5ef67.js","client/c._layout.a9dfb7cf.js","client/c._layout.e4ccd8ef.js","client/c.SEO.8f6d8728.js","client/c.index.03af1052.js","client/c.app.7c25ca7a.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1576089126762").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1576089126762"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1576089126762").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
