//ACESSING VALUES BY KEY************************************
//1
var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
//
person["age"]
//or
person.age
//
person[key]


//2
var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age: 26
};

function fullName(person) {
  return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
}

fullName(alyssa); // => "Alyssa P. Hacker"


//3
function fullName(person) {
  if(!person.name.middle) //or person.name.middle === undefined
    {
    return person.name.first + ' ' + person.name.last;
    }
  return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
}


//4
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

//1
people.push({name:{first: "Harris", middle: "H.", last:"Lee"}, age: 25})

//2
function fullName(people) {
  var result = [];
  for(var i = 0; i < people.length; i++) {
    if(!people[i].name.middle) {
      result.push( people[i].name.first + ' ' + people[i].name.last );
    } else {
      result.push( people[i].name.first + ' ' + people[i].name.middle + ' ' + people[i].name.last)
    }
  }
  return result;
}

//3
function averageAge(people) {
  var sum = 0;
  for(var i = 0; i < people.length; i++) {
    sum = sum + people[i].age;
  }
  return sum/people.length;
}

//4
function ageGroup(people, age) {
  var result = [];
  for(var i = 0; i < people.length; i++) {
    if(people[i].age > age) {
      result.push(people[i]);
    }
  }
  return result;
}


//ITERATING OVER KEYS & VALUES *******************************************
//1
function clean(obj) {
  var newObj = {};

  for(var key in obj) {
    if(key[0] !== "_") {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

//2
function removeOddValues(obj) {
  for(var key in obj) {
    if(typeof obj[key] === "number" && obj[key] % 2 !== 0) {
      delete obj[key];
    }
  }
  return obj;
}



//MORE PRACTICE *********************************************************
//2
function countWords(string) {
  var strArr = string.split(" ");
  var result = {};

  for(var i = 0; i < strArr.length; i++) {
    if(!result[strArr[i]]) {
      result[strArr[i]] = 1;
    } else {
      result[strArr[i]] += 1;
    }
  }

  return result;
}

//3
function countCharacters(s) {
  var character = s.split("");
  var result = {}
  for(var i = 0; i < character.length; i++) {
    if(!result[character[i]]) {
      result[character[i]] = 1;
    } else {
      result[character[i]] += 1;
    }
  }

  return result;
}



//4
function select(obj, arr) {
  var result = {};
  for(var i = 0; i < arr.length; i++) {
    result[arr[i]] = obj[arr[i]]
  }

  return result;
}

//5
function extend(obj1, obj2) {
  for(var key in obj2) {
    if(!obj1[obj2[key]]) {
      obj1[key] = obj2[key]
    }
  }
  return obj1;
}









