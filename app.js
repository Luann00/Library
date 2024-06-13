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
    let read = document.getElementById('read').value

    let newBook = new Book(newTitle, newAuthor, newPages, read);

    myLibary.push(newBook);
    let newBookIndex = document.createElement("p");
    newBookIndex.textContent = `Title: ${newTitle}, Author: ${newAuthor}, Pages: ${newPages}, Read: ${read ? "Yes" : "No"}`;
    document.querySelector(".books").appendChild(newBookIndex);
}


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    addBookToLibary();
    favDialog.close();
  });