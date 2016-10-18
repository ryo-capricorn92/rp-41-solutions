  //////////////////////////////////////////
 ///////     More Conditionals     ////////
//////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Logical Operators * //



// ex-1
// ! is a unary operator - it only works on a single value at a time, ie !false



// ex-2
!(2 >= 2) // false
!(4 === 4) // false
!(5 !== 5) // true



// ex-3
1 > 2 || 2 > 2 || 3 > 2 // true
5 < 5 || 75 < 74 // false



// * Conditionals: else if & else * //


// ex-1
function bouncer (name, age) {
  if (name !== "Joe" && age >= 21) {
    return "Welcome, " + name + '!';
  } else {
    return "Go home, " + name;
  }
}



// ex-2
function scoreToGrade (num) {
  if (num > 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}



// ex-3
function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}



// *** MORE PRACTICE *** //



// ex-1
function whatToDoOutside (temperature, condition) {
  if (temperature >= 65) {
    if (condition === 'sunny') {
      return 'Go swimming'
    } else if (condition === 'windy') {
      return 'Go sailing';
    } else {
      return 'Read';
    }
  } else if (temperature < 65 && temperature > 32) {
    if (condition === 'sunny') {
      return 'Read outside';
    } else {
      return 'Read inside';
    }
  } else {
    return 'Stay inside and read, it\'s way to cold outside.'
  }
}



// ex-2
function guessMyNumber (n) {
  if (n > 5) {
    return 'Please give a number between 0 and 5';
  }
  if (n === randInt(5)) {
    return "You guessed my number!";
  }
  else {
    return "Nope! That wasn't it!";
  }
}



// ex-3
function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    if (num >= 98) {
      return 'A+';
    } else if (num <= 92) {
      return 'A-';
    } else {
      return 'A';
    }
  } else if (num >= 80) {
    if (num >= 88) {
      return 'B+';
    } else if (num <= 82) {
      return 'B-';
    } else {
      return 'B';
    }
  } else if (num >= 70) {
    if (num >= 78) {
      return 'C+';
    } else if (num <= 72) {
      return 'C-';
    } else {
      return 'C';
    }
  } else if (num >= 60) {
    if (num >= 68) {
      return 'D+';
    } else if (num <= 62) {
      return 'D-';
    } else {
      return 'D';
    }
  } else {
    return 'F';
  }
}



// *** ADVANCED *** //



// ex-1
function bouncer (name, age) {
  if (name !== "Joe" && age >= 21) {
    return "Welcome, " + name + '!';
  } else if (age >= 18) {
    return 'You\'ll need a wristband, ' + name;
  } else {
    return "Go home, " + name;
  }
}



// ex-2
function letterGrade (letter, score) {
  if (score % 10 >= 8) {
    return letter + '+';
  } else if (score % 10 <= 2) {
    return letter + '-';
  } else {
    return letter;
  }
}

function scoreToGrade (num) {
  if (num > 100 || num < 0) {
    return 'INVALID SCORE';
  } else if (num > 90) {
    return letterGrade('A', num);
  } else if (num >= 80) {
    return letterGrade('B', num);
  } else if (num >= 70) {
    return letterGrade('C', num);
  } else if (num >= 60) {
    return letterGrade('D', num);
  } else {
    return 'F';
  }
}



// ex-3
function or (one, two) {
  if (one && !two) {
    return true;
  } else if (!one && two) {
    return true;
  } else {
    return false;
  }
}

function and (one, two) {
  if (!one || !two) {
    return false;
  } else {
    return true;
  }
}
