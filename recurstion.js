
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
//     if (n === 0) {

//       return 0;
//     } else if (n === 1) {
//       return 1;
//     } else {
//       return fib(n - 1) + fib(n - 2);
//     }
//   }
//   console.log(fib(0));
  

//? what is RECURSTION :- Recursion is a technique in programming where a function calls itself to solve a smaller version of the same problem.

 //? Key Parts of Recursion:-
 // 1. base case:- This is the stopping condition — when the function should stop calling itself.
// In the above example: if (n === 0)

// 2. Recursive Case
// The part where the function calls itself with a smaller value.
// In the example: countDown(n - 1)


//?✅ 1. Using Function Recursion (FR) :- 
// ?A function calls itself again and again to solve a problem.

// function factorial(n) {
//   if (n === 0 || n === 1) return 1; // 👉 YEH BASE CASE HAI
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));


 //? ✅ 2. Using Parameterized Recursion (PR)
 // ?The function takes a parameter, and with each recursive call, the value of that parameter changes.
//? Basically, the parameter controls the recursion.

// function factorialPR(n, result) {
//     if (n === 0 || n === 1) {
//       console.log(result); // Final result
//       return;
//     }
//     factorialPR(n - 1, result * n);
//   }
  
//   factorialPR(5, 1); // Output: 120
   

// function fibonacci(n){
//     if(n <= 1)
//     return n;
    
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// console.log(fibonacci(4));





