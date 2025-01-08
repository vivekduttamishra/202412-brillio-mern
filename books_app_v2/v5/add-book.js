

const app=(function(){

    function value(id){
        return document.getElementById(id).value;
    }

    function handleAddBook(){

        const newBook={
            id:value('id'),
            title:value('title'),
            author:value('author'),
            price:+value('price'),
            rating:+value('rating'),
            cover:value('cover'),
            description:value('description'),
        }

        //console.log('adding a book',newBook);
    
        let error= bookManager.addBook(newBook);
        if(error){
            document.getElementById('error').innerHTML=error;
        }
        else{
            document.getElementById('error').innerHTML='Done';
            console.log(bookManager.getAllBooks());
            window.location.href="index.html";
        }
    }

    return {
        handleAddBook
    }

})();