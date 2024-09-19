function calculateCartPrice(val1, val2, ...num1){       //num1 is a rest parameter, which means it will capture the remaining arguments as an array of numbers.

    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000, 4000))

/*
// Define the function with typed parameters
function calculateCartPrice(val1: number, val2: number, ...num1: number[]): number[] {
    return num1;
}

// Call the function and log the result
console.log(calculateCartPrice(200, 400, 500, 2000, 4000)); // Output: [500, 2000, 4000]
*/

const user = {
    name: "yogesh",
    id: 123
}

function printUser(anyObj){
    console.log(`User name is ${anyObj.name} id is ${anyObj.id}`);
}

//printUser(user);
printUser({
    name: "Yogesh",
    id: 123
})


const myArray = [1, 2, 3, 4, 5]

function printSecondVal(arr){
    console.log(arr[1]);
}

//printSecondVal(myArray)
printSecondVal([1, 2, 3, 4])

/* 
// Defining the user object type
interface User {
    name: string;
    id: number;
}

// Example object matching the User type
const user: User = {
    name: "yogesh",
    id: 123
}

// Function that accepts any object and ensures it conforms to the User type
function printUser(anyObj: User): void {
    console.log(`User name is ${anyObj.name} id is ${anyObj.id}`);
}

// Calling the function with an object matching the User type
printUser({
    name: "Yogesh",
    id: 123
})

// Defining the function that prints the second value of an array
function printSecondVal(arr: number[]): void {
    console.log(arr[1]);
}

// Calling the function with an array of numbers
printSecondVal([1, 2, 3, 4]);
*/