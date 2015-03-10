if (!('Notification' in self) && 'webkitNotifications' in self) {
  self.Notification = self.webkitNotifications;
}

function showNotification(message, tag) {
  if (!navigator.serviceWorker || !window.ServiceWorkerRegistration.prototype.showNotification) {
    console.log('No service worker based notifications.');
    return;
  }
  message = message || 'Note: timestamp is ' + Date.now();
  tag = tag || '';
  navigator.serviceWorker.register('empty-sw.js').then(function(registration) {
    return navigator.serviceWorker.ready;
  }).then(function(registration) {
    registration.showNotification(message, { tag: tag });
  }).catch(function(e) {
    console.log(e);
  });
}

