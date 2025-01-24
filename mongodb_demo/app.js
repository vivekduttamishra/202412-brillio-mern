require('dotenv').config()
const mongodb=require('mongodb');

console.log('process.env.MONGODB_URL',process.env.MONGODB_URL);

var client= new mongodb.MongoClient(process.env.MONGODB_URL);


async function getAllBooks(){
    try{
        var client = new mongodb.MongoClient(process.env.MONGODB_URL);
        console.log('getting all books...');
        
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
        var client = new mongodb.MongoClient(process.env.MONGODB_URL);
        var connection = await client.connect();        
        var db= connection.db(); //default database (as per connection url)
        const authorsCollection = await db.collection('authors');
       
        var author = await authorsCollection.findOne({id});

        if(author)
            console.log(id,author.name);
        else
            console.log(id,'not found');
            
        
        
        
    }catch(err){
       console.log('err.message',err.message);
       
    }finally{
        connection.close();
    }
}



//getAllBooks();
  
getAuthorById('jk-rowling');
getAuthorById('vivek-dutta-mishra')
getAuthorById('unknown')