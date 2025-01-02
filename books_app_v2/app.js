
function getReviewList(reviews) {

    let list = "<ul>";

    for (let review of reviews) {
        list += `<li>${review.title}</li>`;
    }

    list += "</ul>";
    return list;
}

function getAllBooks(){
    displayBooks = books;
    showBookCards(displayBooks);
}

function sortOnPrice() {

    let books=displayBooks;
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
    showBookCards(books);
}


function sortOnRating() {
    let size = books.length;
    let books=displayBooks;
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
    showBookCards(books);
}

function sortOnAuthor(author){
    let books=displayBooks;
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
    showBookCards(books);
}

let searchTextBox = document.getElementById("search");
let criteriaList = document.getElementById("criteria");
function search() {
    let criteria=criteriaList.value;
    let query=searchTextBox.value;
    console.log('criteria',criteria);
    console.log('query',query);
    query=query.toLowerCase();
    let result=[];

    for(let book of displayBooks){
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

    displayBooks=result;
    showBookCards(displayBooks);
    


}

function showBookCards(books) {

    //console.log(`I will display given ${books.length} books`);

    //let pageTitle=document.getElementById('pageTitle');
    //pageTitle.innerHTML=`Our Recommendation of ${books.length} Books`;

    let bookCount = document.getElementById('bookCount');
    bookCount.innerHTML = books.length;

    // for(let i=0;i<books.length;i++){
    //     let cardId=`#card-${i+1}`; 

    //     document.querySelector(`${cardId} .title`).innerHTML=books[i].title;
    //     document.querySelector(`${cardId} img`).setAttribute('src',books[i].cover);
    //     document.querySelector(`${cardId} .subtitle`).innerHTML=books[i].author;

    // }

    let booksDiv = document.getElementById('books');

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
                ${getReviewList(book.reviews)}
        </div>        
        `
        cards += card;
    }
    booksDiv.innerHTML = cards;

}
function showBookTable(books) {


    let bookCount = document.getElementById('bookCount');
    bookCount.innerHTML = books.length;

    let booksDiv = document.getElementById('books');

    let table = '';

    for (let book of books) {
        let bookTr = `
        <tr  id="${book.id}">
        <td>
                <img 
                    id="image-1"
                    src="${book.cover}"
                    alt="${book.title}"
                    title="${book.title}"
                    class="book_thumbnail"
                />
            </td>
                <td class="title" >${book.title}</td>
                <td class="subtitle" >${book.author}</td>
                <td class="label">${book.price}</td>
                <td class="label">${book.rating}</td>
                
                <td><a class="action-link" href="book1.html">Details</a></td>
        </tr>        
        `
        table += bookTr;
    }
    document.getElementById('booksTableBody').innerHTML = table;

}

var displayBooks=books;

(function main() {
    //checkLogin();
    //createNavBar();
    showBookCards(displayBooks);
    //showBookTable(books);
})();




//console.log('App started running');
