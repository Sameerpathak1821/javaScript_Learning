const score = 400

// console.log(score); // --> it is of type Number but we can explicitely define it as number

const balance = new Number(300); // --> it becomes an object with  it we can get extra properties of Number

// console.log(balance);
// console.log(balance.toString().length); // 3

const accountBalance = 1000000
// console.log(accountBalance.toLocaleString("en-IN")); // 10,00,000

//++++++++++++++++++++++ Maths  ++++++++++++++++++++++

// console.log(Math); // --> object

// console.log(Math.abs(-5)); // ---> 5 

// console.log(Math.round(4.67)); // --> 5

// console.log(Math.floor(3.8)); // --> 3
// console.log(Math.ceil(3.8)); // -->  4
// console.log(Math.sqrt(25)); // --> 5

// console.log(Math.min(2,4,1,0,5)); // --- > 0
// console.log(Math.max(2,4,1,5,0)); // ----> 5

// console.log(Math.random()); //-----> this will give any random value between 0 and 1

// console.log(Math.floor(Math.random() * 10) + 1);


// formula to generate any random number between 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);














