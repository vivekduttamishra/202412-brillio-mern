let {books,byAuthor,matchAuthor,matchTitle} = require('./books.js');
let {search,inRange,inclusiveRange,any,contains,and} = require('./search.js');

function displayBooks(books, message = '') {
    console.log(message);
    for (let book of books) {
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }
}

displayBooks(books,'Original List');

let vivekBooks= search(books, byAuthor('vivek'));
displayBooks(vivekBooks,'Books by vivek');


let dumasBooks = search(books, matchAuthor, 'dumas');
displayBooks(dumasBooks,'Books by Dumas');

let highRatedBooks = search(books, inRange('rating',4.6,5));
displayBooks(highRatedBooks,'High-Rated Books');

//let inexpensiveBooks = search(books, inRange('price', 0,200));

let inexpensiveBooks = search(books, inclusiveRange, 'price',0,200); //{field: 'price', min:0, max:200}
displayBooks(inexpensiveBooks,'Inexpensive Books');

let bookTitledThe = search(books, matchTitle, {title:'The Accursed God',exactMatch:true});

displayBooks(bookTitledThe,'Books Titled The');


//books by dinkar or archer

let result = search(books, any( contains('author','dinkar'), contains('author','dumas')));

displayBooks(result,'Books by Dinkar or Dumas');

//books by vivek under price 300
result = books.search(and(contains('author','vivek'), b=>b.price<300));
displayBooks(result,'Books by Vivek under price 300');
