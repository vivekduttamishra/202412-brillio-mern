use('brillio_books')

db.books.aggregate([
    {
        $unwind: "$tags"
    },
    {
        $group: {
            _id: "$tags",
            book_count: { $sum: 1 },
            books: {
                $push: {
                    id: "$id",
                    title: "$title",
                    author: "$author"
                }
            }
        }
    },
    {
        $sort: {
            book_count: -1
        }
    }
])