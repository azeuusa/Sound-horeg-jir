// sw.js
const CACHE_NAME = "weeknd-player-v1";
const urlsToCache = [
  "./",
  "index.html",
  "coming-down.mp3",
  "do.jpeg",
  "icon-192.png",
  "icon-512.png",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});