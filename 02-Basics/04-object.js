const user = new Object()

user.id = '123asd'
user.name = 'Yogesh'
user.loggedIn = true


console.log(Object.keys(user))      //[ 'id', 'name', 'loggedIn' ]
console.log(Object.values(user))      //[ '123asd', 'Yogesh', true ]
console.log(Object.entries(user))      //[ [ 'id', '123asd' ], [ 'name', 'Yogesh' ], [ 'loggedIn', true ] ]
console.log(user.hasOwnProperty("loggedIn"))        //true

//console.log(user)

/*  in Type Script

type User = {
    id: string;
    name: string;
    loggedIn: boolean;
};

const user: User = new Object() as User; // Type assertion is necessary because `new Object()` returns an empty object.

user.id = '123asd';
user.name = 'Yogesh';
user.loggedIn = true;

console.log(user);
*/

const regularUser = {
    email: "yogesh@",
    fullName: {
        userFullName: {
            firstName: "Yogesh",
            lastName: "Chilwal"
        }
    }
}

//console.log(regularUser)

/*

// Define types for the nested structure of the object
type FullName = {
    firstName: string;
    lastName: string;
};

type UserFullName = {
    userFullName: FullName;
};

type RegularUser = {
    email: string;
    fullName: UserFullName;
};

// Create an object with the defined type
const regularUser: RegularUser = {
    email: "yogesh@",
    fullName: {
        userFullName: {
            firstName: "Yogesh",
            lastName: "Chilwal"
        }
    }
};

console.log(regularUser);

*/

const user1 = {
    1: "a",
    2: "b"
}

const user2 = {
    3: "c",
    4: "d"
}

const user3 = { ...user1, ...user2}
const user4 = Object.assign({}, user1, user2);  // {} is optional but it's a good practice actually is target element if we don't use it then user1 will be target element

console.log(user4)

/*

// Define a type for the objects with numeric keys and string values
type UserObject = {
    [key: number]: string;
};

// Define user1 and user2 with the UserObject type
const user1: UserObject = {
    1: "a",
    2: "b"
};

const user2: UserObject = {
    3: "c",
    4: "d"
};

// Merge user1 and user2 using spread syntax
const user3: UserObject = { ...user1, ...user2 };

// Merge user1 and user2 using Object.assign
const user4: UserObject = Object.assign({}, user1, user2);

console.log(user4); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }


*/