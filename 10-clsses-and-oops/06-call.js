function setUserName (userName){
    this.userName = userName
    console.log('Called');
    
    
}

function createUser(userName, email, pass){
    setUserName.call(this, userName)      // without `.call` the function is calling but after it ends it's execution context is removed from call stack, so the variables inside it also removed, and we passed createUser's --> `this` which is optional but in this case it will use it , so in function setUserName `this` refers to this current context
    
    //this.userName = userName
    this.email = email
    this.pass = pass
    
}

const user1 = new createUser("Yogesh", "yo@", 123);

console.log(user1);

/* 

// Define an interface for the user
interface User {
    userName: string;
    email: string;
    pass: string;
}

// Function to set the userName, needs proper typing for `this`
function setUserName(this: User, userName: string): void {
    this.userName = userName;
    console.log('Called');
}

// Function to create a user
function createUser(this: User, userName: string, email: string, pass: string): void {
    // Use .call to pass the current context to setUserName
    setUserName.call(this, userName); // `this` is passed explicitly to maintain context

    // Assign email and password to the object
    this.email = email;
    this.pass = pass;
}

// Ensure TypeScript understands that we're using the `createUser` function as a constructor
const user1 = new (createUser as any)("Yogesh", "yo@", 123);

console.log(user1);
*/