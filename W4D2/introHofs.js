  ///////////////////////////////////
 ///////     Intro HOFs     ////////
///////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Rewrite Functions * //



// ex-1
  // 1.
var cube = function (x) {
  return x * x * x;
}
  // 2.
var fullname = function (first, last) {
  return first + " " + last;
}
  // 3.
var power = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
  // 4.
var sumCubes = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}



// * Iterating Over Arrays Using Each * //



// ex-1
function each (array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}



// ex-2
function sumSquares (numbers) {
  var total = 0;
  each(numbers, function (number) {
    total += number * number;
    // same thing as total = total + (number * number)
  });
  return total;
}



// ex-3
function sumCubes (numbers) {
  var total = 0;
  each(numbers, function (number) {
    total += cube(number);
  });
  return total;
}



// ex-4
function product (numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
}

function product (numbers) {
  var total = 1;
  each(numbers, function (number) {
    total *= number;
  });
  return total;
}



// ex-5
function cubeAll (numbers) {
  // while the prompt did not expressly state that it should return a brand new
  // array, this is how I'm going to write the solution. This is best practice
  // when working with arrays. If you did not want to create a new array, you
  // could simply remove the 'result' declaration, and replace 'result' with
  // 'numbers'
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i] * numbers[i]);
    // alternatively, result.push(Math.pow(numbers[i], 3))
  }
  return result;
}

function cubeAll (numbers) {
  var result = [];
  each(numbers, function (number) {
    result.push(number * number * number);
  });
  return result;
}



// ex-6
function odds (array) {
  var result = [];
  each(array, function (number) {
    if (number % 2) {
      result.push(number);
    }
  });
  return result;
}



// *** MORE PRACTICE *** //

// * Summations * //



// ex-1
function sumByAllElementsMultipliedByFour (numbers) {
  var sum = 0;
  each(numbers, function (number) {
    sum += numbers * 4;
  });
  return sum;
}



// ex-2
function sumBy (numbers, func) {
  var sum = 0;
  each(numbers, function (number) {
    sum += func(number);
  });
  return sum;
}



// ex-3
var numbers = [1, 2, 3, 4];
sumBy(numbers, function (number) {
  return number;
});



// ex-4
function productBy (numbers, func) {
  var product = 1;
  each(numbers, function (number) {
    product *= func(number);
  });
  return product;
}



// *** ADVANCED *** //

// * Mapping * //



// ex-1
function doubleAll (numbers) {
  var result = [];
  each(numbers, function (number) {
    result.push(number * 2);
  });
  return result;
}



// ex-2
function halveAll (numbers) {
  var result = [];
  each(numbers, function (number) {
    result.push(number / 2);
  });
  return result;
}



// ex-3
function upperCaseAll (strings) {
  var result = [];
  each(strings, function (string) {
    result.push(string.toUpperCase());
  });
  return result;
}



// ex-4 (ex-1???)
// this is just an explanation of map



// ex-5 (ex-2)
function map (array, func) {
  var result = [];
  each(array, function (element) {
    result.push(func(element));
  });
  return result;
}



// ex-6 (ex-3)
map(['hello', 'world'], function (string) {
  return string.toUpperCase();
});

map(['HelLo', 'WorLD'], function (string) {
  return string.toLowerCase();
});

map(['the', 'quick', 'brown', 'fox', 'jumped'], function (string) {
  return string.length;
});

var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];

map(people, function (person) {
  return person.name;
});

map(people, function (person) {
  return person.name + ' is ' + person.age;
});



// * Filtering * //



// ex-1
function evens (numbers) {
  var result = [];
  each(numbers, function (number) {
    // this could also be written as if (number % 2 === 0)
    if (!(number % 2)) {
      result.push(number);
    }
  });
  return result;
}



// ex-2
function multiplesOfThree (numbers) {
  var result = [];
  each(numbers, function (number) {
    if (!(number % 3)) {
      result.push(number);
    }
  });
  return result;
}



// ex-3
function positives (numbers) {
  var result = [];
  each(numbers, function (number) {
    if (number >= 0) {
      result.push(number);
    }
  });
  return result;
}



// ex-4
function evenLength (strings) {
  var result = [];
  each(strings, function (string) {
    if (!(string.length % 2)) {
      result.push(string);
    }
  });
  return result;
}



// ex-5
function filter (array, func) {
  var result = [];
  each(array, function (element) {
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
}



// ex-6
function odds (numbers) {
  return filter(numbers, function (number) {
    return number % 2;
  });
}

function positives (numbers) {
  return filter(numbers, function (number) {
    return number >= 0;
  });
}

function negatives (numbers) {
  return filter(numbers, function (number) {
    return number < 0;
  });
}

function evenLength (strings) {
  return filter(strings, function (string) {
    return !(string.length % 2);
  });
}

function largerThanSix (numbers) {
  return filter(numbers, function (number) {
    return number > 6;
  });
}



// ex-7
function startsWithChar (strings, char) {
  return filter(strings, function (string) {
    return string[0] === char;
  });
}
