
const successMap={
    GET:200,
    POST:201,
    PUT:202,
    PATCH:202,
    DELETE:204
}

const errorMap={
    'NotFoundError':404,
    'ValidationError':400,
    'DuplicateError':400,
    'AuthenticationError':401,
    'AuthorizationError': 403
    //we may have more errors
}

const addCustomError=(error, statusCode)=>errorMap[error]=statusCode;

class Response{
    constructor(body, statusCode, headers={}){
        this.statusCode=statusCode;
        this.body=body;
        this.headers=headers;
    }
    send(response){
        response.status(this.statusCode)
        for(let key in this.headers)
            response.set(key, headers[key]);
        response.send(this.data)
    }
}

class ResponseError extends Error{
    constructor(message, status, error, header){
        super(message);
        this.response = new Response(error, status,header);
    }

    send(response){
        this.response.send(response);
    }
}


 function routeHandler(controllerFunction){

    //this function will handle the response.
    return async (request,response,next)=>{
        try{
            let controllerParam ={ request, 
                                   response, 
                                   next, 
                                   params:request.params, 
                                   body:request.body,
                                   query:request.query,
                                   ...request.params
                                }
            let result = await controllerFunction(controllerParam);
            if(!result && request.method === 'GET')
                throw new NotFoundError('Not Found',{message:'Not Found', url:request.path, params:request.params, query:request.query})
            if(result instanceof Response){
                return result.send(response);
            }
            let status = successMap[request.method];
            return response.status(status).send(result);
            
        }catch(error){
            let status = errorMap[error.constructor.name] || 500;
            response.status(status);
            let body = error.errors || {message:error.message,status,errors:error}
            response.send(body);
            
        }

    }

}




function jsonBody(request, response, next) {

    if(['get','delete'].includes(request.method.toLowerCase())) {
        console.log('Not a body request');
        return next();
    }
    
    

    if(!request.get('Content-Type').includes('/json')){
        console.log('Not a JSON request');
        return next(); //skip 
    }

    //console.log('parsing json body');
    let body = "";
    request
        .on('data', buffer => body += buffer.toString())
        .on('end', () => {
            try {
                //console.log('body',body);
                
                request.body = JSON.parse(body);
                
                //console.log('request.body',request.body);
                
            } catch (e) {
                //body can't be parsed.
                //It is optional to have a JSON body
                //so we will ignore this error.
                //console.log('invalid json',body);
                
            }
            next();
        });
}

function logRequestInfo(request,response,next){
    console.log(`${request.method} ${request.path}`);
    console.log('request.path',request.path);
    console.log('request.params',request.params);
    console.log('request.query',request.query);
    console.log('request.body',request.body);
    console.log();
    
    
    next();
    
}


const  errorHandler=(error,request,response,next)=>{
    response.status(500).json({ message:error.message});
}



module.exports={
    jsonBody: jsonBody,
    logRequestInfo,
    errorHandler,
    addCustomError,
    routeHandler,
    Response,
};
