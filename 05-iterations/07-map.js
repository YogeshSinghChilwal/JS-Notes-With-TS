const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = nums.map((num) => {
    return num + "!"
})

// console.log(newNums)

const tempNums = nums.map((num) => num * 10).map((num) => num - 1).filter((num) => num % 3 === 0)

console.log(tempNums);

/*

// Array of numbers
const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Mapping over the array and appending "!" to each number (converting it to a string)
const newNums: string[] = nums.map((num: number): string => {
    return num + "!";
});

// console.log(newNums);

// Chaining map and filter functions
const tempNums: number[] = nums
    .map((num: number): number => num * 10) // Multiply each number by 10
    .map((num: number): number => num - 1)  // Subtract 1 from each number
    .filter((num: number): boolean => num % 3 === 0); // Filter numbers divisible by 3

console.log(tempNums);

*/