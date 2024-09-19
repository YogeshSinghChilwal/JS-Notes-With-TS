const num1 = [1, 2, 3, 4, 5]

const num2 = [6, 7, 8, 9, 0]

// num1.push(num2)
// console.log(num1)  // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 0 ] ]

// const num3 = num1.concat(num2);
// console.log(num3);

// const num4 = [...num1, ...num2]
// console.log(num4);


const myArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 0]]]

const my_flat_array = myArray.flat(Infinity)   // infinity => depth (2)
// console.log(my_flat_array)

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("Yogesh"));

const nameArr = Array.from("Yogehs")
console.log(nameArr)       //[ 'Y', 'o', 'g', 'e', 'h', 's' ]

const s1 = 100
const s2 = 200
const s3 = 300
const s = Array.of(s1, s2, s3);

console.log(s)

/* 

const num1: number[] = [1, 2, 3, 4, 5];
const num2: number[] = [6, 7, 8, 9, 0];

// If you use push(), it will add the entire array as a single element (nested array)
// num1.push(num2);
// console.log(num1);  // Output: [1, 2, 3, 4, 5, [6, 7, 8, 9, 0]]

// Concatenation using concat()
// const num3 = num1.concat(num2);
// console.log(num3);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Concatenation using the spread operator
const num4 = [...num1, ...num2];
console.log(num4);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Nested arrays
const myArray: (number | number[])[] = [1, 2, 3, [4, 5], 6, [7, 8, [9, 0]]];

// Flattening the nested array (flat depth = Infinity means complete flattening)
const my_flat_array = myArray.flat(Infinity); // Flattening all levels
console.log(my_flat_array);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Array type checking
console.log(Array.isArray([1, 2, 3])); // true (since it's an array)
console.log(Array.isArray("Yogesh"));  // false (it's a string)

// Array from a string
const nameArr = Array.from("Yogesh");
console.log(nameArr);  // Output: ['Y', 'o', 'g', 'e', 'h', 's']

// Array.of() method: Creates an array from a set of values
const s1: number = 100;
const s2: number = 200;
const s3: number = 300;
const s = Array.of(s1, s2, s3);
console.log(s);  // Output: [100, 200, 300]

*/