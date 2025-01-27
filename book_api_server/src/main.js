require('dotenv').config();
let httpx=require('./utils/httpx');


let path=require('path');
process.env.ROOT_PATH =path.join(__dirname,'..');



require('./injector_config.js'); //configure all the services.

let db  = require('./repositories/mongoose/connect');


let app = require('./app')
httpx.runApp(app, async()=>{
    //database initialization here
    await db.connect();
    console.log('Database connection established');
});
 


