const discripter = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(discripter) 
/*
{
  value: 3.141592653589793,
! writable: false,      we can not overwrite PI 
  enumerable: false,
  configurable: false
}
*/

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const user = {
    name: "Yogesh",
    age: 23,
    userName: function(){
        console.log(this.name);
        
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
{
  value: 'Yogesh',
!  writable: true,
  enumerable: true,
  configurable: true
}
  */

Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(user, "name"));

/*
{
  value: 'Yogesh',
!  writable: false,
  enumerable: false,
  configurable: true
}
  */

for (let [key, value] of Object.entries(user)) {        // we will get only age: 23 because enumerable is false so we can not loop 
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


//! IN TypeScript

//? TypeScript recognizes Math.PI is a constant and not writable.
// const discripter: PropertyDescriptor | undefined = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(discripter);
/*
{
  value: 3.141592653589793,
! writable: false,      we cannot overwrite PI
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// Math.PI = 5; // Will not change because PI is not writable
// console.log(Math.PI);

// Defining a user object with properties
// const user = {
//     name: "Yogesh",
//     age: 23,
//     userName: function(): void {
//         console.log(this.name);
//     }
// };

// Getting the property descriptor for the 'name' property in the user object
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
{
  value: 'Yogesh',
!  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Changing the 'name' property descriptor to make it non-writable and non-enumerable
// Object.defineProperty(user, "name", {
//     writable: false,
//     enumerable: false,
// });

// Checking the updated property descriptor
//console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
{
  value: 'Yogesh',
!  writable: false,
  enumerable: false,
  configurable: true
}
*/

// Looping through the properties of the user object
// for (let [key, value] of Object.entries(user)) { 
//     // Since 'name' is non-enumerable, only 'age' will be logged
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }

