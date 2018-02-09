// Types of keyboard event listeners

document.addEventListener('keydown', doSomething);

document.addEventListener('keydown', console.log(`${event.key}`));

// keydown
// keypress
// keyup

// key property only partially supported https://caniuse.com/#feat=keyboardevent-key

// properties of event ovject
.key
.shiftKey
.ctrlKey
.altKey
.metaKey