### Changing Element Content:

To alter the content of a DOM element, you typically work with its `innerHTML`, `innerText`, or `textContent` property.

```javascript
// Example 1: Changing innerHTML
let element = document.getElementById('example');
element.innerHTML = 'New content';

// Example 2: Changing innerText
let element = document.getElementById('example');
element.innerText = 'New text content';

// Example 3: Changing textContent
let element = document.getElementById('example');
element.textContent = 'New text content';
```

Choose the method based on your specific needs. Note that `innerHTML` is often used when you want to include HTML tags in the content.

### Modifying CSS Properties:

To adjust styles and classes, you work with the `style` property of the DOM element.

```javascript
// Example 1: Modifying inline styles
let element = document.getElementById('example');
element.style.color = 'red';
element.style.fontSize = '20px';

// Example 2: Adding or removing classes
element.classList.add('new-class');
element.classList.remove('old-class');
```

For manipulating classes, the `classList` property is very useful. It provides methods like `add`, `remove`, `toggle`, and `contains`.

Remember, modifying inline styles directly with JavaScript might not be the best practice in larger applications. It's often more maintainable to define styles in CSS classes and then toggle those classes using JavaScript.

### Additional Tips:

- Always check if the element you're trying to manipulate exists before performing operations on it.
- Be mindful of potential security risks when using `innerHTML` with user-generated content to prevent cross-site scripting (XSS) attacks.