const myLibrary = [];


function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}


function addBookToLibrary() {
    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked; // use checked property to get boolean value
    let newBook = new Book(newTitle, newAuthor, newPages, read, `${myLibrary.length}`);


    myLibrary.push(newBook);



    const table = document.querySelector('#pixelCanvas');

    /* if a book is added for the first time, a new table with headers is created which give information about the
    book such as the title of the book, author ect.*/


    const row = document.createElement('tr');
    row.id = `${myLibrary.length - 1}`
    table.appendChild(row);

    const cellTitle = document.createElement('td');
    cellTitle.textContent = newBook.title;
    cellTitle.style.width = "100px";
    cellTitle.style.height = "60px";

    const cellAuthor = document.createElement('td');
    cellAuthor.textContent = newBook.author;
    cellAuthor.style.width = "100px";
    cellAuthor.style.height = "60px";

    const cellPages = document.createElement('td');
    cellPages.textContent = newBook.pages;
    cellPages.style.width = "100px";
    cellPages.style.height = "60px";

    const cellRead = document.createElement('td');
    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = read;
    cellRead.style.width = "100px";
    cellRead.style.height = "60px";
    readCheckbox.style.width = "30px";
    readCheckbox.style.height = "30px";

    cellRead.appendChild(readCheckbox);

    const cellDeleteButton = document.createElement('td');
    

    const deleteBookButton = document.createElement('button');
    deleteBookButton.style.width = "100px";
    deleteBookButton.style.height = "30px";
    deleteBookButton.style.alignSelf = "center";
    deleteBookButton.style.color = "Red";
    deleteBookButton.textContent = "Delete";

    cellDeleteButton.appendChild(deleteBookButton);

    deleteBookButton.addEventListener("click", (event) => {
        event.preventDefault();
        deleteBook(row.id);
    });


    row.appendChild(cellTitle);
    row.appendChild(cellAuthor);
    row.appendChild(cellPages);
    row.appendChild(cellRead);
    row.appendChild(cellDeleteButton);
}



/*this method gets called after a book was added. all values in the modal gets deleted so at the next time
a new book gets added, the input texts in the modal are empty and a new book can be added*/
function resetValues() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}


function deleteBook(id) {
    const table = document.querySelector('#pixelCanvas');
    const row = document.getElementById(id);
    if (row) {
        table.removeChild(row);
        myLibrary.splice(id, 1);
        updateRowIds();
    }
}

function updateRowIds() {
    const table = document.querySelector('#pixelCanvas');
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].id = i;
    }
}


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
    favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    resetValues();
    favDialog.close();
});