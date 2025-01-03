

function createAuthor(name,biography){
    let author=new Object();

    author.name=name;
    author.biography=biography;
    author.books=[];
    author.addBook=function(book){
        book.author=this;
        this.books.push(book);
    }     

    return author;
}

let gandhi= createAuthor('Mahatma Gandhi', 'Freedom fighter');

let dumas= createAuthor('Alexandre Dumas', 'One of the altime greatest classical author in French');


function Book(title,price,author){
    //let book = {}

    //this doesn't exist yet.
    //it will refer to object that will be created later
    this.title=title;
    this.price=price;
    this.reviews=[];
    this.addReview=function(review){
        this.reviews.push(review);
        
    }
    author.addBook(this);

    //return book;
}


let book1= new Book('My Experiments with Truth', 250, gandhi);

console.log('book1.__proto__'   ,book1.__proto__)  ; //prototype of book;
