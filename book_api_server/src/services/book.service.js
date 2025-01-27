const {ValidationError} = require("../utils/errors");

 
class BookService{
    constructor(bookRepository,authorService){
        this.bookRepository = bookRepository;    
        this.authorService = authorService;    
    }
    
    async getAllBooks(){
       return await this.bookRepository.getAll();
    }
  

    async _validate(book){
        let errors={};

        if(!book.title)
            errors.title="Required";
        if(!book.author)
            errors.author="Required";
        if(!book.price)
            errors.price="Required";
        if(isNaN(book.price) || book.price<0)
            errors.price="Invalid price";

        //make sure that authorId is a valid author.
        let author = await this.authorService.getAuthorById(book.authorId);
        if(!author){
            error.authorId='Invalid Author Id: '+authorId;
        }


        if(Object.keys(errors).length){
            throw new ValidationError(errors);
            //return new ValidationError(errors);
        }
    }

    async addBook(book){

        await this._validate(book);

        let result = await this.bookRepository.create(book);
        return result;
    }

    async getById(id){
        return this.bookRepository.getById(id);
    }

    async removeBook(id){
        return await this.bookRepository.remove(id);
    }

    async update(id,updatedInfo){
        this._validate(updatedInfo)
        id=id.toLowerCase();
        
        return await this.bookRepository.update(id,()=>updatedInfo);       
    }

    //'the-accursed-god', { price:200}
    async partialUpdate(id, partialInfo){
        return await this.bookRepository.update(id.toLowerCase,(exiting)=>{
            return {...exisitng, ...partialInfo}
        });
    }

    async searchBook(matcher){
        return await this.bookRepository.search(matcher);
    }
}

BookService._dependencies =['bookRepository','authorService']


module.exports = BookService;