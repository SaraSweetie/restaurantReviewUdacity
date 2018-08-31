
//Install
self.addEventListener('install', event => {
	console.log('Service worker is installed');
})

//Activate
self.addEventListener('activate', event => {
	console.log('Service worker is activated');
})