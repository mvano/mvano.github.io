onfetch = async (event) => {
  console.log('onfetch');
  if (event.request.method !== 'POST') return;
  if (event.request.url.startsWith('https://mvano.github.io/share-files/index.html') === false) return;

  event.respondWith(Response.redirect('/share-files/index.html'));

  event.waitUntil(async function () {
    const data = await event.request.formData();
    const client = await self.clients.get(event.resultingClientId || event.clientId);
    const files = data.getAll('files');

    console.log('files', files);
    client.postMessage({files, action: 'receive-image'});
  }());
};

oninstall = () => {
  console.log('oninstall');
  skipWaiting();
};

onactivate = () => {
  console.log('onactivate');
  clients.claim();
};
