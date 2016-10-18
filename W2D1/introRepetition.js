  /////////////////////////////////////////
 ///////     Intro Repetition     ////////
/////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //



// ex-1
function sum (n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}



// ex-2
function factorial (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * sum(n - 1);
  }
}



// ex-3
function repeatString (str, count) {
  if (count === 0) {
    return '';
  } else {
    return str + repeatString(str, count - 1);
  }
}



// ex-4
function fib (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}



// *** MORE PRACTICE *** //



// ex-1
// without accounting for start being greater than end
function sum (start, end) {
  if (start === end) {
    return start;
  } else {
    return start + sum(start + 1, end);
  }
}
// with accounting for start being greater than end
function sum (start, end) {
  if (start > end) {
    return sum(end, start);
  } else if (start === end) {
    return start;
  } else {
    return start + sum(start + 1, end);
  }
}



// ex-2
function product (start, end) {
  if (start > end) {
    return sum(end, start);
  } else if (start === end) {
    return start;
  } else {
    return start * sum(start + 1, end);
  }
}

function factorial (n) {
  return product(1, n);
}



// ex-3
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add (x, y) {
  if (y === 0) {
    return x;
  } else {
    return add(inc(x), dec(y))
  }
}



// ex-4
function isEven (n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 1);
  }
}



// ex-5
function multiply (x, y) {
  if (y === 1) {
    return x;
  } else {
    return x + multiply(x, y - 1);
  }
}



// *** ADVANCED *** //



// ex-1
function stringLength (str) {
  if (str === '') {
    return 0;
  } else {
    return 1 + stringLength(str.slice(1));
  }
}



// ex-2
function modulo (x, y) {
  if (x < y) {
    return x;
  } else {
    return modulo(x - y, y);
  }
}



// ex-3
function countChars (str, char) {
  if (str === '') {
    return 0;
  } else if (str[0] === char) {
    return 1 + countChars(str.slice(1), char);
  } else {
    return countChars(str.slice(1), char);
  }
}



// ex-4
function indexOf (str, char) {
  if (str === '') {
    return 1;
  } else if (str[0] === char) {
    return 0;
  } else {
    return 1 + indexOf(str.slice(1), char);
  }
}
