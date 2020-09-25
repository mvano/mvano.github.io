(function() {
  'use strict';

  window.addEventListener('DOMContentLoaded', function() {
    eruda.init({
      // container: el,
      // tool: ['console', 'elements'],
      // useShadowDom: true,
      autoScale: false,
      defaults: {
          displaySize: 30,
          transparency: 0.9
          // theme: 'Monokai Pro'
      }
    });

    console.log(window.location.href);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    }

  });
})();
