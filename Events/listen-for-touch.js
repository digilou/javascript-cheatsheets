// Types of touch event listeners

document.addEventListener('mouseup', doSomething);

// click (300ms delay)
// touchstart
// touchend
// touchmove
// touchenter
// touchleave
// touchcancel

// Touch points and touch properties
events.touches.length;
events.touches[0];
touch.screenX;
touch.screenY;
touch.radiusX;
touch.radiusY;
touch.force; // pressure
touch.identifier; // unique id