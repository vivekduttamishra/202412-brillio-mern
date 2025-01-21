let express = require('express');

let app = express();
let { jsonBody, logRequestInfo } = require('./expressx');
let {logVisits, showVisits, showVisitsTable, show404}= require('./business/visit-counter');

let bookManager = require('./business/book-manager');



// app.use((request,response,next)=>{
//     logRequestInfo(request);
//     next(); //let next middlware work.
// })

//app.use(logRequestInfo);

app.use(jsonBody); //add it before all requests.
app.use(logRequestInfo);
app.use(show404)


app.get('/admin/log/visits',showVisits);
app.get('/admin/log/visits-html', showVisitsTable);

app.use(logVisits);

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.get('/api/books', async (request, response) => {
    //logRequestInfo(request);

    let books = await bookManager.getAllBooks();
    response.send(books);
})

app.get('/api/books/:bookId', async (request, response) => {
    //logRequestInfo(request);
    let book = await bookManager.getById(request.params.bookId);
    if (book)
        response.send(book);
    else {
        response
            .status(404)
            .send({ id: request.params.bookId, message: "No book found" })
    }
});

app.post('/api/books', async (request, response, next) => {
    //logRequestInfo(request);
    try {

        let book = await bookManager.addBook(request.body);
        response
            .status(201)
            .set('location', `/api/books/${book.id}`) //response header
            .send(book)
        next();
    } catch (error) {
        response
            .status(400) //invalid details
            .send({ message: error.message, errors:error.errors })
    }

});


app.put('/api/books/:id', async (request, response) => {
    response.status(201).send({ status: 'updated', path: request.path, id: request.params.id })
})
app.patch('/api/books/:id', async (request, response) => {
    response.status(201).send({ status: 'patched', path: request.path, id: request.params.id })
})
app.delete('/api/books/:id', async (request, response) => {
    response.status(201).send({ status: 'deleted', path: request.path, id: request.params.id })
})


module.exports = app;