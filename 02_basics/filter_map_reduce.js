// filter


const myArr = [1,2,3,4,5,6,7,8,9,10]

// const filternum = myArr.filter( (number) => number > 5 )
// console.log(filternum);  //[ 6, 7, 8, 9, 10 ]

// or we can expicitely return like

const filterNum = myArr.filter((number) => {
  return number > 5
})

// console.log(filterNum);  //  [ 6, 7, 8, 9, 10 ]



// maps

const nums = [1,2,3,4,5]

const addednums = nums.map( (num) => {
    return num + 10
})
// console.log(addednums); // [ 11, 12, 13, 14, 15 ]

// chaining --- > using one method after onoter method 

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const advNum = myNumber
                    .map( (item) => item * 10)
                    .map( (item) => item + 2)  // ---> item in this line will come with the modifications done by the above method

//console.log(advNum); // -->   [12, 22, 32, 42,  52, 62, 72, 82, 92, 102]



// reduce method

const num1 = [1,2,3,4]

const reduce_method = num1.reduce(function(accumulator , currentValue){
        return accumulator + currentValue
} , 0) // here 0 is the initial  value

console.log(reduce_method); // 10


/*

filter, map, and reduce in JavaScript
1. filter()

👉 Used to filter elements of an array based on a condition.
👉 Returns a new array with only elements that satisfy the condition.
👉 Doesn’t modify the original array.

Example:
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]


✅ Use cases:

Filtering active users from a list

Getting only completed tasks

Extracting even/odd numbers

2. map()

👉 Used to transform each element of an array.
👉 Returns a new array with transformed values.
👉 Does not mutate the original array.

Example:
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]


✅ Use cases:

Extracting specific fields from objects

Converting strings to uppercase

Applying transformations (e.g., squaring numbers, formatting data)

3. reduce()

👉 Used to accumulate values into a single result (number, object, array, etc.).
👉 Executes a reducer function for each array element.

Syntax:
arr.reduce((accumulator, currentValue) => {
  // logic
}, initialValue);

Example (Sum of numbers):
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

Example (Find max):
const numbers = [5, 10, 2, 8];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // 10


✅ Use cases:

Summing or multiplying values

Flattening arrays

Grouping data into objects

Comparison Table
Method	Input → Output	Mutates Original?	Typical Use
filter	Array → subset array	❌	Filter by condition
map	Array → transformed array	❌	Transform elements
reduce	Array → single value	❌	Accumulate (sum, max, object building)
Chained Example
const users = [
  { name: "Sameer", age: 21 },
  { name: "Aman", age: 17 },
  { name: "Priya", age: 25 }
];

// Get names of users 18+ in uppercase
const result = users
  .filter(user => user.age >= 18)   // keep adults
  .map(user => user.name.toUpperCase()) // transform names
  .reduce((acc, name) => acc + ", " + name); // join into string

console.log(result); // "SAMEER, PRIYA"

Follow-Up Q&A

Q1: Which is faster: for loop vs map/filter/reduce?
👉 Traditional for loop is slightly faster (less abstraction), but map/filter/reduce is more readable and declarative.

Q2: Can reduce replace map and filter?
👉 Yes. reduce is more powerful and can simulate both, but using map or filter improves readability.

Q3: Do these methods mutate the original array?
👉 No. All return new arrays (except reduce, which returns a single accumulated value).

*/
