console.log('Initialize sw.');

self.addEventListener('install', evt => {
    console.log('SW install ', evt);
    self.skipWaiting();
});

self.addEventListener('activate', evt => {
    console.log('SW activate ', evt);
    setInterval(() => {
        fetch('https://raw.githubusercontent.com/michailvr/air-datepicker/master/package.json').then(request => {
            request.json()
                   .then(value => {
                       self.registration.showNotification('Simple notification!', {
                           body: value.name + ' ' + value.version
                       });
                   });
        });
    }, 10000);
});

self.addEventListener('statechange', evt => {
    console.log('SW statechange ', evt);
});
