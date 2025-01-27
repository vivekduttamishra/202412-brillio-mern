
// const AuthorService = require('../services/author.service');
// const AuthorRepository = require('../repositories/json/json-author.repository');

// const authorRepository = new AuthorRepository();

// const authorService = new AuthorService(authorRepository);


const authorService = injector.getService("authorService");


const getAllAuthors=async (request, response) =>{
    let authors = await authorService.getAllAuthors();
    response.json(authors);
}

module.exports={
    getAllAuthors
}