// Getting Elements

const body = document.body;
const images = document.images;
const links = document.links; // <a> && <area> with href
const anchors = document.anchors; // a with name
const forms = document.forms;

// By id
// if('') return null
const h1 = document.getElementById('title');

// By tag name
// returns live node list || []
const listItems = document.getElementsByTagName('li');

// By class
// returns live node list || []
// IE support >=9
const heroes = document.getElementsByClassName('hero');

// By CSS selector
// can be used on elements, not just document
// returns 1st match || null
// IE support >=8
document.querySelector('#bats');
ul.querySelector('li#bats'); // $('ul').find('li#bats');
// returns node list || []
document.querySelectorAll('.hero');