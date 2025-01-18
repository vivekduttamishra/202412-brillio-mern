const {addRequestHandler} = require('../httpx')


addRequestHandler( (request,response)=>{
    if(request.url==="/authors" && request.method==='GET'){
        response.end(JSON.stringify([{name:'Vivek Dutta Mishra'},{name:'Ramdharhi Singh Dinkar'}]));
        return true;
    }
})

addRequestHandler( (request,response)=>{
    if(request.url.startsWith("/authors") && request.method==='GET'){
        let id = request.url.split('?')[0].split('/').pop();
        response.end(JSON.stringify({name:'Vivek Dutta Mishra',id}));
        return true;
    }
})