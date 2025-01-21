const fs = require('fs').promises;

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

    //send a request as {method:get",url:"/books"}
    async addRequest( request) {
        let key= `${request.method} ${request.url}`.toLowerCase();

        if(this._log[key])
            this._log[key]++; //yet another visit to this url
        else
            this._log[key]=1; // first visit to this url

        await this._save();
    }

    get log(){
        return this._log;
    }

}

let _visitCounter=null;

async function getVisitCounter(){
    if(!_visitCounter){
        _visitCounter = new VisitCounter('db/visits.json');
        await _visitCounter._loading;
    }

    return _visitCounter;
    
}

//middleware to log visits
async function logVisits(request,response,next){
    let counter= await getVisitCounter();
    await counter.addRequest({method:request.method, url:request.url});
    next();
}

//middleware to show visits
async function showVisits(request,response){

    let counter= await getVisitCounter();
    response.send(counter.log);

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
    showVisitsTable
    
}