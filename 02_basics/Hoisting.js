/*

3. Hoisting in JavaScript
1. Interview-Friendly Definition

"Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during the compile phase, so variables and functions can be used before they are declared."

2. Detailed Explanation

Function declarations are hoisted completely (including their definition).

Variable declarations with var are hoisted but initialized with undefined.

let and const are hoisted too but remain in the Temporal Dead Zone (TDZ) until the declaration is reached.

Hoisting happens in the creation phase of the execution context before code runs.

3. Examples

Function Hoisting

sayHello(); // ✅ Works
function sayHello() {
    console.log("Hello!");
}


Variable Hoisting with var

console.log(a); // undefined (hoisted but not initialized)
var a = 10;


Variable Hoisting with let and const

console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;


Mixing Hoisting with Functions

greet(); // ✅ Works

function greet() {
    console.log("Hi there!");
}

console.log(name); // undefined
var name = "Sameer";

4. Real-World Pitfalls

Using variables before declaration with var can cause bugs because undefined silently passes checks.

Forgetting TDZ with let and const leads to runtime errors.

Hoisting can make code harder to read — modern best practice is to declare before use.

5. Possible Follow-Ups

What is the Temporal Dead Zone?

How does hoisting work with arrow functions?

Are class declarations hoisted?

*/