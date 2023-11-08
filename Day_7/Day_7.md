### Day 7: Understanding Scope

#### Global Scope vs. Local Scope
- **Global Scope:** Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
- **Local Scope:** Variables declared inside a function or a block are in the local scope and can only be accessed within that function or block.

#### Lexical Scope
- **Lexical Scope (or Static Scope):** Variables are resolved based on the location of the variables in the code. If a variable is not found in the immediate local scope, JavaScript looks up the scope chain until it finds the variable or reaches the global scope.

#### Block Scope
- **Block-Level Scoping with let and const:** The `let` and `const` keywords allow the declaration of variables that are limited in scope to the block, statement, or expression in which they are used, unlike `var` which has function-level scope.

#### Closures
- **Closures:** A closure is a combination of a function bundled together with references to its surrounding state (the lexical environment). This gives the function persistent access to its scope, even after the outer function has finished executing.

#### Practical Tasks:
1. **Global vs. Local Scope:**
   - Create variables in both global and local scopes. Attempt to access them from different parts of your code to understand how their scope works.

2. **Lexical Scope:**
   - Experiment with nested functions and try accessing variables defined in different scopes.

3. **Block Scope:**
   - Compare and contrast the behavior of variables declared with `let` or `const` in block-level scope versus those declared with `var`.

4. **Closures:**
   - Create a function that returns another function, allowing the inner function to access and manipulate variables from the outer function. This will illustrate closure in action.