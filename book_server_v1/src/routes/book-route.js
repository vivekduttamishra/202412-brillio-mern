const bookManager = require('../business/book-manager');
const httpx = require('../httpx')



httpx.mapGet("/books", async (request, response) => {

    let books = await bookManager.getAllBooks();
    response.end(JSON.stringify(books));
})

httpx.mapPost("/books", async (request, response) => {
    response.end({ response: 'added' });
})



httpx.mapGet("/books/*",async (request, response) => {

    let id = request.url.split('?')[0].split('/').pop().toLowerCase();

    let book = await bookManager.getById(id);
    if (book) {
        response.end(JSON.stringify(book));
    } else {
        response.writeHead(404);
        response.end(JSON.stringify({ id, message: 'Invalid Book Id' }));
    }
})



httpx.mapDelete("/books/*", async (request, response) => {
        let id = request.url.split('?')[0].split('/').pop().toLowerCase();
        let book = await bookManager.removeBook(id);
        response.writeHead(204);
        response.end();
})
httpx.mapPatch("/books/*", async (request, response) => {
        let id= request.url.split('?')[0].split('/').pop().toLowerCase();
        let book = await bookManager.removeBook(id);
        response.writeHead(202);
        response.end("Book Updated");
})
