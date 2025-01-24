require('dotenv').config();

const authorRepository = require('./repositories/author.repository')
//const { execute } = require('./connect');
const mongoose = require('mongoose');

const Author = require('./models/author.model');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URL)

}


async function printAllAuthors() {

    const authors = await authorRepository.getAll();
    for (let author of authors) {
        console.log(author.name)
    }

}

async function addAuthors() {
    await authorRepository.add({
        id: 'vivek',
        name: 'Vivek Dutta Mishra',
        biography: 'Author of The Lost Epic Series',
        tags: ['fiction', 'indian', 'mahabharata'],
        photo: 'vivek.jpg'
    })

    await authorRepository.add({
        id: 'dinkar',
        name: 'Ramdhari Singh Dinkar',
        biography: 'The National poet of India',
        tags: ['fiction', 'indian', 'poet', 'hindi', 'minister'],
        photo: 'dinkar.jpg'
    });
    await authorRepository.add({
        id: 'dumas',
        name: 'Alexandre Dumas',
        biography: 'One of the altime greatest classic author in French',
        tags: ['fiction', 'french', 'classic', 'minister'],
        photo: 'dumas.jpg'
    });
}

async function printAuthorById(id){
    const author = await authorRepository.getById(id);
    if(author)
        console.log(id,author.name);
    else
        console.error(`Invalid Id`,id);
}


async function main(){
    await connect();
    //await addAuthors();
    //await printAllAuthors();
    await printAuthorById('vivek');
    await printAuthorById('dumas');
    await printAuthorById('archer');


    mongoose.connection.close();
}

main();