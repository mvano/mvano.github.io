function handler(event) {
  console.log(event.type);
}

['activate', 'install', 'push'].forEach(function(type) {
  self.addEventListener(type, handler);
});

self.addEventListener('push', function(event) {
  console.log(event.data);
  if ('Notification' in self) {
    var notification = new Notification(event.data);
  }
}, false);

console.log('Logged from inside SW');
