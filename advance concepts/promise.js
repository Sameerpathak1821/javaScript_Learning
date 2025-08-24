/*

Promise in JavaScript
1. What is a Promise?

👉 A Promise in JavaScript is an object that represents the result of an asynchronous operation (that might complete in the future).
It can be in one of three states:

Pending → initial state (operation still running).

Fulfilled → operation completed successfully (.then runs).

Rejected → operation failed (.catch runs).

✅ Interview one-liner:
"A Promise is a placeholder for a value that will be available now, later, or never — it handles async results in a cleaner way than callbacks."

2. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Task completed successfully!");  // success value
    } else {
        reject("Something went wrong!");  // error reason
    }
});

// Consuming the promise
myPromise
  .then(result => console.log(result))   // runs if resolved
  .catch(error => console.error(error))  // runs if rejected
  .finally(() => console.log("Done!"));  // always runs

3. Why Promises? (Use Case)

👉 Before promises, async code used callbacks, which caused callback hell:

getUser(function(user){
  getPosts(user.id, function(posts){
    getComments(posts[0].id, function(comments){
      console.log(comments);
    });
  });
});


😵 Hard to read & maintain.

✅ With Promises:

getUser()
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));

4. Async/Await with Promises

👉 Async/Await is built on top of promises.

async function runTasks() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}


✅ Cleaner, synchronous-looking syntax.

5. Promise Utility Methods

Promise.all([p1, p2, p3]) → runs promises in parallel, waits for all to finish (fails if one fails).

Promise.allSettled([p1, p2, p3]) → waits for all, regardless of success/failure.

Promise.race([p1, p2, p3]) → returns the result of the first promise that settles.

Promise.any([p1, p2, p3]) → returns first fulfilled promise, ignores rejections.

Example:

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1"),
  fetch("https://jsonplaceholder.typicode.com/posts/2")
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log(data))
.catch(err => console.error(err));

6. Follow-up Interview Questions

Q1: Difference between callback and promise?
👉 Callback executes after an async operation but leads to nesting; Promise is cleaner, with .then/.catch and error handling.

Q2: Are promises synchronous or asynchronous?
👉 The executor function runs immediately, but .then/.catch handlers are pushed to the microtask queue, making resolution asynchronous.

Q3: What happens if you don’t handle a rejected promise?
👉 You get an UnhandledPromiseRejectionWarning (in Node.js) or console error in browser.

Q4: How are promises related to the Event Loop?
👉 Promise .then callbacks go into the microtask queue, which runs before the macrotask queue (e.g., setTimeout).

✅ Interview-ready summary:
"A Promise is an object representing a future value from an async operation. It can be pending, fulfilled, or rejected. We use .then, .catch, and .finally to handle results. Promises solve callback hell, and modern async/await makes working with them even cleaner. They are part of the microtask queue in the event loop."

*/