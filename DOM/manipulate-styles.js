// Change Styles
const para = document.querySelector('p');
// camelCase
para.style.backgroundColor = 'red';
// hyphenated words
para.style['background-color'] = 'red';

// Check Styles 
// readonly
getComputedStyle(para);
// get specific details, like color
getComputedStyle(para).getPropertyCSSValue('color').cssText;