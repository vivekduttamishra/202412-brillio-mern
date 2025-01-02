//let b = require('./books');
// let books=b.books;
// let sortOnPrice=b.sortOnPrice;
// let search=b.search;
try{

    var {books, sortOnPrice,search} = require('./books')
}catch(e){
    //its a web app.
    //no problem functions are included.
}


let app= (function(){
    let selectedBooks;;
    
    function showBooks(books,message=''){
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = message;
        
        let booksDiv= document.getElementById('books');
        let cards = '';
    
        for (let book of books) {
            let card = `
            <div class="card" id="${book.id}">
                    <img 
                        id="image-1"
                        src="${book.cover}"
                        alt="${book.title}"
                        title="${book.title}"
                        class="book_thumbnail"
                    />
                    <div class="title" >${book.title}</div>
                    <div class="subtitle" >${book.author}</div>
                    <div class="label">${book.price}</div>
                    <div class="label">${book.rating}</div>
                    <a class="action-link" href="book1.html">Details</a>
                    
            </div>        
            `
            cards += card;
        }
        booksDiv.innerHTML = cards;
    }
    
    function handleSortOnPrice(){
        sortOnPrice(selectedBooks);
        showBooks(selectedBooks);
    }

    function handleSortOnRating(){
        sortOnRating(selectedBooks);
        showBooks(selectedBooks);
    }

    function handleSortOnAuthor(){
        sortOnAuthor(selectedBooks);
        showBooks(selectedBooks);
    }

    function handleGetAllBooks(){
        selectedBooks = books;
        showBooks(selectedBooks);
    }

    function init(){
        selectedBooks = books;
        showBooks(selectedBooks);
    }
    let criteriaList= document.getElementById('criteria');
    let searchText= document.getElementById('search');
    function handleSearch(){
        let criteria= criteriaList.value;
        let query= searchText.value;
        selectedBooks= search(selectedBooks,criteria,query);
        showBooks(selectedBooks);
    }
    
    //applicaiton object
    return {
        init,
        handleSortOnPrice,
        handleSortOnRating,
        handleSortOnAuthor,
        handleGetAllBooks,
        handleSearch,
        showBooks
    }

})()



