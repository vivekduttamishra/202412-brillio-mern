
const injector = require('./utils/injector');





const JsonAuthorRepository = require('./repositories/json/json-author.repository');
const JsonBookRepository = require('./repositories/json/json-book.repository');

const Author  = require('./repositories/mongoose/models/author.model');
const MongooseAuthorRepository = require('./repositories/mongoose/mongoose-author.repository');

const AuthorService = require('./services/author.service');
const BookService = require('./services/book.service');

const User  = require('./repositories/mongoose/models/user.model');
const MongooseUserRepository = require('./repositories/mongoose/mongoose-user.repository');
const UserService = require('./services/user.service');


injector
    //.addService("authorRepository", JsonAuthorRepository)
    .addServiceObject("author",Author)
    .addService("authorRepository", MongooseAuthorRepository)

    .addServiceObject("user", User)
    .addService("userRepository", MongooseUserRepository)


    .addService("bookRepository", JsonBookRepository)
    .addService("authorService", AuthorService)
    .addService("bookService", BookService)
    .addService('userService', UserService)


//console.log('injector.container',injector.container);

