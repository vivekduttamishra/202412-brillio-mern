//let b = require('./books');
// let books=b.books;
// let sortOnPrice=b.sortOnPrice;
// let search=b.search;

let {books, sortOnPrice,search} = require('./books')


function displayBooks(books,message=''){
    console.log(message);
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }
}

displayBooks(books,"Original List");

sortOnPrice(books);

displayBooks(books,"Sorted by Price");

let vivekBooks= search(books,'Author','vivek');
displayBooks(vivekBooks,"Vivek Books");