try{
    var {search}= require('./utils.js')
}catch(e){

}

var books = [
    {
        id: 'the-accursed-god',
        title: 'The Accursed God',
        author: 'Vivek Dutta Mishra',
        cover: 'https://m.media-amazon.com/images/I/41xektjU1NL._SY445_SX342_.jpg',
        price: 399,
        rating: 4.5,
        reviews: [
            { rating: 5, name: 'Sanjay', title: 'Great Book', text: 'A book of Mahabharata. Waiting for the second part' },
            { rating: 4, name: 'Shivanshi', title: 'Interesting but complicated', text: 'A book of Mahabharata. The beginning appears confusing' },
            { rating: 5, name: 'Prabhat', title: 'Ineteresting Plot', text: 'A book of Mahabharata. Waiting for the second part' },

        ]
    },
    {
        id: 'rashmirathi',
        title: 'Rashmirathi',
        author: 'Ramdhari Singh Dinkar',
        cover: 'https://m.media-amazon.com/images/I/51ForZD4R5L._SY445_SX342_.jpg',
        price: 99,
        rating: 4.7,
        reviews: [
            { rating: 5, name: 'Vivek', title: 'My Favorite', text: 'Finest poetry, unfortuately not factual' },
            { rating: 4, name: 'Shivanshi', title: 'Interesting but complicated', text: 'Was not aware of many things written in the book' },
            { rating: 5, name: 'Prabhat', title: 'Ineteresting Plot', text: 'A book of Mahabharata. Waiting for the second part' },

        ]
    },
    {
        id: 'the-count-of-monte-cristo',
        title: 'The Count of Mone Cristo',
        author: 'alexandre dumas',
        cover: 'https://m.media-amazon.com/images/I/415bCctFbxL._SY445_SX342_.jpg',
        price: 499,
        rating: 4.8,
        reviews: [
            { rating: 5, name: 'Vivek', title: 'One of the greatest classic', text: 'One of my altime favorite books. Read several times' },
            { rating: 5, name: 'Shivanshi', title: 'Nice Plot', text: 'An excellent book' },
            { rating: 5, name: 'Reena', title: 'Ineteresting Plot', text: 'A book of Mahabharata. Waiting for the second part' },

        ]
    },
    {
        id: 'manas',
        title: 'Manas',
        author: 'Vivek Dutta Mishra',
        cover: 'https://m.media-amazon.com/images/I/412eqQc7WNL._SY445_SX342_.jpg',
        price: 199,
        rating: 4.7,
        reviews: [
            { rating: 5, name: 'Sanjay', title: 'Great Book', text: 'A book of Mahabharata in a poetic format. Read several times' },
            { rating: 4, name: 'Shivanshi', title: 'Myth Buster', text: 'Answers several myths of Mahabharata' },
            { rating: 5, name: 'Prabhat', title: 'Mahabharata Courtroom', text: 'A book of Mahabharata. Waiting for the second part' },

        ]
    },
]


class BookManager{
    constructor(){
        this.books= this._loadBook();
        if(this.books.length===0){
            //local storage is empty
            this.books=books; //add hard coded sample books;
            this._save(); //save for future.
        }
            
    }

    _loadBook(){
        try{
            let booksJson = localStorage.getItem('books');
            if(booksJson)
                return JSON.parse(booksJson);
        }catch(e){
            return [];
        }
        return [];
        
    }

    _save(){
        let booksJson= JSON.stringify(this.books);
        console.log('saving',booksJson);
        
        localStorage.setItem('books', booksJson);
    }

    getAllBooks(){return this.books;}

    addBook(book) {
        //write validation logic to check book info is present
        if (!book.title)
            return "Invalid Title";
        if (!book.author)
            return "Missing Author";
        if (!book.price || isNaN(book.price) || book.price < 0)
            return "Invalid Price";
        if (!book.rating || isNaN(book.rating) || book.rating < 1 || book.rating > 5)
            return "Invalid Rating";
    
        this.books.push(book); //save to database;
        this._save();
        return null; //no error.
    }

    getBookById(id){
        id=id.toLowerCase();
        return this.books.find(b=>b.id.toLowerCase()==id);
    }

    deleteBook(id){
        id=id.toLowerCase();
        this.books= this.books.filter(b=>b.id.toLowerCase()!==id);  
        this._save();      
    }

    get size(){ return this.books.length; }

}


function sortOnPrice(books) {

    //let books=displayBooks;
    //let sorted;
    let size = books.length;

    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (books[i].price > books[i + 1].price) {
                let temp = books[i];
                books[i] = books[i + 1];
                books[i + 1] = temp;
                sorted = false; //oh! my assumption was wrong
            }
        }
        size--;
    } while (!sorted);
    //console.log(books);
    //showBookCards(books);

    return books;
}


const byAuthor = author=> book=> book.author.toLowerCase().includes(author.toLowerCase());
const byTitle = title=> book=> book.title.toLowerCase().includes(title.toLowerCase());

var searchByPriceRange=function(books,min,max){
    return search(books, book=> book.price >= min && book.price <= max);
}

function matchAuthor(book,author){
    return book.author.toLowerCase().includes(author.toLowerCase());
}

function matchTitle(book,param){
    if(param.exactMatch)
        return book.title.toLowerCase()===param.title.toLowerCase();
    else
        return book.title.toLowerCase().includes(param.title.toLowerCase());
}


const bookManager=new BookManager();




try {

    module.exports = {
        books: books,
        addBook: addBook,
        bookManager,
        byTitle,
        byAuthor,
        matchAuthor,
        matchTitle,
        
        
    }
} catch (e) {
    //web application.
    //no harm done.
}