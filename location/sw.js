function log(message) {
  console.log(message);
}

function sendMessage(message) {
  log('sendMessage: ' + message);
  clients.getAll().then(clients => {
    log(clients.length + ' clients');
    clients.forEach(client => {
      client.postMessage(message);
    });
  });
}

log('In service worker');

oninstall = event => {
  log(event.type + ' event');
  event.waitUntil(skipWaiting());
};

onactivate = event => {
  log(event.type + ' event');
  event.waitUntil(clients.claim());
};

onfetch = event => {
  log('fetch url: ' + event.request.url);
};

onnotificationclose = event => {
  log(event.type + ' event');
};

onnotificationclick = event => {
  log(event.type + ' event');
  event.notification.close();
};

onmessage = event => {
  log(event.type + ' event');
  log(event.data + ' command');
  switch (event.data) {
    case 'showNotification':
      registration.showNotification('Persistent notification', {
        icon: '/sandbox/resources/11.png',
        body: 'From service worker'
      });
      break;
    case 'fetch':
      fetch('/sandbox/resources/11.png');
      break;
    default:
      log('Unhandled message: ' + event.data);
  }
  sendMessage('Received message: ' + event.data);
};
