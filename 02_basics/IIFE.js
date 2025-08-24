/*

Immediately Invoked Function Expression (IIFE)
Interview-Friendly Definition

"An IIFE is a JavaScript function that is executed immediately after it is defined. It’s used to create a private scope and avoid polluting the global namespace."

Detailed Explanation

Syntax: Wrap the function in parentheses () to make it an expression, then add another () to invoke it immediately.

Purpose:

Create a new scope to avoid variable clashes.

Protect variables from being accessed or modified outside.

Execute code immediately without reusing it later.

Works with both regular and arrow functions.

Examples

Basic IIFE

(function () {
    console.log("IIFE executed!");
})();


IIFE with Parameters

(function (name) {
    console.log(`Hello, ${name}`);
})("Sameer");


Arrow Function IIFE

(() => {
    console.log("Arrow IIFE executed!");
})();

*/