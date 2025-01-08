
const app = (function () {
    //document.write(`Searching for ${window.location.href}`);
    
    let qs=getQueries();

    console.log('qs',qs);
    console.log('qs.id',qs.id);
    
   

    if(book){
        console.log('book.title',book.title);
        
    }else{
        console.log('Not Found')
        
    }




})();
