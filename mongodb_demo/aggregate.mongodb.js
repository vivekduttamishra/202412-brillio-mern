
use('brillio_books')


db.books.aggregate([
    {
        $group:{
            _id: "$authorId",
            title: "$title"
           
        }
    }
])


//update author id of a book

// db.books.updateMany(
//     { id: "kane-and-abel" },
//     { $set: { authorId: "jeffrey-archer" } }
// )