const CACHE_NAME = "bugo-v1";

const urlsToCache = [
  "/BUGO-ON/",
  "/BUGO-ON/index.html",
  "/BUGO-ON/icon.png"
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
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
