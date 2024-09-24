//* constructor function

//const pro = new Promise
const date = new Date()     //! new -> is act like a constructor function ,not a constructor function itself. Instead, it is used to invoke a constructor function or a class to create a new instance of an object.

function User(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

//!  Using the `new` keyword to create an instance of User
const userOne = new User("Yogesh", 12, true)    // if we use 'new' then we don't require to use return this 
const userTwo = new User("ravi", 22, false)

console.log(userOne)        //* with 'new' --> User { userName: 'Yogesh', loginCount: 12, isLoggedIn: true } without 'new' (return this required) we will get many other properties like fetch
console.log(userOne.userName)

// wihtout 'new' when we try to  create another instance of `User` then we are overwriting the values 

// behind the seens with   `new`

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const yogesh = new Person("Yogesh", 23);  // Creates a new instance

/* 
Here’s what happens when new Person("Yogesh", 23) is called:

👉 An empty object is created: {}
👉 The object’s prototype is set: newObj.__proto__ = Person.prototype
👉 The constructor Person is called with this bound to the new object: Person.call(newObj, "Yogesh", 23)
👉 Properties name and age are assigned to newObj: newObj.name = "Yogesh"; newObj.age = 23
👉 The newly created object is returned.
*/


/**         in TS

// Constructor function in TypeScript
function User(userName: string, loginCount: number, isLoggedIn: boolean) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

// Defining the type for `User` so TypeScript knows the structure
interface User {
    userName: string;
    loginCount: number;
    isLoggedIn: boolean;
}

const userOne = new (User as any)("Yogesh", 12, true);    // TypeScript needs a type cast here
const userTwo = new (User as any)("Ravi", 22, false);

console.log(userOne);
console.log(userOne.userName);
*/


/* 

// User constructor function
class User {
    userName: string;
    loginCount: number;
    isLoggedIn: boolean;

    constructor(userName: string, loginCount: number, isLoggedIn: boolean) {
        this.userName = userName;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    }
}

const userOne = new User("Yogesh", 12, true);    // Using 'new' creates an instance
const userTwo = new User("Ravi", 22, false);

console.log(userOne);       
console.log(userOne.userName); // Output: Yogesh

// Person constructor function
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yogesh = new Person("Yogesh", 23);

*/
