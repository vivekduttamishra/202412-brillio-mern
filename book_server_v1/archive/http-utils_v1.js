const http = require('http');

const resquestHandlers=[];

const addRequestHandler=function(requestHandler){
    requestHandlers.push(requestHandler);
}

const motherRequestHandler =async(request,response)=>{

    for(let requestHandler of requestHandlers){

    }
}

const startServer=function(requestHandler){
    let args=process.argv;
    let port=undefined;
    if(args.length>2)
        port=parseInt(args.pop());
    
    port = port || process.env.PORT || 4000;
    const server =http.createServer(requestHandler);
    server.on('error',(error)=>console.error(`Error starting server on port ${port}`))
    server.listen(port, ()=>{    
        console.log(`Server started http://localhost:${port}`);
        
    });

}

module.exports={
    startServer
}