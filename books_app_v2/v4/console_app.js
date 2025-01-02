//let b = require('./books');
// let books=b.books;
// let sortOnPrice=b.sortOnPrice;
// let search=b.search;

let {books, sortOnPrice,searchByPriceRange} = require('./books')


function displayBooks(books,message=''){
    console.log(message);
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }
}

displayBooks(books,"Original List");

sortOnPrice(books);

displayBooks(books,"Sorted by Price");

let cheapBooks= searchByPriceRange(books,0,200);
displayBooks(cheapBooks,"Cheap Book");