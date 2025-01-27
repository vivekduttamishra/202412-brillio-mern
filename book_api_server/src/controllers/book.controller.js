// const BookService = require('../services/book.service');
// const JsonBookRepository = require('../repositories/json/json-book.repository');
// const bookRepository = new JsonBookRepository( process.env.BOOKS_DB_PATH );
// const bookService = new BookService(bookRepository);

const injector = require('../utils/injector')

let bookService = injector.getService('bookService');


const getAllBooks=async ()=>{
    return await bookService.getAllBooks();
}

const addBook=async ({body})=>{
    let result = await bookService.addBook(body);
    return result;
}

const getBookById=async({id})=>{
    return  await bookService.getById(id);
}

const updateBook=async({id,body})=>{
    return await bookService.update(id,body);
}

const patchBook=async({id,body})=>{
        return  await bookService.partialUpdate(id,body);        
}

const deleteBook = async({id})=>{
    await bookService.removeBook(id);
    
}


module.exports={
    getAllBooks,
    addBook,
    getBookById,
    updateBook,
    patchBook,
    deleteBook,
}