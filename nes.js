//NESTED LOOP question.LOOP.



//NUMBER PRINT.

// for(let a = 5; a >= 1; a--){
//   let number = "";
//   for(let b = 1; b <= a; b++){
//    number += a + " ";
//   }
//   console.log(number.trim());
  
// }


//STARS PRINT.

// const readline = require("readline-sync");
// let N = readline.question("Enter:");
// for(let i = 1; i <= N; i++){
//   let stars = "";
//   for(let j = 1; j <= N; j++){
//     stars += "*";
//   }
//   console.log(stars);  
// }

//  const readline = require("readline-sync");
//  let n = readline.question("Enter:");
// for(let i = 1; i <= n; i++){
//     let row = '';

//     for(let j = 1; j <= n-i; j++){
//         row += "";
//     }
//     for(let k = 1; k <=(2*i-1); k++){
//         row +="*";
//     }
//     console.log(row);
// }

// 2.MULTIBLE TABLE

// let input = require("readline-sync");
// let tab = input.question("Enter:");
// let mul = input.question("Enter:");
// let i = 1;
// while (i <= tab) {
//   let j = 1;
//   while (j <= mul) {
//     console.log(i + " * " + j + " = " + (i * j)); 
//     j++;
//   }
//   console.log(); 
//   i++;
// }


//MUNBER PIRAMID PRINT.

// const readline = require("readline-sync");
// let n = readline.question("Enter:");

// for(let i = 1; i <= n; i++){
//     let row = '';

//     for(let j = 1; j <= n-i; j++){
//         row += ' ';
//     }
//     for(let k = 1; k <= i; k++){
//         row += k;
//     }
//     for(let l = i-1; l >= 1; l--){
//         row += l;
//     }
//     console.log(row);
// }



// function findMissingNumber(arr) {
//     let n = arr.length + 1; // Kyunki ek number missing hai
//     let totalSum = (n * (n + 1)) / 2; // Sum of first N natural numbers
//     let actualSum = arr.reduce((acc, num) => acc + num, 0);
//     return totalSum - actualSum; // Missing number
// }

// // Example Usage
// let arr = [1, 2, 4, 5, 6]; // 3 is missing
// console.log(findMissingNumber(arr)); // Output: 3


// FLOYD'S TRIGLE NUMBER PRINT KRANA.

// const readline = require("readline-sync");
// let X = readline.question("Enter:");
// let count = 1;
// for(let i = 1; i<=X; i++){
//     row = '';

//     for(let j = 1; j<=i; j++){
//         row += count + ' ';
//         count++
//     }
//     console.log(row);
// }


















//1.

// function starsPattarn(n){
//     for(let i = 1; i <= n; i++){
//         console.log("* ".repeat(i));
        
//     }
// }
// starsPattarn(7);

// let readline = require("readline-sync");
// let n = readline.question("Enter:");
// for(let i = 1; i <= n; i++){
//     console.log("* ".repeat(i));
    
// }

//2.

// function numberpattarn(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
// }
// numberpattarn(5);


// let readline = require("readline-sync");
// let n = readline.question("Enter:");
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += j + " ";
//     }
//     console.log(row);
    
// }


// function numberPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = " ".repeat((n - i) * 2); 
//         for (let j = i; j >= 1; j--) {
//             row += j + " ";
//         }
//         console.log(row);
 
//     }
// }

//  numberPattern(5);

    // function findMissingNumber(arr) {
    //     let missing;
        
    //     for (let i = 0; i < arr.length - 1; i++) {
    //         if (arr[i] + 1 !== arr[i + 1]) {
    //             missing = arr[i] + 1;
    //             break;
    //         }
    //     }
    
    //     return missing;
    // }
    
   
    // let arr = [1, 2, 3, 4, 5]; 
    // console.log(findMissingNumber(arr)); 
    
    
    // const n = 5;

    // for (let i = 1; i <= n; i++) {
    //     let row = "";
    
       
    //     for (let j = 1; j <= n - i; j++) {
    //         row += " "; 
    //     }
    
        
    //     for (let k = 1; k <= 2 * i - 1; k++) {
    //         row += "*"; 
    //     }
    
    //     console.log(row);
    // }
    
    

