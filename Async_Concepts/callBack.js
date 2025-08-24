// callBack() --- > A call back is the function which is passed as an argument in the another function

function sum(a , b){
    // console.log(a + b);;
}

function calculator(a , b , sumCallBack){
    // sumCallBack(a , b)
}
// calculator(1 , 2 , sum) // --> we only pass reference of the function

// callBack Hell  ---->  nested callbacks stscked below one another forming a pyramid structure (pyramid of doom) 



// suppose we need to to this 

// data 1 
// 2sec gap
// data 2
// 2 sec gap
// data 3

// we will  use callback()

function getData(dataId , nextData){
    // 2 sec
    setTimeout(()=>{
        console.log("data" , dataId);
        if(nextData){
            nextData(); 
        }    
    }, 2000)
}

// callback hell
getData(1 , ()=>{
    getData(2 , ()=>{
        getData(3)
    });
})



/*

Callback and Callback Hell in JavaScript
1. What is a Callback?

👉 A callback is simply a function passed as an argument to another function, which is then executed later.

✅ Interview one-liner:
"A callback is a function passed to another function to be executed after a task is completed, often used in asynchronous operations like reading files, making API requests, or timers."

Example
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sameer", sayBye);
// Output:
// Hello, Sameer
// Goodbye!


👉 Here sayBye is the callback, executed after greeting.

2. Callback in Asynchronous Operations
setTimeout(function () {
  console.log("Task done after 2 seconds");
}, 2000);


✅ The anonymous function is a callback executed later by the event loop.

3. What is Callback Hell?

👉 Callback Hell happens when callbacks are nested inside other callbacks, leading to deeply indented, unreadable, and hard-to-maintain code.

Example (classic "pyramid of doom"):
getUser(1, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        console.log("Likes:", likes);
      });
    });
  });
});


😵 Looks messy, hard to debug, and difficult to handle errors.

4. Problems with Callback Hell

Readability: Code becomes deeply nested (pyramid structure).

Maintainability: Hard to add/modify logic.

Error Handling: Must check errors at each level.

Scalability: Not suitable for complex async workflows.

5. How Callback Hell is Solved?

👉 Callback hell is avoided using Promises and async/await.

Using Promises
getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => getLikes(comments[0].id))
  .then(likes => console.log("Likes:", likes))
  .catch(err => console.error(err));

Using Async/Await
async function showLikes() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const likes = await getLikes(comments[0].id);
    console.log("Likes:", likes);
  } catch (err) {
    console.error(err);
  }
}


✅ Much cleaner and synchronous-looking.

6. Follow-up Interview Questions

Q1: What is the main drawback of callbacks?
👉 Callback hell, poor error handling, inversion of control (caller depends too much on callee).

Q2: Difference between synchronous and asynchronous callbacks?
👉 Sync callbacks run immediately (like in Array.map()), async callbacks run later (like setTimeout, API calls).

Q3: How did Promises improve over callbacks?
👉 Flat structure, better error handling with .catch, chaining, and integration with async/await.

Q4: Can callbacks still be useful today?
👉 Yes — in event listeners, forEach/map methods, or when you want lightweight async without Promises.

✅ Interview-ready summary:
"A callback is a function passed into another function to be executed later. But when multiple async operations are nested, it leads to callback hell — code that is hard to read and maintain. This is why Promises and async/await were introduced, providing cleaner chaining and error handling."

*/


