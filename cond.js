//13. second max of 3 number.

// let input = require("readline-sync");
// let a =100;
// let b =80;
// let c =30;
// let max;
// let smax;

// if(a>b){
//     max = a;
//     smax = b;
// }else{
//     max = b;
//     smax = a;
// }
// if(max>c){
//     if(smax>c){
//       smax = smax; 
//     }else{
//         smax=c;
//     }
// }else{
//      smax = max;
// }
// console.log(smax);



//17.write a program to take two number form the user and determine the greater of those two given number.

// let num1 = 20;
// let num2 = 30;
// let greater;

// if(num1 > num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }

//18.write a program to  take a number form the user and print that number as odd r even.
// let input = require("readline-sync");
// let number = input.question("Enter:n");

// if(number % 2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }


//19. write aprogran to take number from the user and print the gerater number of the four numbers.

// let input = require ("readline-sync");
// let a = input.question("Enter the number:");
// let b = input.question("Enter the number:");
// let c = input.question("Enter the number:");
// let d = input.question("Enter the number:");
// let max, max1, max2;

// if(a > b){
//     max1 = a;
// }
// else{
//     max1 = b;
// }
// if(c > d){
//     max2 = c; 
// }
// else{
//     max2 = d;
// }
// if(max1 > max2){
//     max = max1;
// }
// else{
//     max = max2;
// }
// console.log(max);

//20.totle elecricty bill.

// let input = require("readline-sync");
// let u = input.question("Enter:");
// let E = 0;

// if(u <= 50){
//     E = u * 0.50;
// }
// else if(u <= 150){
//     E = 50 * 0.50 + (u - 50)+ 0.75;
// }
// else if(u <= 250){
//     E = ( 50 * 0.50) + (100 * 0.75) + (u-150)* 1.20;
// }
// else{
//     E = 25 + 75 +120 +(u - 250) * 1.50;
// }
//    TEB = (E * 20/100) + E;
//    console.log(TEB);

//21.negative,positive,zero;

// let input = require("readline-sync");
// let num = input.question("Enter:");

// let positive ,nagative,zero;
// if(num > 0){
//     console.log("positive");
// }
// else if(num < 0){
//     console.log("nagative");
// }
// else{
//     console.log("zero");
// }

//22.Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

// let input = require("readline-sync");
// let n = input.question("Enter:");
// let SPI;

// if(n%2==0){
//     console.log("SPI");
// }else{
//     2 * n  
// }

//23.tree greater number.(a b c).
// const input = require("readline-sync");
// const num1 = input.question("Enter:");
// const num2 = input.question("Enter:");
// const num3 = input.question("Enter:");

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1);
//     }else{
//         console.log(num3);
//     }
// }
// else{
//     if(num2 > num3){
//         console.log(num2);
//     }else{
//         console.log(num3);
//         }
//     }

//24.leap year .

// let input = require("readline-sync");
// let year = input.question("Enter:");

// if(year % 400 == 0){
//     console.log("leap year");
// }else if(year % 100 == 0){
//     console.log("not leap year");
// }else if(year % 4 == 0){
//     console.log("leap year");
// }else{
//     console.log("not leap year");
// }

//25.write a program to take 3 number form the user and output the second max of 3 number.

// let input = require("readline-sync");
// let a = input.question("Enter:");
// let b = input.question("Enter:");
// let c = input.question("Enter:");
// let max, smax;

// if(a > b){
//     max = a;
//     smax = b;
// }else{
//     max = b;
//     smax = a;
// }
// if(max > c){
//     if(smax > c){
//         console.log(smax);
//     }else{
//         console.log(c);
//     }
// }else{
//     console.log(max);
// }


//35. write a program to take a number form the user and number of digit in the given number (can you do it without loop o(1));

// const input = require("readline-sync");
// const number = input.question("Enter a number:");
// if (!isNaN(number)) {
//     const numDigits = Math.abs(parseInt(number)).toString().length;
//     console.log("The number of digits is:", numDigits);
// } else {
//     console.log("Please enter a valid number.");
// }


// let input = require("readline-sync");
// let n = input.question("Enter:");

// if(n > 0){
//     console.log("positive");
// }else if(n < 0){

//     console.log("nagetive");
// }else{
//     console.log("zero");
// }


// var age = 20;
// var n = 20;
// if(n>=age){
//     console.log("vot");
// }else{
//     console.log("not vot");
// }


//TRANGAL OF SUM

// let angle1 = 60;
// let angle2 = 90;
// let angle3 = 60;

// if(angle1 + angle2 + angle3 === 180){
//     console.log("valid traingle");
// }else{
//     console.log("invalid traingle");
    
// }




// const readline = require("readline-sync");
// let num = readline.question("enter a number:");

// if (num % 3 ===0){
//     console.log("is a multiple of 3");
// }else{
//     console.log("is a not multiple of 3");
// }



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


// let num = 9; 
// if(num % 2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
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



// let age = 20;
// if(age > 18){
//     console.log("you can adult");
// } if(age < 18){
//     console.log("not you adult");
// }



// let input = require("readline-sync");
// let num = input.question("Enter:");

// if(num % 2 === 0){
//         console.log("even");
// }else{
//     console.log("odd");
// }  
    


// let input = require("readline-sync");
// let age = input.question("Enter:");

// if(age >= 18){
//     console.log("eligible to vote");
// }else{
//     console.log("not eligible to vote");
// }


//  CONDTION QUESTION OF USE FUNCTION.

// function checkEvenOdd(number){
//     if(number % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkEvenOdd(33));
// console.log(checkEvenOdd(22));

// function canVote(age){
//     if(age >= 18){
//         return "can vote";
//     }else{
//         return "can not vote";
//     }
// }
// console.log(canVote(2));



// const input = require("readline-sync")
// let age = input.question("Enter:");

// if(age >= 18){
//     console.log("can vote");
    
// }else{
//     console.log("can not vote");
    
// }

// function checkGrede(marks){
//     if(marks >= 90){
//         return "A";
//     }else if(marks >= 70){
//         return "B";
//     }else if(marks >= 50){
//         return "c";
//     }else if(marks >= 33){
//         return "D";
//     }else{
//         return "Fail"
//     }
// }
// console.log(checkGrede(28));

// function findHCF(a, b) {
//     if (b === 0) {
//         return a;
//     }
//     return findHCF(b, a % b);
// }
// function findHCFandLCM(a, b) {
//     let hcf = findHCF(a, b);
//     let lcm = (a * b) / hcf;
//     return { HCF: hcf, LCM: lcm };
// }

// console.log(findHCFandLCM(12, 18)); 









//1.

// let firstName = "Vishakha";
// let lastName = "Deshmukh";

// console.log("Hello, " + firstName + " " + lastName + "!");


//2. check gred.

// function checkGrede(marks){
//     if(marks >= 100){
//         return "A";
//     }else if(marks >= 89){
//         return "B";
//     }else if(marks >= 79){
//         return "c";
//     }else{
//         return "Fail"
//     }
// }
// console.log(checkGrede(99));


//3. even number print.

// let count = 0;  
// let num = 2;     

// while (count < 10) {
//   console.log(num);
//   num += 2;     
//   count++;      
// }


//4.

//  const input = require("readline-sync");
// let num = input.question("Enter a number to print its multiplication table: ");
// num = num; 


// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }


//5.

// let N = 5; 

// for (let i = 0; i < N; i++) {
//   for (let j = 1; j <= N - i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }


//6.

// let numbers = [1, 34, 110, 8, 6];

// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i]; 
//   }
// }

// console.log("The largest number is: " + largest);



//7.

// let numbers = [10, 20, 30, 140, 5];

// let sum = 0; 

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];  
// }

// console.log("sum of elements: " + sum);


let str="ThIS Is My WoRLd"
const length = str.length-1;
let newstar = "";
for(let i = length; i>=0; i--){
    if (str[i] === str[i].toUpperCase()){
        newstar +=str[i].toLowerCase();
    }else{
        newstar += str[i].toUpperCase();
    }
   
    
}console.log(newstar)