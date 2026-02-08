const CACHE_NAME = 'quiz-permis-v17';
const APP_VERSION = '2.1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './quiz-free.js',
  './icon-192.png',
  './manifest.json',
  './conseils.html',
  './signalisation.html',
  './distances-freinage.html',
  './alcool-permis.html',
  './examen-snca.html'
];

// Installation — cache fichiers statiques
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch — cache-first + mise en cache dynamique des images
self.addEventListener('fetch', event => {
  // Ignorer GTM/Analytics (évite erreurs offline)
  if (event.request.url.includes('googletagmanager') ||
      event.request.url.includes('google-analytics') ||
      event.request.url.includes('gtag')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request).then(fetchResponse => {
          // Cacher dynamiquement les images au premier chargement
          if (event.request.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            const clone = fetchResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return fetchResponse;
        });
      })
      .catch(() => {
        // Fallback offline pour images non cachées
        if (event.request.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14">Image hors-ligne</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      })
  );
});

// Message handler — version check
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CHECK_VERSION') {
    event.source.postMessage({ type: 'VERSION', version: APP_VERSION, cache: CACHE_NAME });
  }
});

// Activation — nettoyer anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});