const offlineCache = 'v1';

const cacheFiles = [
	'index.html',
	'restaurant/html',
	'css/styles.css',
	'js/main.js',
	'js/restaurant_info.js',
	'js/dbhelper.js',
	'data/restaurants.json'
];

//Install
self.addEventListener('install', event => {
	console.log('Service worker is installed');

	//Cache files in cacheFiles array
	event.waitUntil(
		caches.open(offlineCache)
			.then(cache => {
				console.log('service worker is cashing files');
				cashe.addAll(cacheFiles);
			})
			.then( ()=> {
				self.skipWaiting()
			})
	);
})

//Activate
self.addEventListener('activate', event => {
	console.log('Service worker is activated');
})