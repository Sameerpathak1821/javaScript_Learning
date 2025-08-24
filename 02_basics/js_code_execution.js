/*

How JavaScript Executes Code
Interview-Friendly Definition

"JavaScript executes code using a single-threaded, synchronous execution model, but it can handle asynchronous tasks using the event loop, callback queue, and microtask queue. The execution is managed in two phases — the creation phase and the execution phase — inside the JavaScript engine."

Detailed Explanation
1. JavaScript Engine

Examples: V8 (Chrome, Node.js), SpiderMonkey (Firefox).

Components:

Heap → memory allocation.

Call Stack → tracks function execution.

Web APIs (in browsers) → handle timers, DOM, fetch calls.

2. Execution Context

When JS code runs, it creates Execution Contexts:

Global Execution Context (GEC)

Created once when the program starts.

Creates this binding (window in browser, global in Node).

Stores global variables and functions.

Function Execution Context (FEC)

Created for each function call.

Has its own arguments, variables, and scope chain.

3. Phases of Execution

a) Creation Phase

Memory is allocated for variables and functions.

Variables declared with var are set to undefined.

let/const are hoisted but kept in the Temporal Dead Zone until initialized.

Functions are fully hoisted with their body.

b) Execution Phase

Code runs line by line.

Variables are assigned actual values.

Function calls push new contexts to the call stack.

4. Asynchronous Handling

JavaScript is single-threaded, so it can’t run two pieces of JS code at once.

Async tasks are offloaded to Web APIs (browser or Node environment).

When they complete, callbacks go to:

Callback Queue (macrotasks: setTimeout, DOM events)

Microtask Queue (promises, process.nextTick)

Event Loop checks the call stack; if empty, it pushes queued tasks in order.

Example: Execution Flow
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


Output:

Start
End
Promise
Timeout


Reason:

Synchronous logs → Start, End

Promise (microtask) → runs before macrotasks

Timeout (macrotask) → runs last

Real-World Use Case

Understanding execution order is crucial for writing non-blocking, responsive UIs and handling async APIs without bugs.

Follow-Up Q&A

Q1: Why is JavaScript called single-threaded?
A: It has only one call stack, executing one piece of JS at a time.

Q2: Difference between call stack and heap?
A: Call stack manages execution order; heap stores objects in memory.

Q3: What is the Temporal Dead Zone?
A: The phase between variable hoisting and initialization for let/const where access causes a ReferenceError.

Q4: Why does a promise resolve before a setTimeout(…, 0)?
A: Promises go to the microtask queue, which has higher priority than the macrotask queue.

Q5: Does Node.js also use an event loop?
A: Yes, powered by libuv, but with additional phases for I/O operations.

*/