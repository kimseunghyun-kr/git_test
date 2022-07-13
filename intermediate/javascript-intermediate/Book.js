function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function () {
    let library = document.querySelector(".libraryTable");
    if (this instanceof Book) {
        // console.log("added");
        myLibrary.push(this);

        let temp = document.createElement("div");
        temp.title = this.title;
        temp.textContent = this.title;
        temp.data = Object.freeze(this);
        console.log("*************");
        console.log(temp.data);
        console.log("*************");
        library.appendChild(temp);
        let delBtn = document.createElement('button');
        delBtn.addEventListener('click', deleteBook);
        delBtn.textContent = "delete Book";
        temp.appendChild(delBtn);
    } else {
        console.log("add a book dumdum")
    }
    return 1;
}

let myLibrary = [];

function refresh(libraryArray) {
    let library = document.querySelector(".libraryTable");
    library.innerHTML = '';
    libraryArray.forEach(x => {
        let temp = document.createElement("div");
        temp.title = x.title;
        temp.textContent = x.title;
        temp.data = Object.freeze(x);
        library.appendChild(temp);

        let delBtn = document.createElement('button');
        delBtn.addEventListener('click', deleteBook);
        delBtn.textContent = "delete Book";
        temp.appendChild(delBtn);
    });
}



function newBook() {
    let entry = document.getElementById("bookEntry");
    let addnewBook = document.querySelector('.newBook');
    addnewBook.disabled = true;

    let temp1 = document.createElement("input");
    temp1.id = 'bookname';
    temp1.label = 'bookname';
    let temp2 = document.createElement("input");
    temp2.id = 'author';
    temp2.label = 'author';
    let temp3 = document.createElement("input");
    temp3.id = 'pages';
    temp3.label = 'pages';
    let hidden= document.createElement('input');
    hidden.type = "hidden";
    hidden.value = "bookSubmit";
    let temp4 = document.createElement('input');
    temp4.id = 'isRead';
    temp4.label = "isRead";
    temp4.type = "checkBox";
    temp4.value = 'true';
    let temp5 = document.createElement('button');
    temp5.type = "submit";
    temp5.textContent = "Submit";
    temp5.id = "bookSubmit";

    entry.appendChild(temp1);
    entry.appendChild(temp2);
    entry.appendChild(temp3);
    entry.appendChild(temp4);
    entry.appendChild(temp5);



    entry.addEventListener('submit', inputProc);
}
//  doing function direct above causes multiple firing of submit eventlistener -> explanation is that
// the eventlistener adds the listening function to each submit button being generated. but idk the mechanism

function inputProc() {
    let entry = document.getElementById("bookEntry");
    let addnewBook = document.querySelector('.newBook');
    console.log("istheStart");
    
    // const data = new FormData(entry);
    // for (const [name,value] of data) {
    //     console.log(name, ":", value)
    //   }
    let bookName = document.getElementById("bookname");
    console.log("bookname isnull" + entry.childNodes);
    console.log(bookName == null);
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("isRead").checked;

    let newBook = new Book(bookName.value, author, pages, isRead);
    newBook.addBookToLibrary();
    // console.log(entry.childNodes.forEach(x => console.log(x)));
    // let temp = document.createElement('div');
    entry.replaceChildren(); // to remove;
    addnewBook.disabled = false;
    event.preventDefault();
    console.log("istheend");
}








function deleteBook() {
    let BookDom = this.parentElement;
    // console.log(BookDom.data);
    // console.log("*************");
    // console.log(BookDom.data);
    // console.log("*************");
    const index = myLibrary.indexOf(BookDom.data);
    if(index > -1) {
        myLibrary.splice(index, 1); //remove 1 elem
    }

    // console.log(index);
    // let newLibrary = myLibrary.filter(a => a.title != BookDom.title);
    // console.log(newLibrary);
    // myLibrary = newLibrary;
    refresh(myLibrary);
}




let Book1 = new Book("jungle bro", "mohave", 333, true);
let Book2 = new Book("timbook2", "mohave", 333, false);
console.log("myLibrary");
Book1.addBookToLibrary();
Book2.addBookToLibrary();

console.log(myLibrary);

// refresh(myLibrary);
