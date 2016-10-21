//BASIC REQUIREMENTS
function sum(n) {
  var result = 0;
  while(n > 0) {
    result = result + n;
    n = n - 1;
  }
  return result;
}

function factorial(n) {
  var result = 1;
  while(n > 1) {
    result = result * n;
    n = n - 1
  }
  return result;
}

function repeatString(str, count) {
  var result = "";
  while(count > 0) {
    result = result + str;
    count = count - 1;
  }
}

//MORE PRACTICE
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function sum(start, end) {
  var result;
  if(start > end) {
    result = end
    while(end < start) {
      end = end + 1;
      result = result + end
    }
    return result;
  } else {
    while(start < end) {
      start = start + 1;
      result = result + start;
    }
    return result;
  }
}

function add(x, y) {
  var result = x;
  if(y > 0) {
    while(y > 0) {
      result = inc(result);
      y = y - 1;
    }
    return result;
  } else {
    while(y > 0) {
      result = dec(result);
      y = y + 1;
    }
    return result;
  }
}

function isEven(n) {
  var result = n
  while(n > 1) {
    n = n - 2
    result = n;
  }
  if(result === 0) {
    return true
  } else {
    return false;
  }
}

function multiply(x,y) {
  var result = 0;
  while(y > 0) {
    result = result + x;
    y = y - 1;
  }
  return result;
}
