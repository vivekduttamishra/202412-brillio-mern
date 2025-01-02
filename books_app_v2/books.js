var books=[
    {
        id:'the-accursed-god',
        title:'The Accursed God',
        author:'Vivek Dutta Mishra',
        cover:'https://m.media-amazon.com/images/I/41xektjU1NL._SY445_SX342_.jpg',
        price: 399,
        rating: 4.5,
        reviews:[
            {rating:5, name:'Sanjay', title:'Great Book', text:'A book of Mahabharata. Waiting for the second part'},
            {rating:4, name:'Shivanshi', title:'Interesting but complicated', text:'A book of Mahabharata. The beginning appears confusing'},
            {rating:5, name:'Prabhat', title:'Ineteresting Plot', text:'A book of Mahabharata. Waiting for the second part'},
            
        ]
    },
    {
        id:'rashmirathi',
        title:'Rashmirathi',
        author:'Ramdhari Singh Dinkar',
        cover:'https://m.media-amazon.com/images/I/51ForZD4R5L._SY445_SX342_.jpg',
        price: 99,
        rating: 4.7,
        reviews:[
            {rating:5, name:'Vivek', title:'My Favorite', text:'Finest poetry, unfortuately not factual'},
            {rating:4, name:'Shivanshi', title:'Interesting but complicated', text:'Was not aware of many things written in the book'},
            {rating:5, name:'Prabhat', title:'Ineteresting Plot', text:'A book of Mahabharata. Waiting for the second part'},
            
        ]
    },
    {
        id:'the-count-of-monte-cristo',
        title:'The Count of Mone Cristo',
        author:'Alexandre Dumas',
        cover:'https://m.media-amazon.com/images/I/415bCctFbxL._SY445_SX342_.jpg',
        price: 499,
        rating: 4.8,
        reviews:[
            {rating:5, name:'Vivek', title:'One of the greatest classic', text:'One of my altime favorite books. Read several times'},
            {rating:5, name:'Shivanshi', title:'Nice Plot', text:'An excellent book'},
            {rating:5, name:'Reena', title:'Ineteresting Plot', text:'A book of Mahabharata. Waiting for the second part'},
            
        ]
    },
    {
        id:'manas',
        title:'Manas',
        author:'Vivek Dutta Mishra',
        cover:'https://m.media-amazon.com/images/I/412eqQc7WNL._SY445_SX342_.jpg',
        price: 199,
        rating: 4.7,
        reviews:[
            {rating:5, name:'Sanjay', title:'Great Book', text:'A book of Mahabharata in a poetic format. Read several times'},
            {rating:4, name:'Shivanshi', title:'Myth Buster', text:'Answers several myths of Mahabharata'},
            {rating:5, name:'Prabhat', title:'Mahabharata Courtroom', text:'A book of Mahabharata. Waiting for the second part'},
            
        ]
    },
]


function addBook(book){
    //write validation logic to check book info is present
    if(!book.title)
        return "Invalid Title";
    if(!book.author)
        return "Missing Author";
    if(! book.price || isNaN(book.price) || book.price < 0)
        return "Invalid Price";
    if(!book.rating || isNaN(book.rating) || book.rating<1 || book.rating>5)
        return "Invalid Rating";
    
    books.push(book); //save to database;

    return null; //no error.
}

function sortOnPrice(books) {

    //let books=displayBooks;
    //let sorted;
    let size = books.length;

    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (books[i].price > books[i+1].price) {
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


function sortOnRating(books) {
    let size = books.length;
    //let books=displayBooks;
    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (books[i].rating < books[i+1].rating) {
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

function sortOnAuthor(books){
    //let books=displayBooks;
    let size = books.length;

    do {
        var sorted = true; //optimisitic assumption that the  list is sorted
        for (let i = 0; i < size - 1; i++) {
            if (books[i].author.toLowerCase() > books[i+1].author.toLowerCase()) {
                let temp = books[i];
                books[i] = books[i + 1];
                books[i + 1] = temp;
                sorted = false; //oh! my assumption was wrong
            }
        }
        size--;
    } while (!sorted);
    //showBookCards(books);
    return books;
}


function search(books,criteria, query) {
    //let criteria=criteriaList.value;
    //let query=searchTextBox.value;
    query=query.toLowerCase();
    let result=[];

    for(let book of books){
        if(criteria=='Title' && book.title.toLowerCase().includes(query))
            result.push(book);
        else if(criteria=='Author' && book.author.toLowerCase().includes(query))
            result.push(book);
        else if(criteria=='Price Range'){
            let range= query.split('-');
            let min = +range[0];
            let max = +range[1];
            if(book.price>=min && book.price<max){
                result.push(book);
            }
        }
        else if (criteria=='Rating Range'){
            let range= query.split('-');
            let min = +range[0];
            let max = +range[1];
            if(book.rating>=min && book.rating<max){
                result.push(book);
            }
        }
    }

    //displayBooks=result;
    //showBookCards(displayBooks);
    
    return result;

}


try{
    
    module.exports={
        books:books,
        addBook:addBook,
        sortOnAuthor, //same as sortOnAuthor:sortOnAuthor
        sortOnPrice,
        sortOnRating,
        search
    }
}catch(e){
    //web application.
    //no harm done.
}