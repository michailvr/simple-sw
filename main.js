if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./simple-sw.js')
             .then(value => {
                 console.log('Service worker registered! ', value);
                 Notification.requestPermission()
                             .then(v => {
                                 console.log('Notification: ', v);
                             });
             });
}


