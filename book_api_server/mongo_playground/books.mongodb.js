use('brillio_books')

//db.authors.find();

function createUsers(){   
    
    db.users.insertMany([
        {   name:'Vivek Dutta Mishra', 
            email:'vivek@conceptarchitect.in', 
            password:'p@ss',
            roles:['admin','editor'],
            employeeId:'4944'
        },
        {   name:'Rajiv Bagga', 
            email:'rajiv.bagga@gmail.com', 
            password:'p@ss',
            roles:['customer'],
            customerId:'4944333'
        },
        {   name:'Fagun Pandya', 
            email:'fagun.pandya@gmail.com',  
            password:'p@ss',
            roles:['editor'],
            employeeId:'49445'
        },
    ])
}

function findAllBooks(){
   return  db.books.find();
}

findAllBooks();

//findAllBooks();

function findBooksByAuthor(id){
    return db.books.find({authorId:id})
}

//findBooksByAuthor('jk-rowling');

function findUserInRole(role){
    return db.users.find({roles:role})
}

//findUserInRole('editor');

function findAllBooksWithPartialTitle(text){

    return db.books.find({title: {$regex:text, $option:'i'}});
}

//findAllBooksWithPartialTitle('harry');


function findAllBooksUnderPrice(price){
    return db.books.find(
        {price: {$lt:price}},
        {title: 1, author:1, price:1, _id:0}
    
    )
}

//findAllBooksUnderPrice(200);

// db.books.find(
//     {
//         authorId:'jk-rowling',
//         //and
//         price:{$lt:300}
//     },
//     {
//         title: 1,
//         author: 1,
//         price: 1,
//         _id: 0,
        
//     }
// )


// db.books.find({
//     $or: [{ tags: 'indian'}, {tags: 'classic'}]
// },
// {
//     title:1,
//     tags:1,
//     _id:0

// })


function findBooksInPriceRange(min,max){
    return db.books.find({
        $and: [{ price:{$gt:min}}, {price:{$lt:max}}]
    },{
        title:1,
        author:1,
        price:1,
        _id:0,
        
    })
}

//findBooksInPriceRange(200,300);

//return all books with review count
db.books.find({},{
    title : {$toUpper: '$title'},
    author:1,
    price:1,
    
    _id:0,
    reviewAverage: {$avg:'$reviews.rating'}
 
})


// db.books.find({
//     $and: [
//         { reviews: { $exists: true, $type: "array" } }, // Ensure `reviews` exists and is an array
//         { $expr: { $gte: [{ $size: "$reviews" }, 2] } } // Check if `reviews` has at least 2 elements
//     ]
// }, {
//     title: 1,
//     reviews: { $size: '$reviews' },
//     _id: 0
// });


db.books.find({
    $where: "this.reviews && this.reviews.length > 0"
  },{title:1, reviews: { $size: '$reviews'},_id:0});