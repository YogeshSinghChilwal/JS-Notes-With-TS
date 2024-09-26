let name = "Yogesh      "

console.log(name.trim().length)     // but we want to do this using console.log(myName.trueLength); which is defining our own method

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yogesh = function (){      // now this yogesh method we directly injected to Object so it is shared to all (arrays, objects, strings)
    console.log(`Yogesh is everywere ${this}`)
}

heroPower.yogesh()  //Yogesh is everywere [object Object]
myHeros.yogesh()    //Yogesh is everywere thor,spiderman

const tempFun = function(){}
tempFun.yogesh()     //Yogesh is everywere function(){}

Array.prototype.yogesh2 = function (){
    console.log(`Yogesh2 is also every were? ${this}`)
}

myHeros.yogesh2()       //Yogesh2 is also every were? thor,spiderman
//heroPower.yogesh2()     //TypeError: heroPower.yogesh2 is not a function
//tempFun.yogesh2()           //TypeError: tempFun.yogesh2 is not a function

//! Inheritance

const user = {
    name: "Yogesh",
    email: "12@.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssiment: 'JS',
    fullTime: true,
    __proto__: teachingSupport,     //! prorotypal inheritance
    temp: teacher
}

teacher.__proto__ = user        //! prorotypal inheritance -> teacher can also access properties of user

console.log(TASupport.temp.makeVideo)
console.log(TASupport.isAvailable)


//* Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

console.log(teachingSupport.makeVideo);


//? now trueLength

String.prototype.trueLength = function(){
    return this.trim().length
}

console.log(name.trueLength())      // 6

/* Type Script

// Declare name variable
let name: string = "Yogesh      ";

console.log(name.trim().length);  // Built-in functionality

// Define the custom method on String prototype
interface String {
    trueLength(): number;
}

String.prototype.trueLength = function (): number {
    return this.trim().length;
};

// Using our custom trueLength method
console.log(name.trueLength());  // 6


// Define an array of heroes
let myHeros: string[] = ["thor", "spiderman"];

// Define an object for hero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Extending Object prototype with a custom method
interface Object {
    yogesh(): void;
}

Object.prototype.yogesh = function (): void {
    console.log(`Yogesh is everywhere ${this}`);
};

// Test the new method on different object types
heroPower.yogesh();  // Yogesh is everywhere [object Object]
myHeros.yogesh();    // Yogesh is everywhere thor,spiderman

const tempFun = function () { };
tempFun.yogesh();    // Yogesh is everywhere function () {}


// Extending Array prototype with a custom method
interface Array<T> {
    yogesh2(): void;
}

Array.prototype.yogesh2 = function (): void {
    console.log(`Yogesh2 is also everywhere ${this}`);
};

myHeros.yogesh2();   // Yogesh2 is also everywhere thor,spiderman
// heroPower.yogesh2();  // TypeError: heroPower.yogesh2 is not a function
// tempFun.yogesh2();    // TypeError: tempFun.yogesh2 is not a function


// Prototypal Inheritance Example
interface User {
    name: string;
    email: string;
}

const user: User = {
    name: "Yogesh",
    email: "12@.com"
};

interface Teacher {
    makeVideo: boolean;
}

const teacher: Teacher = {
    makeVideo: true
};

interface TeachingSupport {
    isAvailable: boolean;
}

const teachingSupport: TeachingSupport = {
    isAvailable: false
};

// TASupport object with prototypal inheritance
interface TASupport extends TeachingSupport {
    makeAssiment: string;
    fullTime: boolean;
    temp: Teacher;
}

const TASupport: TASupport = {
    makeAssiment: 'JS',
    fullTime: true,
    __proto__: teachingSupport,
    temp: teacher
};

// Teacher inherits from user
Object.setPrototypeOf(teacher, user);

console.log(TASupport.temp.makeVideo);  // true
console.log(TASupport.isAvailable);     // false

// Modern Syntax for setting prototype
Object.setPrototypeOf(teachingSupport, teacher);

console.log(teachingSupport.makeVideo); // true
*/