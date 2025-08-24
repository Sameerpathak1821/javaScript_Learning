// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970

let myDate = new Date();
// console.log(myDate);   //---> 2025-08-13T08:45:26.269Z  

// console.log(myDate.toString()); //--->  Wed Aug 13 2025 14:16:25 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // --->Wed Aug 13 2025
// console.log(myDate.toLocaleDateString()); // ---> 13/8/2025
// console.log(myDate.toLocaleString()); // ---> 13/8/2025, 2:18:46 pm
// console.log(myDate.toLocaleTimeString()); // ---> 2:19:27 pm

const timeStamp = Date.now();  //----> it gives the current time stamp in milliseconds
// console.log(timeStamp)

const newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // +1 because in JS month  starts from 0









