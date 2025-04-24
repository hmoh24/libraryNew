const myLibrary = [
    {
      id: "1a2b3c4d-1111-2222-3333-abcdefabcdef",
      title: "Meditations",
      author: "Marcus Aurelius",
      pages: 304,
      publishDate: "180",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg",
      dateAdded: 1713800000000,
    },
    {
      id: "2b3c4d5e-1111-2222-3333-bbcdefbbcdef",
      title: "A Feast for Crows",
      author: "George R.R. Martin",
      pages: 784,
      publishDate: "2005",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780553582024-L.jpg",
      dateAdded: 1713800000100,
    },
    {
      id: "3c4d5e6f-1111-2222-3333-ccdefccdefcc",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      pages: 662,
      publishDate: "2007",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg",
      dateAdded: 1713800000200,
    },
    {
      id: "4d5e6f70-1111-2222-3333-dddefdddefdd",
      title: "Heir of Novron",
      author: "Michael J. Sullivan",
      pages: 864,
      publishDate: "2012",
      coverArt: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707559940i/44777327.jpg",
      dateAdded: 1713800000300,
    },
    {
      id: "5e6f7081-1111-2222-3333-eeefeeefeeee",
      title: "Assassin's Apprentice",
      author: "Robin Hobb",
      pages: 435,
      publishDate: "1995",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780553573398-L.jpg",
      dateAdded: 1713800000400,
    },
    {
      id: "6f708192-1111-2222-3333-fff0fff0ffff",
      title: "The Goblin Emperor",
      author: "Katherine Addison",
      pages: 448,
      publishDate: "2014",
      coverArt: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1373039517i/17910048.jpg",
      dateAdded: 1713800000500,
    }
  ];

const mainDiv = document.querySelector('main');


function Book(title, author, pages, publishDate, coverArt = null) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publishDate = publishDate;
  this.coverArt = coverArt;
  this.dateAdded = Date.now();
}

function addBookToLibrary(book) {
  myLibrary.push(book); 
}

function displayBook(book){
    //create div card for each book and once it is created, append it to the main div
    const card = document.createElement('div');
    card.classList.add('card');
    for (let key in book){
        if (key === 'author' || key === 'title' || key === 'pages' || key === 'publishDate'){
            let p = document.createElement('p');
            let text;
            if (key === 'pages'){
                text = document.createTextNode(`p.${book[key]}`);
            }
            else if (key === 'author'){
                text = document.createTextNode(`by ${book[key]}`);
            }
            else if (key === 'publishDate'){
                text = document.createTextNode(`Pub. ${book[key]}`);

            }
            else {
                text = document.createTextNode(`${book[key]}`);
            }
            p.classList.add(key);
            p.append(text);
            card.append(p);
        }
    }

    const bookCoverContainer = document.createElement('div');
    bookCoverContainer.classList.add('coverArtContainer');
    const bookCover = document.createElement('img');
    console.log(book.coverArt);
    bookCover.classList.add('coverArt')
    book.coverArt ? bookCover.src = book.coverArt : bookCover.style.backgroundColor = 'green';
    card.append(bookCoverContainer);
    bookCoverContainer.append(bookCover);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', (event) => {
      event.target.parentNode.remove(); 
    })
    card.append(deleteButton);

    mainDiv.append(card);

}

myLibrary.forEach(book => {
    displayBook(book);
})

//add sort by title (a-z), (z-a), pages, dateAdded, rating

const addBooksButton = document.querySelector('.addBooks');
const closeDialog = document.querySelector('.close');
const dialog = document.querySelector('dialog');

addBooksButton.addEventListener('click', () => {
  dialog.showModal();
})

closeDialog.addEventListener('click', () => {
  dialog.close();
})


const submitFormButton = document.querySelector('.submit');

submitFormButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const publishDate = document.getElementById('publishDate').value;
  const coverArt = document.getElementById('coverArt').value;
  const newBook = new Book(title, author, pages, publishDate, coverArt);
  console.log(newBook);
  displayBook(newBook);
  addBookToLibrary(newBook);
  dialog.close();
})

