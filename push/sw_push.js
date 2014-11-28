function handler(event) {
  console.log(event.type);
}

['activate', 'install', 'push'].forEach(function(type) {
  self.addEventListener(type, handler);
});

self.addEventListener('push', function(event) {
  console.log(event.data);
  console.log('Notification' in self);
  if ('Notification' in self) {
    console.log('We have Notification');
    var notification = new Notification(event.data);
    console.log(notification);
  }
}, false);

console.log('Logged from inside SW');
