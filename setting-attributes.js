// get attribute || null
const ul = document.querySelector('ul');
ul.getAttribute('class')
ul.getAttribute('id');
ul.getAttribute('src';
ul.getAttribute('href');

// set attribute
ul.setAttribute('class', 'highlight');

// className property overwrites all classes
ul.className = 'no-bullet';

// classList property
// IE support >= 10
ul.classList.add = 'no-bullet';
ul.classList.remove = 'no-bullet';
ul.classList.toggle('no-bullet');  // boolean (true ? add : remove)
ul.classList.contains('no-bullet');
// function to improve classList support
function addClass(element,newClass){
  if (element.className) {
      element.className = element.className + ' ' + newClass;
  } else {
      element.className = newClass;
  }
  return element.className;
}
addClass('ul', 'no-bullet');