// // function isPrime(num) {
// //   if (num <= 1) return false;
// //   for (let i = 2; i <= Math.sqrt(num); i++) {
// //     if (num % i === 0) return false;
// //   }
// //   return true;
// // }

// // console.log(isPrime(9)); 


// let input = require("readline-sync");
// let num = input.question("Enter:");
// if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// // console.log(isPrime);

// let input = require("readline-sync");
// let num = input.question("Enter:");

// let input = require("readline-sync");
// let num = parseInt(input.question("Enter is prime: "));
//  function isPrime(num) {
//   if (num <= 1) return false; 

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false; 
//   }

//   return true;
// }
// if (isPrime(num)) {
//   console.log(`${num} is a prime number.`);
// } else {
//   console.log(`${num} is not a prime number.`);
// }

// let input = require("readline-sync");
// let N = input.question("Enter:");
// let Name = input.question("Enter:");

// for(i = 0; i < N; i++){
//   console.log(Name);
// }
//SUM OF ODD AND EVEN NUMBER.

// let input = require("readline-sync");
// let n = input.question("Enter n:");
// let i = 0;
// let osum = 0;
// let esum = 0;

// for(let i = 1; i < n; i++){
//   if(i%2==0){
//     esum += i;
//     }else{
//       osum += i;
//     }  
//  }
// console.log(esum);
// console.log(osum);


// let input = require("readline-sync");
// let N = input.question("Enter:");
// if(N > 0){
//   console.log("positive");
// }else if(N < 0){
//   console.log("negative")
// }else{
//   console.log("zero");
// }

// let input = require("readline-sync");
// let N = input.question("Enter:");

// for(i = 0; i <= N; i++){
//   console.log(i);
// }

// let input = require("readline-sync");
// let N = input.question("Enter:");
// let sum = 0;
// for(i = 0; i <= N; i++){
//   sum = sum+i;
// }
// console.log(sum);



// let input = require("readline-sync");
// let N = input.question("Enter:");
// for(i = 1; i <= 10; i++){
//   console.log(i*N);
// }

// let N = 10;
// for(i = 1; i <= 10; i++){
//     if(i % 2 == 0)
//         console.log(i);
// }


// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// function factorial(num){
//     let fcrl = 1;
//     for(let i = 1; i<=num; i++){
//         fcrl *= i
//     }
//     return fcrl;
// }
// const num = 5;
// console.log(factorial(num));
//console.log(`Factorial of ${num} is ${factorial(num)}`);
//console .log("factorial of" +  num  + " is " + factorial(num));

// let age = 20;
// if(age > 18){
//     console.log("you can adult");
// } if(age < 18){
//     console.log("not you adult");
// }


// let age = 18;
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "dark";
// }

// if(mode === "light"){
//     color = "white";
// }
// console.log(color);


// let num = 9; 
// if(num % 2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// } 

 //TARNRY OPARETORS
// let age = 16;
//  let result = age >= 18 ? "adult" : "not adult";
//  console.log(result);

// const readline = require("readline-sync");
// let num = readline.question("enter a number:");

// if (num % 3 ===0){
//     console.log("is a multiple of 3");
// }else{
//     console.log("is a not multiple of 3");
// }


// let score = 10;
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >= 70 && score <= 89){
//     grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade = "c";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if(score >= 0 && score <= 49){
//     grade = "F";
// }
// console.log(grade);


// let input = require("readline-sync");
// let num = input.question("Enter:");

// // if(num % 3 === 0 && num % 5 === 0 && num % 37 === 0){
// //     console.log("NavGurukul Pune Campus");
//  if(num % 3 === 0){
//     console.log("Nav");
// }else if(num % 5 === 0){
//     console.log("Gurukul");
// }else if(num % 37 === 0){
//     console.log("NavGurukul Pune Campus");
// }else{
//     console.log("other campus");
// }






// const readline = require("readline-sync");
// let num = readline.question("enter a number:");

// if (num % 3 ===0){
//     console.log("is a multiple of 3");
// }else{
//     console.log("is a not multiple of 3");
// }






// let input = require("readline-sync");
// let N = input.question("Enter:");
// for(i = 1; i <= 10; i++){
//   console.log(i*N);
// }



// let input = require("readline-sync");
// let N = input.question("Enter:");
// let i = 1;

//  while (i <= 10) {
//   console.log(i * N);
//   i++;
//  }


// let a = [["g", "f", "g"], ['i', 's'], ['b', 'e,', 's', 't']];
// let result = "";
// let i = 0;

// while (i < a.length) {
//   let j = 0;
//   while (j < a[i].length) {
//     result += a[i][j];
//     j++;
//   }
//   i++;
// }

// console.log(result); 


//  let input = require("readline-sync");
//  let N = input.question("Enter:");
// let i = 1;
// while (i <= 50) {
//   if (i % 7 === 0) { 
//     console.log(i); 
//   }
//   i++; 
// }



// let i = 1; 
// while (i <= 6) { 
//   console.log(i); 
//   i++;
// }

// console.log("Hello"); 


// let i = 10; 
// while (i >= 1) { 
//   console.log(i); 
//   i--; 
// }

// let input = require("readline-sync");
// let tab = input.question("Enter:");
// let mul = input.question("Enter:");
// let i = 1;
// while (i <= 10) {
//   let j = 1;
//   while (j <= 10) {
//     console.log(i + " * " + j + " = " + (i * j)); 
//     j++;
//   }
//   console.log(); 
//   i++;
// }



// let input = require("readline-sync");
// let limit = input.question("Enter the limit: "); 

// let i = 1;
// while (i <= limit) { 
//   console.log(i + " squared = " + (i * i)); 
//   i++; 
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//       console.log("Fizz");
//   } else if (i % 5 === 0) {
//       console.log("Buzz");
//   } else {
//       console.log(i);
//   }
// }




// function greet(){
//     let name = "Vishakha Deshmukh";
//     console.log("Hi, " + name + " ji");
// }
// greet();







