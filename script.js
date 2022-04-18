let myLibrary = []

const bookContainer = document.querySelector('.cardGridContainer');

function Book(title, author, pages, readbook) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readbook = readbook
}

function addBookToLibrary() {
  const newTitle = document.querySelector('#newTitle');
  const newAuthor = document.querySelector('#newAuthor');
  const newPages = document.querySelector('#newPages');
  const newReadbookCheckbox = document.querySelector('#newReadbook')
  let newReadbook = false;
  
  if(newTitle.value == '' || newAuthor.value == '' || newPages.value == ''){
    alert('There is missing book info')
  } else{
    removeAll();
    if (document.getElementById('newReadbook').checked){
      newReadbook = true;
    }
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newReadbook);
    myLibrary.push(newBook);
    displayLibrary();
    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    newReadbookCheckbox.checked = false;
  }
}

function displayLibrary(){
  for (let i = 0; i < myLibrary.length; i++) {
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
    remove();
    function remove(){
      bookContainer.removeChild(bookCardDiv);
      for (let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title == bookTitle.textContent && myLibrary[i].author == bookAuthor.textContent){
          myLibrary.splice(i,1);
        }
      }
    }
  })

  btnRead.addEventListener("click",() =>{
    toggleRead();
    function toggleRead(){
      if(bookRead.textContent == "✔"){
        bookRead.textContent = "⨯";
        bookCardDiv.classList.toggle('bookCardRead');
        for (let i = 0; i < myLibrary.length; i++) {
          if(myLibrary[i].title == bookTitle.textContent && myLibrary[i].author == bookAuthor.textContent){
            myLibrary[i].readbook = false;
          }
        }
      }else if(bookRead.textContent == "⨯"){
        bookRead.textContent = "✔";
        bookCardDiv.classList.toggle('bookCardRead');
        for (let i = 0; i < myLibrary.length; i++) {
          if(myLibrary[i].title == bookTitle.textContent && myLibrary[i].author == bookAuthor.textContent){
            myLibrary[i].readbook = true;
          }
        }
      }
    }
  })
}


function removeAll(){
  while(bookContainer.firstChild){
    bookContainer.removeChild(bookContainer.lastChild);
  }
}