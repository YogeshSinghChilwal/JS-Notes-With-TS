// end of the day everything in JS will meat object or we can say act like an object (string, array, functions)

function temp(num){
    
    return num*5
}

temp.power = 3
temp.hero = 4

console.log(temp(3))
console.log(temp.prototype);
console.log(temp.power)
console.log(temp.hero)
console.log(temp.length);


function createUser(userName, score){
    this.userName = userName
    this.score = score
}


createUser.prototype.increment = function(){        // we are injecting a new method to the `createUser` prototype
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
    
}

const user1 = new createUser("yogesh", 3)       //Creating an Instance  here `new` is also telling that we added two new methods to the createUser prototype
user1.increment()
user1.increment()
user1.printMe()


/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/**
//!     Function with properties in TypeScript

function temp(num: number): number {
    return num * 5;
}

// Adding properties to the function
(temp as any).power = 3;
(temp as any).hero = 4;

// Outputting the function and its properties
console.log(temp(3));         // Output: 15
console.log((temp as any).power); // Output: 3
console.log((temp as any).hero);  // Output: 4
console.log(temp.length);     // Output: 1 (number of function parameters)


// Class version of createUser in TypeScript
class CreateUser {
    userName: string;
    score: number;

    constructor(userName: string, score: number) {
        this.userName = userName;
        this.score = score;
    }

    // Increment method
    increment(): void {
        this.score++;
    }

    // Print method
    printMe(): void {
        console.log(`Score is ${this.score}`);
    }
}

// Creating an instance
const user1 = new CreateUser("yogesh", 3);
user1.increment();
user1.increment();
user1.printMe();  // Output: "Score is 5"

 */