// Via node tree

// return child nodes, including whitespace && text
const heroes = document.getElementByTagName('ul');
heroes.childNodes
// return elements nodes only
// IE support >=9
heroes.children
// return length of node list
heroes.children.length
// return first or last node
// beware text or whitespace nodes
heroes.firstChild
heroes.lastChild
// return parent node
.parentNode
// return next adjacent node || null if lastChild
.nextSibling
// return previous adjacent node || null if firstChild
.previousSibling