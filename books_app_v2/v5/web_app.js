//let b = require('./books');
// let books=b.books;
// let sortOnPrice=b.sortOnPrice;
// let search=b.search;
try{

    var {books, sortOnPrice,searchByAuthor,searchByTitle,searchByPriceRange} = require('./books')
}catch(e){
    //its a web app.
    //no problem functions are included.
}


let app= (function(){
    let selectedBooks;;
    
    function showBooks(books,message=''){

        if(!books || !books.length)
            message+= '<span class="error">No books Found</span>';

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
                    <a class="action-link" href="details.html?id=${book.id}">Details</a>
                    
            </div>        
            `
            cards += card;
        }
        booksDiv.innerHTML = cards;
    }
    
    function handleSortOnPrice(){
        sortOnPrice(selectedBooks);
        showBooks(selectedBooks,'Sort on Price');
    }

    function handleSortOnRating(){
        sortOnRating(selectedBooks);
        showBooks(selectedBooks,'Sorted on Rating');
    }

    function handleSortOnAuthor(){
        sortOnAuthor(selectedBooks);
        showBooks(selectedBooks, 'Sorted on Author');
    }

    function handleGetAllBooks(){
        selectedBooks = bookManager.getAllBooks();
        showBooks(selectedBooks,'All Books');
    }

    function init(){
        handleGetAllBooks(); 
    }
    let criteriaList= document.getElementById('criteria');
    let searchText= document.getElementById('search');

    function getRange(query){
        let values=query.split('-');
        
        return [+values[0],+values[1]];
    }

    const searchCriterias={
        "Author": searchByAuthor,
        "Title": searchByTitle,
        //"Price Range": (items,query)=> searchByPriceRange(items,...getRange(query)),
        "Rating Range": (item,query)=>{
            var range= getRange(query);
            return search(selectedBooks,(book)=> book.rating>=range[0] && book.rating<=range[1])
        }
    }

    function handleSearch(){
        let criteria= criteriaList.value;
        let query= searchText.value;
        let result
        console.log('criteria',criteria);
        let searchFunction = searchCriterias[criteria];

        if(searchFunction) {
            result=searchFunction(selectedBooks,query);
        }
        else{
            showBooks(selectedBooks,`<span class='error'>Invalid Search criteria</span>`);
            return;
        }

        
        if(result.length){
            selectedBooks=result;
            showBooks(selectedBooks,`Books with ${criteria}=${query}`);
        }else
            showBooks(selectedBooks,`<span class='error'>No Books matching ${criteria}=${query}</span>`);
    }
    function handleSearchCriteriaChange(){
        console.log('New search criteria', criteriaList.value);
    }
    //applicaiton object
    return {
        init,
        handleSortOnPrice,
        handleSortOnRating,
        handleSortOnAuthor,
        handleGetAllBooks,
        handleSearch,
        handleSearchCriteriaChange,
        showBooks
    }

})()



