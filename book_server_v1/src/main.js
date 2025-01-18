const bookManager = require('./business/book-manager')
const httpx=require('./httpx');

//include the routes
require('./routes/author-route')
require('./routes/book-route')

httpx.runApplication(async ()=>{
    await bookManager.loading();
});




