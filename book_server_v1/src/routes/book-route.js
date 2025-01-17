const bookManager=require('../business/book-manager');

const booksRequestHandler=async function(request,response){
   
    
    //console.log('request.headers',request.headers);
    
    //send response to client.
    if(request.url==='/books'){
        if(request.method==='GET'){
        let books = await bookManager.getAllBooks();
        let booksJson=JSON.stringify(books,null,3)
        console.log('booksJson',booksJson)
        response.end(booksJson);
        } else if(request.method==='POST'){
            response.end('Adding a New Book');
        }
    }
    else if(request.url.startsWith('/books')){
        let id = request.url.split('?')[0].split('/').pop().toLowerCase();
        console.log('id',id);
        
        
        if(request.method==='GET'){
            let book= await bookManager.getById(id);
            if(book){
                response.end(JSON.stringify(book));
            }else{
                response.writeHead(404);
                response.end(JSON.stringify({id, message:'Invalid Book Id'}));
            }
        }
    }
    else{
        response.writeHead(404); //NOt found
        response.end(`<h1>Page not found: ${request.url}</h1>`);
    }

    
}

module.exports={
    booksRequestHandler
}