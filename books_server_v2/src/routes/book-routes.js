const express = require('express');
const bookManager = require('../business/book-manager');

const router= express.Router();

//add your routes here!


router
    .route("/")
    .get( async (request,response)=>{
        let books = await bookManager.getAllBooks();
        response.json(books);
    })
    .post(async (request,response)=>{
        try{
            
            let book = await bookManager.addBook(request.body);
            response.status(201).json(book);
        }catch(error){
            response.status(400).json({message: error.message,errors:error.errors});
        }
    });

router
    .route('/:id')
    .get(async(request,response)=>{
        let book = await bookManager.getById(request.params.id);
        if(book)
            response.json(book);
        else
            response
                    .status(404)
                    .json({message:'Book Not Found',id: request.params.id});
    })
    .put(async(request,response)=>{
        try{
            let updatedBook = await bookManager.update(request.params.id,request.body);
            response.json(updatedBook);
        }catch(error){
            response.status(400).json({message: error.message,errors:error.errors});
        }
    })
    .patch(async(request,response)=>{
        try{
            let updatedBook = await bookManager.partialUpdate(request.params.id,request.body);
            response.json(updatedBook);
        }catch(error){
            response.status(400).json({message: error.message,errors:error.errors});
        }
    })
    .delete(async(request,response)=>{
        let deletedBook = await bookManager.removeBook(request.params.id);
        if(deletedBook)
            response.sendStatus(204);
        else
            response
                   .status(404)
                   .json({message:'Book Not Found',id: request.params.id});
    })


module.exports=router;

