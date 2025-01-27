
const injector = require('./utils/injector');

console.log('injector',injector);
console.log('injector.addService',injector.addService);



const JsonAuthorRepository = require('./repositories/json/json-author.repository');
const JsonBookRepository = require('./repositories/json/json-book.repository');

const Author  = require('./repositories/mongoose/models/author.model');
const MongooseAuthorRepository = require('./repositories/mongoose/mongoose-author.repository');

const AuthorService = require('./services/author.service');
const BookService = require('./services/book.service');



injector
    //.addService("authorRepository", JsonAuthorRepository)
    .addServiceObject("author",Author)
    .addService("authorRepository", MongooseAuthorRepository)
    .addService("bookRepository", JsonBookRepository)
    .addService("authorService", AuthorService)
    .addService("bookService", BookService)


console.log('injector.container',injector.container);

