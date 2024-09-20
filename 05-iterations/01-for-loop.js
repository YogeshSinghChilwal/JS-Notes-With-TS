// for loop 

for (let i = 0; i < 100; i++) {
    const element = i;
    //console.log(element)
}

// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(i + ' X ' + j + ' = ' + i*j);   
//     }
//     console.log("")
// }

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

// break & continue

// for (let index = 0; index <= 10; index++) {
//     if(index === 5){
//         console.log("Detected")
//         break
//     }

//     console.log(index)    
// }


for (let index = 0; index <= 10; index++) {
    if(index === 5 || index === 7){
        console.log("Detected")
        continue
    }

    console.log(index)    
}

/*

// for loop
for (let i: number = 0; i < 100; i++) {
    const element: number = i;
    // console.log(element)
}

// Nested for loop (multiplication table)
for (let i: number = 1; i <= 10; i++) {
    for (let j: number = 1; j <= 10; j++) {
        console.log(i + ' X ' + j + ' = ' + i * j);   
    }
    console.log("");
}

// Array iteration
let myArray: string[] = ["flash", "batman", "superman"];

for (let index: number = 0; index < myArray.length; index++) {
    const element: string = myArray[index];
    // console.log(element)
}

// Break and continue examples

// Example with break
for (let index: number = 0; index <= 10; index++) {
    if (index === 5) {
        console.log("Detected");
        break;
    }

    console.log(index);
}

// Example with continue
for (let index: number = 0; index <= 10; index++) {
    if (index === 5 || index === 7) {
        console.log("Detected");
        continue;
    }

    console.log(index);
}

*/