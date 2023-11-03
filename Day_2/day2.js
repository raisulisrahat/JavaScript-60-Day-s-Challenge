// Variable declaration and assignment
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
};
