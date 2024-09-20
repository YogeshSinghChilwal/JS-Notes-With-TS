// >, <, >=, <=, ==, !=, ===, !==

if( 2 === "2"){
    console.log("with type checking")
}

if(2 == "2"){
    console.log("without type checking")
}

if( 2 !== "2"){
    console.log("Executed")
}

if(true) console.log("True"), console.log("Unreadable code not suggested!"); //Considered poor practice because it can be confusing to read


// const balance = 1000


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


/*

// Comparison operators
if (2 === "2") {
    console.log("with type checking");
}

if (2 == "2") {
    console.log("without type checking");
}

if (2 !== "2") {
    console.log("Executed");
}

// Improved readability for the condition
if (true) {
    console.log("True");
    console.log("Unreadable code not suggested!"); // Now clearer
}

// const balance: number = 1000; // Uncomment if needed

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn: boolean = true;
const debitCard: boolean = true;
const loggedInFromGoogle: boolean = false;
const loggedInFromEmail: boolean = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

*/