require('dotenv').config();
const mongoose  = require('mongoose');

async function execute(action){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
        return await action();
        
    }catch(e){
        console.error('error',e.message);
    }finally{
        mongoose.connection.close();
        console.log('Connection closed');
    }
}



module.exports={
    execute
}

