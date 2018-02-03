if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Success!', reg))
        .catch(err => console.log('Oh no!', err));
} else {
    console.log('Service workers not supported.')
}


// adding scope
navigator.serviceWorker.register('sw.js', {scope: '/'}) {
    // more stuff here
}