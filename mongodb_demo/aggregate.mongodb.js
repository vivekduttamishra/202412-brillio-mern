
use('brillio_books')


db.books.aggregate([
    {
        $group:{
            _id: "$authorId",
            groupKey:{ $first:"$authorId"},
            booksWritten: {$sum:1},
            averagePrice: {$avg: "$price"},
            author:{ $first:"$author"}
        }
    }
])


//update author id of a book

// db.books.updateMany(
//     { id: "kane-and-abel" },
//     { $set: { authorId: "jeffrey-archer" } }
// )