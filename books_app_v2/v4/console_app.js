//let b = require('./books');
// let books=b.books;
// let sortOnPrice=b.sortOnPrice;
// let search=b.search;

let { sort } = require('./utils')
let { books } = require('./books')


function displayBooks(books, message = '') {
    console.log(message);
    for (let book of books) {
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }
}

displayBooks(books, "Original List");

sort(books, (b1, b2) => b1.price <= b2.price);

displayBooks(books, "Sorted On Price");

sort(books, (b1, b2) => b1.rating >= b2.rating)

displayBooks(books, "Sorted On Rating");

//sort books on author and if author is same on title
sort(books, (b1, b2) => {

    if (b1.author.toLowerCase() !== b2.author.toLowerCase())
        return b1.author.toLowerCase() <= b2.author.toLowerCase();
    else
        return b1.title.toLowerCase() <= b2.title.toLowerCase()
});

displayBooks(books, "Sorted On Author and Title");