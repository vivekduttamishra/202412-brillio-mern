const http = require('http');

function requestHandler(request,response){

    response.end(`Request Received: ${request.headers.host}${request.url}`);

}

const server= http.createServer(requestHandler);




//const port = process.env.PORT || 8000;

let port = process.argv.pop() || 8000;
port =parseInt(port);
server.on('error',error=>{
    port += 1;
    startServer(port);
});

const startServer= port =>{
    server.listen(port, success=>{
        console.log(`Server running at http://localhost:${port}`);
    });
}

startServer(port);