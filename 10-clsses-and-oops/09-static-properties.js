class User{
    constructor(userName){
        this.userName = userName
    }

    static logMe(){
        return '123'
    }
}

const user1 = new User("Yogesh")
//console.log(user1.logMe());     // with `static` keyword -> TypeError: user1.logMe is not a function


class Teacher extends User{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const temp = new Teacher("Yogesh", "23@")

temp.logMe()        //TypeError: temp.logMe is not a function

/** in ts 

// User class with static method
class User {
    userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    // Static method
    static logMe(): string {
        return '123';
    }
}

// Creating an instance of the User class
const user1 = new User("Yogesh");

// Cannot call the static method on the instance
// console.log(user1.logMe());   // Error: user1.logMe is not a function

// Call the static method directly from the class
console.log(User.logMe());        // Works fine: 123


// Teacher class extending User
class Teacher extends User {
    email: string;

    constructor(userName: string, email: string) {
        super(userName);
        this.email = email;
    }
}

// Creating an instance of the Teacher class
const temp = new Teacher("Yogesh", "23@");

// You still can't call the static method on an instance of Teacher
// temp.logMe();    // Error: temp.logMe is not a function

// But you can call the static method from the User class or Teacher class itself
console.log(Teacher.logMe());    // Works fine: 123
 */