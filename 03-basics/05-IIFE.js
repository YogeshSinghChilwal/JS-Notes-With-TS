//! Immediately Invoked Function Expression (IIFE)

(
    
    function add(){
        let num = 3

        //console.log(num + 2)
    }
)()

for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Output: 6, 6, 6, 6, 6

for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i);
}
// Output: 1, 2, 3, 4, 5

(
    (name) => {
        console.log(name)
    }
)("Yogesh");   //! now this -> ; is necessary without this  => TypeError: (intermediate value)(...) is not a function because we have to end this function


(
    (name) => {
        console.log(name)
    }
)("Yogesh")


/**

// Immediately Invoked Function Expression (IIFE) in TypeScript
(
    function add(): void {  // Specify return type
        let num: number = 3; // Define 'num' with type 'number'

        //console.log(num + 2);
    }
)();

for (let i = 1; i <= 5; i++) {  // Use 'let' instead of 'var' for block-scoped variable
    setTimeout(function() {
        console.log(i);  // 'i' is now block-scoped, so output will be 1, 2, 3, 4, 5
    }, 1000);
}
// Output: 1, 2, 3, 4, 5

// Using IIFE to preserve the value of 'i' in each iteration
for (let i = 1; i <= 5; i++) {  // 'let' is sufficient here in TypeScript
    (function(i: number) {  // Specify 'i' as number
        setTimeout(function() {
            console.log(i);  // Output will be 1, 2, 3, 4, 5
        }, 1000);
    })(i);
}

// IIFE with arrow function
(
    (name: string): void => {  // 'name' is string, return type is void
        console.log(name);
    }
)("Yogesh"); // 'Yogesh' is passed as an argument

// Example without the final semicolon
(
    (name: string): void => {  // Same as above, 'name' is string
        console.log(name);
    }
)("Yogesh");

*/