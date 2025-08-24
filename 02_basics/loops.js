// for loop

for (let i = 1; i <= 10; i++) {
//    console.log(i);   
}

// break and continue


// braek --> 
/*

Stops loop execution completely.

Can be used in:

for

while

do...while

switch

Control immediately jumps to the statement after the loop/switch.
*/

for(let i = 1; i<= 20; i++){
    if(i == 7){
        // console.log("7 -> thala for a reason");
        break; 
    }
    // console.log(i);
    
}


// continue -->

/*
Skips the rest of the current loop iteration.

Moves to the next iteration.

Useful when you want to ignore certain cases without stopping the loop.
*/

for (let i = 0; i <= 10; i++) {
    if(i == 7){
        continue; // 7 print nhi hoga baki loop exit nhi hoga
    }
    // console.log(i);

}


// while loop


// "A while loop repeatedly executes a block of code as long as a given condition remains true.

let i = 1;
while (i <= 3) {
    // console.log(i);
    i++;
}
// Output: 1, 2, 3

let myarr = ["flash" , "ironman" , "superman"]
let index = 0;
while(index < myarr.length){
    // console.log(myarr[index]);
    index++; 
}

// do while loop

// A do...while loop also executes repeatedly, but it runs the code at least once before checking the condition."

let j = 5;
do {
    // console.log(j);
    j++;
} while (j <= 3);
// Output: 5 (runs once even though condition is false)

// Real-World Use Cases

// while: Keep asking the user for input until they enter valid data.

// do...while: Show a menu at least once before deciding to repeat.





// LOOP on Arrays -- > higher order Array loop

// "The for...of loop iterates over the values of an iterable object, such as arrays, strings, maps, sets, or any object implementing the iterable protocol."

const numbers = [10, 20, 30];
for (const num of numbers) {
    //  console.log(num);
}


const greeting = "hello world !"
for (const greet of greeting) {
    if(greet == " ") continue
    // console.log(greet);
    
}


// for of loop on map

const map = new Map()
map.set('IN' , "India")
map.set("USA" , "United states of america")
map.set("Fr" , "France")

for (const [key , value] of map) {
    // console.log(key , ':-' , value);
    
}

// for of loop on object --- > the above method in object iteration will not work

// const myObj = {
//     1: "india",
//     2: "USA",
//     3: "France"
// }

// for (const [key , value] of myObj) {
//     // console.log(key , ":-" , value);  //-- > it will give myObj  is not iteratable 
// }


// how to iterate object --- > we use for in loop

const  lan = {
    1: "c++",
    2: "javaScript",
    3: "swift by apple"
}

for (const key in lan) {
//    console.log(key); // 1   2   3
    // console.log(key , lan[key]);   
}
        // 1 c++
        // 2 javaScript
        // 3 swift by apple


// for in loop for array

const language = ["c++" , "js" , "python"]
for (const key in language) {
    // console.log(language[key]);
}

// for in loop will not work for map because map is not iteratable like an array or object


// for each  loop(mostly used)

const coding = ["c++" , "python" , "javaScript" , "java"]

// coding.forEach( function(item){
//   console.log(item);
// })


// we can also write arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })

// iterate on objects in array --> most common

const myCoding = [
  {
    langauge: "javaScript",
    languageFileName: "js",
  },
  {
    langauge: "python",
    languageFileName: "py",
  },
  {
    langauge: "c++",
    languageFileName: "cpp",
  }
];

myCoding.forEach( (item) => {
    console.log(item.langauge , ":-" ,  item.languageFileName);
})

// one drawback of for each loop is --> it does not return any value