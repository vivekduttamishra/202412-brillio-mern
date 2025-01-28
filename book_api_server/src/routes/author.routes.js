
const express = require('express');
const authorController = require('../controllers/author.controller');

const router = express.Router();

router
    .route('/')
    .get(authorController.getAllAuthors)
    .post(authorController.createAuthor);

router
    .route('/:id')
    .get(authorController.getAuthorById)
   
    //.delete(authorController.deleteAuthor)
    

module.exports=router;