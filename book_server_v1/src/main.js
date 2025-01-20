const bookManager = require('./business/book-manager')
const httpx=require('./httpx');

//include the routes



httpx.requestDataHandler();
httpx.addRequestHandler((request,response)=>{
    console.log(`${request.method} ${request.path}`)
    console.log('request.body',request.body);
        
});

require('./routes/author-route')
require('./routes/book-route')
httpx.staticFileServer();

httpx.runApplication(async ()=>{
    await bookManager.loading();
});




