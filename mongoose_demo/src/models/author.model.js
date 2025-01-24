const mongoose= require('mongoose');

//create an author schema object
const authorSchema= new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    biography:{
        type:String,
        required:true,
        minlength:20,
        maxLength:2500
    },
    photo:{
        type:String,
        required:true,
        match:/\.(jpg|jpeg|png)$/i
    },
    tags:{
        type: [String],
        required:true        
    }
});


//create an author model using the author schema

const Author= mongoose.model('Author',authorSchema,"authors");

module.exports=Author;