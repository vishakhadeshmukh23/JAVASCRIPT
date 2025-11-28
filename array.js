// // 1.reversed string question:-

// const { promptLoop } = require("readline-sync")

// let name = "vishakha";
// let reversed = "";

// for(let i = name.length-1; i>=0; i--){
//     reversed += name[i];
// }
// console.log(reversed);
// console.log(name.length);


// BINA METHOD KE REVERSED.

// function reverseArray(arr){
//   let left = 0, right = arr.length -1;
//   while(left < right){
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// function reverseArray(n){
//   for(let left = 0, right = n.length - 1; left < right; left++, right--){
//     [n[left], n[right]] = [n[right], n[left]];
//   }
//   return n;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));



// // 2.

// let number = "12345";
// let reversed = "";
// for (let i = number.length-1; i>=0; i--){
//     reversed += number[i];
// }

// console.log(reversed);
// console.log(number.length);



//3.take input form the user and find the max of navigator.

// let N = [22, 56, 88, 33, 28 ];
// let max = N[0];
// for( let i=0; i<=N.length; i++){
//     if(N[i]>max){
//         max=N[i];
//     }
// }
// console.log(max);


//50.SUM OF EVEN NUMBER IN AN ARRAY.

// function sumEvenNumbers(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       sum += arr[i];
//     }
//   }return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// function sumoddNumbers(arr){
//   let sum = 1;
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] % 2!== 0){
//       sum += arr[i];
//     }
//   }return sum;
// }
// console.log(sumoddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//48.SUM OF NUMBER IN AN ARRAY.

// function sumNumbers(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7]));


//49.MIXIMUN NUMBER IN AN ARRAY .

// function findMax(arr){
//   let max = arr[0];
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([3, 5, 87, 2, 12]));


//45. take input form the user and find the miximum number.

//   function findMaximum(arr) {
//     return Math.max(...arr); 
// }

// let array = [10, 20, 30, 40];
// console.log("Maximum value:", findMaximum(array));


  //42.PALINDROME CHECK.

  // function isPalindrome(str){
  //   let length = str.length;
  //   for(let i = 0; i < length/2; i++ ){
  //       if(str[i] !== str[length-1-i]){
  //           return false;
  //       }
  //   }
  //   return true;
  // }
//   console.log(isPalindrome('madam'));
//   console.log(isPalindrome('hello'));


// 41.COUNT VOWELS IN A STRING.

// function countVowels(str) {
//     let vowels = 'aeiou';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         count++;
//       }
//     }
//     return count; 
//   }
  
//   console.log(countVowels('hello world')); 
  

//40. write a program to reverse the array and print the reversed array.

// let input = require("readline-sync");
// let arr = [23,45,32,25,46,33,71,90];
// let reverseArray = arr.reverse();

// console.log("reverse array:");
// for(let num of reverseArray){
//     console.log(num);
// }



//38.write a program to print all the numbers form the given array using loop.

// let input = require("readline-sync");
// let L = [23,45,32,25,46,33,71,90];

// for(let i = 0; i < L.length; i++){
//     console.log(L[i]);
// }

//39.write a program to create an array  of natural numbers till 20 and print it.

// let naturalNumber = [];
// for (let i = 1; i<=20; i++){
//     naturalNumber.push(i);
// }
// console.log("Natural number till 20 are:");
// console.log(naturalNumber);


//37.write a program that takes a number form the user and prints the number that is formed by reversing the digit of the number.

// let input = require("readline-sync");
// let number = input.question("Enter:");
// let reversed = "";
// for (let i = number.length-1; i>=0; i--){
//     reversed += number[i];
// }

// console.log(reversed);
// console.log(number.length);


//SUM OF ARRAY ELEMANTS.

// const num = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//   sum += num[i];
// }
// console.log(sum);

//FIND THE LARGEST NUMBER.

// const num = [23, 45, 67, 24, 90];
// let largest = num [0];

// for(let i = 1; i < num.length; i++){
//   if(num[i] > largest){
//     largest = num[i];
//   }
// }
// console.log(largest);

//REVARSE NUMBER IN ARRAY.

// const numbers =  [23, 2, 2007];
// const reverseArray = [];
// for(let i = numbers.length-1; i >= 0; i--){
//   reverseArray.push(numbers[i]);

// }
// console.log(reverseArray);



//COUNT EVEN AND ODD NUMBER.

// const numbers = [24, 67, 89, 45, 24];
// let evenCount = 0;
// let oddCount = 0;
//  for(let i = 0; i <numbers.length; i++){
//   if(numbers[i] % 2 ===0){
//     evenCount++;
//   }else{
//     oddCount++;
//   }
//  }
//  console.log(evenCount);
//  console.log(oddCount);


//FIND ELIMENTS.


// const numbers = [10, 20, 30, 40, 50];
// const elementToFind = 50;

// let index =-1; 
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === elementToFind) {
//         index = i; 
//         break; 
//     }
// }

// if (index !==-1) {
//     console.log(`Element ${elementToFind} found at index: ${index}`);
// } else {
//     console.log(`Element ${elementToFind} not found.`);
// }


// FIND THE LARGEST AND SMALLEST NUMBER.

// const numbers = [46, 24, 68, 36, 98, 56, 23, 56, 67];
// let largest = numbers[0];
// let smallest = numbers[0];

// for(let i = 1; i < numbers.length; i++){
//   if(numbers[i]>largest){
//     largest = numbers[i];
//   }
//   if(numbers[i]< smallest){
//     smallest = numbers[i];
//   }

// }
// console.log(largest);
// console.log(smallest);


//Function Declaration (Normal Function)

//MEX AND MIN NUMBER PRINT KARNA HAI

// function findMaxMin(arr){
//   let max = arr[0];
//   let min = arr[0];
//   for(let num of arr){
//     if(num > max) max = num;
//     if(num < min) min = num;
    
//   }
//   return [min, max];
// }
// console.log(findMaxMin([23, 446, 78, 950, 35]));


//WHITE LOOP SE YHI QUESTION KIA HAI.

// function findMaxMin(arr){
//   let max = arr[0];
//   let min = arr[0];
//   let i = 1;
//   while(i < arr.length){
//     if(arr[i] > max)
//       max = arr[i];
//     if(arr[i] < min)
//       min = arr[i];
//       i++;  
//   }
//   return [min, max];
// }
// console.log(findMaxMin([23, 35, 57, 79, 987, 54, 322]));


//FOR LOOP SE.

// function findMaxMin(arr){
//   let max = arr[0];
//   let min = arr[0];
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max) max = arr[i];
//     if(arr[i]< min) min = arr[i];
//   }
//   return [min, max];
// }
// console.log(findMaxMin([456, 87, 456, 3456, 986, 0])); 


// //? SWAP QUESTION.

// function swapOddEvenElements(arr){
//   for(let i = 1; i < arr.length; i+=2){
//     let temp = arr[i];
//     arr[i] = arr[i - 1];
//     arr[i - 1] = temp;
//   }
//   return arr;

// }
// const inputArray1 = [10, 20, 30, 40, 50];
// const outputArray1 = swapOddEvenElements(inputArray1);
// console.log(outputArray1);


// function lengthOfLastWord(s) {
//   let trimmed = s.trim();
//   let words = trimmed.split(" ");
//   return words[words.length - 1].length;
// }


// console.log(lengthOfLastWord("Hello World"));               



//! 1. Write a code to reverse a number
// function reversedArry(num){
//   let revers = 0;

//   for(let i = num; i > 0; i = Math.floor(i / 10)){
//     let digit = i % 10;
//     revers = revers * 10 + digit;
//   }
//   return revers;
// }
// console.log(reversedArry(25789));


//! 2. Write the code to find the Fibonacci series upto the nth term.




// let number = [1, 4, 5, 7, 3];
// let result = number.map(function(num){
//   return num * 2;
// });

// console.log(result);



// let n = 50;
// for(let i = 1; n >= i*i; i++){
//   console.log(i * i);
// }

