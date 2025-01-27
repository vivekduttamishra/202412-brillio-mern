const express = require('express');
const router= express.Router();
const bookController= require('../controllers/book.controller')

router
    .route("/")
    .get( bookController.getAllBooks )
    .post(bookController.addBook);

router
    .route('/:id')
    .get(bookController.getBookById)
    .put(bookController.updateBook)
    .patch(bookController.patchBook)
    .delete(bookController.deleteBook)


module.exports=router;

