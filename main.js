if ('serviceWorker' in navigator) {
    let button = document.querySelector('#unreg');
    navigator.serviceWorker.register('./simple-sw.js')
             .then(value => {
                 console.log('Service worker register! ', value);
                 button.disabled = false;
                 button.addEventListener('click', e => {
                     value.unregister()
                         .then(unreg => {
                             console.log('Service worker unregister! ', value);
                         });
                 });
                 Notification.requestPermission()
                             .then(v => {
                                 console.log('Notification: ', v);
                             });
             });
}


