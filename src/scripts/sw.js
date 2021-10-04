import 'regenerator-runtime';

import { precacheAndRoute } from 'workbox-precaching';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

import CONFIG from './global/config';
// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);
skipWaiting();
clientsClaim();

registerRoute(
  new RegExp(CONFIG.BASE_URL),
  new StaleWhileRevalidate(),
);

registerRoute(
  new RegExp('https://use.fontawesome.com/'),
  new StaleWhileRevalidate(),
);

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox';
//   const options = {
//     body: event.data.text()
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });
