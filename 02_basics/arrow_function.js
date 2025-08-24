/*

1. this in JavaScript
Interview-Friendly Definition

"this in JavaScript refers to the object that is executing the current function. Its value is determined by how a function is called, not where it is defined."

Detailed Explanation

Global Context

In browsers, this in the global scope refers to the window object.

In strict mode, it becomes undefined.

Inside a Function

this depends on the call site.

Inside an Object Method

this refers to the object before the dot.

With new Keyword

this refers to the newly created object.

In Event Handlers

this refers to the element that fired the event.

Arrow Functions

Do not have their own this; they lexically inherit this from the enclosing scope.

Examples

Global Context

console.log(this); // window (in browser)


Object Method

const person = {
    name: "Sameer",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};
person.greet(); // "Hello, I am Sameer"


Function Call

function sayName() {
    console.log(this.name);
}
sayName(); // undefined in strict mode, window.name otherwise


Constructor

function Car(brand) {
    this.brand = brand;
}
const myCar = new Car("Tesla");
console.log(myCar.brand); // Tesla


Event Handler

document.querySelector("button").addEventListener("click", function() {
    console.log(this); // button element
});

Common Pitfalls

Losing this in callbacks.

Expecting arrow functions to have their own this.

Possible Follow-Ups

How to fix this binding issues? (Answer: bind, call, apply, arrow functions)

Difference between this in strict mode and non-strict mode.---->

this in Strict Mode vs Non-Strict Mode
Interview Definition

"In JavaScript, the value of this depends on how a function is called. In non-strict mode, if this is not explicitly set, it defaults to the global object (window in browsers). In strict mode, this remains undefined instead of defaulting to the global object."

1. Non-Strict Mode (Default Behavior)
function showThis() {
  console.log(this);
}
showThis(); 
// In browser → Window object
// In Node.js → global object


👉 Explanation:
When a standalone function is called, JavaScript automatically binds this to the global object if no other binding is provided.

2. Strict Mode Behavior
"use strict";

function showThis() {
  console.log(this);
}
showThis(); 
// Output: undefined


👉 Explanation:
In strict mode, JavaScript avoids accidental global pollution.
If a function is called without a context, this is undefined.

*/

const user={
    username: "sameer",
    amount: 999,
    greeting: function(){
        console.log(`hello , ${this.username}`);    
    }
}

// user.greeting() // hello sameer
user.username = "pathak"
// user.greeting() // hello pathak



/*

2. Arrow Functions
Interview-Friendly Definition

"Arrow functions are a shorter syntax for writing functions in JavaScript that do not have their own this, arguments, super, or new.target. They inherit this from the enclosing lexical scope."

Detailed Explanation

Introduced in ES6.

Syntax: (parameters) => expression
If there’s only one parameter, parentheses are optional.

Implicit Return:

Single-expression arrow functions return the value automatically without return keyword.

this Behavior:

Inherits this from the outer scope → great for callbacks.

Cannot:

Be used as constructors (no new).

Have their own this or arguments.

Examples

Basic Arrow Function

const add = (a, b) => a + b;
console.log(add(3, 5)); // 8


Lexical this

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}
new Timer(); // Works because arrow inherits `this`


No Own arguments

const arrowArgs = () => console.log(arguments); // ❌ ReferenceError
function normalFunc() { console.log(arguments); } // ✅ Works

Real-World Use Case

Arrow function in event listener callback when you want to preserve the outer this.

Short one-liners for array methods:

const nums = [1, 2, 3];
const squared = nums.map(n => n * n);

Common Pitfalls

Using arrow functions as methods inside objects — this won’t refer to the object.

Forgetting parentheses in implicit returns when returning an object:

const getUser = () => ({ name: "Sameer" });

Possible Follow-Ups

When would you not use an arrow function?

How does this in arrow functions differ from regular functions?

Why can’t arrow functions be used as constructors?

1. When would you NOT use an arrow function?

👉 Arrow functions are great, but they’re not always the right choice.

You should avoid arrow functions in these cases:

When you need your own this binding
Example: Methods inside objects.

const obj = {
  name: "Sameer",
  greet: () => {
    console.log(`Hi, I am ${this.name}`);
  }
};
obj.greet(); // ❌ "Hi, I am undefined"


Because arrow functions inherit this from their surrounding scope.

When you need the arguments object
Arrow functions don’t have their own arguments.

function normalFunc(a, b) {
  console.log(arguments); // ✅ works
}
const arrowFunc = (a, b) => {
  console.log(arguments); // ❌ ReferenceError
};


When you need to be a constructor
Arrow functions cannot be used with new.

When readability matters for complex logic
For very long or multi-line functions, traditional function syntax is clearer.

2. How does this in arrow functions differ from regular functions?

Regular functions

this is dynamic → depends on how the function is called.

Example:

function showThis() {
  console.log(this);
}
showThis();           // global object (window in browsers)
obj = { showThis };
obj.showThis();       // obj


Arrow functions

this is lexical → it takes this from the surrounding scope at the time of definition.

Example:

const obj = {
  name: "Sameer",
  greet: function() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
obj.greet(); // ✅ "Sameer" (arrow inherits obj’s this)


✅ Key line to say in interview:
"In arrow functions, this is not bound to the function call but to the lexical scope where the function was defined."

3. Why can’t arrow functions be used as constructors?

Constructors need to create new objects and bind this to that object.

Arrow functions don’t have their own this or prototype property, so they can’t be called with new.

Example:

const Person = (name) => {
  this.name = name;
};
const p = new Person("Sameer"); // ❌ TypeError: Person is not a constructor


With normal function:

function Person(name) {
  this.name = name;
}
const p = new Person("Sameer"); // ✅ works

Quick Recap (Interview-Style 30 sec Answer)

Don’t use arrow functions when you need: your own this, arguments, or constructor functions.

this in arrow functions is lexical (from surrounding scope), while in regular functions it’s dynamic (depends on caller).

Arrow functions can’t be constructors because they lack their own this and prototype.

*/