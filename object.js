//? OBJECT IN JAVASCRIPT.

//DEFINATION:-
//An object in JavaScript is a data structure used to store related data collections.
//It stores data as key-value pairs, where each key is a unique identifier for the associated value.
//Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.
//There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.

// ?1. Creation Using Object Literal

// const obj = {
//     name : "vishakha",
//     age : 18,
//     class : true

// };
// console.log(obj.name);


//? 2. Creation Using new Object() Constructor.

// let obj = new Object();
// obj.name = "vishakha",
// obj.age = 18,
// obj.clas = 12,
// console.log(obj);



//? 1. Accessing Object Properties

// let obj = {name:"vishakha", age : 18};
// console.log(obj.name);
// console.log(obj["age"]);


//? 2. Modifying Object Properties

// let obj = { name: "Sourav", age: 22 };
// console.log(obj);
// obj.age = 23;
// console.log(obj);


//? 3. Adding Properties to an Object

// let obj = { model: "Tesla" };
// obj.color = "Red";
// console.log(obj);


//? 4. Removing Properties from an Object

// let obj = {model : "Tesla", color : "Red"};
// delete obj.color;
// console.log(obj);


//? 5. Checking if a Property Exists

// let obj = {model : "Tesla"};
// console.log("color" in obj);
// console.log(obj.hasOwnProperty("model"));

//? 6. Iterating Through Object Properties

// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }


//? 7. Merging Objects

// let obj1 = {name : "vishu"};
// let obj2 = {model : 2007};
// let obj3 = {...obj1,...obj2};
// console.log(obj3);


//? 8. Object Length

// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);




                                //? DATA OBJECT

//?  A data object is also just an object, but we use the term "data object" when the object is storing useful or meaningful data — like user information, form inputs, dashboard values, etc.
// exaple:- 
            // const userInformation ={
            //     name : "Vishakha Deshmukh",
            //     age : 18,
            //     isLoggedIn : true
            // }
            // console.log(userInformation.name);
            


// let birthDate = new Date("2007-01-15");
// let today = new Date();
// let age = today.getFullYear() - birthDate.getFullYear();
// console.log("Your age is:", age);

// let now = new Date();

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
