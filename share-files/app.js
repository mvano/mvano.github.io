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
        const file = event.data.files[0];
        document.getElementById('viewName').textContent = file.name;
        document.getElementById('viewType').textContent = file.type;
        document.getElementById('viewSize').textContent = file.size;
        document.getElementById('viewLastModified').textContent = file.lastModified;
        document.getElementById('viewImage').src = URL.createObjectURL(file);
      };
    }

  });
})();
