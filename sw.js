// Service Worker - sw.js
// Stratégie: Network First (priorité au réseau)

const CACHE_NAME = 'pepito-cache-v1';

// Fichiers à mettre en cache à l'installation (le "squelette" de l'app)
const APP_SHELL = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'register-sw.js',
    'manifest.json',
    'assets/logo.png',
    'assets/colmar.jpeg',
    'assets/promo-engagement.jpg',
    'assets/promo-experience.jpg',
    'assets/promo-service.jpg'
];

// Installation: Mettre en cache le "squelette" de l'application
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Cache ouvert, ajout du squelette de l\'app');
                // L'ajout de ces fichiers peut échouer si l'un d'eux manque
                // Pour plus de robustesse, on utilise addAll mais on ne bloque pas l'installation
                // en cas d'échec partiel pour les ressources non critiques.
                // Pour ce projet, on suppose qu'ils sont tous là.
                return cache.addAll(APP_SHELL);
            })
            .then(() => self.skipWaiting()) // Forcer l'activation
    );
});

// Activation: Nettoyer les anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Suppression de l\'ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Prendre le contrôle
    );
});

// Fetch: Servir les requêtes
self.addEventListener('fetch', (event) => {
    // Stratégie "Network First" pour les ressources clés (HTML, CSS, JS)
    // Nous voulons toujours la version la plus fraîche si le réseau est dispo.
    if (event.request.mode === 'navigate' || 
        event.request.url.includes('.css') || 
        event.request.url.includes('.js') ||
        event.request.url.includes('manifest.json')) {
        
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    // Réseau OK : on met à jour le cache et on retourne la réponse
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Réseau KO : on sert depuis le cache
                    return caches.match(event.request);
                })
        );
    } else {
        // Stratégie "Cache First" pour le reste (images, polices)
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});