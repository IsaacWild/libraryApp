let myLibrary = [
  {
    'title':'The Hobbit',
    'author':'J.R.R Tolkien',
    'pages':295,
    'readbook': true
  },
  {
    'title':'The not Hobbit',
    'author':'Not J.R.R Tolkien',
    'pages':69,
    'readbook': false
  }
]
const bookContainer = document.querySelector('.cardGridContainer');

function Book(title, author, pages, readbook) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readbook = readbook
}

function addBookToLibrary(title, author, pages, readbook) {
  // do stuff here
  
  // const newBook = new Book(title, author, pages, readbook);
  // myLibrary.push(newBook);
  // for (let element of myLibrary){
  //   createCard(myLibrary[element].title, myLibrary[e].author,myLibrary[e].pages,myLibrary[e].readbook)
  // }
  for (let i = 0; i < myLibrary.length; i++) {
    const Book = myLibrary[i];
    createCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].readbook)
  }
}

function createCard(givenTitle, givenAuthor, givenPages, givenReadbook){
  
  
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
  if (givenReadbook == true){
    bookRead.textContent = "✔";
    bookCardDiv.classList.add('bookCardRead');
  } else if (givenReadbook == false){
    bookRead.textContent = "⨯";
  }


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
      if(bookRead.textContent == "✔"){
        bookRead.textContent = "⨯";
        bookCardDiv.classList.toggle('bookCardRead');
      }else if(bookRead.textContent == "⨯"){
        bookRead.textContent = "✔";
        bookCardDiv.classList.toggle('bookCardRead');
      }
    }
  })
  
}
function removeAll(){
  while(bookContainer.firstChild){
    bookContainer.removeChild(bookContainer.lastChild);
    
  }
}