function myFun () {
    console.log("Hello Yogesh")
}

// myFun ==> reference
myFun()  // => execution

const newFun = myFun

newFun()

/* 

// Define a function type
type MyFunction = () => void;

// Create a function with the specified type
const myFun: MyFunction = () => {
    console.log("Hello Yogesh");
};

// Function declaration using the function keyword
function myFun(): void {
    console.log("Hello Yogesh");
}

// Call the function directly
myFun(); // Output: "Hello Yogesh"

// Assign the function to another variable
const newFun: MyFunction = myFun;

// Call the function via the new variable
newFun(); // Output: "Hello Yogesh"
*/

function add (num1, num2){
    return num1 + num2
}

let sum = add(3, 5);

console.log(sum)

/* 
// Define the types for parameters and return type
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Call the function and store the result in a variable
let sum: number = add(3, 5);

console.log(sum); // Output: 8

*/

function loggedIn (userName) {
    return `${userName} is logged in!`
}

console.log(loggedIn());    //undefined is logged in!

function loginUserMessage(username = "sam"){   // default value
    if(!username){                             // checking if it is undefined or not
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

/*
// Define the function with a default value for userName
function loggedIn(userName: string = "Guest"): string {
    return `${userName} is logged in!`;
}

console.log(loggedIn());      // Output: "Guest is logged in!"
console.log(loggedIn("Yogesh")); // Output: "Yogesh is logged in!"

*/
