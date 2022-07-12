function Book(title , author , pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
    
    if(this instanceof Book) {
        myLibrary.push(this);
    } else {
        console.log("add a book dumdum")
    }
    
    return 1;
}

let myLibrary = [];

function browseLibrary( libraryArray ) {
    let library = document.querySelector(".libraryTable");
    libraryArray.forEach(x => {
        let temp = document.createElement("div");
        temp.textContent = x.title;
        library.appendChild(temp);
    })
}



let Book1 = new Book("jungle bro" , "mohave", 333 , true);
let Book2 = new Book("timbook2" , "mohave", 333 , false);
console.log("myLibrary");
Book1.addBookToLibrary();
Book2.addBookToLibrary();

console.log(myLibrary);
browseLibrary(myLibrary);
