let express= require('express');

let app=express();

let bookManager = require('./business/book-manager');

function logRequestInfo(request){
    console.log('request.url',request.url);
    console.log('request.path',request.path);
    console.log('request.params',request.params);
    console.log('request.query',request.query);
    console.log('request.body',request.body);
    
}

app.get('/', (request,response)=>{
    
    response.send('Hello World!');
})

app.get('/api/books',async(request,response)=>{
    logRequestInfo(request);
    
    let books = await bookManager.getAllBooks();
    response.send(books);
})

app.get('/api/books/:bookId', async(request,response)=>{
    //logRequestInfo(request);
    let book = await bookManager.getById(request.params.bookId);
    if(book)
        response.send(book);
    else{
        response
            .status(404)
            .send({id:request.params.bookId, message:"No book found"})
    }
});

app.post('/api/books', async(request,response)=>{
    logRequestInfo(request);
    response.status(201).send({status:'created'})
    
})
app.put('/api/books/:id', async(request,response)=>{
    response.status(201).send({status:'updated',path:request.path, id:request.params.id})    
})
app.patch('/api/books/:id', async(request,response)=>{
    response.status(201).send({status:'patched',path:request.path, id:request.params.id})    
})
app.delete('/api/books/:id', async(request,response)=>{
    response.status(201).send({status:'deleted',path:request.path, id:request.params.id})    
})


module.exports=app;