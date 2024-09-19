//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction()

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* TS


const score: number = 100;
const scoreValue: number = 100.3;

const isLoggedIn: boolean = false;
const outsideTemp: null = null;  // Explicitly declared as 'null'
let userEmail: string | undefined;  // 'userEmail' can be either a string or undefined

const id: symbol = Symbol('123');
const anotherId: symbol = Symbol('123');

console.log(id === anotherId); // false, because symbols are always unique

// Uncomment if your TypeScript version supports BigInt
// const bigNumber: bigint = 3456543576654356754n;  // Type 'bigint' represents BigInt numbers



// Arrays, Objects, Functions

const heros: string[] = ["shaktiman", "naagraj", "doga"];  // Array of strings

let myObj: { name: string; age: number } = {
    name: "hitesh",
    age: 22,
};

const myFunction: () => void = function () {
    console.log("Hello world");
};

console.log(typeof anotherId);  // symbol


*/