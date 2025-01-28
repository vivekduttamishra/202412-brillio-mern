const bcrypt= require('bcrypt');
use('brillio_books')


async function hashAllPassword(plainPassword){
    let users = await db.users.find({})
    for(let user of users){
        let hashedPassword = await bcrypt.hash(plainPassword,10);
        db.users.updateOne({_id:user._id},{$set:{password:hashedPassword}})
        console.log('User password hashed',user.name);
    }
}

function activateAllUsers(){

    db.users.updateMany({},{
        $set:{inactive:false}
    })
}

//activateAllUsers();

//hashAllPassword("p@ss$1234")

db.users.find()