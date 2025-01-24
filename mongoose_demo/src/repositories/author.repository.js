const Author = require('../models/author.model');




class AuthorRepository{
    async getAll(match={}){
        return await Author.find({});
    }

    async getById(id){
        return await Author.findOne({id});
    }

    async add(authorData){
        let dbAuthor = new Author(authorData); //here validation will take place
        return await dbAuthor.save();
    }

    async update(id, authorData){
        return await Author.findOneAndUpdate({id},authorData)
    }

    async delete(id){
        return await Author.findOneAndDelete({id});
    }
}

module.exports = new AuthorRepository();