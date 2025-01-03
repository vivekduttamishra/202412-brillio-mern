

class Author{

    constructor(name,biography){
        this.name=name;
        this.biography=biography;
        this.books=[];
    }

    addBook(book){
        this.books.push(book);
    }
}

function Book(title,author){
    this.title=title;
    this.author=author;
    this.reviews=[];
    
}
Book.prototype.addReview=function(review){
    this.reviews.push(review);
}

let vivek=new Author('Vivek','Author of The Lost Epic Series');

let manas= new Book('Manas',vivek)

vivek.addBook(manas);

manas.addReview('Great book with interesting characters')
manas.addReview('Great book');