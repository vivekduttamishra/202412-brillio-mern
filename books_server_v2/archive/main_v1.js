let express= require('express');

let app=express();

let port = process.argv.pop();
if(isNaN(port))
    port=5000;


app.listen(port,()=>{
    console.log(`Server started: http://localhost:${port}`);
})
