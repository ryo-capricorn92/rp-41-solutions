  ///////////////////////////////
 ///////     Warmup     ////////
///////////////////////////////

// ex-1
function isHot(temperature) {
  if (temperature>90) {
    return "It's hot!";
  }
  return "It's not hot!";
}
// missing parenthesis around the if statement, needs ending curly brace for the
// if block, return inside the if block needs to be indented.

function oldEnoughTo(age) {
  if (age >= 16) {
    return "Drive a car";
  } else if (age >= 17) {
    return "Vote";
  } else if (age >= 21) {
    return "Drink";
  } else {
    return "Do all the things!";
  }
}
// missing parenthesis around if statement, needs opening curly brace after if,
// first return needs to be indented, "if else" should be "else if", no semi-colon
// after else if statement, second return should only be indented 2 spaces, else
// if needs ending curly brace, "else" needs to be "else if", "=>" should be ">="
// return "Drink"; should be indented, else should be on the same line as the
// ending brace for else if, last return needs to be indented



// ex-2
function sayHello (language) {
  // the .toLowerCase() is optional here. This just changes the language to all
  // lowercase, so that the user doesn't have to worry about what case they give
  // the language in. This makes it "case-insensitive"
  if (language.toLowerCase() === 'english') {
    return "Hello!";
  } else if (language.toLowerCase() === 'french') {
    return "Bonjour!";
  } else if (language.toLowerCase() === 'japanese') {
    return "Konnichiwa!";
  } else {
    // it's always best to have a base case, in case the other requirements were
    // not met
    return "ERROR: I don't know that language!"
  }
}



// ex-3
function validCredentials (username, password) {
  // it's up to you on how long you want to say these must be. I chose that the
  // username must contain at least one character, and the password must be at
  // least 8 characters long.
  if (username.length !== 0 && password.length >= 8) {
    return true;
  } else {
    return false;
  }

  // this can be written in a simpler way! Since whatever is inside of the if
  // statement parenthesis is turned into a boolean, ie true or false, than we
  // can simply use this as our return statement!
  return username.length !== 0 && password.length >= 8;
}

// let's go through an example of what happens with the last return statement
function validCredentials (username, password) {
  return username.length !== 0 && password.length >= 8;
}

validCredentials('Ryo', 'Tokyo');
// remember that a function invocation is replaced with it's return statement
username.length !== 0 && password.length >= 8;
// and we can replace the labels with their actual value
'Ryo'.length !== 0 && 'Tokyo'.length >= 8;
// now let's break down each side - 'Ryo'.length is 3, so
3 !== 0 && 'Tokyo'.length >= 8;
// 3 is not equal to 0, so that's true!
true && 'Tokyo'.length >= 8;
// let's do the other side
true && 5 >= 8;
// 5 is not greater than or equal to 8
true && false;
// both sides must be true for && to give you true, so
false;
// This will be what actually gets returned from this function, the same as if
// it had failed the if statment and gone on to the "return false;" in the else
