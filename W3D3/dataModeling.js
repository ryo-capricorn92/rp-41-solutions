  //////////////////////////////////////
 ///////     Data Modeling     ////////
//////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Respresenting Books * //



// ex-1
// We're gonna stick with Title, Author, Genre, and Number of Pages



// ex-2
var book1 = {
  title: 'Harry Potter and the Sorceror\'s Stone',
  author: ['J.K. Rowling'],
  genre: 'Young Adult Fantasy',
  numberOfPages: 223
}

var book2 = {
  title: 'Snow Crash',
  author: ['Neal Stephenson'],
  genre: 'Science Fiction',
  numberOfPages: 480
}

var book3 = {
  title: 'Structure and Interpretation of Computer Programs',
  author: ['Gerald Jay Sussman', 'Hal Abelson'],
  genre: 'Non-Fiction',
  numberOfPages: 657
}

var book4 = {
  title: 'I, Robot',
  author: ['Isaac Asimov'],
  genre: 'Science Fiction',
  numberOfPages: 253
}

var book5 = {
  title: 'Prince of Thorns',
  author: ['Mark Lawrence'],
  genre: 'Fantasy',
  numberOfPages: 384
}

var book6 = {
  title: 'It',
  author: ['Stephen King'],
  genre: 'Horror',
  numberOfPages: 1138
}



// ex-3
function makeBook (title, author, genre, numberOfPages) {
  return {
    title: title,
    author: author,
    genre: genre,
    numberOfPages: numberOfPages
  };
}



// * Formatting * //



function displayBook (book) {
  return book.name + ', by ' + book.author + ' -- ' + book.genre + ', ' + book.numberOfPages + ' pages';
}



// * Handling Multiple Books * //



// ex-1
var books = [book1, book2, book3, book4, book5, book6];



// ex-2
function displayBooks (books) {
  var result = '';
  for (var i = 0; i < books.length; i++) {
    result += (i + 1) + '. ' + displayBook(books[i]) + '\n';
  }
  return result;
}



// ex-3
function searchBooks
