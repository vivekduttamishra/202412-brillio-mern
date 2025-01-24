require('dotenv').config();
const {executeOnCollection} = require('./mongox');



const printAllBooks = async()=>{

    const books = await executeOnCollection('books', async (collection)=>{
        return await (collection.find()).toArray();
    });

    for(let book of books){
        console.log(book.id, book.title, book.author);
    }

}


//repository code
async function findBookById(id){

    return  await executeOnCollection('books', async(collection)=>{
        return await collection.findOne({id});
    });
}

//printAllBooks();
//controller
async function printBookById(id){
    let book = await findBookById(id);
    if(book){
        console.log(book.title, book.author);
    }else{
        console.log('Book not found',id);
    }
}

//routes
printBookById('the-accursed-god')
printBookById('manas')
printBookById('kane-and-abel')

//printAllBooks();