
//

function sendMessage(message) {
  self.clients.getAll().then(function(clients) {
    clients.forEach(function(client) {
      client.postMessage(message);
    });
  });
}

addEventListener('notificationclick', function(event) {
  sendMessage('Received notificationclick event.');

  clients.openWindow('https://secure.peter.sh/tests/sw-yay.html').then(function (w) {
    var url = w ? w.url : 'null';
    sendMessage('Opened window: ' + url);
    registration.showNotification('OMGYAY', {});
  }, function (error) {
    sendMessage('Error: ' + String(error));
  });

  event.notification.close();
});


