const myLibrary = [];

function Book(title, author, pages, publishDate, coverArt, review = null) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publishDate = publishDate;
  this.coverArt = coverArt;
  this.dateAdded = Date.now();
  this.review = review;
}

function addBookToLibrary(book) {
  myLibrary.push(book); 
}

const addBookButton = document.querySelector('.addBook');
addBookButton.addEventListener('click', () => {
    prompt();
})


//add sort by title (a-z), (z-a), pages, dateAdded, review

console.log(Date.now().toDateString());