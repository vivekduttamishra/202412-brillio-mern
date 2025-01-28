require('dotenv').config();



let path=require('path');
process.env.ROOT_PATH =path.join(__dirname,'..');

const port = process.env.PORT || 8000;

 


require('./injector_config.js'); //configure all the services.

let db  = require('./repositories/mongoose/connect');
let app = require('./app')
let http=require('http');
let https = require('https');
let fs = require('fs');


async function runApp(requestHandler){
    try{

        await db.connect();
        let url=await startServer(requestHandler,port);
        console.log('server started', url);
    }catch(e){
        console.error('Error starting server',e.message);
        process.exit(1); //failure.
    }
}


function startServer(requestHandler,port){
    return new Promise((resolve,reject)=>{

        // let option={
        //     key: fs.readFileSync('key.pem'),
        //     cert: fs.readFileSync('cert.pem'),            
        // } 
        // console.log('certificate loaded.')
        // let server = https.createServer(option,requestHandler);

        //create https server
        let options= {
            key: fs.readFileSync(path.join(process.env.ROOT_PATH,'key.pem')),
            cert: fs.readFileSync(path.join(process.env.ROOT_PATH,'cert.pem')),
        }
        options.agent = new https.Agent(options);
        let server = https.createServer(options, requestHandler);



        
        server.on('error', reject);
        
        server.listen(port,()=>{
            resolve(`https://localhost:${port}`);
        })

    })    
}



runApp(app);