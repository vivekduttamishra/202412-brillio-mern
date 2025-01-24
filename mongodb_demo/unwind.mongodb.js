use('brillio_books')



db.books.aggregate([
    {
        $project:{
            _id:0,            
            title:1,
            author:1,
            price:1,
            tags:1           
        }
    },
    {
        $unwind:'$tags'
    }
]);