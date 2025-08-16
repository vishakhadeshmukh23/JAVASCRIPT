//? what is loop:- Loop ek aisa concept hai programming
// ? mein jiske through hum kisi code ko baar-baar repeat kar sakte hain 
//? jab tak ek condition true ho.


// let step = 0;
// while(step <= 5){
//   console.log(step);
//   step++;

//   if(step == 3){
//     break;               //? yha hume jitna chaye utna loop ghuma sakte hai  par BREAK lgana pdega.
//   }
  
// }


// let step = 0;
// while(step <= 5){
//   step++;
//   if(step == 3){
//     continue               //? continue ka use hum elemens ko skip karne ke liye karte hai.     
//   }
//   console.log(step);
  
// }



// while loop question;-

// 9.

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// 2.
// let sum = 0;
// let i = 1;

// while (i <= 5) {
//     sum += i; 
//     i++;
// } 
// let num = 3;
// for (; num > 0; num = Math.floor(num / 10)) {
//       sum += num % 10; 
//     }
  
// console.log("Total Sum:", sum);

// Do while loop 

 // 1.
// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i<=5);
 
// 10.take input from the user and print the sum of even and odd

// let input = require("readline-sync");
// let n = input.question("Enter n:");


// let i = 0;
// let sum = 0;
// let osum = 0;
// let esum = 0;

// while(i < n){
//     if(i%2==0){
//       esum = esum + i;
//       i++;
//     }else{
//         osum = osum + i;
//         i++;
//     }
    
// }
// console.log("Even number:",esum);
// console.log("Odd number:",osum);


//36. write a program to take a number form the user and print the sum of the digits of the given number. 

// let input = require("readline-sync");
// let number = input.question("Enter:");

// let sum = 0;
// for(let digit of number){
//     sum += parseInt(digit);
// }
// console.log(sum);



              //loop question.

//27.take the number N and name form the user as inputs, and print the name N times.

// let input = require("readline-sync");
// let N = input.question("Enter:");
// let name = input.question("Enter:");

// for(i = 0; i < N; i++){
//     console.log(name);
// }

//28. take  a number N form the user as input ,and print evan number up to N.

// let input = require("readline-sync");
// let N = input.question("Enter:");
// let evan;
// for(i = 2; i < N; i+=2){
//    if(i % 2 == 0){
//     console.log(i + "");
//    }
// }

//29.write a program to print the sum of odd number up to N.
// let input = require("readline-sync");
// let N =input.question("Enter:");
// let sum = 0;

// for(i = 0; i <= N; i+=1){
//     if(i % 2!=0){
//        sum += i;  
//     }
// }
// console.log(sum);  
  
//30.write a program to take two integers M and N print the sum of number in the range M to N.

// let input = require("readline-sync");
// let M = parseInt(input.question("Enter M:"));
// let N = parseInt(input.question("Enter N:"));
// let sum = 0;

// for(; M <= N;  M++){
//     sum += M;
// }
// console.log("sum of number:" + sum);

// note :- parseInt() ka use inputs ko string se integer me convert karne ke liye kiya gaya hai.


//31. take input form the user and find the mex of N number.


// const readline = require("readline-sync");

// function findmax(n){
//     let max =0;  

//     for (let i = 0; i < n; i++) {
//         const user = readline.question("Enter a number: ");
        
       
//         if (max < Number(user)) {
//             max = user;
//         }
//     }

//     console.log("Max is:", max);
// }

// findmax(5);

//34. write a program to calculate the sum of following series where N is input form the user.1+1/2+1/3+1/4+1/5+....1/N.

// let input = require("readline-sync");
// let N = input.question("Enter:");

// let sum = 0;
// for(i = 1; i<=N; i++){
//     sum = sum + 1/i;
// }
//     console.log(sum.toFixed(2));



//loop question. (0-100 to evan number,odd number)

// for (let num = 0; num<= 100; num++){
//   if(num % 2 === 0){
//     console.log(num)
//   }
// }

 
// for (let num = 0; num<= 100; num++){
//   if(num % 2 !== 0){
//     console.log(num)
//   }
// }



//46.FIBONACCI SEQUENCE.

// function fibonacci(n){
//   let a = 0;
//   let b = 1;
//   let sequence = [a, b];
//   for(let i = 2; i < n; i++){
//     let next = a + b;
//     sequence.push(next);
//     a = b;
//     b = next;
//   }
//   return sequence;
// }
// console.log(fibonacci(10));
  

//47.FACTORIAL NUMBER.

// function factorial(n){
//   let result = 1;
//   for(let i = 1; i <= n; i++){
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));



  //44.SUM OF DIGIT IN A NUMBER.

  // function sumOfDigits(num) {
  //   let sum = 0;
  
  //   for (; num > 0; num = Math.floor(num / 10)) {
  //     sum += num % 10; 
  //   }
  
  //   return sum;
  // }
  
  // console.log(sumOfDigits(12345)); 

  // //43.CHECK THE PRIME NUMBER .

//   function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   console.log(isPrime(9)); 
//   console.log(isPrime(9));


  //prime number print

  // function isPrime(num){
  // for (let num = 1; num <= 20; num++) {
  //   if (isPrime(num)) {
  //     console.log(num); 
  //   }
  // }
  // }

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
// let evenSum = 0; 
// let oddSum = 0;  

// for (let i = 1; i <= 10; i++) { 
//     if (i % 2 === 0) { 
//         console.log("even num",i);
//         evenSum += i;
//     } else {
//         console.log("odd num", i);
//         oddSum += i;
//     }
// }

// console.log(evenSum);
// console.log(oddSum);


// let age = 20;
// let name = "vishakha";
// console.log(name + age); 

// let result = 1/0;        // 0/0=NaN;
// console.log(result);

// let result = -1 / 0;
// console.log(result);

// var x = 10;
// var y = '10';
// console.log(x == y);




// let input = require("readline-sync");
// let limit = input.question("Enter the limit: "); 

// let i = 1;
// while (i <= limit) { 
//   console.log(i * i); 
//   i++; 
// }


// let i = 10; 
// while (i >= 1) { 
//   console.log(i); 
//   i--; 
// }



// let i = 1; 
// while (i <= 6) { 
//   console.log(i); 
//   i++;
// }

// console.log("Hello"); 




//  let input = require("readline-sync");
//  let N = input.question("Enter:");
// let i = 1;
// while (i <= 50) {
//   if (i % 7 === 0) { 
//     console.log(i); 
//   }
//   i++; 
// }





// let input = require("readline-sync");
// let N = input.question("Enter:");
// let i = 1;

//  while (i <= 10) {
//   console.log(i * N);
//   i++;
//  }





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


// for(let i = 0; i<= 5; i++){
//   console.log("a")
// }


// let i = 1;
// while(i <= 3){
//     console.log("A B C");
//     i++;
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

// for(i = 0; i <= N; i++){
//   console.log(i);
// }


// let a = 10;
// for(let i = 1; i <= 10; i++){
//   console.log(i);
// }

// let input = require("readline-sync")
// let A = input.question("Enter:");
// let i = 1;
// let sum = 0;
// while(i<=A){
//   sum += i;
//   i++;


 // prime number print

//   function isPrime(num){
//   for (let num = 1; num <= 20; num++) {
//     if (isPrime(num)) {
//       console.log(num); 
//     }
//   }
//   }
// console.log(sum);


//  let input = require("readline-sync")
//  let A = input.question("Enter:");
// 
//  let i = 1;
//  while(i<=A){
//   console.log(i * 3);
//   i++;
//  }


// const readline = require("readline-sync");
// let num = readline.question("Enter:");
// let factorial = 1;
// for(let i = 1; i <= num; i++){
//   factorial *= i;
// }
// console.log(" factorial is  "  + factorial);



// const readline = require("readline-sync");
// let num = readline.question("Enter:");

// let i = 1;
// let factorial = 1;

// while(i <= num){
//   factorial *= i;
//   i++;
// }console.log(" factorial is " + factorial);
  


// const readline = require("readline-sync");
// let R = readline.question("Enter:");
// for(let i = R; i >= 1; i--){
//   console.log(i);
// }




// const readline = require("readline-sync");
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// let num = parseInt(readline.question("Enter a number: "));
// if (isPrime(num)) {
//   let i = 1;
//   let factorial = 1;
//   while (i <= num) {
//     factorial *= i;
//     i++;
//   }

//   console.log(" Factorial is: " + factorial);
// } else {
//   console.log(num + " is not a prime number.");
// }


//Print Fibonacci Sequence

// const readline = require("readline-sync");
// let N = readline.question("Enter:");
// let a = 0;
// let b = 1;
// let count = 1;
// while(count <= N){
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
//   count++;
// }



//  const readline = require("readline-sync");
//  let N = readline.question("Enter:");
//  let a = 0;
//  let b = 1;
//  console.log(a);
//  if(N > 1);
//  console.log(b);

//  for(i = 3; i <= N; i++){
//   next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
//  }

//EVEN AND ODD Number.

// const readline = require("readline-sync");
// let N = readline.question("Enter:");

// for(let i = 0; i <= N; i++){
//   if(i % 2 === 0){
//     console.log(" even " + i);
//   }else{
//     console.log(" odd " + i);
//   }
// }

// BETWEEN PRIME NUMBER CHAKE KARANA.

// const readline = require("readline-sync");
// let start = readline.question("Enter:");
// let end = readline.question("Enter:");

// console.log(`Prime numbers between ${start} and ${end} are:`)
// for(let num = start; num <= end; num++){
//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false; 
//     }
//   }

//   if (isPrime && num > 1) {
//     console.log(num);
//   }
// }




//  let input = require("readline-sync");
//  let n = input.question("Enter n:");
//  let sum = 0;
//  let esum = 0; 
//  let osum = 0;

//  for(let i = 0; i < n; i++){
//   if(i % 2 === 0){
//      esum = esum + i;
//   }else{
//     osum = osum + i;
//   }
//  }
//  console.log(esum);
//  console.log(osum);
 


// let n = 5;
// for(let i = 1; i <= n; i++){
//   row = " ";
//   for(let j = 1; j <= n; j++){
//     if(i == 1 || i == n || j == 1 || j == n){
//       row += "* ";
//     }else{
//       row += "  ";
//     }

//   }
//   console.log(row);
  
//}


// let  n = 6;                // hum let me koi bhi value le sakte hai or j ki value chenge kar skate hai n ki jagh hum k rha skte hai.                         
// let k = 7;
// for(let i = 1; i <=n; i++){
//   let row = "";
//   for(let j = 1; j <=n; j++){
//      row += "* ";

//   }
//   console.log(row);
  
// }

// let n = 5; 
// for(let i = 1; i <= n; i++){
//   let row = "";
//   for(let j = 1; j<=i; j++){
//     row += "* ";
//   }
//   console.log(row);
  
// }

// let n = 6;
// for(let i = n; i >= 1; i--){
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row += "* ";
//   }
//   console.log(row);
  
// }


// function printSquarePattern(n){
//   for(let i = n; i >= 1; i--){
//       let row = "";
//       for(let j = 1; j <= i; j++){
//         row += "* ";
//       }
//       console.log(row);
      
//     }
// }
// printSquarePattern(6);



// function printHolloSquare(n){
// for(let i = 1; i <= n; i++){
//   row = " ";
//   for(let j = 1; j <= n; j++){
//     if(i == 1 || i == n || j == 1 || j == n){
//       row += "* ";
//     }else{
//       row += "  ";
//     }

//   }
//   console.log(row);
  
// }
// }
//  printHolloSquare(6);


// function numberPaitturn(n){
//   for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//       row += j + " ";
//     }
//     console.log(row);
//   }
   
//  }
//  numberPaitturn(7);


// Pattturn Question


// function SquareNumber(n){
//   for (let i = 0; i < n; i++){
//     console.log("* ". repeat(n));
//   }
// }
// SquareNumber(4);


// function rightstar (n){
//   for (let i = 0; i <= n; i++){
//     console.log("* ".repeat(i));
    
//   }
// }
// rightstar(7);


// function  printHolloSquare(n){
//   for(let i = 1; i <= n; i++){
//     let row = "";
//     for (let j = 1; j <= n; j++){
//       if(i == 1||i == n || j == 1 ||j == n ){
//         row += "* ";
//       }
      
//     else{
//       row += "  ";
//     }
   
//   }
//   console.log(row);
// }

// }
// printHolloSquare(10);


// N = 3; 
// for(let i = N; i > 0; i--){
//   let strar = "";
//   for(let j = 1; j<=i; j++){
//    strar += " * ";
//   }
// console.log(strar);

// }


// let N = 5;
// for(let i = 1; i<=N; i++){
//   let number = " ";
//   for (let j = 1; j<=i; j++){

// number += j + " ";
//   }
//   console.log(number);

// }


// let N = 3;
// for(let i = N; i >= 1; i--){
//   let row = "";
//   for(let j = 1; j <= N-i; j++){
//     row += " ";
//   }
//     for(let k = 1; k <= 2*i-1; k++){
//       row += "*";
    
//   }
//   console.log(row);
  
// }


// let N = 3;
// for(let i = 1; i <= N; i++){
//   let row = "";
//   for(let j = 1; j <= N-i; j++){
//     row += " ";
//   }
//     for(let k = 1; k <= 2*i-1; k++){
//       row += "*";
    
//   }
//   console.log(row);
  
// }


// let n = 4; // Number of rows

// for (let i = 0; i < n; i++) {
//   let row = "";
  
//   for (let j = 0; j <= i; j++) {
//     row += String.fromCharCode(65 + i) + " "; 
//   }
  
//   console.log(row);
// }


// let n = 4; // Number of rows

// for (let i = 1; i <= n; i++) {
//   let row = "";
  
//   for (let j = 0; j < i; j++) {
//     row += String.fromCharCode(65 + j) + " "; 
//   }
  
//   console.log(row);
// }


// let n = 5;
// let num = 1;
// let lastRow = " ";
// for(let i = 1; i<=n; i++){
//   let column = '';
//   for(let j = 1; j<= i; j++){
//     column += num + " ";
//     num += 1;
//   }
//   if(i===n){
//     lastRow = column + num;
//     console.log(lastRow);
    
//   }else{
//     console.log(column);
    
//   }

// }

// let n = 5;
// for(let i = 1; i<=n; i++){
//   let tare = "";
//   for(let j = 1; j<=i; j++){
//     tare += "*";
//   }
//   console.log(tare);
  
// }


// let n = 5;
// for(let i = n; i>=1; i--){
//   let tare = "";
//   for(let j = 1; j<=i; j++){
//     tare += "*";
//   }
//   console.log(tare);
  
// }



//  let N = 1;
//  for(let i = 1; i<=N; i++){
//   for(let j = 1; j<=N; j++ ){
//     if(i==1){
//       process.stdout.write("*");

//     }else if(i==4){
//       process.stdout.write("*");

//     }else if(j==1){
//       process.stdout.write("*");

//     }else if(j==4){
//       process.stdout.write("*");

//     }
//   }
//   console.log();
  
//  }





// let n = 6;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {

//     if (i === 0 || i === n - 2) {
//       // Top ya bottom row full stars
//       process.stdout.write("*  ");
//     } else if (j === 0 || j === 1 || j === n-2  || j === n - 1) {
//       // Sides ke stars
//       process.stdout.write("*  ");
//     } else {
//       // Space beech me
//       process.stdout.write("   ");
//     }
//   }
//   // Har row ke baad new line
//   console.log();
// }




// 1.


// let n = 5;
// let num = 1;
// let lastRow = " ";
// for(let i = 1; i<=n; i++){
//   let column = " ";
//   for(let j = 1; j<= i; j++){
//     column += num + " ";
//     num += 1;
//   }
  
// console.log(column);

//  }


//2.

// let n = 5;
// for(let i = 1; i<= n; i++){
//   let star = "";
//   for(let j = 1; j <=i; j++){
//     star += "*";
//   }
//   console.log(star);
  
// }



//3.

// let n = 5;
//   for (let i = 1; i <= n; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//           row += j + " ";
          
//       }
//      console.log(row);
//   }




// let n = 5;
//   for (let i = 1; i <= n; i++) {
//       let row = " ".repeat((n - i) * 2);  
//       // for (let j = i; j >= 1; j--) {
//           row += "* ";  
//       // }
//       console.log(row);
//   }



// let n = 12345;
// let reversed = 0;

// while(n > 0){
//   let lastDigit = n % 10;
//  n = Math.floor(n/10);
//  reversed = (reversed * 10) + lastDigit;
// }
// console.log(reversed);


  // function isPrime(num) {
  //   if (num <= 1) return false;
  //   for (let i = 2; i <= Math.sqrt(num); i++) {
  //     if (num % i === 0) return false;
  //   }
  //   return true;
  // }
  
  // console.log(isPrime(8));


//  let n = 10;

// while (n !== 1) {
//   console.log(n);
//   n = n % 2 === 0 ? n / 2 : 3 * n + 1;
// }

// console.log(1);


// let N = 29;
// if (N > 20) {
//   N = 20;
// }
// for (let i = 1; i <= N; i++) {
 
//   if (Number.isInteger(Math.sqrt(i))) {
//   } else {
//     console.log(i);
//   }
// }


// var isPowerOfTwo = function(n) {
//   if(n<=0){
//       return false;
//   }else{
//       if((n & (n-1)) == 0){
//           return true;
//       }else{
//           return false;
//       }
//   }

// };
// console.log(isPowerOfTwo(1));


// var isPowerOfTwo = function(n){
//   if(n <= 0){
//     return false;
//   }
//   while(n % 2 === 0){
//     n = n/2;
//   }
//   if(n === 1){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isPowerOfTwo(16));




// var isPowerOfThree = function(n){
//   if(n <= 0){
//     return false;
//   }
//   while(n % 3 === 0){
//     n = n/3;
//   }
//   if(n === 1){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isPowerOfTwo(27));

//? RECURSTION SE QUESTION SOLVE.

// function isPowerOfThree(n){
//   if(n == 0){
//     return false;
//   }
//    if(n == 1){
//     return true;
//   }
//   if(n % 3 !== 0){
//     return false
//   }
//   return isPowerOfThree(n/3)
// }
// console.log(isPowerOfThree(27));


//?. FIBONACCHI

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// console.log(fib(0));

























// const readline = require("readline-sync");
// let N = readline.question("Enter:");

// for(let i = 2; i <= N; i++){
//   if(i % 2 === 0){
//     console.log(i);

//   }
// }



// let n = 100;
// for(let i = 1; i<=n; i++){
//   if(i % 3 === 0 && i % 5===0){
//     console.log(i);
    
//   }
 
// }