const express = require('express');
const bookRouter = require('./routes/book-routes');
const {jsonBody, logRequestInfo}= require('./expressx')


const app = express();
app.use(express.json()); //built-in json body parser

//app.use(logRequestInfo);


app.use("/api/books", bookRouter);

app.get('/error/:message', (request,response)=>{
    throw new Error(request.params.message);
})
app.get('/authors/*', (request,response,next)=>{
    //throw new Error(request.params.message);
    let paths= request.path.split('/').slice(1);
    if(paths.length>2)
        next({message: 'too many authors'})
    else
        response.json({author:paths[1]});
    
})
app.get('/reviews/*', async (request,response,next)=>{
    //throw new Error(request.params.message);

    try{

        let paths= request.path.split('/').slice(1);
        if(paths.length>2)
            throw new Error('Too many Reviews');
        else
            response.json({id:paths[1],path:request.path});
        
    }catch(e){
        next(e);
    }
})






app.use((error,request,response,next)=>{
    response.status(500).json({ message:error.message});
})



module.exports=app;