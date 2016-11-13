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

function searchBooks (books, category, searchWord) {
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  if(book[category].indexOf(searchWord) > -1) {
      return book;
  }
}

return "Book Not Found!"
}

searchBooks(books, author, "J.K")
//=> book1   Harry Potter

// ex-4

function removeBooks (books, title) {
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  if(book[category] === title) {
      books.splice(i, 1);
  }
}
return "Book Not Found! Nothing to remove"
}

// *** MORE PRACTICE *** //

// ex-2
var actor1 = {
name: "Harris",
role: "villan"
}

var actor2 = {
name: "Brian",
role: "super hero"
}

var movie1 = {
title: 'Harry Potter and the Sorceror\'s Stone',
director: 'J.K. Rowling',
duration: 200,
releaseDate: "2/23/15"
actors_actresses: [actor1, actor2],
studio: "Disney"
synopsis: "Cool movie dealing with magic",
rating: 9.5
}

// ex-3

function makeMovie(title, director, duration, releaseDate, actors_actresses, studio, synopsis, rating) {
return {
  title: title,
  director: director,
  duration: duration,
  releaseDate: releaseDate,
  actors_actresses: actors_actresses,
  studio: studio,
  synopsis: synopsis,
  rating: rating
}
}

// ex-4

function displayMovie (movie) {
return movie.title + ' === ' + movie.director + ' === ' + movie.releaseDate;
}

// ex-5

function displayCast (movie) {
var result = ""
for(var i = 0; i < movie.actors_actresses.length; i++){
var cast = movie.actors_actresses
result += cast[i].name + " plays " + cast[i].role + "\n";
}
return result;
}

//ex-6

var movie2 = makeMove ("Batman", "Christopher", 120, "2/23/15", [actors1], "Fox", "Batman killing bad guys", 9.4 )
var movies = [movies1, movie2];

//ex-7

function displayMovie (movies) {
var result = "";
for(var i = 0; i < movies.length; i++) {
  result += movies[i].title + " directed by " + movies[i].director + " releses on " + movies[i].releaseDate + "\n";
}
return result;
}

//ex-8

function avgDuration (movies) {
  var total = 0
  for(var i = 0; i < movies.length; i++) {
    total += movies[i].duration
  }
  return total/movies.length;
}


//ex-9

function searchMovie(movies, searchWord) {
for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];
  if(movie.title.indexOf(searchWord) > -1) {
      return book;
  }
return "Movie Not Found!"
}
