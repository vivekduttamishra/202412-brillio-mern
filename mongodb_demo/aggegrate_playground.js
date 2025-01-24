const mongox =require('./mongox');

async function printAllAuthors(){
    let authors = await mongox.executeOnCollection("authors",async (authorsCollection)=>{
        return await (authorsCollection.find()).toArray();
    });

    for(let author of authors){
        console.log(author);
    }
}

async function findAuthorById(id){
    let author= await mongox.findOne('authors',{id})
    if(author)
        return author;
    else
    throw new Error(`Couldn't find author with id: '${id}'`);
}

async function testFindAuthorById(){
    let authorIds=['vivek-dutta-mishra','sanjay-mall', 'jk-rowling']

    for(let id of authorIds){
        findAuthorById(id)
            .then(author=>console.log(id,author.name))
            .catch(err=>console.error(err.message));
    }
}

async function updateAuthorId(bookId,authorId){
    await mongox.executeOnCollection("books",async(collection)=>{

        await collection.updateOne(
            {id:bookId}, //update which document?
            {$set:{authorId:authorId}} //whats the update
        )


    });
}

async function showAuthorSummary(){
    let result= await mongox.aggregate("books",[
        {
            $group:{
                _id: "$authorId",
                groupKey:{ $first:"$authorId"},
                booksWritten: {$sum:1},
                averagePrice: {$avg: "$price"},
                author:{ $first:"$author"}
            }
        }
    ]);

    console.log(result)
}

showAuthorSummary();

//updateAuthorId('kane-and-abel','jeffrey-archer')


//printAllAuthors();
//testFindAuthorById();