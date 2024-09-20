const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

const totalNums = myNum.reduce((acc, currVal) => {
    console.log(`Acc val:- ${acc}, Curr Val:- ${currVal}`);
    
    return acc + currVal
}, 10)

console.log(totalNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

/*

// Array of numbers
const myNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// Using reduce with typed accumulator and current value
const totalNums: number = myNum.reduce((acc: number, currVal: number): number => {
    console.log(`Acc val:- ${acc}, Curr Val:- ${currVal}`);
    return acc + currVal;
}, 10);

console.log(totalNums);

// Interface to define the structure of each item in the shopping cart
interface CartItem {
    itemName: string;
    price: number;
}

// Array of cart items with defined type
const shoppingCart: CartItem[] = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Using reduce to calculate the total price with typed accumulator and item
const priceToPay: number = shoppingCart.reduce((acc: number, item: CartItem): number => acc + item.price, 0);

console.log(priceToPay);

*/