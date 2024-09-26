class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

}

 const newUser = new User("Yogesh", 23)
console.log(newUser.name)




class User2 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()    //! if we use this.email here then it will cause a race condition -> recursion, infinite loop because this.email is trying to access email property, This triggers the getter again, which attempts to retrieve the email value. This causes an infinite loop because each call to this.email triggers another call to the getter. The loop continues until the system runs out of stack space, resulting in a stack overflow.
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User2("h@hitesh.ai", "abc")
console.log(hitesh.email);

/*

class User {
    // Declare private properties with types
    private _email: string;
    private _password: string;

    // Constructor with typed parameters
    constructor(email: string, password: string) {
        this._email = email;    // Store email in a private property
        this._password = password; // Store password in a private property
    }

    // Getter for email that returns the email in uppercase
    get email(): string {
        return this._email.toUpperCase();
    }

    // Setter for email
    set email(value: string) {
        this._email = value;
    }

    // Getter for password that appends "hitesh"
    get password(): string {
        return `${this._password}hitesh`;
    }

    // Setter for password
    set password(value: string) {
        this._password = value;
    }
}

// Creating a new User object
const hitesh = new User("h@hitesh.ai", "abc");

// Accessing the email property
console.log(hitesh.email); // Output: H@HITESH.AI
*/