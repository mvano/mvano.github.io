function getTime() {
  var now = new Date();
  var time = '' + now.getUTCHours() + ':';
  if (now.getUTCMinutes() < 10) time += '0';
  time += now.getUTCMinutes() + ':';
  if (now.getUTCSeconds() < 10) time += '0';
  time += now.getUTCSeconds();
  //time += ':' + now.getUTCMilliseconds();
  return time;
}
function formatTime(date) {
  var time = '' + date.getUTCHours() + ':';
  if (date.getUTCMinutes() < 10) time += '0';
  time += date.getUTCMinutes() + ':';
  if (date.getUTCSeconds() < 10) time += '0';
  time += date.getUTCSeconds();
  //time += ':' + date.getUTCMilliseconds();
  return time;
}
