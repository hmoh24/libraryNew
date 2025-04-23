const myLibrary = [
    {
      id: "1a2b3c4d-1111-2222-3333-abcdefabcdef",
      title: "Meditations",
      author: "Marcus Aurelius",
      pages: 304,
      publishDate: "180",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg",
      dateAdded: 1713800000000,
      review: null
    },
    {
      id: "2b3c4d5e-1111-2222-3333-bbcdefbbcdef",
      title: "A Feast for Crows",
      author: "George R.R. Martin",
      pages: 784,
      publishDate: "2005",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780553582024-L.jpg",
      dateAdded: 1713800000100,
      review: null
    },
    {
      id: "3c4d5e6f-1111-2222-3333-ccdefccdefcc",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      pages: 662,
      publishDate: "2007",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg",
      dateAdded: 1713800000200,
      review: null
    },
    {
      id: "4d5e6f70-1111-2222-3333-dddefdddefdd",
      title: "Heir of Novron",
      author: "Michael J. Sullivan",
      pages: 864,
      publishDate: "2012",
      coverArt: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707559940i/44777327.jpg",
      dateAdded: 1713800000300,
      review: null
    },
    {
      id: "5e6f7081-1111-2222-3333-eeefeeefeeee",
      title: "Assassin's Apprentice",
      author: "Robin Hobb",
      pages: 435,
      publishDate: "1995",
      coverArt: "https://covers.openlibrary.org/b/isbn/9780553573398-L.jpg",
      dateAdded: 1713800000400,
      review: null
    },
    {
      id: "6f708192-1111-2222-3333-fff0fff0ffff",
      title: "The Goblin Emperor",
      author: "Katherine Addison",
      pages: 448,
      publishDate: "2014",
      coverArt: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1373039517i/17910048.jpg",
      dateAdded: 1713800000500,
      review: null
    }
  ];

const mainDiv = document.querySelector('main');


function Book(title, author, pages, publishDate, coverArt = null, rating = null, read = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publishDate = publishDate;
  this.coverArt = coverArt;
  this.dateAdded = Date.now();
  this.rating = rating;
  this.read = read;
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
            console.log(key)
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
    bookCover.classList.add('coverArt')
    book.coverArt ? bookCover.src = book.coverArt : bookCover.style.backgroundColor = 'green';
    card.append(bookCoverContainer);
    bookCoverContainer.append(bookCover)

    const starDiv = document.createElement('div');
    let star = document.createElement('span');
    star.classList.add(['fa', 'fa-star']);
    for (let i =0; i<5 ; i++){
        starDiv.append(star)
    }
    card.append(starDiv);

    mainDiv.append(card);

}

myLibrary.forEach(book => {
    displayBook(book);
})

//add sort by title (a-z), (z-a), pages, dateAdded, review

