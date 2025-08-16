//1.
//     function isPalindrome(x) {
   
//     if (x < 0) return false;
//     let str = x.toString();
//     for (let i = 0; i < str.length / 2; i++) {
//       if (str[i] !== str[str.length - 1 - i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
//   console.log(isPalindrome(121));


//2.

// function romanToInt(s) {
//     const roman = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000
//     };
  
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//       let current = roman[s[i]];
//       let next = roman[s[i + 1]];
  
//       if (next > current) {
//         total += (next - current);
//         i++;
//       } else {
//         total += current;
//       }
//     }
  
//     return total;
//   }
  

  // 3.

  // function plusOne(digits){
  //   for (let i = digits.length - 1; i >= 0; i--){
  //     if (digits[i] < 9){
  //       digits[i]++;
  //       return digits;
  //     }
  //     digits[i] = 0;    
  //   }
  //   digits.unshift(1);
  //   return digits;
  // }
  // console.log(plusOne([1, 2, 3]));
  

  // 4.

  // function addBinary(a, b){
  //   let i = a.length - 1;
  //   let j = b.length - 1;
  //   let carry = 0;
  //   let result = "";

  //   while (i>=0 || j>=0 || carry >0){
  //      let A = i>=0 ? Number(a[i]) : 0;  // a = 11; or index = 1 hai isliye yha A = 1 aaya hai.
  //      let B = j>=0 ? Number(b[j]) : 0;  // yha 1 isliye aya hai kyoki b = 1 hai to j=o ek index hai index ki value 1 isliye B= 1 aaya hai.

  //      let sum = A + B + carry;
  //      result = (sum%2) + result;
  //      carry = Math.floor(sum/2);

  //      i--;
  //      j--;

  //   }
  //   return result;
    
  // }
  // console.log(addBinary("11", "1"));
  


  //5.

  // function mySqrt(x){
  //   let i = 1;
  //   while(i*i <= x){
  //     i++;
  //   }
  //   return i-1;
  // }
  // console.log(mySqrt(16));
  

  // 6.

//   function climbStairs(n) {
//     if (n <= 2) return n;

//     let a = 1, b = 2;                  
//     for (let i = 3; i <= n; i++) {            // humne i = 3 isliye liya hai kyoki step 1 or step 2 n ki value or i ki vlaue vhi hai            
//         let temp = a + b;                     //                            or step bhi vhi hai isliye humne i = 3 liya hai. 
//         a = b;
//         b = temp;                                 // ways(n) = ways(n-1) + ways(n-2)  this a formula
//     }
//     return b;
// }
// console.log(climbStairs(5));



// 7. FACTORS KA COUNT NIKALNA.


// function commanFactors(a, b){
//   let count = 0;
//   let min = Math.min(a, b);

//   for(let i = 1; i <= min; i++){
//     if(a % i === 0  &&  b % i === 0){
//       count ++;
//     }
//   }
//   return count;
// }
// console.log(commanFactors(12, 4));


// comman factors and count;

// function commanFactors(a, b){
//   let factors = [];
//   let count = 0;
//   let min = Math.min(a, b);

//   for(let i = 1; i <= min; i++){
//     if(a % i === 0  &&  b % i === 0){
//       factors.push(i);
//       count ++;
//     }
//   }
//   console.log(factors);
//   return count;
// }
// console.log(commanFactors(12, 4));



// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//               return [i, j];
//           }
//       }
//   }
//   return []; 
// };


// console.log(twoSum([2, 7, 11, 15], 9)); 


//?✅ 1. Using Function Recursion (FR)
// function factorial(n) {
//   if (n === 0 || n === 1) return 1; // 👉 YEH BASE CASE HAI
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));


 //? 2. Using Parameterized Recursion (PR)
// function factorialPR(n, result) {
//   if (n === 0 || n === 1) {
//     console.log(result); // Final result
//     return;
//   }
//   factorialPR(n - 1, result * n);
// }

// factorialPR(5, 1); // Output: 120



// let nums = [2, 3, 2, 4, 3, 2];
// let count = {};

// for (let num of nums) {
//   if (count[num]) {
//     count[num] += 1;
//   } else {
//     count[num] = 1;
//   }
// }

// console.log(count);

// let num = [2, 4, 7, 9, 2, 4, 9, 7];
// let count = {};


// let str = "vishakha";
// let freq = {};

// for (let char of str) {
//   if (freq[char]) {
//     freq[char] += 1;
//   } else {
//     freq[char] = 1;
//   }
// }

// console.log(freq);

//?🔶 Bonus: Using Map for Frequency
// let arr = [1, 2, 2, 3, 1, 2];
// let map = new Map();

// for (let num of arr) {
//   map.set(num, (map.get(num) || 0) + 1);
// }

// console.log(map);


// function findTheDeffense(s, t){
//   let map = {};
//   for(let i = 0; i < s.lenght; i++){
//     let ch = s[i];
//     if(map[ch]){
//       map[ch]++;
//     }
//     else{
//       map[ch] = 1    
//     }
//   }
// }
// for(i = 0; i < t.lenght; i++){
//   let ch = t[i];
//   if(!map[ch]){
//     return ch;
//   }else{
//     map[ch]--;
//   }

// }
