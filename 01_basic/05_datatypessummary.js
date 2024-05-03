// primitives:-----7
// String,Number,Boolean,null,undefined,Symbol,BigInt

// :------------------------
// JavaScript is a dynamically typed language, but TypeScript is a statically typed language

// :-------------------------
// non-primitive or Reference:------
// Array
// Objects
// function

// :--------------------------
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); // false

// :---------------------------
const bigNumber = 454545435454n
console.log(bigNumber);

// Array:-----------------
const heros = ["jsd", "js","hs"]
let myObj ={
   name: "ashish", 
   age: 22,
}

// function:------------
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myfunction);