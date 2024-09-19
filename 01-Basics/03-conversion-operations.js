"use strict"

let score = "332a"

console.log(typeof score)

let num = Number(score)

console.log(typeof(num))
console.log(num)

// true => 1, false => 0, undefind => NaN

/* in TS

"use strict";

let score: string = "332a"; // Explicitly declaring 'score' as a string

console.log(typeof score); // Output: string

let num: number = Number(score); // Convert 'score' to a number

console.log(typeof num); // Output: number
console.log(num); // Output: NaN (since "332a" is not a valid number)

*/

let test = "Yogesh"

let isTest = Boolean(test)

console.log(typeof isTest);
console.log( isTest);

// 1, 0.1, 2 => true, 0 => false
// '' => false 'fashdiohg' => true

let vool = true

let str = String(vool)

console.log(str)
console.log(typeof str)

// ********* OPERATIONS **********

console.table([1 + '2', '1' + 2 + 2, 1 + 2 + '2', '1' + (2 + 2)]);
