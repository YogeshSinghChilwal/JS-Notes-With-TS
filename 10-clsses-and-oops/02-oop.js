//* Object Literal

const user = {
    name: "Yogesh",
    age: 23,
    phoneNum: 123,

    getUserDetail() {       //! normal function _ _
        //console.log(this.phoneNum)
        
        //console.log(phoneNum)   // ReferenceError: phoneNum is not defined
        //Since you are trying to use phoneNum directly inside the arrow function without using this, 
        //JavaScript is looking for a local variable named phoneNum in the scope of the arrow function and doesn't find it, 
        //leading to the ReferenceError: phoneNum is not defined.
    },

 
}

//! Yes, you can use an arrow function, but with arrow functions, you cannot use this the way you would in a regular function. 
//! Arrow functions inherit this from the surrounding scope, so in your case, using this.phoneNum inside the arrow function won't work as expected.

//console.log(user.name);
user.getUserDetail()
//console.log(user.getUserDetail());


//! Now if have to name user2 we have to redefine it => and this is a problem
const user2 = {
    name: "Yogesh",
    age: 23,
    phoneNum: 123,

    getUserDetail() {
        console.log(this.phoneNum)
    },
}

/*
interface User {
    name: string;
    age: number;
    phoneNum: number;
    getUserDetail: () => void;
}

const user2: User = {
    name: "Yogesh",
    age: 23,
    phoneNum: 123,

    getUserDetail() {
        console.log(this.phoneNum);  // 'this' currently refers to user2 object
    },
};

user2.getUserDetail();  // This will print 123
*/

