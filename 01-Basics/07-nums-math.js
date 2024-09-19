const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toLocaleString().length)
console.log(balance.toFixed(2))

const num = 23.354

console.log(num.toPrecision(3)) // Returns a string

const hundreds = 100000000

console.log(hundreds.toLocaleString('en-US'))

// ********* MATHS ***********

console.log(Math)

console.log(Math.abs(-3))
console.log(Math.round(4.2))    // 4
console.log(Math.ceil(4.2))     // 5
console.log(Math.floor(4.6))    // 4

console.log(Math.min(3, 7, 4, 1))
console.log(Math.max(3, 7, 4, 1))

console.log(Math.random())  // 0 -- 1

console.log(Math.floor(Math.random() * 6) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/* 

const score: number = 400;

const balance: Number = new Number(100); // Using Number object

console.log(balance);

console.log(balance.toLocaleString().length); // Number object methods work the same
console.log(balance.toFixed(2)); // Fixed-point notation

const num: number = 23.354;

console.log(num.toPrecision(3)); // Returns a string with the specified precision

const hundreds: number = 100000000;

console.log(hundreds.toLocaleString('en-US')); // Localized number format

// ********* MATHS ***********

console.log(Math); // Math object

console.log(Math.abs(-3)); // Absolute value
console.log(Math.round(4.2)); // Rounds to nearest integer (4)
console.log(Math.ceil(4.2));  // Rounds up (5)
console.log(Math.floor(4.6)); // Rounds down (4)

console.log(Math.min(3, 7, 4, 1)); // Returns the smallest value
console.log(Math.max(3, 7, 4, 1)); // Returns the largest value

console.log(Math.random()); // Random number between 0 and 1

console.log(Math.floor(Math.random() * 6) + 1); // Random integer between 1 and 6

const min: number = 10;
const max: number = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20


*/