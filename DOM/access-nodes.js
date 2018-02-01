// Node Types && Names
body.nodeType;
body.nodeName;
// 1. Element 
// 2. Attribute 
// 3. Text
// 4. Comment
// 5. Body 

// Nodes are array-like
// without all the methods
// except length
document.images.length;

// Node => array
const imageArray = Array.from(document.images);
const imageArray = [...document.images];

// access node values
const para = document.querySelector('p');
const textNode = para.firstChild;
textNode.nodeValue;
// OR
para.textContent; // not supported by IE 8