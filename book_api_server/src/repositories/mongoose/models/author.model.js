
const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique:true,
        //custom validator
        validate: {
            validator: async(value) => {
                let result = this.findOne({id:value});
                return !result;
            },
            message: 'Duplicate Id'
        },
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    biography:{
        type: String,
        required: true,
        trim: true,
        minLength:20,
        maxLength:2000
    },
    photo:String,
    tags:{
        type: [String],
        required: true,        
        maxLength: 5
    }

});

//pre("validate")

authorSchema.pre("validate", async function(next){
    if(!this.id && this.name){
        this.id=this.name.toLowerCase().split(' ').join('-');
    }
    next();
});

const author = new mongoose.model("Author", authorSchema,"authors");

module.exports = author;
