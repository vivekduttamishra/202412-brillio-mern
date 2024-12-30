
let books=[
    {
        title:'The Accursed God',
        author: 'Vivek Dutta Mishra',
        price:399,
        reviews:[
            {name: 'Sanjay', rating:5, title:'Great Book', text:'A must read book'},
            {name: 'Prabhat', rating:3, title:'Too thick', text:'I left midway'}
        ]
    },
    {
        title:'Manas',
        author: 'Vivek Dutta Mishra',
        price:199,
        reviews:[
            {name: 'Amit', rating:4, title:'Great Book', text:'A poetic discussion on Mahabharat'},
            {name: 'Shibesh', rating:4, title:'Too thick', text:''},
            {name: 'Shivanshi', rating:5}
        ]
    }
]

for(let book of books){
    console.log(`${book.title} by ${book.author}`)
    console.log(`Price: ${book.price}`)
    console.log(`Reviews:`);
    for(let review of book.reviews){
        console.log(`\tRating: ${review.rating}`)
        console.log(`\t\tBy: ${review.name}`)
        //if(review.title)
            console.log(`\t\t${review.title?.toUpperCase()}`) //do toUper only if title exists
        //if(review.text)
            console.log(`\t\t${review.text||''}`) //if no text then display empty string.
        console.log();
    }
    console.log('------------------------')
}
