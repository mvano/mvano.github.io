function handler(event) {
  console.log(event);
}

['activate', 'install', 'push'].forEach(function(type) {
  self.addEventListener(type, handler);
});

console.log('Logged from inside SW');
console.log(self);
