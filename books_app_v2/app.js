
function getReviewList(reviews){
    
    let list="<ul>";

    for(let review of reviews){
        list+=`<li>${review.title}</li>`;
    }

    list+="</ul>";
    return list;
}

function sortOnPrice(){
    console.log("Sort on Price");
}
function sortOnRating(){
    console.log("Sort on Rating");
}
let searchTextBox=document.getElementById("search");
let criteria = document.getElementById("criteria");
function search(){

    console.log("Searching", criteria.value, searchTextBox.value);
}

function showBookCards(books){

    //console.log(`I will display given ${books.length} books`);

    //let pageTitle=document.getElementById('pageTitle');
    //pageTitle.innerHTML=`Our Recommendation of ${books.length} Books`;

    let bookCount = document.getElementById('bookCount');
    bookCount.innerHTML=books.length;

    // for(let i=0;i<books.length;i++){
    //     let cardId=`#card-${i+1}`; 

    //     document.querySelector(`${cardId} .title`).innerHTML=books[i].title;
    //     document.querySelector(`${cardId} img`).setAttribute('src',books[i].cover);
    //     document.querySelector(`${cardId} .subtitle`).innerHTML=books[i].author;
    
    // }
    
    let booksDiv=document.getElementById('books');

    let cards='';

    for(let book of books){
        let card =`
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
        cards+=card;
    }
    booksDiv.innerHTML = cards;

}
function showBookTable(books){

   
    let bookCount = document.getElementById('bookCount');
    bookCount.innerHTML=books.length;
 
    let booksDiv=document.getElementById('books');

    let table='';

    for(let book of books){
        let bookTr =`
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
        table+=bookTr;
    }
    document.getElementById('booksTableBody').innerHTML=table;

}

(function main(){
    //checkLogin();
    //createNavBar();
    showBookCards(books);
    //showBookTable(books);
})();




//console.log('App started running');
