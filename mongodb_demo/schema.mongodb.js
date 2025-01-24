use('brillio_books')


//create a use collection

async function createUserCollection(){
    return await db.createCollection('users',{
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['name', 'email', 'password'],
                properties: {
                    name: { bsonType: 'string' },
                    email: { bsonType: 'string' },
                    pin:{ bsonType: 'number'},
                    password: { bsonType: 'string', minLength: 8 }
                }
            }
        }
     
    })
}


async function insertUser(user){
    try{
        let dbUser = await db.users.insertOne(user);
        console.log('User inserted successfully');
        return dbUser;
    }catch(err){
        console.error('Error inserting user:',err);
    }
}


//db.users.drop();

//createUserCollection();


//enter a valid user with required fields only
//insertUser({ name:'Vivek', email:'vivek@gmail.com', password:'p@ss#1234'})

//enter a valid user with additional field
//insertUser({ name:'Rajiv', email:'rajiv@gmail.com', password:'p@ss#1234', pin:3399, roles:['admin']})


//enter a user with missing details
//insertUser({name:'Sanjay'})

insertUser({name:'sanjay', email:'sanjay@gmail.com', password:'p@ss#1234', pin:"secret"})

//db.users.find();