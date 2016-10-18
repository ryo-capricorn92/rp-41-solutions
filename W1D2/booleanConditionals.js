  /////////////////////////////////////////////
 ///////     Boolean Conditionals     ////////
/////////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Comparison Operators * //

// ex-3
12 < 78
// => true

24 < 16
// => false

45 !== 38
// => true

"45" === 45
// => false

"6" !== "six"
// => true



// ex-4
function oldEnoughToDrink (age) {
  if (age >= 21) {
    return true;
  }
  return false;
}



// ex-5
function sameLength (str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}



// ex-6
function passwordLongEnough (password) {
  if (password >= 8) {
    return true;
  }
  return false;
}



// * Conditionals: if * //



// ex-1
function bouncer (name, age) {
  if (age >= 21) {
    return "Welcome, " + name + '!';
  }
  return "Go home, " + name;
}



// ex-2
function max (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}



// ex-3
function min (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}



// ex-4
function larger (str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  }
  return str2;
}

function smaller (str1, str2) {
  if (str1.length < str2.length) {
    return str1;
  }
  return str2;
}



// *** MORE PRACTICE *** //

// ex-1
106 < 12
// => false

"wiz" === "wiz"
// => true

7 * 7  === 49
// => true

12 !== (24 / 2)
// => false

(20 % 2) <= -1
// => true

(9 / 3) + (5 * 5) === 28
// => true



// ex-2
function even (num) {
  if ((num % 2) === 0) {
    return true;
  }
  return false;
}

function odd (num) {
  // I'm using a short hand here for ((num % 2) === 1)
  // this works because all values are given a "truthy-ness" and "falsey-ness" value
  // 0 has a falsey value where all other numbers have a truthy value ie,
  // if (1) {
  //   console.log("will log to the console");
  // }
  // if (0) {
  //   console.log("will not log to the console");
  // }
  // so because (num % 2) will come to 1 for an odd number and 0 for an odd
  // number, we can simply use this as out conditional
  // as a note - this means that we could have done if (!(num % 2)) for even
  if (num % 2) {
    return true;
  }
  return false;
}

function positive (num) {
  if (num >= 0) {
    return true;
  }
  return false
}

function negative (num) {
  if (num < 0) {
    return true;
  }
  return false;
}



// ex-3
// Math.random() gives us a number between 0 and 1
// Remember that, in math, percentages are represented by numbers between 0 and 1
// ie, 13% is represented by 0.13. So to get 13% of 100, we would multiply 100
// by 0.13, which would give us 13. So you can think of the Math.random function
// as giving you a percentage. So say we wanted to get a number between 0 and 10
// If we were to multiply Math.random() (which will give us a random percentage)
// and 10, we would basically be getting a random percentage of 10. If we were
// to round that number to the closest whole number, it would always be a number
// between 0 and 10, since the lowest percetage, 0.0 or 0%, times 10 would be 0,
// and the highest percentage, 1.0 or 100%, times 10 would be 10
// (100% of 10, or 10*1). This is the idea behind the randomInt function.
function randInt (n) {
  // between 0 and n
  return Math.floor(Math.random() * (n + 1));
  // or the simply version:
  return Math.ceil(Math.random() * n);
  // this has a very small chance of including 0, but is basically between 1 and n
}

function guessMyNumber (n) {
  if (n === randInt(5)) {
    return "You guessed my number!";
  }
  return "Nope! That wasn't it!";
}
