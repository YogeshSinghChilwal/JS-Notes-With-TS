// singleton => Object.create
//"use strict"

// objects literals

const mySymbol = Symbol("key1")

const JsObject = {
    name: "Yogesh",         // behind name => is taken as "name", age => "age" 
    "full name": "Yogesh Singh",     // now we can't access this value using . operator
    age: 23,
    [mySymbol]: "key",
    isLoggedIn: true,
    loginDays: ["Mon", "Tue", "Set"]
}

console.log(JsObject.name);
console.log(JsObject["age"])
console.log(JsObject["full name"])
console.log(JsObject[mySymbol])

JsObject.age = 12;
//Object.freeze(JsObject)
JsObject.age = 22;   // No error, but modification won't happen in non-strict mode


console.log(JsObject)

JsObject.hello = function () {
    console.log(this.age)
}

JsObject.hello()

/*

const mySymbol: symbol = Symbol("key1");

type JsObjectType = {
    name: string;               // Standard string type
    "full name": string;        // Quoted key for a string with spaces
    age: number;                // Number type
    [key: symbol]: string;      // Symbol-based property with string value
    isLoggedIn: boolean;        // Boolean type
    loginDays: string[];        // Array of strings
    hello?: () => void;  // Optional method declaration
};

interface JsObjectType {
    name: string;
    "full name": string;
    age: number;
    [key: symbol]: string;
    isLoggedIn: boolean;
    loginDays: string[];
    hello?: () => void;  // Optional method declaration
}


type JsObjectType = {
    name: string;
    "full name": string;
    age: number;
    [mySymbol]: string;
    isLoggedIn: boolean;
    loginDays: string[];
    
};

const JsObject = {
    name: "Yogesh", // This is a standard key-value pair
    "full name": "Yogesh Singh", // Key with spaces; must be accessed using bracket notation
    age: 23,
    [mySymbol]: "key", // Symbol-based key
    isLoggedIn: true,
    loginDays: ["Mon", "Tue", "Sat"] // Array inside the object
}

// Accessing properties
console.log(JsObject.name);            // Output: "Yogesh"
console.log(JsObject["age"]);          // Output: 23
console.log(JsObject["full name"]);    // Output: "Yogesh Singh"
console.log(JsObject[mySymbol]);       // Output: "key"

// Modifying age (before freezing the object)
JsObject.age = 12;

// Freezing the object would make it immutable
// Object.freeze(JsObject);

JsObject.age = 22; // No error in non-strict mode, but no change if frozen

console.log(JsObject);

// Adding a method to the object
JsObject.hello = function () {
    console.log(this.age);
};

JsObject.hello(); // Output: 22


*/