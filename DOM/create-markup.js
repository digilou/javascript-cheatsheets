// 1. create element (empty)
const flash = document.createElement('li');

// 2. create text node for element
const flashText = document.createTextNode('Message inside!');

// 3. put them empty element && text together
flash.appendChild(flashText);

// OR

// use textContent
flash.textContent = "Message!";

// OR

// function to handle repetition
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}
const listItem1 = createElement('li', 'avocado');