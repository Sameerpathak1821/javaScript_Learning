// making of function
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("e");
    console.log("r");  
}

// calling a function
// sayMyName()

function addTwoNumbers(number1 , number2){ // number1 and number2 are parameters
    console.log(number1 + number2);
}

// addTwoNumbers(2 , 3) // ---> 5,  here 2 and 3 are arguments


function addNumbers(num1 , num2){
    let result = num1 + num2
    return result
}

const result = addNumbers(4 , 6)
// console.log("result :", result); // --> 10

function userLogin(username){
    return `${username} just  logged in`
}

// console.log(userLogin("sameer")); // what if we dont pass any argument while calling a
// function --> it will give undefined just loggen in

// to check we can implement etra safety using if statement in the function

function sayFullName(fullname){
    if(fullname === undefined){
        console.log("no full name  is entered");
        return
    }
    return `${fullname} is called`
}
// sayFullName() // no full name is called
// sayFullName("sameer") // sameer is called

// how to give default values

function sum(num1 = 2 , num2 = 3){
    return num1 + num2
}

// console.log(sum()); // ---> 5 because of the default value

// rest operator --- > how to pass multiple arguments when we have given only 1 parameter

function calculateCartPrice(...price){
    return price
}
// console.log(calculateCartPrice(200, 300, 400));  //---> this will give me an array with [200 , 300 , 400] as its element 



// pass object in function

const user = {
    username : "sameer",
    price : 500
}

function handleObject(anyObject){
    // console.log(`${anyObject.username} has price ${anyObject.price}`);
}

handleObject(user) // --> while calling the function we need to pass the actual object



//  Q--> make an array and make a function to print its second position element

const myArr = [200 , 300 , 400 , 500]
function resturnSecondElement(anyArray){
    console.log(anyArray[1]);
}
resturnSecondElement(myArr)