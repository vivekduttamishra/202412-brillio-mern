use('brillio_books')

db.books.aggregate([

    {
        $project:{
            title:1,
            reviews: {$ifNull:[
                            '$reviews', //not null value of review
                            []  //replace null with this one.
                        ]},
            _id:0
        }   
        
    },
    {
        $project:{
            title:1,
            votes: {$size:"$reviews"},
            rating:  {$avg:"$reviews.rating"}
        }
    },
    {
        $match:{
            votes:{$gt:0},
            rating:{$gt:4.5}
        }   
    },
    {
        $sort:{votes:1}
    }
])


