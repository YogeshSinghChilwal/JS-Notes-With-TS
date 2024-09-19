const str1 = 'Yogesh'

const str2 = new String('Ravi');

console.log(str2.toUpperCase());
console.log(str2)
console.log(str1.toUpperCase())
console.log(str1)

const obj = {
    name: "Yogesh"
}

console.log(obj.name.toUpperCase())
console.log(obj.name)
console.log(obj)

/* const str1: string = 'Yogesh';

const str2: String = new String('Ravi'); // String wrapper object

console.log(str2.toUpperCase()); // This works since `String` has `toUpperCase()` method.
console.log(str2); // Will print the String object with properties like `length`.
console.log(str1.toUpperCase()); // This works since `str1` is a string.
console.log(str1); // Will print the primitive string 'Yogesh'.

// Defining an object with a typed property
const obj: { name: string } = {
    name: "Yogesh"
};

console.log(obj.name.toUpperCase()); // Uppercasing the object's `name` property.
console.log(obj.name); // Printing the primitive string value 'Yogesh'.
console.log(obj); // Printing the whole object.
*/

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

/* 

const name: string = "hitesh";
const repoCount: number = 50;

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName: string = 'hitesh-hc-com';

// Access string character and methods
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// Substring and slice
const newString: string = gameName.substring(0, 4);
console.log(newString);

const anotherString: string = gameName.slice(-8, 4); // `slice` can be tricky, here it returns an empty string because the start index is after the end index.
console.log(anotherString);

const newStringOne: string = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url: string = "https://hitesh.com/hitesh%20choudhary";

// String replacement and includes
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

// Split a string
console.log(gameName.split('-'));


*/

