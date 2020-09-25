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

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    }

  });
})();
