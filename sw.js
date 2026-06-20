// Service worker mínimo, solo para cumplir el requisito de instalabilidad
// de Chrome/Android. No cachea nada a propósito: esta app depende de datos
// en vivo (Supabase + horarios.json), así que un caché offline agresivo
// causaría más confusión que ayuda (datos desactualizados sin avisar).

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Sin 'fetch' handler: todas las peticiones van directas a la red,
// como si no hubiera service worker interceptando nada.
