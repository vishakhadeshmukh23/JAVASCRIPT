//?🔹 What is the Math Object?
//?In JavaScript, the Math object is a built-in object that provides math-related functions and constants, like:

// Finding square root

// Rounding numbers

// Generating random numbers

// Doing power calculations

// Using PI (π), etc.



//? 1. Math.abs()
//? The Math.abs() static method returns the absolute value of a number.
//exaple:-
        //  function difrense(a, b){
        //     return Math.abs(a-b);
        //  }
        //  console.log(difrense(3, 5));   // 2

//?  2.Math.acos()
// The Math.acos() static method returns the inverse cosine (in radians) of a number. That is,
// ∀x∊[−1,1],𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜(𝚡)=arccos(x)=the unique y∊[0,π]such that cos(y)=x
// exaple :-
//  function calcAngle(adjacent, hypotenuse) {
//   return Math.acos(adjacent / hypotenuse);
// }

// console.log(calcAngle(8, 10));
// // Expected output: 0.6435011087932843   

// console.log(calcAngle(5, 3));        //  output  :- NaN   

//? Math.acosh():-
// The Math.acosh() static method returns the inverse hyperbolic cosine of a number. That is,
// ∀x≥1,𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑(𝚡)=arcosh(x)=the unique y≥0 such that cosh(y)=x=l(x+2−1)

// exaple:-
        //     console.log(Math.acosh(0.999999999999));
// Expected output: NaN

// console.log(Math.acosh(1));
// Expected output: 0

// console.log(Math.acosh(2));
// Expected output: 1.3169578969248166

// console.log(Math.acosh(2.5));
// Expected output: 1.566799236972411
     

// The Math.asin() static method returns the inverse sine (in radians) of a number. That is,

//∀x∊[−1,],𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗(𝚡)=arcsin(x)=the unique y−π2,π2] such that siny)=x