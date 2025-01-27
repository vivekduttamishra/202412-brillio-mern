require('dotenv').config();
let path=require('path');
process.env.ROOT_PATH =path.join(__dirname,'..');

let httpx=require('./utils/httpx');
let app = require('./app')

console.log('process.env.ROOT_PATH',process.env.ROOT_PATH);

console.log('__dirname',__dirname);

httpx.runApp(app, async()=>{
    //database initialization here
});
 


