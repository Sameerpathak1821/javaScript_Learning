// Arrays

const arr = [1 , "sameer" , true] // --->  yess we can take different type of element in  a single array in javaScript

// when we copy array --> shallow copy is made --> which follows the same reference point -- > pass by reference

// --- > deep copy ---> do not have the same reference point -- > pass by value

const myArr = new Array(1,2,3,4,5,6,7,8,9,10); // -> we can also declare array this way

// console.log(myArr.push(5));
myArr.pop();
myArr.unshift(8); // --> 8 will be added to front --> this is not a good operation complexity  wise

myArr.shift() // ---> remove first element of an array

// console.log(myArr.join()); // -->1,2,3 --> converts array elements to a string

// console.log("A" , myArr);
const myArrayB = myArr.slice(1, 3); // --> it will print all element from index 1  to 3(3 not included)
// console.log("B" , myArrayB); // --> slice does not change the original array

const myArrayC = myArr.splice(1 , 3) // --> it will print all the element expect the element from index 1 to 3(3 is included)
// splice alter the original array


// concatinating two  arrays

const marvel = ["thor" , "ironman" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]

const allHero = marvel.concat(dc)  // -->  concat merge two array and return a new array

// console.log(allHero) // --> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//  we can aslo use spread operator

const allHeroCombined = [...marvel , ...dc]  // --> spread operator is used to concat multiple arrays

// console.log(allHeroCombined); // --> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const realArray = [1,2,3,[4,5,6] ,7,[8, [9]]]
// flat is used to deal with such situation flat  returns a new array with all element in a single array it solves the depth related problem of array

const realAnotherArray = realArray.flat(Infinity)
console.log(realAnotherArray); // -- >   [1, 2, 3, 4, 5,6, 7, 8, 9]












