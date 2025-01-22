const express = require('express');
const bookRouter = require('./routes/book-routes');
const adminRouter= require('./routes/admin-routes');
const {errorHandler}= require('./expressx')
const {logVisits} = require('./business/visit-counter');

const app = express();
app.use(express.json()); //built-in json body parser

app.use(logVisits);

app.use('/api/admin', adminRouter);
app.use("/api/books", bookRouter);


app.get('/error/:message', (request,response)=>{
    throw new Error(request.params.message);
})


app.use(errorHandler);



module.exports=app;