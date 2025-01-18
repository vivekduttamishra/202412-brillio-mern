const bookManager = require('./business/book-manager')
const httpx=require('./httpx');

//include the routes


httpx.addRequestHandler((request,response)=>{
    console.log(`${request.method} ${request.path}`)
    console.log('request.body',request.body);
        
});

httpx.staticFileServer();
httpx.requestDataHandler();

require('./routes/author-route')
require('./routes/book-route')

httpx.runApplication(async ()=>{
    await bookManager.loading();
});




