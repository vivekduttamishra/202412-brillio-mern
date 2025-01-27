// const BookService = require('../services/book.service');
// const JsonBookRepository = require('../repositories/json/json-book.repository');
// const bookRepository = new JsonBookRepository( process.env.BOOKS_DB_PATH );
// const bookService = new BookService(bookRepository);

const injector = require('../utils/injector')

let bookService = injector.getService('bookService');



const getAllBooks=async (request,response)=>{
    let books = await bookService.getAllBooks();
    response.json(books);
}

const addBook=async (request,response)=>{
    try{
        
        let book = await bookService.addBook(request.body);
        response.status(201).json(book);
    }catch(error){
        response.status(400).json({message: error.message,errors:error.errors});
    }
}

const getBookById=async(request,response)=>{
    let book = await bookService.getById(request.params.id);
    if(book)
        response.json(book);
    else
        response
                .status(404)
                .json({message:'Book Not Found',id: request.params.id});
}

const updateBook=async(request,response)=>{
    try{
        let updatedBook = await bookService.update(request.params.id,request.body);
        response.json(updatedBook);
    }catch(error){
        response.status(400).json({message: error.message,errors:error.errors});
    }
}

const patchBook=async(request,response)=>{
    try{
        let updatedBook = await bookService.partialUpdate(request.params.id,request.body);
        response.json(updatedBook);
    }catch(error){
        response.status(400).json({message: error.message,errors:error.errors});
    }
}

const deleteBook = async(request,response)=>{
    let deletedBook = await bookService.removeBook(request.params.id);
    if(deletedBook)
        response.sendStatus(204);
    else
        response
               .status(404)
               .json({message:'Book Not Found',id: request.params.id});
}


module.exports={
    getAllBooks,
    addBook,
    getBookById,
    updateBook,
    patchBook,
    deleteBook,
}