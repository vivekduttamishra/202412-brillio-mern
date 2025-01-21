const express = require('express');
const bookRouter = require('./routes/book-routes');
const {jsonBody, logRequestInfo}= require('./expressx')


const app = express();
app.use(express.json()); //built-in json body parser

app.use(logRequestInfo);

app.use("/api/books", bookRouter);


module.exports=app;