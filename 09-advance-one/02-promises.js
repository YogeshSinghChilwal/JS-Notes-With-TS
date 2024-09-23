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

