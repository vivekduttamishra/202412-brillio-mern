const http = require('http');

const requestHandlers=[];

const addRequestHandler=function(requestHandler){
    requestHandlers.push(requestHandler);
}

const motherRequestHandler =async(request,response)=>{

    for(let requestHandler of requestHandlers){
        let success= await requestHandler(request,response);
        if(success)
            return;
    }
    response.writeHead(404);
    response.end(JSON.stringify({error:404, url:request.url}))
}

const startServer=async function(requestHandler){

    return new Promise((resolve,reject)=>{
        let args=process.argv;
        let port=undefined;
        if(args.length>2)
            port=parseInt(args.pop());
        
        port = port || process.env.PORT || 4000;
        const server =http.createServer(requestHandler);
        server.on('error',error=>reject(error))
        server.listen(port, ()=>resolve(port));

    });
}

const runApplication = async (intializer=async()=>{}, requestHandler=motherRequestHandler)=>{
    try{
        await intializer();
        let port= await startServer(requestHandler);
        console.log(`server started: http://localhost:${port}`);
    }catch(e){
        console.log(`server failed to start: ${e.message}`);
    }
}


module.exports={
    startServer,
    runApplication,
    addRequestHandler
}