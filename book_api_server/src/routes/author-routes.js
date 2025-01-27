
const express = require('express');
const authorController = require('../controllers/author.controller');

const router = express.Router();

router
    .route('/')
    .get(authorController.getAllAuthors)
    

module.exports=router;