let myDate = new Date()

console.log(myDate)

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())

console.log(typeof myDate)

/* 

let myDate: Date = new Date();

console.log(myDate); // Logs the current date and time

console.log(myDate.toDateString()); // Returns the date in human-readable format
console.log(myDate.toISOString());  // Returns the date in ISO 8601 format
console.log(myDate.toDateString()); // Same as before, returns human-readable format

console.log(typeof myDate); // Returns 'object', since `myDate` is a Date object
 

*/

const myCreatedDate = new Date(2024, 3, 7)
console.log(new Date("03-07-2024").toLocaleDateString())
console.log(myCreatedDate.toDateString())

console.log(myCreatedDate.getTime())
console.log(Date.now())

console.log(Math.floor(Date.now() / 1000))  //in seconds

/* 

const myCreatedDate: Date = new Date(2024, 3, 7); // April 7, 2024 (months are 0-indexed in Date)

console.log(new Date("03-07-2024").toLocaleDateString()); // Parsing a string date in mm-dd-yyyy format and converting to locale-specific format
console.log(myCreatedDate.toDateString()); // Returns 'Sun Apr 07 2024'

console.log(myCreatedDate.getTime()); // Returns the timestamp (milliseconds since January 1, 1970)
console.log(Date.now()); // Current timestamp in milliseconds

console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds (Unix timestamp)

*/

console.log(new Date().getFullYear())
console.log(new Date().getDay())   // Returns the day of the week as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log(new Date().getDate())

const tempDate = new Date().toLocaleString('default', {
    weekday: "long"
})

console.log(tempDate)