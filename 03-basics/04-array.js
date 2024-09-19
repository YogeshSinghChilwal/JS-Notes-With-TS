const user = {
    name: "Yogesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our website`)     // this -> refers current context
    },

    
}

//user.welcomeMessage()


//console.log(this)

function fun(){
    console.log(fun)
}

const fun2 = function(){
    console.log("function 2")
    console.log(this)       // not empty
}

const fun3 = () => {
    console.log("Function 3")
    console.log(this)       // empty
}

fun2()
fun3()
// In a regular function, this refers to the object that called the function.
// However, in an arrow function, this is lexically bound, meaning it refers to the surrounding context (the outer scope), which could be the global object or an empty object, depending on where the code is running (e.g., in strict mode or a module).


//! ++++++++++++++  Notes   ++++++++++++++++++

console.log(this); // In a browser, this logs the global 'window' object

console.log(this); // In Node.js, this logs an empty object {}

function logThis() {
    console.log(this);
}

logThis(); // In a browser: logs the 'window' object, in Node.js: logs the global object

const obj1 = {
    name: "Yogesh",
    logThis: function() {
        console.log(this);
    }
};

obj1.logThis(); // Logs the 'obj' object itself because 'this' refers to the object


const arrowFunction = () => {
    console.log(this);
};

arrowFunction(); // In Node.js, logs an empty object {}; In a browser, it logs 'window' if in the global scope


const obj = {
    name: "Yogesh",
    logThis: function() {
        const arrowFunction = () => {
            console.log(this); // 'this' refers to 'obj'
        };
        arrowFunction();
    }
};

obj.logThis(); // Logs the 'obj' object because 'this' is inherited from 'logThis'


console.log(this); // Logs: {} in Node.js

//In Node.js, the global context isn't the same as the browser's global window object.
//When you use this at the top level in a Node.js module (outside of any function), it doesn't refer to the global object (global). 
//Instead, it refers to the module's exports object, which starts as an empty object ({}).


const shortFun = (num1, num2) => num1 + num2 //! implict return

const objReturn = () => ({name: "Yogeh"}) //! returning object
