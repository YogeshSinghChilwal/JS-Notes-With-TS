class User{
    constructor(userName, email, pass){
        this.userName = userName
        this.email = email
        this.pass = pass
    }

    emcryptPassword(){
        return  `${this.pass}abc`
    }

    changeUserName(){
        return this.userName.toUpperCase()
    }
}

const user1 = new User("Yogesh", "yogi@", 123) 

console.log(user1)
console.log(user1.email)
console.log(user1.emcryptPassword());
console.log(user1.changeUserName());


//! Behind the seens

function user(userName, email, pass){
    this.userName = userName
    this.email = email
    this.pass = pass
}

user.prototype.emcryptPassword = function(){
    return `${this.pass}abc`
}

user.prototype.changeUserName = function(){
    return this.userName.toUpperCase()
}

const user2 = new user("Ravi", "cri@", 321)

console.log(user2)
console.log(user2.email)
console.log(user2.emcryptPassword());
console.log(user2.changeUserName());

/* In TS

// Define the User class
class User {
    userName: string;
    email: string;
    pass: string | number;

    // Constructor to initialize the properties
    constructor(userName: string, email: string, pass: string | number) {
        this.userName = userName;
        this.email = email;
        this.pass = pass;
    }

    // Method to encrypt the password
    emcryptPassword(): string {
        return `${this.pass}abc`;
    }

    // Method to change the username to uppercase
    changeUserName(): string {
        return this.userName.toUpperCase();
    }
}

// Create an instance of the User class
const user1 = new User("Yogesh", "yogi@", 123);

console.log(user1);                          // User { userName: 'Yogesh', email: 'yogi@', pass: 123 }
console.log(user1.email);                    // yogi@
console.log(user1.emcryptPassword());        // 123abc
console.log(user1.changeUserName());         // YOGESH


// Behind the scenes (prototype-based approach)

///! Define a user function constructor
function user(userName: string, email: string, pass: string | number) {
    this.userName = userName;
    this.email = email;
    this.pass = pass;
}

// Adding methods to the prototype
user.prototype.emcryptPassword = function (): string {
    return `${this.pass}abc`;
};

user.prototype.changeUserName = function (): string {
    return this.userName.toUpperCase();
};

// Create an instance of the user function constructor
const user2 = new (user as any)("Ravi", "cri@", 321);

console.log(user2);                          // user { userName: 'Ravi', email: 'cri@', pass: 321 }
console.log(user2.email);                    // cri@
console.log(user2.emcryptPassword());        // 321abc
console.log(user2.changeUserName());         // RAVI

*/

//! Factory function to create a User
function createUser(userName, email, pass) {
    return {
        userName: userName,
        email: email,
        pass: pass,

        // Method to encrypt the password
        emcryptPassword: function () {
            return `${this.pass}abc`;
        },

        // Method to change the username to uppercase
        changeUserName: function () {
            return this.userName.toUpperCase();
        }
    };
}

// Creating a user instance using the factory function
const user3 = createUser("Yogesh", "yogi@", 123);

console.log(user3);                          // { userName: 'Yogesh', email: 'yogi@', pass: 123, emcryptPassword: [Function], changeUserName: [Function] }
console.log(user3.email);                    // yogi@
console.log(user3.emcryptPassword());        // 123abc
console.log(user3.changeUserName());         // YOGESH


/*

// Define the interface for a User
interface User {
    userName: string;
    email: string;
    pass: string | number;
    emcryptPassword: () => string;
    changeUserName: () => string;
}

// Factory function to create a User
function createUser(userName: string, email: string, pass: string | number): User {
    return {
        userName,
        email,
        pass,

        // Method to encrypt the password
        emcryptPassword: function (): string {
            return `${this.pass}abc`;
        },

        // Method to change the username to uppercase
        changeUserName: function (): string {
            return this.userName.toUpperCase();
        }
    };
}

// Creating a user instance using the factory function
const user3 = createUser("Yogesh", "yogi@", 123);

console.log(user3);                          // { userName: 'Yogesh', email: 'yogi@', pass: 123, emcryptPassword: [Function], changeUserName: [Function] }
console.log(user3.email);                    // yogi@
console.log(user3.emcryptPassword());        // 123abc
console.log(user3.changeUserName());         // YOGESH
*/