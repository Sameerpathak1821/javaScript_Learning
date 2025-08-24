let a = 10
const b = 20
var c = 30

//{} --- > yes this is called as scope

/*

1. Interview-Friendly Definition

"In JavaScript, scope defines the accessibility or visibility of variables. It determines where a variable can be accessed or modified in the code."

2. Detailed Explanation (How You’d Speak in an Interview)

JavaScript has three main types of scope:

Global Scope – Variables declared outside of any function or block are accessible anywhere in the program.

Function Scope – Variables declared inside a function are accessible only within that function (and its inner functions).

Block Scope – Introduced with let and const in ES6, variables declared inside {} (like in if, for, or while) are only accessible inside that block.

Key points:

var is function-scoped, not block-scoped.

let and const are block-scoped.

Scope helps avoid naming conflicts and improves code security.

Inner scopes can access variables from outer scopes (lexical scoping).

3. Examples
Global Scope
var globalVar = "I am global";

function printGlobal() {
    console.log(globalVar); // ✅ Accessible
}

printGlobal();
console.log(globalVar); // ✅ Accessible

Function Scope
function myFunction() {
    var functionVar = "Inside function";
    console.log(functionVar); // ✅ Accessible here
}
myFunction();
// console.log(functionVar); ❌ ReferenceError

Block Scope
if (true) {
    let blockVar = "Inside block";
    console.log(blockVar); // ✅ Accessible here
}
// console.log(blockVar); ❌ ReferenceError

var vs let in Loops
for (var i = 0; i < 3; i++) {
    // var leaks out of loop
}
console.log(i); // ✅ Accessible (because var is function scoped)

for (let j = 0; j < 3; j++) {
    // let is block scoped
}
// console.log(j); ❌ ReferenceError

Lexical Scope
function outer() {
    let outerVar = "Outer scope";
    function inner() {
        console.log(outerVar); // ✅ Can access outer variables
    }
    inner();
}
outer();

4. Real-World Use Case

In frontend apps, scope prevents variables in different components from interfering with each other.

In Node.js, using function or block scope ensures temporary variables don’t leak into the global object, preventing memory leaks.

*/