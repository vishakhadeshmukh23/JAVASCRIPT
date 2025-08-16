               //? ARRAY METHODS
               //1. PUSH() METHOD//


// let fruits = ["apple","mengo"];    //// one aitem add karna 
// fruits.push("vishakha eat this");
// console.log(fruits);


// let fruits = ["apple"];     // multiple aitems add karna
// fruits.push("vishakha eat this", "mengo", "Deshmukh");
// console.log(fruits);


// let numbers = [];
// numbers.push("10, 20, 30, 40, 50");
// console.log(numbers);


// 3. Push numbers 1 to 5 into an array using a for loop

// let num = [];
// let n = 9; 
//  for(let i = 1; i<=n; i++){
//   num.push(i);
    
//  }
//  console.log(num);
 
// let numbers = [10, 20, 30, 40];
// console.log(numbers);


// let numbers = [1, 2];
//  numbers.push(3, 4);
// console.log(numbers);

// let cities = ["Delhi", "Mumbai"];
// cities.push("Pune", "Balaghat");
// console.log(cities);


               // 2. POP() METHOD//

// let colors = ["red", "green", "yellow"];
//     colors.pop();
//     console.log(colors);
    

// let emptyArr = [];
// let result = emptyArr.pop();
// console.log(result);

           // 3. SPLICE() METHODS//

// let tools = ['hammer', 'nail', 'screw', 'drill'];    //index 1 , 2 hai
// tools.splice(1, 2);
// console.log(tools);


// let items = ['milk', 'bread', 'butter'];
// items.splice(2, 1, 'cheese');
// console.log(items);


          
// let colors = ['red', 'green', 'blue', 'yellow'];
// colors.splice(2, 1, 'purple');       // kbhi bhi index ke aage hi  hum elements dalte hai or jo second  index me hume bola jaye ki removed kro to jo first index hai use hi remove karte hai.
// console.log(colors);



                      // 4. SLICE() METHOD//


// let fruits = ['apple', 'banana', 'mango', 'grapes', 'orange'];
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits);
// console.log(fruits);



// let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

// let part = colors.slice(1, 4);
// console.log(part);   // ['green', 'blue', 'yellow']
// console.log(colors); // ['red', 'green', 'blue', 'yellow', 'pink']


                       // 5. forEach METHOD //


// let cities = ['delhi', 'mumbai', 'pune'];

// cities.forEach(function(city) {
//   console.log(city.toUpperCase());
// });


// let num = [2, 4, 6];
// let doubled = [];

// num.forEach(function(num){
//     doubled.push(num * 2);
// });

// console.log(doubled);



// let name = ["vishakha", "riya", "neha"];
// name.forEach(name => {
// console.log("hello" + " " + name);

// });



//       5. MAP() METHOD //

// let nums = [9, 0, 3];

// let doubled = nums.map(function(num) {
//   return num * 2;
// });

// console.log(doubled);  // [2, 4, 6]

// let names = ["vishakha", "paurnima", "sneha"];
// let UpperCase = names.map(function(names){
//     return names.toUpperCase();
// });

// console.log(UpperCase);






                        // MATH METHODS IN JAVASCRIPT..



// let num = Math.random();
// console.log(num);
                        

// let num = Math.floor(Math.random() * 10) + 1;
// console.log(num); 





// let a = 20;
// let b = 40;
// let hcf = 1;

// for (let i = 1; i <= Math.min(a, b); i++) {         // yha hum a ya b bhi likh sakte hai tbhi bhi loop chalega.
//     if (a % i === 0 && b % i === 0) {
//         hcf = i;
//     }
// }

// console.log("HCF of 20 and 40 is: " + hcf);




function findHCF(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }

    if (a === 0) {
        return b;
    } else {
        return a;
    }
}

let num1 = 20;
let num2 = 40;
let hcf = findHCF(num1, num2);

console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf);

