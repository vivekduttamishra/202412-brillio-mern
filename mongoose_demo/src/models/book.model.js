const mongoose = require('mongoose');

//create a review schema

const reviewSchema = new mongoose.Schema({
  reviewer:{
    type: String,
    required:true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 1000,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//create a book schema refering to Author object

//adding reference using non _id field


const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  author: {
    type: 'string',
    ref: 'Author', //schema name
    required: true,    
    refField: 'id'
  },
  tags: [
    {
      type: [String],
      required: true,
      
    },
  ],
  reviews: [reviewSchema],
});

//create a model for Book (but not for nested entity Review)

const Book = mongoose.model('Book', bookSchema,'books');