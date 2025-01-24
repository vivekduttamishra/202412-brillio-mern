use('brillio_books')


//we will start with the master collection (authors)

db.authors.aggregate([
    {
        $lookup: {
            from: "books",
            localField: "id", //key in authorCollection
            foreignField: "authorId", //key in books collection
            as: "books"
        }
    },
    {
        $project:{
            author:1,
            "books.title":1,
            bookCount:{$size: "$books"}
        }
    }
]);