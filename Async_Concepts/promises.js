/*

Promises in JavaScript
1. Definition (Interview-Ready)

👉 “A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that we don’t yet have.”

It has 3 states:

Pending → initial state (still running).

Fulfilled → operation succeeded (resolve).

Rejected → operation failed (reject).

2. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("✅ Task completed!");
    } else {
        reject("❌ Something went wrong!");
    }
});

// Consuming  --> promises coming from an API
myPromise
    .then(result => console.log(result))   // success
    .catch(error => console.log(error))    // failure
    .finally(() => console.log("Done!"));  // always runs

3. Why Promises? (Problem they solve)

Before promises → async tasks were handled by callbacks, leading to callback hell.

Promises make async code:

Easier to read (chaining instead of nesting).

Easier to handle errors (single .catch).

Easier to scale.

4. Promise Chaining Example
getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));


✅ Cleaner than deeply nested callbacks.

5. Async/Await (Built on Promises)
async function fetchData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}


✅ Looks synchronous, but is asynchronous under the hood.

6. Promise Utility Methods

Promise.all([p1, p2, p3]) → Waits for all, fails if one fails.

Promise.allSettled([p1, p2, p3]) → Waits for all, gives result for each (success/failure).

Promise.race([p1, p2, p3]) → Returns the first settled (fulfilled or rejected).

Promise.any([p1, p2, p3]) → Returns the first fulfilled promise (ignores rejections).

7. Key Follow-Up Questions (with short answers)

Q1. Are Promises synchronous or asynchronous?
👉 The executor runs immediately (sync), but .then/.catch are async (microtask queue).

Q2. Difference between callback & promise?
👉 Promises flatten callback hell, have better error handling, and can be chained.

Q3. What happens if you call resolve and reject both?
👉 Only the first call matters, subsequent ones are ignored.

Q4. How are Promises scheduled in the Event Loop?
👉 .then and .catch go into the microtask queue, which executes before macrotasks like setTimeout.

Q5. Can a promise be cancelled?
👉 Native promises cannot be cancelled once started. (But we can use AbortController in fetch or external libs).

✅ Interview Summary:
"A Promise is an object that represents a future value of an async operation, with states pending, fulfilled, or rejected. We consume it with .then, .catch, .finally. Promises solve callback hell by allowing chaining, and async/await makes them even cleaner. They are executed via the microtask queue in the event loop."

*/

const getPromise = () =>{
    return new Promise((resolve , reject) =>{
        console.log("I am a Promise");
        resolve("success")
        reject("an error occured")      
    })
}

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fullfulled" , res); 
});

promise.catch((err) => {
    console.log("rejected" , err);
});