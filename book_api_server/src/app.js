const express = require('express');
const bookRouter = require('./routes/book-routes');
const adminRouter= require('./routes/admin-routes');
const {errorHandler}= require('./utils/expressx')
const {logVisits} = require('./services/visit-counter.service');
const path= require('path');

const app = express();

let publicFolder=path.join(__dirname,'..', 'public')
console.log('public path',publicFolder);

app.use(express.static(publicFolder))//build in static route handler

app.use(express.json()); //built-in json body parser

app.use(logVisits);

app.use('/api/admin', adminRouter);
app.use("/api/books", bookRouter);


app.get('/error/:message', (request,response)=>{
    throw new Error(request.params.message);
})


app.use(errorHandler);



module.exports=app;