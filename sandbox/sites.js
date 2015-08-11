var gSites = [
"google.com",
"amazon.com",
"facebook.com",
];

/*
urls list of urls to load
index the index of the url to load
delay number of milliseconds to wait before loading the next url
*/
function openUrlsInSameWindow(urls, index, delay) {
  if (index >= urls.length) return;
  open(urls[index++], 'openUrlsInSameWindowName');
  setTimeout(openUrlsInSameWindow, delay, urls, index, delay);
}
