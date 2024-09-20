//!  for-of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const name = "Yogesh"

for (const ele of name) {
    //console.log(ele)
}

const obj = {
    name: "Yogesh",
    age: 23,
    2: 4,
    
}

// for (const element of obj) {        //TypeError: obj is not iterable
//     console.log(element);
    
// }

//!  map - object

const map = new Map()

map.set("name", "Yogesh")
map.set(2, 4)
map.set("age", 23)
map.set({id: 1}, "this is an object")

// console.log(map)

//console.log(map.get(2));

// for (const element of map) {         //[ 'name', 'Yogesh' ]  [ 2, 4 ] so on..
//     console.log(element);
    
// }

//! beter way 

for (const [key, value] of map) {       //name  -->  Yogesh  2  -->  4
    console.log(key, " --> ", value)
}

/*
Methods of Map:

set(key, value): Adds or updates a key-value pair.
get(key): Returns the value associated with the key.
delete(key): Removes the key-value pair.
has(key): Returns true if the key exists.
clear(): Removes all key-value pairs.
size: Returns the number of key-value pairs.
*/

/*

// Array iteration in TypeScript
const arr: number[] = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

// String iteration in TypeScript
const name: string = "Yogesh";

for (const ele of name) {
    // console.log(ele);
}

// Object iteration in TypeScript
const obj: { [key: string]: any } = {
    name: "Yogesh",
    age: 23,
    2: 4,
};

// Objects are not iterable, so you cannot use "for...of" on an object directly
// Use "for...in" for object keys iteration
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, " --> ", obj[key]);
    }
}

// Map iteration in TypeScript
const map: Map<any, any> = new Map();

map.set("name", "Yogesh");
map.set(2, 4);
map.set("age", 23);
map.set({ id: 1 }, "this is an object");

// Iterating through map (key-value pairs)
for (const [key, value] of map) {
    console.log(key, " --> ", value);
}

*/
