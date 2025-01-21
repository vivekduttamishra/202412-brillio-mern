const fs = require('fs').promises;

/* Log format
{
   "success":{
      "GET /books":5,
      "GET /books/the-accursed-god":3,
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
    async addRequest( request) {
        let key= `${request.method} ${request.url}`.toLowerCase();
        let root = request.status===404 ? "404": request.status>=200 && request.status<300?"success":null;
        if(!root)
            return;

        if(!this._log[root])
            this._log[root]={};

        let rootObject = this._log[root];

        if(rootObject[key]){
            rootObject[key]++;
        }else{
            rootObject[key]=1;
        }

        

        await this._save();
    }

    get log(){
        return this._log['success'];
    }

    get errors(){
        return this._log['404'];
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

        console.log('other middleware worked');
        //now response is generated. we can start to work on response.
        let counter= await getVisitCounter();
        await counter.addRequest({method:request.method, url:request.url,status:response.status});
    

    });

     next(); //let other work
}

//middleware to show visits
async function showVisits(request,response){

    let counter= await getVisitCounter();
    response.send(counter.log);

}

async function show404(request,response){
    let counter= await getVisitCounter();
    response.send(counter.errors);
}
async function showVisitsTable(request,response){

    let counter= await getVisitCounter();
    let table=`<table style="width:100%;border:1 px solid gra;">
                <thead>
                    <tr>
                        <th>Method/URL</th>
                        <th>Visits</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let key in counter.log){
        table+=`<tr><td>${key}</td><td>${counter.log[key]}</td>`
    }

    table+=`</tbody></table>`;

    response.send(`<html>
                    <head>
                        <title>Visit Log</title>
                    </head>
                    <body>
                        <h1>Visit Log</h1>
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
    show404
    
}