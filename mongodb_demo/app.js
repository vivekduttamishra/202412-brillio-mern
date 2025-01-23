require('dotenv').config()
const mongodb=require('mongodb');

console.log('process.env.MONGODB_URL',process.env.MONGODB_URL);


const client = new mongodb.MongoClient(process.env.MONGODB_URL);


async function getAllBooks(){
    try{
        console.log('getting all books...');
        const client = new mongodb.MongoClient(process.env.MONGODB_URL);
        await client.connect();
        
        const db = client.db('brillio_books'); //use brillio_books
        
        const booksCollection = db.collection('books');

        const books_cursor =await  booksCollection.find({})

        const books = await books_cursor.toArray(); //convert cursor to array
        
        books.forEach(book=> console.log(book.title,book.author))



    }catch(e){
        console.error('error connecting to mongdob', e.message);
    }finally{
        client.close();
        console.log('disconnected...');
    }
}


async function getAuthorById(id){
    try{
        var connection=await client.connect();
        const db = connection.db(); //default database (as per connection url)
        const authorsCollection = db.collection('authors');
        var authors=authorsCollection.find({id:id})
        authors=await authors.toArray();

        if(authors.length==0)
            console.log(id,'not found');
        else
            console.log(id,authors[0].name);
        
        
        
    }catch(err){
       connection.close();
    }finally{
        connection.close();
    }
}



//getAllBooks();
  
getAuthorById('jk-rowling');
getAuthorById('vivek-dutta-mishra')
getAuthorById('unknown')