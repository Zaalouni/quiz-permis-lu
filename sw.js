const CACHE_NAME = 'quiz-permis-v6';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './quiz-data.js',
  './quiz-cours1.js',
  './quiz-cours2.js',
  './quiz-cours3.js',
  './quiz-cours5.js',
  './quiz-snca.js',
  './quiz-snca2.js',
  './icon-192.png',
  './manifest.json'
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
          // Cacher dynamiquement les images SNCA au premier chargement
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

// Gestion des notifications push
self.addEventListener('push', event => {
  if (!event.data) return;

  const data = event.data.json();

  const options = {
    body: data.body || 'Nouvelle notification',
    icon: data.icon || 'icon-192.png',
    badge: data.badge || 'icon-192.png',
    tag: data.tag || 'quiz-notification',
    data: data.url || './'
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Permis Luxembourg', options)
  );
});

// Clic sur notification
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url === './' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('./');
        }
      })
  );
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