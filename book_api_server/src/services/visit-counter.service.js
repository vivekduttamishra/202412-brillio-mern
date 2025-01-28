const fs = require('fs').promises;

/* Log format
{
   "200":{
      "GET /books":5,
      "GET /books/the-accursed-god":3,
   },

   "201":{
   "POST /books":1,
   "POST /books/the-unseen-world":2
   },

   "404":{
      "GET /books/the-unseen-world":1,
      "GET /books/the-lost-city":2
   }
}
*/


class VisitCounter{
    constructor(dbPath){
        this._path=dbPath;
        this._loading = this._load();        
        this._log={};
    }

    async _load(){
        try{
            let data= await fs.readFile(this._path)
            this._log=JSON.parse(data);

        }catch(e){
            //file may not exists. It is ok.
            console.log('error loading log', e.message)
            this._log={};
        }            
    }

    async _save(){
        await fs.writeFile(this._path, JSON.stringify(this._log,null,3));
    }

    //send a request as {method:get",url:"/books", status:200}
    async addRequest( {method,url,status=200}) {
        let rootKey = status;
        let requestKey= `${method} ${url}`.toLowerCase();

        //if no request with current rootKey is saved
        //create the rootKey
        if(!this._log[rootKey])
            this._log[rootKey]={};

        let rootObject = this._log[rootKey];
        if(rootObject[requestKey]){
            rootObject[requestKey]++;
        }else{
            rootObject[requestKey]=1;
        }
        

        await this._save();
    }

    get log(){
        return this._log;
    }

   

}

let _visitCounter=null;

async function getVisitCounter(){
    if(!_visitCounter){
        _visitCounter = new VisitCounter(process.env.VISIT_LOG_FILE);
        await _visitCounter._loading;
    }

    return _visitCounter;
    
}

//middleware to log visits
// async function logVisits(request,response,next){
//     let counter= await getVisitCounter();
//     await counter.addRequest({method:request.method, url:request.url});
//     next();
// }



function logVisits(request,response,next){

    response.on('finish',async()=>{

        //console.log('response.statusCode',response.statusCode);
        //console.log('request',request);
        
        
      //  console.log('other middleware worked');
        //now response is generated. we can start to work on response.
        let counter= await getVisitCounter();
        await counter.addRequest({method:request.method, url:request.originalUrl,status:response.statusCode});
    

    });
 
     next(); //let other work
}

//middleware to show visits for a given key.
async function showVisits(request,response){
    console.log('request.params',request.params);
    
    let counter= await getVisitCounter();
    console.log('counter.log',counter.log);
        
    response.send(counter.log[request.params.status]||{});

}

async function showVisitsTable(request,response){

    let {status}=request.params;
    let counter= await getVisitCounter();
    counter = counter.log[status]||{};

    let table=`<table style="width:100%;border:1 px solid gra;">
                <thead>
                    <tr>
                        <th>Method/URL</th>
                        <th>Visits</th>
                       
                    </tr>
                </thead>
                <tbody>`;

    for(let key in counter.log){
        table+=`<tr><td>${key}</td><td>${counter[key]}</td></tr>`;
    }

    table+=`</tbody></table>`;

    response.send(`<html>
                    <head>
                        <title>Visit Log for Status {status}</title>
                    </head>
                    <body>
                        <h1>Visit Log for status {status}</h1>
                        ${table}
                    </body>
                    </html>`
                );
    

}


module.exports={
    getVisitCounter,
    logVisits,
    showVisits,
    showVisitsTable,
    
    
}