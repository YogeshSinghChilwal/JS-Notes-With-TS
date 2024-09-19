
if(true){
    let a = 4;
    const b = 5;
    var c = 6;
}

// console.log(a)
// console.log(b)
console.log(c)

let x = 500

if(true){
    // console.log("Outer x = ", x)  //ReferenceError: Cannot access 'x' before initialization
    let x = 4
    console.log("Inner x = ", x)
}

console.log(x);

/**

if (true) {
    let a = 4;
    const b = 5;
    var c = 6;
}

// These would throw errors since `a` and `b` are block-scoped, so they are not accessible outside the `if` block.
// console.log(a); // Error: 'a' is not defined
// console.log(b); // Error: 'b' is not defined

console.log(c); // No error, `c` is function-scoped (or globally-scoped in this case due to `var`).

let x = 500;

if (true) {
    // Uncommenting this line will give a ReferenceError since the new `x` (declared inside the block) is in the temporal dead zone until it's initialized.
    // console.log("Outer x = ", x); // ReferenceError: Cannot access 'x' before initialization

    let x = 4; // Block-scoped `x`, separate from the outer `x`.
    console.log("Inner x = ", x); // Logs: Inner x = 4
}

console.log(x); // Logs: 500, the outer `x` is unaffected by the block-scoped `x`.

*/

// funAdd(4)  // ReferenceError: Cannot access 'funAdd' before initialization

const funAdd = function(num){
    return num + 1
}

funAdd(4);


/**  

// Define the type for the parameter and the return type
const funAdd = function(num: number): number {
    return num + 1;
}

// Call the function with a number
funAdd(4);

*/

console.log(funAdd2(4));    // we can declare it above its defination

function funAdd2(num){
    return num + 1
}

