const http = require('http');

function requestHandler(request,response){

    response.end(`Request Received: ${request.headers.host}${request.url}`);

}

const server= http.createServer(requestHandler);

const port = 8000;

server.on('error', error=>console.error(`Server error: ${error.message}`));

server.listen(port, success=>{
    console.log(`Server running at http://localhost:${port}`);
})