/* THE ANSWER KEY — service worker.

   Everything the site is made of is precached on install, so it works with no
   network at all. Two strategies, because they answer two different questions:

   - Navigations (the page shell) use NETWORK-FIRST. A cache-first shell goes
     stale the moment anything is republished, and the reader has no way to
     force it: they get an old index.html that loads scripts which no longer
     exist. Network-first means an update lands on the next online visit, and
     the cached shell is still there when there is no network at all.

   - Everything else uses STALE-WHILE-REVALIDATE: serve the cached copy at
     once, fetch a fresh one in the background, use that next time. Fast on
     every visit, and never more than one visit behind.                      */

var CACHE = 'answer-key-v2';
var ASSETS = [
  './', './index.html', './styles.css', './app.js',
  './data-static.js', './data-ancient.js', './data-medieval.js',
  './data-laws.js', './data-geo.js', './data-polity.js',
  './diagrams.js', './data-algebra.js', './data-geometry.js',
  './data-mensuration.js', './data-trig.js', './data-profit.js',
  './fonts/literata-400.woff2', './fonts/literata-600.woff2',
  './fonts/literata-italic-400.woff2',
  './fonts/inter-400.woff2', './fonts/inter-600.woff2',
  './fonts/plexmono-400.woff2', './fonts/plexmono-500.woff2',
  './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './icon-180.png'
];

/* cache.addAll() goes through the browser's own HTTP cache, and a static host
   serves these files with a max-age. So a service worker installing shortly
   after a deploy can precache the PREVIOUS version's bytes and then go on
   serving them as if they were current. Requesting each file with
   cache:'reload' forces the network copy into the precache.

   Each file is added individually rather than through addAll, because addAll
   rejects the whole install if any single request fails — one renamed data
   file would leave the site with no service worker at all. */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(ASSETS.map(function (url) {
        return fetch(new Request(url, { cache: 'reload' }))
          .then(function (res) { if (res.ok) return cache.put(url, res); })
          .catch(function () { /* one missing file must not fail the install */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* The shell: network first, cache as the fallback. */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (r) {
          return r || caches.match('./');
        });
      })
    );
    return;
  }

  /* Everything else: cache first, refreshed in the background. */
  e.respondWith(
    caches.match(req).then(function (cached) {
      var fresh = fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || fresh;
    })
  );
});
