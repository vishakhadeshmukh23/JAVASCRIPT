//? In JavaScript, a string is a sequence of characters used to represent text.
//? Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (``).

// Strings are immutable (once created, they can't be changed directly).
// exaple:-
        //    let name = "Vishu";
        //    name[0] = "M";                        // Galat tarika (ye kaam nahi karega):
        //    console.log(name);           // Output: Vishu (change nahi hua)


// slice method
// let name = "my name is vishu";
// console.log(name.slice(11, 16));



// replace()
// let say = "what is you name";
// console.log(say.replace("what is you name", "my name is vishakha"));


//concat
// let say = "vishu";
// let saty = "deshmukh";
// let message = say.concat(" "+ saty,  " hello ", " how are you ");
// console.log(message);


//? JavaScript me +, -, *, / ke Rules (Strings ke sath)

// 🔸 Rule 1: + (Plus) ka use string ke saath concatenation karta hai
// Agar koi ek value string hai, to JavaScript dono ko string bana deta hai.
// //exaple:- 
//     "10" + 5     // → "105"  (string)
//      5 + "10"     // → "510"
//      "Hi" + 5     // → "Hi5"


// 🔸 Rule 2: -, *, / try karta hai numbers me convert karne ka
// Agar strings me number ho, to JavaScript automatic string ko number me convert karke operation karta hai.
// //exaple:-
//            "10" - 5     // → 5
//            "6" * "3"    // → 18
//            "20" / 4     // → 5


 //🔸 Rule 3: Agar string number nahi hai, to result hota hai NaN (Not a Number)
 //expale:-
        //    "abc"-10    //NaN
        //    "hi"* 23    //NaN
        //    "hello"/2   //NaN

 // 🔸 Rule 4: Order matters!
 // exaple:- 
            //  10 + 5 + "3"     // → "153" → (10+5 = 15, then + "3" → "153")
            //  "3" + 10 + 5     // → "3105" → ("3"+10 = "310", then +5 → "3105")

             //?🔁 Conversion Trick: Number(), String()
//Method	Use
//Number("50")	String ko number banata hai
//String(100)	Number ko string banata hai

//exaple:-
        //   Number("40") + 10     // → 50
        //   String(40) + 10       // → "4010"

           
/*
1. length
2. charAt()
3. toUpperCase()
4. toLowerCase()
5.  toLocaleLowerCase("tr")
6. localeCompare()
7. strcmp()
8. String()
9. substring()
10.  indexOf()

11. valueOf()
12. toString()
13. split()
14. includes().
15. replace().
*/

// skip cerector search karna hai


// let name = "  vishakha /t: ";
// console.log(name.length);


// let sar = "/n Deshmukh /n";
// console.log(sar.length);

let msg = "hello sneha";
let newMsg = msg.replace("vishakha",/vishakha/g);
console.log(newMsg);




