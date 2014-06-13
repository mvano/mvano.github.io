function handler(event) {
  console.log(event.type);
  if (event.type == 'push') {
    console.log(event.data);
  }
}

['activate', 'install', 'push'].forEach(function(type) {
  self.addEventListener(type, handler);
});

console.log('Logged from inside SW');
