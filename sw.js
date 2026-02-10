const CACHE_NAME = 'quiz-permis-v27';
const APP_VERSION = '3.2';
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
  './examen-snca.html',
  './mentions-legales.html',
  './politique-confidentialite.html',
  './cours.html',
  './questions.html',
  './stationnement.html',
  './pietons-cyclistes.html',
  './regles-specifiques.html',
  './536.html'
];

// Installation — cache fichiers statiques
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch — network-first pour HTML/JS/CSS, cache-first pour images
self.addEventListener('fetch', event => {
  if (event.request.url.includes('googletagmanager') ||
      event.request.url.includes('google-analytics') ||
      event.request.url.includes('gtag')) {
    return;
  }

  const url = event.request.url;
  const isPage = event.request.mode === 'navigate' ||
                 url.endsWith('.html') || url.endsWith('.js') || url.endsWith('.css');

  if (isPage) {
    // Network-first : essayer le réseau, fallback cache
    event.respondWith(
      fetch(event.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return resp;
      }).catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first pour images et assets
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) return response;
        return fetch(event.request).then(resp => {
          if (url.match(/\.(jpg|jpeg|png|gif|webp|ico)$/i)) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return resp;
        });
      }).catch(() => {
        if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="14">Image hors-ligne</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      })
    );
  }
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