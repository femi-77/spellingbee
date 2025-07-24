const CACHE_NAME = 'spellingbee-cache-v1';
const urlsToCache = [
  './index.html',
  './newpage.html',
  './style.css',
  './question.js',
  './manifest.json',
  './cropped.png',
  './crop.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error("❌ Cache install failed:", err))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(err => {
        console.error("❌ Fetch failed:", err);
        return fetch(event.request); // optional fallback
      })
  );
});
