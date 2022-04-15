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





function createCard(givenTitle, givenAuthor, givenPages, givenReadbook){
  const bookContainer = document.querySelector('.cardGridContainer');
  const bookCardDiv = document.createElement('div');
  bookCardDiv.classList.add('bookCard');
  const bookCardTitle = document.createElement('p');
  bookCardTitle.textContent = 'Title:'
  bookCardTitle.classList.add('cardTitle');
  const bookTitle = document.createElement('p');
  bookTitle.textContent = givenTitle;
  

  const bookCardAuthor = document.createElement('p');
  bookCardAuthor.textContent = 'Author:'
  bookCardAuthor.classList.add('cardAuthor');
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = givenAuthor;

  const bookCardPages = document.createElement('p');
  bookCardPages.textContent = 'Pages:'
  bookCardPages.classList.add('cardPages');
  const bookPages = document.createElement('p');
  bookPages.textContent = givenPages;


  const bookCardRead = document.createElement('p');
  bookCardRead.textContent = 'Read:'
  bookCardRead.classList.add('cardRead');
  const bookRead = document.createElement('p');
  bookRead.textContent = givenReadbook;


  const btnRead = document.createElement('button');
  btnRead.textContent = 'Read'
  btnRead.classList.add('btnRead');
  const btnDelete = document.createElement('button');
  btnDelete.textContent = '🗑'
  btnDelete.classList.add('btnDelete');

  bookContainer.appendChild(bookCardDiv);
  bookCardDiv.appendChild(bookCardTitle);
  bookCardDiv.appendChild(bookTitle);
  bookCardDiv.appendChild(bookCardAuthor);
  bookCardDiv.appendChild(bookAuthor);
  bookCardDiv.appendChild(bookCardPages);
  bookCardDiv.appendChild(bookPages);
  bookCardDiv.appendChild(bookCardRead);
  bookCardDiv.appendChild(bookRead);
  bookCardDiv.appendChild(btnRead);
  bookCardDiv.appendChild(btnDelete);
  btnDelete.addEventListener("click", () => {
    remove(this);
    function remove(){
      bookContainer.removeChild(bookCardDiv);
    }
  })
  btnRead.addEventListener("click",() =>{
    toggleRead(this);
    function toggleRead(){
      bookCardDiv.classList.toggle('bookCardRead');
    }
  })
}




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