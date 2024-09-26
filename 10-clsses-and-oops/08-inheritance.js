class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`User Nane is ${this.userName}`);
        
    }
}

class Teacher extends User{
    constructor(userName, subject){
        //this.userName = userName    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(userName)     // in function call.js -> we use .call then passed `this` in this case it hadles automatically
        this.subject = subject
    }

    aboutTeacher(){
        console.log(`Teacher name ${this.userName}, subject: ${this.subject}`);
        
    }
}

const newUser = new Teacher("Yogesh", "CS")   // without  `new` keyword -> TypeError: Class constructor Teacher cannot be invoked without 'new'
console.log(newUser);

newUser.logMe()
newUser.aboutTeacher()
console.log("")


const user1 = new User("Ravi")

console.log(user1);

console.log(newUser === user1)
console.log(newUser instanceof Teacher)
console.log(newUser instanceof User)


/* In TS

// User class
class User {
    userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    logMe(): void {
        console.log(`User Name is ${this.userName}`);
    }
}

// Teacher class extending User
class Teacher extends User {
    subject: string;

    constructor(userName: string, subject: string) {
        // Call the parent class constructor
        super(userName);
        this.subject = subject;
    }

    aboutTeacher(): void {
        console.log(`Teacher name: ${this.userName}, subject: ${this.subject}`);
    }
}

// Creating a new instance of the Teacher class
const newUser = new Teacher("Yogesh", "CS");
console.log(newUser);                  // Logs the newUser object

newUser.logMe();                       // User Name is Yogesh
newUser.aboutTeacher();                // Teacher name: Yogesh, subject: CS
console.log("");

// Creating a new instance of the User class
const user1 = new User("Ravi");

console.log(user1);                    // Logs the user1 object

// Checking equality and instance types
console.log(newUser === user1);         // false
console.log(newUser instanceof Teacher); // true
console.log(newUser instanceof User);    // true
*/