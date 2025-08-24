"use strict"; // ---> we wite this in the begining of the program to tell the compiler that this code is the newer version of js

// alert ("hello"); // ---> use are using nodejs, not the browser

// data Types

let name = "sameer" // ---> string dataType

let age = 21 // ----> int dataType

let isLoggedIn = true // ---> boolean dataType

// number 
// bigint
// string ---> prefer using ""
// boolean
// null --> it is a dataType and a stand alone value as well
// undefined -->  variable is declared but the value is not assigned
// symbol ---> used to find uniqueness mostly used in uniquely identifying the components in  React

// object

// typeof() ----> used to know the dataType of a variable

// console.log(typeof null); // ----> object
// console.log(typeof undefined); // ---> undefined



// primitive --->  7 types : String , Number , Boolean , null , undefined , BigInt , Symbol 

const id = Symbol("123")
const anotherID = Symbol("123")
console.log(id === anotherID); // false

// both id and anotherID is different this  is  how symbol works

// Non premitive ( reference type) : Array ,  Objects , Functions





// *********************** memory *********************

// 2  types -- > 1. stack memory   2. heap memory

// primitive dataTypes uses stack memory --- > we get the copy of variable
//non primitve dataTypes  uses heap  memory -- > we get the reference of memory
