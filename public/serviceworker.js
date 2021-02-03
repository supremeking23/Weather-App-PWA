const CASHE_NAME = "VERSION-1";
// storage of the browser

const urlsToCashe = ["index.html", "offline.html"];

const self = this;

//installtion event
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CASHE_NAME).then((cache) => {
			console.log("open cache");
			return cache.addAll(urlsToCashe);
		})
	);
});
//listen for requests
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then(() => {
			return fetch(event.request).catch(() => caches.match("offline.html"));
		})
	);
});
//activate the service worker
self.addEventListener("activate", (event) => {
	const cacheWhiteList = [];
	cacheWhiteList.push(CASHE_NAME);

	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhiteList.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			)
		)
	);
});
