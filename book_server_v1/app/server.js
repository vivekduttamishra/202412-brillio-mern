//Step 1. get http module
const http=require('http');

//Step 2. create a Server
const server =http.createServer(function(request,response){
    console.log('request.method',request.method);
    console.log('request.url',request.url);
    console.log('request.params',request);
    
    
    //console.log('request.headers',request.headers);
    
    //send response to client.
    if(request.url==='/')
        response.end(`<h1>Welcome to Book List</h1>`);
    else if(request.url==='/details')
        response.end(`<h1>Welcome Book Details Page V2</h1>`)
    else{
        response.writeHead(404); //NOt found
        response.end(`<h1>Page not found: ${request.url}</h1>`);
    }

    
});
server.on('error',(error)=>console.error(`Error starting server on port ${port}`))

//Step 3. Start a server to listen on a particular port.
const port=8000;

server.listen(port, ()=>{    
    console.log(`Server started http://localhost:${port}`);
});

