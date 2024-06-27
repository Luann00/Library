const myLibary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibary() {
    let newTitle = document.getElementById('title').value
    let newAuthor = document.getElementById('author').value
    let newPages = document.getElementById('pages').value
    let read = document.getElementById('read');

    let newBook = new Book(newTitle, newAuthor, newPages, read);

    myLibary.push(newBook);
    let newBookIndex = document.createElement("p");
    newBookIndex.textContent = `Title: ${newTitle}, Author: ${newAuthor}, Pages: ${newPages}, Read: ${read.checked ? "Yes" : "No"}`;
    document.querySelector(".books").appendChild(newBookIndex);
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
    addBookToLibary();
    resetValues();
    favDialog.close();
  });