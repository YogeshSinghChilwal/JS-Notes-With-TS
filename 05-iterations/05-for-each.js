const lang = ['cpp', 'js', 'c#', 'python']

lang.forEach((ele) => {
    //console.log(ele)
})

function printMe(ele){
    //console.log(ele)
}

lang.forEach(printMe)  // printMe is a reference 

lang.forEach((item, index, arr) => {
    console.log(item, index, arr)       //cpp 0 [ 'cpp', 'js', 'c#', 'python' ]
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/* 

// Array of strings
const lang: string[] = ['cpp', 'js', 'c#', 'python'];

// Using forEach with a lambda function
lang.forEach((ele: string) => {
    // console.log(ele);
});

// Function with typed parameter
function printMe(ele: string): void {
    // console.log(ele);
}

// Using forEach with a function reference
lang.forEach(printMe); // printMe is a reference

// Using forEach with item, index, and array
lang.forEach((item: string, index: number, arr: string[]) => {
    console.log(item, index, arr); // 'cpp', 0, ['cpp', 'js', 'c#', 'python']
});

// Array of objects
interface CodingLanguage {
    languageName: string;
    languageFileName: string;
}

const myCoding: CodingLanguage[] = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Iterating over an array of objects
myCoding.forEach((item: CodingLanguage) => {
    console.log(item.languageName);
});

*/