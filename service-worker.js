"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mr-peen-dress-up-game/index.html","6334aaed4c5367c953c54d9872e5365e"],["/mr-peen-dress-up-game/static/css/main.410c22f2.css","44824e146c3867769193dd4245d561b4"],["/mr-peen-dress-up-game/static/js/main.66c1463f.js","c608b5293a8380a037c2238b06967d7f"],["/mr-peen-dress-up-game/static/media/clouds.d38e168d.png","d38e168d0e49430d2d414d7d91602dd4"],["/mr-peen-dress-up-game/static/media/clouds.ddc23917.png","ddc2391743fb0b7da29f04eafe8812d7"],["/mr-peen-dress-up-game/static/media/galaxy.328b1db8.jpg","328b1db8db0ed468d24bb593ebe6c6e6"],["/mr-peen-dress-up-game/static/media/galaxy.6cd0a994.jpg","6cd0a994b4d46dbfffaa2050fe646bb6"],["/mr-peen-dress-up-game/static/media/galaxy2.028c272b.jpg","028c272bef7a38f095ee770228672d14"],["/mr-peen-dress-up-game/static/media/galaxy3.355b39cc.jpg","355b39cc90d2156607e9992131cdc138"],["/mr-peen-dress-up-game/static/media/galaxy3.cfcad8ad.jpg","cfcad8ad5d266475495fd36ca1c88365"],["/mr-peen-dress-up-game/static/media/sharks.e661a6d7.jpg","e661a6d72188ac1016247c1518e3ad42"],["/mr-peen-dress-up-game/static/media/sharks.fd758fe9.jpg","fd758fe959d442485a0f13deda4f7be3"],["/mr-peen-dress-up-game/static/media/sparkle.53834c54.png","53834c54a90a78fec9409b54882280e0"],["/mr-peen-dress-up-game/static/media/sparkle.e06a29fc.png","e06a29fc7419efe8c5722acd5287a3f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/mr-peen-dress-up-game/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});