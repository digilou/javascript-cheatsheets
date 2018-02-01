// add to end
ul.appendChild(listItem1);

// add before element
ul.insertBefore(newNode, currentNode);

// remove element
ul.removeChild(listItem1);

// replace node
const oldText = ul.firstChild;
const newText = document.createTextNode('Hello World');
ul.replaceChild(newText, oldText);

// replace everything
// innerHTML well supported
// standardized in HTML5
// can't put <script> inside
ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>'
