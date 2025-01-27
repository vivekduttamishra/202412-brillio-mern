const http=require('http');

function startServer(server){
    let port = process.argv.length>2 ?  //if arguments are supplied 
                    process.argv[process.argv.length - 1]  //port is last argument
                    : //else
                    (process.env.PORT || 5000) //use environment variable or default 5000
    port = Number(port); //make port a number;

    console.log('port',port);
    
    
    return new Promise((resolve,reject)=>{
        server.on('error', reject);
        server.listen(port,resolve(`http://localhost:${port}`));

    });

}

function defaultRequestHanlder(request,response){
    response.statusCode = 404;
    let data ={
        error: 'Page not found',
        url: request.url,
        status:404
    }
    response.writeHead(404);
    response.end(JSON.stringify(data));
}

async function runApp( requestHandler=defaultRequestHanlder, intializer=async ()=>{}){
    
    const server = http.createServer(requestHandler);
    try{
        await intializer();
        let url=await startServer(server);
        console.log(`Server started at ${url}`);
    }catch(e){
        console.error('Error starting server',e.message);
        process.exit(1); //failure.
    }

}

module.exports ={runApp};