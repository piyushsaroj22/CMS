const CACHE_NAME = "cms-cache-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./script1.js",
  "./scriptform.js",
  "./videoedit.js",
  "./short-film.js",

  // Pages
  "./festival.html",
  "./streetphotography.html",
  "./architecturephotography.html",
  "./carsphotography.html",
  "./productshoot.html",
  "./modelshoot.html",
  "./event&concert.html",
  "./cinematography.html",
  "./reels&videoedit.html",
  "./short-film.html",

  // Assets
  "./assets/home.jpg",
  "./assets/thumbnail/fastival-thumbnail.jpg",
  "./assets/thumbnail/street-photography-thumbnail.jpg",
  "./assets/thumbnail/architecture-phoygraphy-thumbnail.jpg"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
