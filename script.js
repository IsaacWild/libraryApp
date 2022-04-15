let myLibrary = [
  {
    'title':'The Hobbit',
    'author':'J.R.R Tolkien',
    'pages':295,
    'readbook': true
  }
]

function Book(title, author, pages, readbook) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readbook = readbook
}

function addBookToLibrary(title, author, pages, readbook) {
  // do stuff here
  
  const newBook = new Book(title, author, pages, readbook);
  myLibrary.push(newBook);

}

const bookContainer = document.querySelector('.cardGridContainer');
const bookCardDiv = document.createElement('div');
bookCardDiv.classList.add('bookCard');

const bookCardTitle = document.createElement('p');
bookCardTitle.textContent = 'Title:'
bookCardTitle.classList.add('cardTitle');

const bookCardAuthor = document.createElement('p');
bookCardAuthor.textContent = 'Author:'
bookCardAuthor.classList.add('cardAuthor');

const bookCardPages = document.createElement('p');
bookCardPages.textContent = 'Pages:'
bookCardPages.classList.add('cardPages');

const bookCardRead = document.createElement('p');
bookCardRead.textContent = 'Read:'
bookCardRead.classList.add('cardRead');

const bookCardPages = document.createElement('button');
bookCardPages.textContent = 'Read'
bookCardPages.classList.add('cardPages');

const bookCardPages = document.createElement('button');
bookCardPages.textContent = 'Pages:'
bookCardPages.classList.add('cardPages');

bookContainer.appendChild(bookCardDiv);
bookCardDiv.appendChild(bookCardTitle);
bookCardDiv.appendChild(bookCardAuthor);
bookCardDiv.appendChild(bookCardPages);
bookCardDiv.appendChild(bookCardRead);
bookCardDiv.appendChild(btnRead);
bookCardDiv.appendChild(btnDelete);

// function readBook(){
//   alert("I read this book!")
// }

// NOT working at all!?!
// const btnDelete = document.querySelector(".btnDelete");
// btnDelete.addEventListener("click", () => {
//   console.log("Test");
// });


// const cardGridContainer = document.querySelector(".cardGridContainer")

// function addBook(){
//   const bookCard = document.createElement("div");
//   cardGridContainer.appendChild(bookCard);
//   bookCard.classList.add("bookCard");
//   const cardTitle = document.createElement("div");
//   bookCard.appendChild(bookTitle);
//   bookCard.cardTitle.add("cardTitle");

// }