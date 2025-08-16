//            FUNCTION CLASS 

//? A function in JavaScript is a block of code that is written to perform a specific task, and it runs only when it is called.

// function sayMyName(){

// console.log("v");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("a");
// console.log("k");
// console.log("h");
// console.log("a");
// }
// sayMyName();



//?🔹 2. Arguments vs Parameters
//📌 Parameters — jab function banate hain tab jo variables define karte hain
//📌 Arguments — jab function call karte hain tab jo values pass karte hain
// exaple:-
          // function greet(name) { // "name" is parameter
          //   console.log("Hello, " + name);
         // }
         // greet("Sneha"); // "Sneha" is argument

//?🟢 2. Why return is important?
//return se hum value ko function ke bahar use kar sakte hain.
//Agar return na ho, to undefined milega.

// exaple:-
        //    function addTwoNumbers(a, b){
        //     let sum = a + b;
        //    }
        //    let sum = addTwoNumbers(2, 6);
        //    console.log(sum);





// function addTwoNumbers(a, b){
//     console.log(a + b);
// }
// addTwoNumbers(3, 8);



// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     console.log("vishakha");
//     return result
//     // console.log();     iski jagh humne console.log ko upar le gye hai.
// }
// const result = addTwoNumbers(3, 8);
// console.log("Result:", result);

//  function loginUserMessage(username){
//     return `${username} just logged in`
//  }
//  console.log(loginUserMessage ("hitesh"));   
//  console.log(loginUserMessage(""));  // agar koi vlue hi nhi de rhe ho to vo just logged dega.
//  console.log(loginUserMessage());     //ager usme koi vlue nhi di to vo undefined rusult dega.
 

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//         return `${username} just logged in`
//     }
// }
// console.log(loginUserMessage());




// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter a username");
//         return
//         return `${username} just logged in`
//     }
// }
// console.log(loginUserMessage());




//FUNCTION WITH OBJECTS AND ARRAY IN JAVASCRIPT.


// function calculatecartprice(...num1){     //yha jo point hai usko RESTOP OPARETORS OR SPRED kha jata hai uski swichvation dekhakar. 
// return num1 
// }
// console.log(calculatecartprice(200, 400, 500, 389, 567));



// function calculatecartprice(val1, val2, ...num1){   
//     return num1
// }
// console.log(calculatecartprice(200, 400, 500, 389, 567));


// const user = {
//     username: "vishakha",
//     price: 1900
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// handleObject(user);


// const myNewArray = [209, 890, 466, 367]
// function returnSecondValue(getArray){
//     return getArray[3]
// }
// console.log(returnSecondValue(myNewArray));

//  {} ko scope kahte hai. 


// function one( ){
//     const username = "vishakha"
//     function two(){
//         const webside = "youtube"
//         console.log(username);
        
//     }
//     // console.log(webside);
//     two()
    
// }
// one()


//  ? ARROW FUNCTION

// const user = {
//     username: "vishakha",
//     price:2007,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to webside`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }
// chai();


// const chai = function (){
//     let username = "vishakha"
//     console.log(this.username);
    
// }
// chai();

  


//  const chai = () =>{
//      let username = "vishakha"
//      console.log(this.username);
    
// }
//  chai();



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));




// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => ({username:"vishakha"})
// console.log(addTwo(3, 4));

// const myNewArray = [2, 5, 6, 4, 3, 8, 9];
// myNewArray.forEach((num) => console.log(num));


//?1️⃣ Named Function (Regular Function)

// 1.Function Definition:(SIMPLE)

// function myName(name){
//     return "Hello Ji " + name;
// }
// console.log(myName("Vishakha"));


//2.Addition Function:

// function addTwoNumbers(a, b){
//     return a + b;
// }
// console.log(addTwoNumbers( 5, 9));


//3.Square a Number:

// function SquareNumber(a){
//     return a * a;
// }
// console.log(SquareNumber(9));

//4. Even or Odd:

// function evenOdd(number){
//     if(number % 2 === 0){
//         return "even";
//     }else{
//         return "odd";
//     }

// }
// console.log(evenOdd(6));

// function evenOdd(num){
//     return num % 2 === 0;
// }
// console.log(evenOdd(4));


// 5. Print Message:

// function printMessage(message){
//     return message;
// }
// console.log(printMessage("javascript is awesome!"));

// 1. Factorial Calculation:(HARD)

// function Factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     return n * Factorial(n-1);
// }
// console.log(Factorial(8));

//2. Prime Number Check:

// function isprime(n){
//     if(n < 2){
//         return false;
//     }
//     for (let i = 2; i <=Math.sqrt(n); i++){
//         if (n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(5));

// 3. Fibonacci Series:

// function Fibonacci(n){
//     if(n === 0){
//         return 0;
//     }
//     if (n === 1){
//         return 1;
//     }
//     return Fibonacci(n-1) + Fibonacci(n-2);
// }
// console.log(Fibonacci(7));


//4. Find Largest Number:

// function findMax(arr) {
//     if (arr.length === 0){
//         return " ";
//     }
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([10, 25, 56, 98]));


//5.Reverse a String :

// function reverseString(str){
//     let reversed = "";
//     for(let i = str.length - 1; i>= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("34989302"));




//?  ARROW FUNCTION  bhi  Anonymous function hote hai par bas snytax sort hota hai.

//1. TWO NUMBER ADD

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(56, 98));


//2. SQUARE PIRNT

// const Square = (num) => {
//     return num * num;
// };
// console.log(Square(6));


//OTHER TREK

// const Square = (num) => num * num
// console.log(Square(6));


//3.

// const myname = (name) => {
//     return name;
// }
// console.log(myname("Hello Vishakha!"));


//4. EVEN AND ODD NUMBER PRINT KARNA .


// let evenOdd = (N) => {
//     if(N % 2 ==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(evenOdd(7));



//? ✅ 1. Anonymous Function kya hota hai?
// Anonymous ka matlab: naam ke bina function.
// Yeh mostly variable ke andar assign hota hai.
// exaple:-
            // const add = function(a, b){
            //     return a + b;
            // };
            // console.log(add(2, 5));
            







//     WHY WE USE THIS IN ARRAY FUNCTION IN JAVASCRIPT.

// THIS OBJECT KI JAGAH USE HOTA HAI.    * this ka matlab hai "current object".   * "Main abhi kis object ke andar hoon?"

//EXAPLE:-
// 1.
// let person = {
//     name: "Vishakha",
//     showName: function() {
//       console.log(this.name);
//     }
//   };
  
//   person.showName(); // Output: Vishakha
  
// 2.
// console.log(this);


//3.

// function show() {
//     console.log(this);
//   }
//   show();
  

//? ASSIMENTS QUESTION IN JAVASCRIPT.
//1.
// const calculate = (a, b, c) =>{

//     switch(c){
    
//     case "+":
    
//     return a + b;
    
//     case "-":
    
//     return a + b;
    
//     case "*":
    
//     return a * b;
    
//     case "/":
    
//     return a / b;
    
//          default:
    
//                 return 'Invalid operator';
    
//     }
    
//     };
    
//     let a = 10;
//     let b = 20;
//     let c = "+";
    
//     console.log(calculate(a, b, c));
  
// 2.
// function volumeOfSphere(redius = 5){
//     const volume = (4/3) * Math.PI * (redius*redius*redius);
//     return volume;
// }
// console.log(volumeOfSphere(20));


// function format(num){
//         return num.toFixed(2);
// }
// console.log(format(2));

//!SIMPLE/ NORMAL FUNCTION KE LIYE.
//? isme function ka naam hota hai.

// // 1. 
// function addTwoNumbers(a, b){
//         return a + b;
// }
// console.log(addTwoNumbers(2, 6));


//2.
// function evenOdd(num){
//         return num % 2 === 0 ? "even" : "odd";
// }
// console.log(evenOdd(57));

//3.
// function maxTwoNumbers(num1, num2){
//         if(num1 > num2){
//                 return num1;
//         }else if(num1 < num2){
//                 return num2;
//         }else{
//                 return num1, num2;
//         }
// }
// console.log(maxTwoNumbers(8, 8));

// 4.

// function Factorial(N){
//         let result = 1;
//         for(let i = 1; i <= N; i++){
//                 result *= i;
//         }
//         return result;
// }
// console.log(Factorial(5));

// 5.
// function reversed(name){
//         return name.split("").reverse().join("");
// }
// console.log(reversed("vishakha"));

//6. 
// function vowel(str){
//         let vowels = "aeiou";
//         let count = 0;
//         for(let i = 0; i < str.length; i++){
//                 if(vowels.includes(str[i])){
//                         count++;
//                 }
//         }
//         return count;
// }
// console.log(vowel("my name is vishakha deshmukh"));


// // 7.
// function sumArr(arr){
//         let sum = 0;
//         for(let num of arr){
//                 sum += num;
//         }
//         return sum;
// }
// console.log(sumArr([23, 4, 7, 8, 9]));



//! Function Expression 

//1.
// const squre = function(num){
//         return num * num;
// }
// console.log(squre(5));


//2.
// const checkNumber = function(N){
//         if(N > 0){
//                 return "Positive";
//         }else if(N < 0){
//                 return "Nagetive";
//         }else{
//                 return "Zero";
//         }
// }
// console.log(checkNumber(0));

// // 3.
// const second = function(minats){
//         return minats * 60;
// }
// console.log(second(5));


//4.
// const countWord = function(sentence){
//         return sentence.trim().split(" ").length;
// };
// console.log(countWord(" my name is vishakha deshmukh"));

//! ARROW FUNCTION

// let squre = (num) =>  num * num;
// console.log(squre(8));


// let squre = (num) =>{
//   return num * num;
// }
// console.log(squre(8));

// let addTwoNumbers = (a, b) => {
//         return a + b;
// }
// console.log(addTwoNumbers(8, 8));


// let evenOdd = (Number) => {
//         if(Number % 2 === 0){
//                 return "even";
//         }else{
//                 return "odd"
//         }

// }
// console.log(evenOdd(8));

// let evenOdd = (S, E) => {
//         for(let i = S; i <= E; i++){
//                 if(i % 2 === 0){
//                         console.log(i + " it is even number");
//                 }else{
//                        console.log(i + "it is odd number");   
//                 }
//         }
// }
// evenOdd(1, 10);

// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(10));


// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }
// console.log(isPrime(20));



//!Anonymous Functions in JavaScript.

// const checkNumber = function(E, O){
//         for(let i = E; i <= O; i++){
//                 if(i % 2 === 0){
//                         console.log(i + " even");    
//                 }else{
//                     console.log(i + " odd");
                        
//                 }
//         }
// };
// checkNumber(1,10);

//! Constructor Function

//1.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Vishakha", 18);
// console.log(p1); 

//            //!named function
//  function addTwonum(a , b){
//         return a + b;
//  }
//  console.log(addTwonum( 4 , 5));
 
      //!function exprection
// let sub = function( a , b){
//         return a - b;
// }
// console.log(sub(15, 5));
 
  //!arrow functiom

// let sqr = (a)=> {
//   return a *a
// }
// console.log(sqr(4));

// let sqr1 = (a)=> a*a
// console.log(sqr1(5));


// let num = (n) =>{
//     if(n % 2==0){
//         return "even";
//     }else{
//         return  "odd";
//     }
// }
// console.log(num(2));


// let num = (n)=> n % 2==0 ? "even": "odd";
// console.log(num(6));


// let num = (n) =>{
// if (n <= 1 ) return false;
//   for(let i = 2; i * i <= n; i++){
//         if(n % i==0)
//                 return false;
//   }
// return true;
// }
// console.log(num(10));

// let value = (n)=>{
// let vovels = n[0];
//    if( vovels === "a" || vovels === "e" || vovels === "i" ||vovels === "o" ||vovels === "u"){
//         return "vovels";
//    }else{
//         return "consonent";
//    }
// }
// console.log(value("p"));
