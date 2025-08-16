// SWITCH CASE IN JAVASCRIPT


//?switch case ek conditional statement hai jo JavaScript me use hoti hai multiple
//?  conditions check karne ke liye — lekin if-else if ke jagah use karte hain jab ek
//?  hi variable ki multiple values compare karni ho.


//? Break:- break ek JavaScript keyword hai jo:


//? switch (key){

//case value:
//code
// break;
  
// default:
     // break;
//?}



//? isme break control flow break kar deta hai.

// let day = 4;

// switch(day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day number");
// }



// ishi ko if-else me 


// let day = 4;

// if(day===1){
//   console.log("Monday");
  
// }else if(day===2){
//   console.log("Tuesday");
  
// }else if(day===3){
//   console.log("Sunday");
  
// }else{
//   console.log("invelid");
  
// }




// let arr2 = [45, 98, 23, 45, 5, 6, 7, 9];
// let a2 = arr2.filter((arr2) => {
//   return arr2 < 10
// });
// console.log(a2);


// let input = require("readline-sync");
// let n = input.question("Enter:");
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         console.log(i);
//     }
// }





     //? FALSY VALUES AND TRUETY VALUES;

     // false values:- 0, -0, BigInt, 0n,"", null, undefined, NaN;
     //truthy values:- "0", "false", " ", [], {}, function(){}



     //? Nullish Coalescing Operator (??): null undefined.
      // ye shirfh null and undefined ke liye bna hai.
    //  let val1;
    //  val1 = 5 ?? 10;
    // val1 = null ?? 10; 
    // val1 = undefined ?? 15;
    // val1 = null ?? 10 ?? 68;

    //  console.log(val1);




    //? Terniary Operator

    //    it is snytax 
     // condition ? true : false;

//     const iceTeaPrice = 100
//     iceTeaPrice <= 80 ? console.log("less then 80"): console.log("more then 80");
     


// for(let i = 1; i <= 5; i++){
//      if(i === 3)continue
//      console.log(i);
//      console.log("done");
     
     
// }

