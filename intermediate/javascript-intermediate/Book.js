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
        temp.title = x.title;
        temp.textContent = x.title;
        library.appendChild(temp);
        
        let delBtn = document.createElement('button');
        delBtn.addEventListener('click', deleteBook);
        delBtn.textContent = "delete Book";
        temp.appendChild(delBtn);
    });
}



function newBook() {
    let entry = document.getElementById("bookEntry");
    let temp1 = document.createElement("input");
    temp1.id = 'bookname';
    temp1.name = 'bookname';
    let temp2 = document.createElement("input");
    temp2.id = 'author';
    temp2.name = 'author';
    let temp3 = document.createElement("input");
    temp3.id = 'pages';
    temp3.name = 'pages';
    let temp4 = document.createElement('input');
    temp4.id = 'isRead';
    temp4.name = "isRead";
    temp4.type = "checkBox";

    entry.appendChild(temp1);
    entry.appendChild(temp2);
    entry.appendChild(temp3);
    entry.appendChild(temp4);



    let bookName = document.getElementById("bookName");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let isRead = document.getElementById("isRead");

    let newBook = new Book(bookName, author, pages, isRead);
    myLibrary.push(newBook);

}

function deleteBook() {
    let BookDom = this.parentElement;
    console.log(BookDom.title);
    let newLibrary = myLibrary.filter(a => a.title != BookDom.title);
    console.log(newLibrary);
    myLibrary = newLibrary;
    let library = document.querySelector('.libraryTable');
    library.innerHTML = '';
    browseLibrary(myLibrary);
}




let Book1 = new Book("jungle bro" , "mohave", 333 , true);
let Book2 = new Book("timbook2" , "mohave", 333 , false);
console.log("myLibrary");
Book1.addBookToLibrary();
Book2.addBookToLibrary();

console.log(myLibrary);

browseLibrary(myLibrary);
