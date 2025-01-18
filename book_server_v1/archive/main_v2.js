//Step 1. get http module
const bookManager= require('./business/book-manager');
const {booksRequestHandler}= require('./routes/book-route');
const {startServer}=require('./http-utils');

const startApp=async ()=>{
    console.log('loading books...')
    //books=await getAllBooks(`src/books5.json`);
    await bookManager.loading();
    console.log('App started');
    startServer(booksRequestHandler); 
    
}
startApp();