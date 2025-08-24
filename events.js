// Events in JavaScript

// "Events in JavaScript are actions or occurrences that happen in the browser (like a user clicking a button, pressing a key, or loading a page). JavaScript can listen to these events and execute code in response, enabling interactivity in web applications."

// Types of Events

// Mouse Events → click, dblclick, mouseover, mouseout, mousemove

// Keyboard Events → keydown, keyup, keypress

// Form Events → submit, focus, blur, change, input

// Window/Document Events → load, resize, scroll, DOMContentLoaded

// Clipboard/Other Events → copy, paste, contextmenu

// Ways to Attach Events
// 1. Inline Event Handler (not recommended 🚫)
// <button onclick="alert('Clicked!')">Click Me</button>

// 2. DOM Property
// const btn = document.querySelector("button");
// btn.onclick = function() {
//   alert("Button clicked!");
// };

// 3. addEventListener() (Best Practice ✅)
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("Clicked via addEventListener!");
// });


// 👉 Advantages:

// Can attach multiple handlers.

// Can remove handlers using removeEventListener.

// Supports event capturing & bubbling phase.

// Event Object

// When an event occurs, an event object is automatically passed to the handler:

// btn.addEventListener("click", function(event) {
//   console.log(event.type);  // "click"
//   console.log(event.target); // <button>
// });

// Event Flow (Bubbling & Capturing)

// Capturing Phase → Event goes from window → document → parent → target.

// Bubbling Phase → Event goes from target → parent → document → window.

// By default, bubbling happens.

// To use capturing:

// parent.addEventListener("click", handler, true); // third param = true

// Event Delegation (Important Interview Concept)

// 👉 Instead of adding events to multiple children, attach one to their parent and use event.target.

// document.querySelector("#list").addEventListener("click", function(e) {
//   if (e.target.tagName === "LI") {
//     console.log("Clicked item:", e.target.innerText);
//   }
// });


// ✅ Improves performance when handling dynamic elements.

// Real-World Use Cases

// click → Handling button clicks, navigation.

// input/change → Form validation, search filters.

// scroll/resize → Infinite scrolling, responsive layouts.

// submit → Preventing default form reload and handling via JS.

// Follow-Up Q&A

// Q1: Difference between onclick and addEventListener?

// onclick → Only one handler at a time.

// addEventListener → Multiple handlers, supports capturing/bubbling.

// Q2: What is event bubbling?

// Event travels upwards from target element to ancestors.

// Q3: How to stop event bubbling?

// event.stopPropagation();


// Q4: How to stop default browser behavior (like form submit reload)?

// event.preventDefault();
