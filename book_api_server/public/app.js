

const app = (function(){

    const url = 'http://localhost:8000/api/books';

    async function getAllBooks(){
        let response = await fetch(url);
        let books = await response.json();
        //console.log('books',books);
        showBooks(books);       
    }

    function showBooks(books){
        let bookList = document.getElementById('books');
        let rows= books.map(book=>`
            <tr>
                <td>
                    <img height="100" src="${book.cover}" alt="${book.title}" />
                </td>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.price}</td>
            </tr>
        `).join('');


        bookList.innerHTML = rows;
    }

    getAllBooks();

})();