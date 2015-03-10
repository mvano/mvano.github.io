function setLocalStorage(key, value) {
  if (!('localStorage' in window)) {
    console.log('No support for localStorage');
    return;
  }
  key = key || 'time';
  value = value || String(Date.now());
  localStorage.setItem(key, value);
  displayLocalStorage();
}

function clearLocalStorage() {
  if (!('localStorage' in window)) {
    console.log('No support for localStorage');
    displayLocalStorage();
    return;
  }
  localStorage.clear();
  displayLocalStorage();
}

function displayLocalStorage(displayElementId) {
  if (!('localStorage' in window)) {
    console.log('No support for localStorage');
    document.getElementById('localStorageDisplay').textContent = '<not supported>';
    return;
  }
  var value = '';
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    value += key + ' = ' + localStorage.getItem(key) + '\n';
  }
  displayElementId = displayElementId || 'localStorageDisplay';
  document.getElementById(displayElementId).textContent = value || '<empty>';
}
