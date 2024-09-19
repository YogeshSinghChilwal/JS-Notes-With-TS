"use strict"
const value = {
    val1: "abd",
    val2: 123
}

const {val1: value1} = value

console.log(value1)

/*

"use strict";

// Define a type for the object structure
type ValueType = {
    val1: string;
    val2: number;
};

// Create an object with the defined type
const value: ValueType = {
    val1: "abd",
    val2: 123
};

// Destructure the object to extract `val1` as `value1`
const { val1: value1 } = value;

console.log(value1); // Output: "abd"


*/