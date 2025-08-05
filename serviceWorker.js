self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('liga-de-tenis').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/manifest.json'
      ]);
    })
  );
});