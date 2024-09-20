const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const empArr = []

if (empArr.length === 0){
    console.log("Array is empty")
}

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
    
}


//!  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


/*

// Type annotations for arrays and objects
const userEmail: string[] = [];

if (userEmail.length > 0) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Type annotation for an empty array
const empArr: any[] = [];

if (empArr.length === 0) {
    console.log("Array is empty");
}

// Type annotation for an empty object
const empObj: Record<string, any> = {};

if (Object.keys(empObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): handles `null` or `undefined` values
let val1: number | undefined;
val1 = null ?? 10 ?? 20; // Will be 10 since null is ignored

console.log(val1);

// Ternary Operator for conditionals
const iceTeaPrice: number = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

*/