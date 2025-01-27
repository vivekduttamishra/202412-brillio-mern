
// const AuthorService = require('../services/author.service');
// const AuthorRepository = require('../repositories/json/json-author.repository');

// const authorRepository = new AuthorRepository();

// const authorService = new AuthorService(authorRepository);


const injector = require('../utils/injector');
const authorService = injector.getService("authorService");


const getAllAuthors=async (request, response) =>{
    let authors = await authorService.getAllAuthors();
    response.json(authors);
}

const getAuthorById=async (request, response) =>{
    try{

        let author = await authorService.getAuthorById(request.params.id);
        response.json(author);
    }catch(err){
        response.status(404).json({message: err.message, errors:err.errors});
    }
}

const createAuthor=async (request, response) =>{
    let author = await authorService.createAuthor(request.body);
    response.json(author);
}

module.exports={
    getAllAuthors,
    getAuthorById,
    createAuthor,
 };
