require('dotenv').config()
const mongodb = require('mongodb');

console.log('process.env.MONGODB_URL', process.env.MONGODB_URL);

async function toConnect(funct) {


    try {

        var client = new mongodb.MongoClient(process.env.MONGODB_URL);

        await client.connect();
        const db = client.db('brillio_books');
        return await funct(db);

    } catch (e) {
        console.error('error connecting to mongdob', e.message);
    } finally {
        client.close();
        console.log('disconnected...');
    }
}

async function getAllBooks() {
    await toConnect(async (db)=>{
        const booksCollection = await db.collection('books');
        const books_cursor = await booksCollection.find({});
        const books = await books_cursor.toArray(); //convert cursor to array
        books.forEach(book=>console.log(book.title,book.author));
    })

    }


async function getAuthorById(id) {
    await toConnect(async (db)=>{
        const authorsCollection = await db.collection('authors');
        const authors_cursor = await authorsCollection.find({id:id});
        const authors = await authors_cursor.toArray()

            if (authors.length==0)
                console.log(id, author.name);
            else
                console.log(id, 'not found');
    })
}



    // getAllBooks();

    getAuthorById('jk-rowling');
    // getAuthorById('vivek-dutta-mishra')
    // getAuthorById('unknown')