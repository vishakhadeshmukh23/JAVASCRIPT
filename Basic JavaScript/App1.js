//? Comment
// 1. In-line comment
// ex.,
const num = 10; // declared and intialized const variable with value 10.

// 2. Multi-line comment
/* for(let i = 1; i <= num; i++){
    console.log(num);
} */


//? Variable.
//In computer science, data is anything that is meaningful to the computer.
//JavaScript provides eight different data types which are undefined, null,
//  boolean, string, symbol, bigint, number, and object.

//Computers can perform mathematical operations on a number, but not on a string.
//Variables are similar to the x and y variables you use in mathematics, which means 
// they're a simple name to represent the data we want to refer to.

//Variables allow computers to store and manipulate data in a dynamic fashion.
//  They do this by using a "label" to point to the data rather than using the data itself
// . Any of the eight data types may be stored in a variable.

//We tell JavaScript to create or declare a variable by putting the keyword var in front of it

// exaple:-
var ourName;

// In JavaScript we end statements with semicolons. Variable names can be made up of numbers,
//  letters, and $ or _, but may not contain spaces or start with a number.
// ex., 
// wrong way of naming variable, Invalid variable names:
// var 123Name; 
// var name 123;
// right way of naming variables, valid variable names:
var name;
var $data;
var _name; 
var name123;



                           //?Storing Values with the Assignment Operator
//This assigns the Number value 5 to myVariable.
//exaple:-  
var myVariable = 5;

//If there are any calculations to the right of the = operator,
//  those are performed before the value is assigned to the variable on the left of the operator.

//Initializing Variables with the Assignment Operator.
//It is common to initialize a variable to an initial value in the same line as it is declared.
//exaple:- 
var myVar = 0;


                   //?Declare String Variables
// A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.
//exaple:-
var myName = "your name";

                       //?Understanding Uninitialized Variables
//When JavaScript variables are declared, they have an initial value of undefined. 
// If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
//  If you concatenate a string with an undefined variable, you will get a string of undefined.
//exaple:-
var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = "string!";


//In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
//Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase
// and the first letter of each subsequent word is capitalized.

// exaple:-
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

                         //?Explore Differences Between the var and let Keywords.


 //  One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
     // exaple:-(that time not error)
      var camper = "James";
      var camper = "David";
      console.log(camper);
      
     // there is a error
      let camper = "James";
      let camper = "David";


                         //?Declare a Read-Only Variable with the const Keyword

    //The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.  
    
    // exaple:-
    const FAV_PET = "Cats";
    FAV_PET = "Dogs";            //The console will display an error due to reassigning the value of FAV_PET.

     // right code
     const FCC = "freeCodeCamp"; 
     let fact = "is cool!"; 
     fact = "is awesome!";
    console.log(FCC, fact);

                               //?Add Two Numbers with JavaScript.
                           
       //Number is a data type in JavaScript which represents numeric data.
       //JavaScript uses the + symbol as an addition operator when placed between two numbers.
      // Exaple:-
       const myVar = 5 + 10;

                              //?Subtract One Number from Another with JavaScript.

     //JavaScript uses the - symbol for subtraction. 
     // Exaple:- 
     const myVar = 12 - 6;         
     
     
                                //?Create Decimal Numbers with JavaScript

    // Note: when you compute numbers, they are computed with finite precision.
    //Operations using floating points may lead to different results than the desired outcome. 
    //If you are getting one of these results, open a topic on the freeCodeCamp forum.
    //Exaple:-
     const ourDecimal = 5.7;


               

     
let arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 12];

for(let i = 1; i <= arr; i++){
    if(arr % 2 === 0){
        sum+=arr;
    }
    console.log(sum);
    
}