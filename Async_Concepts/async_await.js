/*

Async/Await in JavaScript
1. Definition (Interview Answer)

👉 “async/await is syntactic sugar built on top of Promises. It makes asynchronous code look and behave like synchronous code, improving readability and maintainability.”

2. How It Works

async keyword → declares a function that always returns a Promise.

await keyword → pauses execution until the Promise resolves or rejects.

3. Example
// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("✅ Data received"), 2000);
  });
}

// Using async/await
async function getData() {
  console.log("Fetching...");
  const result = await fetchData(); // waits here until resolved
  console.log(result);
  console.log("Done!");
}

getData();

Output
Fetching...
✅ Data received
Done!


✅ Looks synchronous, but it’s non-blocking — other code can run in the meantime.

4. Error Handling

With callbacks and Promises, error handling is tricky (.catch).
With async/await, we use try/catch.

async function getData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

5. Parallel Execution

await runs Promises sequentially unless you use Promise.all.

async function fetchBoth() {
  const [user, posts] = await Promise.all([
    fetch("/user/1"),
    fetch("/posts/1")
  ]);
}


✅ Runs in parallel → much faster than waiting one by one.

6. Key Interview Follow-Ups

Q1. Difference between Promises and async/await?
👉 Both handle async, but:

Promises → chaining (.then, .catch).

async/await → sequential, cleaner, error handling via try/catch.

Q2. Is async/await blocking?
👉 No. It pauses only the current async function, not the whole program. Other tasks continue in event loop.

Q3. Can we use await outside async functions?
👉 No, await only works inside async functions. (Top-level await is allowed in ES2022+ modules).

Q4. How does async/await work internally?
👉 It wraps code into a Promise chain under the hood.

Q5. Can you combine async/await with Promise.all?
👉 Yes, best practice for parallel async calls.

7. Summary (Interview-Ready)

"Async/await is a cleaner way to write asynchronous code built on top of Promises. It makes async code look synchronous, improves error handling with try/catch, and can be combined with Promise.all for parallel execution. It doesn’t block the main thread — only pauses inside the async function until a promise resolves."

*/