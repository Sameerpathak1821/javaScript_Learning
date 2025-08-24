
const mysym = Symbol("key1")

const jsUser = {
    name: "sameer", 
    email: "sameer@google.com",
    loacation: "New Delhi",
    isLoggedIn: true,
    lastLoginDays: ["monday" , "sunday"],
    [mysym]: "key 1"
}

// how to access objects
// method 1: ----- > using .
// console.log(jsUser.name);

// method 2: -----> using [""]
// console.log(jsUser["name"]);

// console.log(jsUser[mysym]);

// console.log(jsUser);


// singeloton method of object

// const tinderUser = new Object()

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = " sameer"
tinderUser.age = 12
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // --> gives keys in array form
// console.log(Object.values(tinderUser));//--> gives values in array form
// console.log(Object.entries(tinderUser)); //---> gives each key value pair in seperate array form


// nesting in objects

const newApp = {
    email: "sameer@google.com",
    fullname: {
        fullUserName: {
            firstName: "sameer",
            lastName : "pathak"
        }
    },
    password: 1234
}

// console.log(newApp);
// console.log(newApp.fullname?.fullUserName.firstName); // ? gives extra security

const obj1 = {1:"a" , 2:"b"}
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign({} , obj1, obj2, obj3)
// console.log(obj4); // --->  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// we can also use spread operator here

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5); // ----> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// *******************  Destructuring object **************

const instructor = {
    courseInstructor: " sameer pathak"
}

const{courseInstructor : myInstructor} = instructor 
console.log(myInstructor); //  sameer pathak

