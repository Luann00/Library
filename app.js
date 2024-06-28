const myLibrary = [];

/*this attribut checks if a first book was created. If yes, the function addBookToLibrary will create a new Table*/
let firstTime = true;


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
    let newBook = new Book(newTitle, newAuthor, newPages, read, `${myLibrary.length - 1}`);


    myLibrary.push(newBook);



    const table = document.querySelector('#pixelCanvas');

    /* if a book is added for the first time, a new table with headers is created which give information about the
    book such as the title of the book, author ect.*/
    if (firstTime) {
        const headerRow = document.createElement('tr');

        const headerTitle = document.createElement('th');
        headerTitle.textContent = "Title";
        headerRow.appendChild(headerTitle);

        const headerAuthor = document.createElement('th');
        headerAuthor.textContent = "Author";
        headerRow.appendChild(headerAuthor);

        const headerPages = document.createElement('th');
        headerPages.textContent = "Pages";
        headerRow.appendChild(headerPages);

        const headerRead = document.createElement('th');
        headerRead.textContent = "Read";
        headerRow.appendChild(headerRead);


        const deleteButton = document.createElement('th');
        deleteButton.textContent = "Edit";
        headerRow.appendChild(deleteButton);

        table.appendChild(headerRow);
        firstTime = false;
    }

    const row = document.createElement('tr');
    row.id = `${myLibrary.length - 1}`
    table.appendChild(row);

    alert(row.id);

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
    cellRead.textContent = newBook.read ? "Yes" : "No";
    cellRead.style.width = "100px";
    cellRead.style.height = "60px";

    const cellDeleteButton = document.createElement('td');
    cellRead.textContent = newBook.read ? "Yes" : "No";
    cellRead.style.width = "100px";
    cellRead.style.height = "60px";

    const deleteBookButton = document.createElement('button');
    deleteBookButton.style.width = "100px";
    deleteBookButton.style.height = "30px";
    deleteBookButton.style.alignSelf = "center";

    cellDeleteButton.appendChild(deleteBookButton);

    deleteBookButton.addEventListener("click", (event) => {
        event.preventDefault();
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary.length == 1) {
                alert("one row!");
                table.deleteRow(0);
                break;
            }
            if (myLibrary[i].id == row.id) {
                table.deleteRow(i);
                alert(myLibrary.length);
            }
        }
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