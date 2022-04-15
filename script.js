let myLibrary = [];
const bookCard = document.querySelector("#bookCard");
const btnRead = document.querySelector(".btnRead");
const btnDelete = document.querySelector(".btnDelete");
btnRead.addEventListener("click", () => {
  readBook();
});
btnDelete.addEventListener("click", () => {
  deleteBook();
});

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function readBook(){
  alert("I read this book!");
}

function deleteBook(){
  alert("Delete this book!");
}