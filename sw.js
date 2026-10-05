/*
 * Deprecated: this was a framing-header service worker used to embed
 * svp-setup-app in an iframe on git.soma. The SVP Setup - Deepika tab now uses a
 * full-page approach instead, so this worker unregisters itself to stop
 * controlling the scope for any browser that installed the previous version.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        await self.clients.claim();
      } catch {
        /* no-op */
      }
      try {
        await self.registration.unregister();
      } catch {
        /* no-op */
      }
    })()
  );
});
// No fetch handler: all requests fall through to the network unchanged.
