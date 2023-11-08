// Global Scope
let globalVar = "I'm in the global scope";

function myFunction() {
  // Local Scope
  let localVar = "I'm in the local scope";
  console.log(globalVar); // Accessing global variable
  console.log(localVar);  // Accessing local variable
}

myFunction();  // Call the function
// console.log(localVar); // This would cause an error because localVar is not accessible here

// Lexical Scope
function outerFunction() {
    let outerVar = "I'm in the outer function";
  
    function innerFunction() {
      let innerVar = "I'm in the inner function";
      console.log(outerVar); // Accessing outer variable
      console.log(innerVar); // Accessing inner variable
    }
  
    innerFunction(); // Call the inner function
    // console.log(innerVar); // This would cause an error because innerVar is not accessible here
  }
  
  outerFunction(); // Call the outer function

// Block Scope with let
function blockScopeExample() {
    if (true) {
      let blockLetVar = "I'm a let variable in block scope";
      console.log(blockLetVar); // Accessible within the block
    }
    // console.log(blockLetVar); // This would cause an error because blockLetVar is not accessible here
  }
  
  blockScopeExample();
  
  // Block Scope with const
  function blockConstExample() {
    const blockConstVar = "I'm a const variable in block scope";
    console.log(blockConstVar); // Accessible within the block
    // blockConstVar = "Trying to change const"; // This would cause an error since const variables are immutable
  }
  
  blockConstExample();

// Closures:
  function outerFunc() {
    let outerVar = "I'm from the outer function";
  
    function innerFunc() {
      console.log(outerVar); // Accessing outerVar from the outer function
    }
  
    return innerFunc;
  }
  
  let closureExample = outerFunc();
  closureExample(); // This will log "I'm from the outer function" even though outerFunc() has already finished executing
  
  