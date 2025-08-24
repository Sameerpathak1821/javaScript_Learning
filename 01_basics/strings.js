let name  = "sameer pathak"
//or
const gameName = new String("sameerpathak1821") // new keyword is used   here  gameName is an object

console.log(gameName[0]); // --->s
console.log(gameName.length); // 16
console.log(gameName.toUpperCase); // ---> SAMEERPATHAK1821
console.log(gameName.charAt(4)); // ---> e
console.log(gameName.indexOf("m"));

console.log(gameName.substring(0 , 4)) // --->same --- > [0 , 3] -> last index is not included

// slice() and splice()

// In JavaScript, slice() and splice() are distinct methods used with arrays, and their primary difference lies in whether they modify the original array.


// Array.prototype.slice()
// Purpose: Extracts a shallow copy of a portion of an array into a new array object.
// Modification: Does not modify the original array.
// Syntax: array.slice(startIndex, endIndex)
// startIndex: (Optional) The zero-based index at which to begin extraction. If omitted, defaults to 0. Negative values count from the end of the array.
// endIndex: (Optional) The zero-based index before which to end extraction. The element at endIndex is not included. If omitted, extracts to the end of the array. Negative values count from the end of the array.
// Return Value: A new array containing the extracted elements. 


//Array.prototype.splice()
// Purpose:
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Modification:
// Modifies the original array.
// Syntax:
// array.splice(startIndex, deleteCount, item1, ..., itemN)
// startIndex: The zero-based index at which to start changing the array. Negative values count from the end of the array.
// deleteCount: (Optional) An integer indicating the number of elements to remove from startIndex. If 0, no elements are removed. If omitted or greater than the number of elements remaining, all elements from startIndex to the end of the array are removed.


console.log(gameName.trim()); // ---> it trime down the extra spaces in the string

const url =
  "https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEAAYgwEYkQIYsQMYgAQYigUyDggCEEUYJxg7GIAEGIoFMgwIAxAjGCcYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhBFGEEyBggHEEUYQdIBCDEzMzJqMGo3qAIIsAIB8QWFvrwISqtflfEFhb68CEqrX5U&sourceid=chrome&ie=UTF-8";

  console.log(url.replace("?" , "-")); // ---> replaces  ? with -

  console.log(url.includes("-")); // true
  

  








let repoCount = 100


// string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
