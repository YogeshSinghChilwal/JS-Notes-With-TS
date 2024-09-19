const myArray = [1, 2, 3, "yogesh", true]

console.log(myArray)

const subArray = myArray

subArray[4] = false

console.log(subArray)
console.log(myArray)   // myArray also get changed because array-copy-operations make shallow copy

const myArray2 = new Array(1, 2, 3, 4)

console.log(myArray2);

// array methods

myArray.push(77);
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray.unshift(99)  // not suggested because we have to shift all remaining elements
console.log(myArray);

myArray.shift()
console.log(myArray);

console.log(myArray.includes(3));
console.log(myArray.indexOf(3));

const newArray = myArray.join()

console.log(newArray)

//slice , splice

console.log(myArray.slice(1, 3));
console.log(myArray);
console.log(myArray.splice(1, 3));  // Modifies the original array by removing or replacing elements.
console.log(myArray);


/*

const myArray: (number | string | boolean)[] = [1, 2, 3, "yogesh", true]; // Mixed type array

console.log(myArray);

const subArray: (number | string | boolean)[] = myArray; // Shallow copy

subArray[4] = false; // Modifying the shallow copy

console.log(subArray);
console.log(myArray); // `myArray` also gets changed because of shallow copy

const myArray2: number[] = new Array(1, 2, 3, 4); // Array with just numbers

console.log(myArray2);

// Array methods
myArray.push(77); // Adds 77 to the end of the array
console.log(myArray);

myArray.pop(); // Removes the last element
console.log(myArray);

myArray.unshift(99); // Adds 99 at the start (less efficient for large arrays)
console.log(myArray);

myArray.shift(); // Removes the first element
console.log(myArray);

console.log(myArray.includes(3)); // Checks if 3 exists in the array
console.log(myArray.indexOf(3)); // Returns the index of 3, or -1 if not found

const newArray: string = myArray.join(); // Joins array elements into a string separated by commas
console.log(newArray);

// slice, splice
console.log(myArray.slice(1, 3)); // Creates a new array from index 1 to 2 (not inclusive of 3)
console.log(myArray); // Original array remains unchanged

console.log(myArray.splice(1, 3)); // Removes 3 elements starting from index 1, modifying the original array
console.log(myArray); // `myArray` is now modified after `splice`

*/
