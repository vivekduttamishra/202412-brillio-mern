const { delay,ValidationError } = require("../utils");
const fs = require('fs').promises;
 
class BookManager{
    constructor(path){
        this.books=[];
        this.path=path;
        this._load(path).then(result=>this.books=result);
    }
    
    async getAllBooks(){
       return this.books;
    }

    async loading(){
        while(! this.books.length){
            await delay(10);
            return true;
        }
    }

    
    async _load(path){
    
        let data = await fs.readFile(path);
        return JSON.parse(data);
    } 
    async _save(){

        await fs.writeFile(this.path, JSON.stringify(this.books,null,3));

    }

    _validate(book){
        let errors={};

        if(!book.title)
            errors.title="Required";
        if(!book.author)
            errors.author="Required";
        if(!book.price)
            errors.price="Required";
        if(isNaN(book.price) || book.price<0)
            errors.price="Invalid price";

        if(Object.keys(errors).length){
            throw new ValidationError(errors);
            //return new ValidationError(errors);
        }
    }

    async addBook(book){

        this._validate(book);

        if(!book.id){
            book.id=book.title.toLowerCase().split(' ').join('-')
        }

        this.books.push(book); 
        await this._save();
        return book;
    }

    async getById(id){
        return this.books.find(b=>b.id.toLowerCase()===id);
    }

    async removeBook(id){
        let book = await this.getById(id);
        if(book){

            id=id.toLowerCase();
            this.books=this.books.filter(b=>b.id.toLowerCase()!==id);
            await this._save();
            
        } 
        return book;
    }

    async update(id,updatedInfo){
        this._validate(updatedInfo)

        id=id.toLowerCase();
        this.books= this.books.map(b=>b.id.toLowerCase()===id?updatedInfo:b);  
        await this._save();  
        console.log('book saved',this.book)
        return await this.getById(id);        
    }

    //'the-accursed-god', { price:200}
    async partialUpdate(id, partialInfo){
        let book = await this.getById(id);
        if(book){
            this._validate({...book, ...partialInfo});
            for(let key in partialInfo){
                book[key]=partialInfo[key];
            }   
        }

        await this._save();
        return book;
    }

    async searchBook(filter){
        return this.books.filter(filter);
    }
}

//module.exports = new BookManager('./src/books.json');
module.exports = new BookManager(process.env.BOOKS_DB);