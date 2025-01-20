const bookManager = require('../business/book-manager');
const httpx = require('../httpx')



httpx.mapGet("/books", async (request, response) => {

    let books = await bookManager.getAllBooks();
    response.writeHead(200,'OK',{
        'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(books));
})

httpx.mapPost("/books", async (request, response) => {
    await bookManager.addBook(request.body);
    
    response.end(JSON.stringify({ response: 'added', book:request.body }));
})


 
httpx.mapGet("/books/*",async (request, response) => {

    //let id = request.url.split('?')[0].split('/').pop().toLowerCase();
    let id= request.params[1]; 
    
    let book = await bookManager.getById(id);
    let status= book? [200,'OK']: [404, 'Not Found'];
    response.writeHead(...status,{'Content-Type': 'application/json'})
    if (book) {
        response.end(JSON.stringify(book));
    } else {
        //response.writeHead(404);
        response.end(JSON.stringify({ id, message: 'Invalid Book Id' }));
    }
})



httpx.mapDelete("/books/*", async (request, response) => {
        let id = request.params[1];
        let book = await bookManager.removeBook(id);
        response.writeHead(204);
        response.end();
})

httpx.mapPatch("/books/*", async (request, response) => {
        let id= request.params[1];
        let book = await bookManager.partialUpdate(id,request.body);
        if(book){
            response.writeHead(202,{"content-type":"applicaiton/json"});
            response.end(JSON.stringify(book));
        }else{
            response.writeHead(404,{'Content-Type': 'application/json'});
            response.end(JSON.stringify({action:'Partial Update',id, message:'Invalid Book Id'}));
        }   
})
httpx.mapPut("/books/*", async (request, response) => {
        let id= request.params[1];
        console.log('putting',request.body)
        let book = await bookManager.update(id,request.body);
        if(book){

            response.writeHead(202, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(book));
        }else{
            response.writeHead(404,{'Content-Type': 'application/json'});
            response.end(JSON.stringify({id, message:'Invalid Book Id'}));
        }
})
