// Function Declaration:

function sayHello() {
    console.log("Hello!");
}
sayHello()
// Function Expression:

const sayHi = function() {
    console.log("Hi!");
};
sayHi()

// Parameters and Arguments

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // "Alice" is the argument passed to the function.

// Return Statements

function add(a, b) {
    return a + b;
}
const result = add(3, 5); // result will be 8

// Anonymous Functions

const multiply = function(a, b) {
    return a * b;
};

// Function Scope

function myFunction() {
    const localVar = "I'm local";
    console.log(localVar); // Accessible here
}

// console.log(localVar); // Will throw an error - localVar is not defined


// Higher-Order Functions

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
