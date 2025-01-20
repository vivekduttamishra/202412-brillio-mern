let http=require('http');
let app = require('./app');


let port = process.argv.pop();
if(!port || isNaN(port))
    port=5000;

let server= http.createServer(app);
server.on('error', error=>console.error('error',error.message));

server.listen(port,()=>{
    console.log(`Server started: http://localhost:${port}`);
})
