//? SCOPE IN JAVASCRIPT.

//? Scope ka matlab hota hai ki ek variable ko hum apne code ke kis part mein use kar sakte hain.

//? 1.Global Scope – Jo variable bahar banaya gaya ho, wo poore program me use ho sakta hai.

//? 2.Local Scope – Jo variable function ke andar banaya ho, wo sirf us function ke andar hi chalega.

//? 3.Block Scope – Jo variable {} ke andar (jaise if, for) banaya ho, wo sirf us block ke andar kaam karega.


// 1.🌍Global Scope – (Sab jagah use ho sakta hai).

// let userName = "Vishakha";
// function name(){
//     console.log(userName);
    
// }
// name();
// console.log(userName);


// 2. 🏠 Function Scope (Local Scope).

// function show(){
//     let sarname = "Deshmukh";
//     console.log(sarname);
// }
// show();



// 3. 🔳 Block Scope
//? Jab variable { } ke andar declare hota hai using let ya const.

// {
//     let age = 18;
//     console.log(age);
    
// }



// let name = "Vishakha";

// function myfunc(){
//     var name = "Deshmukh";
// }
// console.log(name);
{
    let name = "Deshmukh";
    console.log(name);
}
console.log(name);
// myfunc();