const myObj = {
    js: "java script",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObj) {
    console.log(`${key} --> ${myObj[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// it will not work in map

/* 
// Object with defined key-value pairs
const myObj: { [key: string]: string } = {
    js: "java script",
    cpp: "C++",
    rb: "ruby"
};

for (const key in myObj) {
    // TypeScript can infer that `myObj[key]` is a string because of the type annotation
    if (myObj.hasOwnProperty(key)) {
        console.log(`${key} --> ${myObj[key]}`);
    }
}

// Array of strings
const programming: string[] = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // TypeScript knows that `programming[key]` is a string because the array is of type string[]
    console.log(programming[key]);
}
*/