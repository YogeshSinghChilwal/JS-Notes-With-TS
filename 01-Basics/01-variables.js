"use strict";

console.log("Yogesh")


const id = 123;
let name = "yogesh"
var email = "you@.com"
city = "nainital"       // After using "use strict" --> ReferenceError: city is not defined

//id = 321;  // On run time --> TypeError: Assignment to constant variable.

console.log(id)


city = "Bhimtal"

console.table([id, name, email, city])

/* In Type script 

console.log("Yogesh");

const id: number = 123; // 'id' is a constant number
let name: string = "yogesh"; // 'name' is a string
let email: string = "you@.com"; // 'email' is a string
let city: string = "nainital"; // Declare 'city' as a string

// id = 321; // This would still cause an error: TypeError: Assignment to constant variable.

console.log(id);

city = "Bhimtal"; // Reassigning 'city' is fine because it's declared with 'let'

console.table([id, name, email, city]);

*/