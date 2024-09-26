function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {      //sending this because it does not have its own this or refering to global this
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })       
    Object.defineProperty(this, 'password', {     
        get: function(){
            return this._password
        },
        set: function(value){
            this.password = value
        }
    })       
}

const user1 = new User("Yogi@", 123)
user1.email = "12@"
console.log(user1);

/*

function User(this: any, email: string, password: string) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value: string) {
            this._email = value;
        },
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password;
        },
        set: function (value: string) {
            this._password = value;
        },
    });
}

// Creating a new User object
const user1 = new (User as any)("Yogi@", "123"); // Cast to any because function is not a class

// Setting the email property
user1.email = "12@";

// Output the user1 object
console.log(user1);
console.log(user1.email); // Output: 12@

*/