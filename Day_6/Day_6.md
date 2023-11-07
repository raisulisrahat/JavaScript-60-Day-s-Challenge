### Day 6: Functions

#### 1. Function Declaration vs. Function Expression:
   - **Function Declaration:**
     - Declaring a function using the `function` keyword followed by a name.
     - Can be hoisted, meaning they're available throughout the scope.
     - Example:
       ```javascript
       function sayHello() {
           console.log("Hello!");
       }
       ```

   - **Function Expression:**
     - Creating a function and assigning it to a variable.
     - The function is not hoisted, unlike function declarations.
     - Example:
       ```javascript
       const sayHi = function() {
           console.log("Hi!");
       };
       ```

#### 2. Parameters and Arguments:
   - **Parameters:** Variables listed as part of a function's definition.
   - **Arguments:** Values passed to a function when it is called.
   - Example:
     ```javascript
     function greet(name) {
         console.log(`Hello, ${name}!`);
     }

     greet("Alice"); // "Alice" is the argument passed to the function.
     ```

#### 3. Return Statements:
   - **Return:** Used to return a value from a function.
   - A function stops executing once a return statement is reached.
   - Example:
     ```javascript
     function add(a, b) {
         return a + b;
     }

     const result = add(3, 5); // result will be 8
     ```

#### 4. Anonymous Functions:
   - **Anonymous Function:** A function without a name.
   - Often used as callback functions or function expressions.
   - Example:
     ```javascript
     const multiply = function(a, b) {
         return a * b;
     };
     ```

#### 5. Function Scope:
   - **Scope:** Defines the accessibility of variables in JavaScript.
   - Variables declared inside a function have local scope (only accessible inside that function).
   - Example:
     ```javascript
     function myFunction() {
         const localVar = "I'm local";
         console.log(localVar); // Accessible here
     }

     console.log(localVar); // Will throw an error - localVar is not defined
     ```

#### 6. Higher-Order Functions:
   - **Higher-Order Functions:** Functions that can take other functions as arguments or return functions.
   - Common examples are functions like `map`, `filter`, and `reduce`.
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];

     const doubled = numbers.map(function(number) {
         return number * 2;
     });

     console.log(doubled); // [2, 4, 6, 8, 10]
     ```

#### Practical tasks:
- Create functions using both function declarations and expressions.
- Experiment with functions that accept parameters and return values.
- Explore higher-order functions like `map`, `filter`, or `reduce` on arrays.
