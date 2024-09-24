const promiseOne = new Promise(function (resolve, reject){
    //Do async task
    //DB Calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is completed!")
        resolve()   // connecting resolve with .then
    }, 1000)
})

promiseOne.then(function (){        // .then has a direct connection with resolve
    console.log("Promise consumed");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(() => {
    console.log("Promise 2 consumed");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Yogesh", age: "23"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true

        if(!error){
            resolve({name: "Ravi", pass: 123})
        }else{
            reject('Error: Something went wrong!')
        }
    }, 1000)
})

// const userName = promiseFour.then((user) => {   //? This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: Something went wrong!".
//     return user.name
// })

// console.log(userName);      //! Promise { <pending> }


promiseFour
.then((user) => {
    return user.name        // returned to next .then in the chain
})
.then((userName) => {
    console.log(userName)
})
.catch((err) => {
    console.log(err);
    
})
.finally(() => {
    console.log("The promise is either resolve or rejected");
    
})

/* in TS 

// Promise One
const promiseOne: Promise<void> = new Promise(function (resolve, reject) {
    //Do async task
    //DB Calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is completed!");
        resolve();   // connecting resolve with .then
    }, 1000);
});

promiseOne.then(function (): void {        // .then has a direct connection with resolve
    console.log("Promise consumed");
});

// Promise Two
new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then((): void => {
    console.log("Promise 2 consumed");
});

// Promise Three with typed object
interface User {
    name: string;
    age: string;
}

const promiseThree: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Yogesh", age: "23" });
    }, 1000);
});

promiseThree.then((user: User): void => {
    console.log(user);
});

// Promise Four with error handling
interface UserDetails {
    name: string;
    pass: number;
}

const promiseFour: Promise<UserDetails> = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ name: "Ravi", pass: 123 });
        } else {
            reject('Error: Something went wrong!');
        }
    }, 1000);
});

promiseFour
    .then((user: UserDetails): string => {
        return user.name;        // returned to next .then in the chain
    })
    .then((userName: string): void => {
        console.log(userName);
    })
    .catch((err: string): void => {
        console.log(err);
    })
    .finally((): void => {
        console.log("The promise is either resolved or rejected");
    });

*/

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true

        if(!error){
            resolve({name: "JS", pass: 123})
        }else{
            reject('Error: JS went wrong!')
        }
    }, 1000)
})

// const consumePrimiseFive = async () => {     // async can not handdle the error so we should we should wrap it in try catch block
//     const response = await promiseFive       // if we don't use await then => Promise { <pending> }

//     console.log(response);
    
// }

const consumePrimiseFive = async () => {
    try {
        const response = await promiseFive       

        console.log(response);
    } catch (error) {
        console.log(error);
           
    }
    
}

consumePrimiseFive()

const getAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')      // returning a promise

    const data = await response.json()

    //console.log(data)
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})

/* in TS 

//!  Promise Five with proper types and async/await with try/catch
interface UserInfo {
    name: string;
    pass: number;
}

const promiseFive: Promise<UserInfo> = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ name: "JS", pass: 123 });
        } else {
            reject('Error: JS went wrong!');
        }
    }, 1000);
});

const consumePromiseFive = async (): Promise<void> => {   // Return type is Promise<void>
    try {
        const response: UserInfo = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

// Fetch example with async/await
const getAllUsers = async (): Promise<void> => {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');  // returns a Promise<Response>
        const data = await response.json();  // parsing JSON

        console.log(data);
    } catch (error) {
        console.log('Error fetching users:', error);
    }
};

getAllUsers();

// Fetch example with .then and proper typing
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response: Response) => {
        return response.json();
    })
    .then((data: unknown) => {  // `data` type could be more specific depending on API structure
        console.log(data);
    })
    .catch((err: unknown) => {
        console.log('Error:', err);
    });

*/