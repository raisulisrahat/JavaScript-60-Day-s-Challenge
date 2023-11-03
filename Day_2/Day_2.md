### Day 2: Variables and Data Types

#### Task 1: Variables
- **Learn about Variables**: Understand the usage of `var`, `let`, and `const` in JavaScript and how to declare them.
- **Understanding Variable Scope**: Gain an understanding of variable scopes to comprehend where a part of the code is operational.

#### Task 2: Data Types
- **Explore Different Data Types**: Investigate various data types in JavaScript such as strings, numbers, booleans, arrays, and objects.
- **Creating Variables with Different Data Types**: Practice creating variables with different data types and understand how they work.

### Practice:
- **Writing Code**: Experiment by creating simple programs using variables and various data types.
- **Code Challenges**: Solve problems using variables and different data types to reinforce your understanding.
- **Mini Projects**: Depending on your comfort level, engage in small exercises like building a calculator or simple exercises related to your field.

Completing these tasks will help you understand the basics of variables and data types in JavaScript, allowing you to comprehend the language's various features.

```// Variable declaration and assignment
var a = 10; // Example using 'var'
let b = 'Hello'; // Example using 'let'
const c = true; // Example using 'const'

// Reassigning 'let' variable
b = 'World';

// Trying to reassign 'const' variable (will cause an error)
// c = false;


// Global scope
var globalVar = 'I am global';

function scopeExample() {
    // Local scope
    var localVar = 'I am local';
    console.log(globalVar); // Accessible

    {
        // Block scope
        var blockVar = 'I am in a block';
        console.log(localVar); // Accessible
    }

    console.log(blockVar); // Accessible
}

scopeExample();
// console.log(localVar); // Not accessible outside the function
// console.log(blockVar); // Not accessible outside the block



// Strings
var myString = 'Hello, this is a string';
console.log(myString)

// Numbers
var myNumber = 42;
console.log(myNumber)

// Booleans
var myBoolean = true;
console.log(myBoolean)

// Arrays
var myArray = [1, 2, 3, 'a', 'b', 'c'];
console.log(myArray)

// Objects
var myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(myObject)


// Variables with different data types
var stringVariable = 'Hello, I am a string';
var numberVariable = 42;
var booleanVariable = true;
var arrayVariable = [1, 2, 3];
var objectVariable = {
    name: 'Alice',
    age: 25
};```