const http = require('http');

const fs= require('fs');

const path= require('path');

const requestHandlers=[];

const addRequestHandler=function(requestHandler){
    requestHandlers.push(requestHandler);
} 

const mapRequest= (action,matcher=()=>true)=>{
    console.log('mapRequest', action,matcher);
    addRequestHandler(async(request,response)=>{
        if(matcher(request)){
            await action(request,response);
            return true; //handled.
        }
        return false; //not handled
    })

}

const basePath='../public'; 

const staticFileServer= ()=> addRequestHandler(async(request,response)=>{
    
    //let requestPath= request.url.split('?')[0];
    let requestPath= request.path;
    //path of reqsource

    //let path =`${basePath}${requestPath}`
    let filePath  = path.join('public',requestPath);
    console.log('filePath',filePath);

    let exists= await fs.existsSync(filePath);
    if(exists){

        fs
            .createReadStream(filePath)
            .pipe(response);
       
        return true;
    }
    //else     
    console.log(`not a static file: ${request.path}`)
    return false; //not a static file.
})


const requestDataHandler=()=>addRequestHandler((request,response)=>{

    return new Promise((resolve)=>{
        let body='';
        request
            .on('data', buffer=> body+=buffer.toString())
            .on('end', ()=> {
                if(body)
                    request.body=JSON.parse(body)
                //console.log('request.body',request.body);
                
                
                resolve(false); //make sure next member of pipline is executed.
            });

    });

});




const match= (method, url)=>{
    return request=>{
        //console.log('matching', method,url);
        let methodMatch = method==='*' || method.toLowerCase()=== request.method.toLowerCase();
        url=url.toLowerCase();
        let requestedUrl=request.url.toLowerCase().split('?')[0];

        let urlMatch = url.endsWith('*') ? requestedUrl.startsWith(url.substring(0,url.length-1)): url===requestedUrl; 

        return methodMatch && urlMatch;
    }
}

const mapGet=( url, handler) => mapRequest( handler, match("get",url));
const mapPost=( url, handler) => mapRequest( handler, match("post",url));
const mapPut=( url, handler) => mapRequest( handler, match("put",url));
const mapPatch=( url, handler) => mapRequest( handler, match("patch",url));
const mapDelete=( url, handler) => mapRequest( handler, match("delete",url));






const motherRequestHandler =async(request,response)=>{
    
    let urlParts= request.url.split('?');
    let path = urlParts[0];
    let queryString=urlParts[1];
    let query={};
    if(queryString){
        queryString
            .split('&')
            .forEach( p=>{
                let [key,value]=p.split('=');
                query[key]=value;
            })
    }  
    let params= path.split('/');
    
    request.path=path;
    request.params=params.slice(1);
    request.query=query;
    


    for(let requestHandler of requestHandlers){
        //console.log(`passed to handler ${i}`)
        let success= await requestHandler(request,response);
        if(success){
          //  console.log(`request handled`)
            return;
        }else{
            //console.log(`request forwarded to next handler `);
        }
        
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
    addRequestHandler,
    mapRequest,
    match,
    mapGet,
    mapPost,
    mapPut,
    mapPatch,
    mapDelete,
    staticFileServer,
    requestDataHandler,
   
    

}