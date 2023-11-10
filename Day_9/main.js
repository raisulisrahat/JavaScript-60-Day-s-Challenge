// Traversing the DOM
const childElement = document.getElementById('child1');
const parentElement = childElement.parentNode;
console.log('Parent Node:', parentElement);

const parentElementChildren = parentElement.childNodes;
console.log('Child Nodes:', parentElementChildren);

const selectedElement = document.querySelector('.child');
console.log('Selected Element:', selectedElement);

// Accessing Elements by ID, Class, or Tag
const elementById = document.getElementById('child2');
console.log('Element by ID:', elementById);

const elementsByClass = document.getElementsByClassName('child');
console.log('Elements by Class:', elementsByClass);

const elementsByTag = document.getElementsByTagName('p');
console.log('Elements by Tag:', elementsByTag);

const elementByQuerySelector = document.querySelector('#child3');
console.log('Element by Query Selector:', elementByQuerySelector);
