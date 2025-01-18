const { delay } = require("../utils");
const fs = require('fs').promises;
 
class BookManager{
    constructor(){
        this.books=[];
        this._load('./src/books5.json').then(result=>this.books=result);
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

    addBook(book){
        this.books.push(book); 
    }

    async getById(id){
        return this.books.find(b=>b.id.toLowerCase()===id);
    }

    removeBook(id){

    }

    searchBook(filter){

    }
}

module.exports = new BookManager();