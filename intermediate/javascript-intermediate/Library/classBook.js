class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus() {
        this.read = !this.read;
    }

}

class Library{
    constructor(LibraryArr) {
        this.LibraryArr = LibraryArr;
    }

    constructor() {
        this.LibraryArr = [];
    }

    addBookToLibrary(Book) {
        this.LibraryArr.push(Book);
    }

    deleteBookFromLibrary(Book) {
        let index = this.LibraryArr.indexOf(Book);
        if(index > -1) {
            myLibrary.splice(index, 1); //remove 1 elem
        }
    }


}