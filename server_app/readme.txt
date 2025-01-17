How to create a new nodejs server app

1. Initalize app:  npm init -y

2. Create the startup script: src/main.js 

3. Install nodemon:  npm i -d nodemon 

4. Add scripts: start,dev 

5. Write Redundant Server.js Logic

const http = require('http');

function requestHandler(request,response){

    response.end(`Request Received: ${request.headers.host} ${request.url}`);

}

const server= http.createServer(requestHandler);

const port = 8000;

server.on('error', error=>console.error(`Server error: ${error.message}`));

server.listen(port, success=>{
    console.log(`Server running at http://localhost:${port}`);
})

6. Run the project

    npm start //for production
    npm run dev //for development


7. how to run the project cloned/pulled from git

Step 1: clone/pull from git

Step 2:  reinstall node packages:  npm i


