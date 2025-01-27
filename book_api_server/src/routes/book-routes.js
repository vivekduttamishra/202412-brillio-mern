const express = require('express');
const router= express.Router();
const bookController= require('../controllers/book.controller')
const {routeHandler}= require('../utils/expressx');

router
    .route("/")
    .get( routeHandler(bookController.getAllBooks ))
    .post(routeHandler(bookController.addBook))

router
    .route('/:id')
    .get(routeHandler(bookController.getBookById))
    .put(routeHandler(bookController.updateBook))
    .patch(routeHandler(bookController.patchBook))
    .delete(routeHandler(bookController.deleteBook))


module.exports=router;

