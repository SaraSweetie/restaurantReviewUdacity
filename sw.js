const offlineCache = 'v1';

let cacheFiles = [
	'index.html',
	'restaurant.html',
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
				return cache.addAll(cacheFiles);
			})
			.then(() => {
				self.skipWaiting()
			})
	);
})

//Activate
self.addEventListener('activate', event => {
	console.log('Service worker is activated');

	//remove old cache files
/*	event.waitUntil(
		caches.keys().then(currentCache => {
			return Promise.all(
				currentCache.map(cache => {
					if(cache !== offlineCache){
						console.log('service worker deleting old cache files');
						return caches.delete(cache);
					}
				})
			)
		})
		)*/ //accidentally removing cached files
})

//showing files if offline
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then( response =>{
			if (response) return response;
			return fetch(event.request);
		})
	);
	console.log('files are offline');
});

/* self.addEventListener('fetch', event => {
	event.respondWith(
		fetch(event.request).catch( () => {
			caches.match(event.request)
		})
	)
});*/ //old way not really working...