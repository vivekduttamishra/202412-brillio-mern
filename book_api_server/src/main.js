require('dotenv').config();



let path=require('path');
process.env.ROOT_PATH =path.join(__dirname,'..');



 


require('./injector_config.js'); //configure all the services.

let db  = require('./repositories/mongoose/connect');
let app = require('./app')


const httpx = require('./utils/httpx');


httpx.runApp({
        protocol:'https',
        requestHandler:app, //express app
        initializer: async()=>{
            await db.connect();
        }
    
    }); 