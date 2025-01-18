const bookManager = require('../business/book-manager');
const { mapRequest, addRequestHandler,match } = require('../httpx')

// mapRequest(async(request,response)=>{
//     let books=await bookManager.getAllBooks();
//     response.end(JSON.stringify(books)); 
// },
// request=>request.method==='GET' && request.url==='/books'
// )


mapRequest(async (request, response) => {
    let books = await bookManager.getAllBooks();
    response.end(JSON.stringify(books));
}, match("get", "/books"))



mapRequest( async (request, response) => {

    if (request.url.toLowerCase() === '/books' && request.method === 'POST') {
        //let books= await bookManager.addBook(???);
        response.end({ response: 'added' });
        return true; //handled
    }
    //pass
    //return undefined.
},match("post","/books"));


mapRequest(async (request, response) => {

    let id = request.url.split('?')[0].split('/').pop().toLowerCase();

    let book = await bookManager.getById(id);
    if (book) {
        response.end(JSON.stringify(book));
    } else {
        response.writeHead(404);
        response.end(JSON.stringify({ id, message: 'Invalid Book Id' }));
    }
},match("get","/books/*"))


const deleteBookById = async (request, response) => {

    if (request.url.toLowerCase().startWith('/books') && request.method === 'DELETE') {
        let id = request.url.split('?')[0].split('/').pop().toLowerCase();

        let book = await bookManager.removeBook(id);
        response.writeHead(204);
        response.end();
        return true;
    }
}
