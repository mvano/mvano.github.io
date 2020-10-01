(function() {
  'use strict';

  window.addEventListener('DOMContentLoaded', function() {
    eruda.init({
      // container: el,
      // tool: ['console', 'elements'],
      // useShadowDom: true,
      autoScale: false,
      defaults: {
          displaySize: 50,
          transparency: 1.0
          // theme: 'Monokai Pro'
      }
    });

    console.log(navigator.userAgent);
    console.log(window.location.href);
    console.log('navigator.ServiceWorker: ' + navigator.serviceWorker);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW registration successful with scope: ', registration.scope);
      }, error => {
        console.log('SW registration failed: ', error);
      });

      navigator.serviceWorker.onmessage = event => {
        console.log(event);
        // imageBlob = event.data.files;
        // Update the UI with the data that has been shared to it.
        // imageShare.src = URL.createObjectURL(imageBlob);
      };
    }

  });
})();
