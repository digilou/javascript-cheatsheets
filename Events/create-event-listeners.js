// add event listener
// click applies to: mouse click, Enter key press, or screen tap
// IE support >= 9

const button = document.querySelector('button');

button.addEventListener('click', makeItSo);

// an event object
function makeItSo(event) {
  alert('Red Alert!);
  console.log(event.type); // event type: click
  console.log(event.target); // target property: button
}