// //create string 

//  let  str = "apna college";
//  let str2 = "shradha";


// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 11];
// let output = [];
// let i = 0;

// while (i < arr.length) {
//   if (Array.isArray(arr[i])) { // Agar element ek array hai
//     output = output.concat(arr[i]); // Nested array ko `concat` karke add karte hain
//   } else {
//     output.push(arr[i]); // Agar normal element hai to direct push karte hain
//   }
//   i++; // Index badhate hain
// }

// console.log(output);


//   //for loop 
 
//  let input = require("readline-sync");
//  let count = input.question("Enter:");
//  for (let count = 1; count <= 5; count++){
//     console.log("apna college");
// }

// //while loop

// let i = 20;
// while (i <= 10){
//     console.log("apna college");
//     i++;
// }

// //do while loop

// let i = 20;
// do {
//     console.log("apna college");
//     i++;
// } while (i <= 10);


// //for-of loop ( iska use hum string or array ke liye krte hai)

// let str = "apna college";
// let size = 0;
// for (let i of str){//iteretor hota hai jo jisme -->characters aa jate hai;
//     console.log(i);
//     size++;
// }
// console.log(size);


// //for in loop
// let student = {
//     name: "vishalkha deshmukh",
//     age: 20,
//     cgpa: 7.5,
//     isPass:true,
// };

// for (let key in student){
//     console.log("key=", key, "value=",student[key]);
// }

// //create string 

//  let  str = "apna college";
//  let str2 = "shradha";


// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 11];
// let output = [];
// let i = 0;

// while (i < arr.length) {
//   if (Array.isArray(arr[i])) {
//     output = output.concat(arr[i]); 
//   } else {
//     output.push(arr[i]); 
//   }
//   i++;
// }

// console.log(output);

//LOOPING OVER AN ARRAY;
//for loop
// let heroes = ["ironman","thor","shaktiman","antman"]
// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[3]);
// }


//for of loop

// for(let hero of heroes){
//     console.log(hero);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// console.log(sum);


//avgrej:-=

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg mark of the class = ${avg}`);


//for a given  with price of item [250,645,300,900,50] all items have an offer of 10% off on them .change the arrayy to store final price after applying offer.

//for of loop

// let items = [250,645,300,900,50];
// let i = 0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

//for loop

// let items = [250,645,300,900,50];
// for (let i = 0; i < items.length; i++){
//     let of  fer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);


//ARRAAY MHETTHOD [push()]

// let foodItems = ["potato","apple","litchi","tomato"];
// foodItems.push("chips","burger");
// console.log(foodItems);

//[pop()]

// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("deleted",deletedItems);

//toString()

// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

//concat();

// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// // let indianHeroes = ["shaktiman","krish"];
 
// let horoes = marvelHeroes.concat(dcHeroes/*, indianHeroes*/);
// console.log(horoes)

//UNSHIFT:

// let marvelHeroes = ["thor","spiderman","ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

//SHIFT();
// let marvelHeroes = ["thor","spiderman","ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted", val);

 //SLICE():
// let marvelHeroes = ["thor","spiderman","ironman","antman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,0));

//SPLICE():

// let arr = [1,2,3,4,5,6,7]
// arr.splice(2, 1,101,102);
// console.log(arr);

//ADD ELEEMANT:
// arr.splice(2,0,10);
// console.log(arr);

//DELETE ELEMANT
// arr.splice(3,1);
// console.log(arr);

//REPLACE ELEM
// arr.splice(3,2,101);
// console.log(arr);

//practise question
// let companies = ["Microsoft","uber","google","ibm","netflix"];
// companies.shift();
// console.log(companies);

// let companies = ["Microsoft","uber","google","ibm","netflix"];
// companies.splice(2,1,"ola");
// console.log(companies);

//FUNCTION IN JS

// function myFunction(msg){  //isme koi bhi variable me kuch cheje dal rhe hai vo parameter-->input.
//     console.log(msg);
// }
// myFunction("my name is vishakha deshmukh")//argument 


// function sumNumbers(a,b){
//     console.log(a+b);
// }
// sumNumbers(34,57);

// function sum(x,y){
//     s = x+y;
//     console.log("before return");  
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

//ARROW FUNCTION

//sum function

// function sum(a, b){
//     return a+b;
// }
// const arrowSum = (a, b) =>{
//     console.log(a + b);
// };
//multiplication function

// function mul(a, b){
//      return a*b;
// }

// const arrowMul = (a, b)=>{
//     return a * b;
// };


//VOWELS KO STRING SE NIKALE;

//   function countVowels(str){
//     for(const char of str){
//         console.log(char);
//     }
//     console.log(str.length);
//   }
//   countVowels("apnacollege");

  //(or)

//   function countVowels(str){
//   let count = 0; 
//   for(const char of str){
//     if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//         count++;
//     }
//   }

//   console.log(count);
  
//   }
//   countVowels("vishakha deshmukh");

// const countvow = (str) =>{
//     let count = 0;
//     for (const char of str.toLowerCase()){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//                     count++;
//                 }
//               }
            
             
//                return count;
//              };
//                const result = countvow("vishakha deshmukh"); 
//                console.log(result);
    
//forEach mathod.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {        //value at each index.
//     console.log(val);
// });



// let arr = [1, 2, 3, 4, 5];    
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// });

// for a given number of numbers ,print the square of each value using the forEach loop.


// let nums  = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// });


// let nums = [67, 52,39];
// nums.map((val) => {
//     console.log(val);
// });
 

// let nums = [67, 52, 39];
// let newArr = nums.map((val) => {
//     return val * val;
// })
// console.log(newArr);
 

//number arrayy 

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;    // ya fir yha pe hum return value >3 bhi kar skte hai.
// });
// console.log(evenArr);

//count number

// let arr = [1, 2, 3, 4, 5];
// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);


//miximum ya largejt

//   let arr = [5, 6, 2, 1, 3];
//   const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
//   });
//   console.log(output);


  //mark 

//   let marks = [97, 64, 32, 49, 99, 96, 86];
//   let toppers = marks.filter((val) => {
//     return val > 90;
//   });
//   console.log(toppers);

//take a number n as input form user.create an array of numbers form 1 to n.

// let n = Number(prompt("Enter: "));
// let arr = [];
// for (let i = 1; i <= n; i++){
//     arr[i-1] = i;  //1(0),2(1),3(2),4(3),
// }

// console.log(arr);
