(function() {
  'use strict';

  window.addEventListener('DOMContentLoaded', event => {
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

    document.getElementById('share').addEventListener('click', event => {
      const files = document.getElementById('image').files;
      console.log(files);
      if (navigator.canShare && navigator.canShare({files})) {
        navigator.share({files})
          .then(() => console.log('File share successful'))
          .catch(error => console.log('File share failed', error));
      } else {
        console.log('Your system does not support file sharing.'');
      }
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW registration successful with scope: ', registration.scope);
      }, error => {
        console.log('SW registration failed: ', error);
      });

      navigator.serviceWorker.onmessage = event => {
        console.log(event);
        if (event.data.action !== 'receive-image') return;

        const file = event.data.files[0];
        console.log(file);
        document.getElementById('viewName').textContent = file.name;
        document.getElementById('viewType').textContent = file.type;
        document.getElementById('viewSize').textContent = file.size;
        document.getElementById('viewLastModified').textContent = file.lastModified;
        document.getElementById('viewImage').src = URL.createObjectURL(file);
      };
    }

  });
})();
