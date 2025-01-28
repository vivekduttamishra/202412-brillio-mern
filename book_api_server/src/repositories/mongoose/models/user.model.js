

const mongoose = require('mongoose');

const userSchema =mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true        
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        //validate that password should contain at leas one upper case, one lower case, on digit and one spcial character
        // validate: {
        //     validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
        //     message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
        // }        
    },
    roles:{
        type: [String],
        required: true,
        enum:['user','admin','employee','editor']
    },
    inactive:{
        type: Boolean,
        default: true
    },
    photo:{
        type: String,
        
    }

});

const User= mongoose.model('User',userSchema, "users");


module.exports=User;