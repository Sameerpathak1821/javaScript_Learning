// to Number
let score = "33";
let scoreInNumber = Number(score); //  --> Number
// console.log(scoreInNumber); // ---> 33 in numbers

score = "33abc"
let scoreInNumbers = Number(score);
console.log(typeof(scoreInNumbers));

// console.log(scoreInNumbers); // ---> its data type after conversion is Number

// null converted to Number gives 0
// undefined converted to Number NaN
// true converted to Number gives 1
// false converted to NUmber gives 0


// to boolean

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // ---> true

// "" ---> converted to boolean gives false
// "sameer" --> converted to booolean gives true
// 0 --> false;   1---> true


// to string

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber); //--->> 33 but dataType is string 


 
//              *************Operations*************       

let value = 3;
let negativeValue = -value; //---> -3

// console.log(2 + 2); // addition
// console.log(2 - 2); // subtraction
// console.log(2 * 2); // multiplication
// console.log(2 ** 2);// 2^3 --> power
// console.log(2 / 2); // division
// console.log(2 % 2); // remainder

let str1 = "hello"
let str2 = " sameer"
let str3 = str1 + str2;
// console.log(str3); // ---> hello sameer, this is called as string concatination


// console.log("1" + 2); // ---> 12

// console.log(1 + "2"); // -- > 12 

// console.log("1" +  2 + 2); // -- > 122

// console.log(1 + 2 + "2"); // ---> 32

// **********  prefix and postfix operators

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"





