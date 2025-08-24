/*

synchronus --->  synchronus means the code runs in a particular sequence of instructions given in the program, each instruction waits fro the the previous instruction to complete its execution


Asynchronous ---> due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. 
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow




*/

//1 setTimeOut() --->

console.log("one");
console.log("two");
console.log("three");

setTimeout(() => {
  console.log("hello sameer");
}, 3000);

console.log("five");

//  --> one
// two
// three
// five
// hello sameer --- > after 3 seconds
