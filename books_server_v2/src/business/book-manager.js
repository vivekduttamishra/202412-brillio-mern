const { delay } = require("../utils");
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

    async addBook(book){
        this.books.push(book); 
        await this._save();
    }

    async getById(id){
        return this.books.find(b=>b.id.toLowerCase()===id);
    }

    async removeBook(id){
        id=id.toLowerCase();
        this.books=this.books.filter(b=>b.id.toLowerCase()!==id);
        await this._save();
    }

    async update(id,updatedInfo){
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

module.exports = new BookManager('./src/books.json');