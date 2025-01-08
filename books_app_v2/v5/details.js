
const app = (function () {
    //document.write(`Searching for ${window.location.href}`);
    
    let qs=getQueries();

    console.log('qs',qs);
    console.log('qs.id',qs.id);

    let book_title=document.getElementById('book_title');
    let error_section =document.getElementById('error');
    let cover=document.getElementById('book_cover');
    let price=document.getElementById('book_price');
    
    if(qs.id){

        let book=bookManager.getBookById(qs.id);
    
        if(book){
            //console.log('book.title',book.title);
            book_title.innerHTML=book.title;
            cover.setAttribute('src',book.cover);
            cover.setAttribute('title',book.title);
            cover.setAttribute('alt',book.title);
        }else{
            book_title.innerHTML="Error";
            error_section.innerHTML=`No book found with id: ${qs.id}`;
        }
    } else{
        book_title.innerHTML="Error";HTML="Error";
        error_section.innerHTML="Book Id Not Provided";
    }




})();
