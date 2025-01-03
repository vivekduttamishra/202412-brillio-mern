
function Author(name, biography) {
    this.name = name;
    this.biography = biography;
    this.books = [];
}

Author.prototype.addBook = function (book) {
    this.books.push(book);
}
