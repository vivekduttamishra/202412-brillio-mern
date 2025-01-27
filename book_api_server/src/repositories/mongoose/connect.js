const mongoose = require('mongoose');


async function connect(){
    //url = url || process.env.MONGODB_URL;
    let url = process.env.MONGODB_URL;
    if(!url)
        throw new Error('No MongoDB URL found in environment variables');
    await mongoose.connect(url);
}

async function disconnect(){
    await mongoose.connection.close();
}

module.exports = {
    connect,
    disconnect
};