const accountID = 13323; // ----> const is used to lock the value it will not be changed

let accoundEmail = "sameerpathak2021@gmail.com"; // ---> it comes in place of var it fixes the block scope problem in js

var accountPassword = "123456"; // suppose we declare a variable in js with var keyword and if we update its value somewhere in the program its value will get changed everywhere in the program ----> prefer not to use var due to issue in block scope and functional scope

accountCity = "new Delhi"; //---> not a good practice but we can declare variables like this

let accountState; // ----> datatype = undefined

// console.table([accountID , accoundEmail , accountPassword, accountCity]);