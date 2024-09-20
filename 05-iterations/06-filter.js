const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNum = nums.filter((num) => num % 2 === 0)

console.log(filteredNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks[0].title);


  /*

  // Array of numbers
const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter for even numbers
const filteredNum: number[] = nums.filter((num: number) => num % 2 === 0);

console.log(filteredNum);

// Interface for book objects
interface Book {
    title: string;
    genre: string;
    publish: number;
    edition: number;
}

// Array of books with specific types
const books: Book[] = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books by genre 'History'
let userBooks: Book[] = books.filter((bk: Book) => bk.genre === 'History');

// Filter books published after 1995 and genre 'History'
userBooks = books.filter((bk: Book) => {
    return bk.publish >= 1995 && bk.genre === 'History';
});

console.log(userBooks[0]?.title); // Safe access to avoid error if no books are found

*/