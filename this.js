/*

this in JavaScript
1. Definition (Interview-Ready)

👉 “The value of this in JavaScript depends on how a function is called, not how it is defined. It refers to the object that is executing the current function.”

2. Default Binding

In the global scope:

console.log(this); // In browser → window object, In Node → {}


Non-strict mode → this = window (or global object).

Strict mode ('use strict') → this = undefined.

3. Inside an Object (Implicit Binding)
const person = {
  name: "Sameer",
  greet: function () {
    console.log("Hi, I’m " + this.name);
  }
};
person.greet(); // "Hi, I’m Sameer"


👉 Here, this refers to the object (person) because the function is called using the object.

4. Function Alone (Default Binding again)
function sayHi() {
  console.log(this);
}
sayHi(); 


In browsers (non-strict) → window.

In strict mode → undefined.

5. Constructor Function (with new)
function User(name) {
  this.name = name;
}
const u1 = new User("Sameer");
console.log(u1.name); // "Sameer"


👉 With new, this refers to the newly created object.

6. Explicit Binding (call, apply, bind)
function greet(age) {
  console.log(`Hi, I’m ${this.name}, age ${age}`);
}

const user = { name: "Sameer" };

greet.call(user, 22);   // Hi, I’m Sameer, age 22
greet.apply(user, [22]); // Same as call but takes array
const bound = greet.bind(user, 22);
bound(); // Hi, I’m Sameer, age 22


👉 Here, we control this explicitly.

7. Arrow Functions (Lexical this)
const obj = {
  name: "Sameer",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.normal(); // "Sameer"
obj.arrow();  // undefined (or window.name)


👉 Arrow functions do not have their own this. They capture this from their surrounding (lexical) scope.

8. In Event Listeners
document.querySelector("#btn").addEventListener("click", function() {
  console.log(this); // refers to button element
});

document.querySelector("#btn").addEventListener("click", () => {
  console.log(this); // refers to window (lexical scope)
});

9. Follow-Up Questions (with short answers)

Q1. Difference between this in strict vs non-strict mode?
👉 Non-strict → global object. Strict → undefined.

Q2. Why not use arrow functions as methods in objects?
👉 Because arrow functions don’t have their own this, so they won’t refer to the object.

Q3. Why can’t arrow functions be constructors?
👉 They lack their own this and don’t have a prototype property.

Q4. How does this behave in class methods?
👉 Works like object methods. But if passed as a callback, you may need .bind(this).

Q5. How to make sure this always refers to the right object?
👉 Use arrow functions carefully, or bind methods (.bind, .call, .apply).

10. Interview Summary

"In JavaScript, this depends on the call site. In global scope, it refers to the global object (or undefined in strict mode). In objects, it refers to the calling object. In constructors, it points to the new instance. We can explicitly bind it using call, apply, and bind. Arrow functions don’t have their own this but inherit it from their lexical scope, which is why they cannot be used as constructors."

*/