class AuthorService{
    constructor(authorRepository){
        this.authorRepository = authorRepository;
    }

    async getAllAuthors(){
        return await this.authorRepository.getAll();
    }

    async getAuthorById(id){
        return await this.authorRepository.getById(id);
    }

    async addAuthor(author){
        return await this.authorRepository.create(author);
    }

    async updateAuthor(id, updatedAuthor){
        return await this.authorRepository.update(id, ()=> updatedAuthor);
    }

    async deleteAuthor(id){
        return await this.authorRepository.delete(id);
    }
    
}

AuthorService._dependencies = ["authorRepository"]


module.exports = AuthorService;