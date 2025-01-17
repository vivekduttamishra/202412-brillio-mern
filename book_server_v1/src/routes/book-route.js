const bookManager=require('../business/book-manager');

const booksRequestHandler=async function(request,response){
   
    
    //console.log('request.headers',request.headers);
    
    //send response to client.
    if(request.url==='/books'){
        let books = await bookManager.getAllBooks();
        let booksJson=JSON.stringify(books,null,3)
        console.log('booksJson',booksJson)
        response.end(booksJson);
    }
    else if(request.url.startsWith('/books/details'))
        response.end(`<h1>Welcome Book Details Page ${request.url}</h1>`)
    else{
        response.writeHead(404); //NOt found
        response.end(`<h1>Page not found: ${request.url}</h1>`);
    }

    
}

module.exports={
    booksRequestHandler
}