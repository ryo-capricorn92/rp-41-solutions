  /////////////////////////////////////
 ///////     Intro Arrays     ////////
/////////////////////////////////////

// *** BASIC REQUIREMENTS *** //

// * Creating arrays * //



// ex-1
var arr = ['cat', 'fox', 'dog', 'monkey'];
'dog' === arr[2];
'monkey' === arr[3];
'cat' === arr[0];



// ex-2
// [ 1, 3 4 7,9, ]
// "the""quick""brown","fox" "jumped","over" the lazy, "dog",  ]
// [true false,true

[ 1, 3, 4, 7, 9 ]
[ "the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog" ]
[true, false, true]



// ex-3
var tv = ['Game of Thrones', 'NCIS', 'Maury', 'Guardians of the Galaxy'];
var lovedOnes = ['Kay', 'Tanka', 'Gabriel', 'Danny', 'Molly'];
var sports = ['video games', 'reading', 'swimming'];



// * Accessing Array Elements * //



// ex-1
console.log(tv[0]);
console.log(lovedOnes[4]);
console.log(sports[1]);



// ex-2
function first (arr) {
  return arr[0];
}



// ex-3
function last (arr) {
  return arr[arr.length - 1];
}



// * Modifying Arrays * //



// ex-1
var arr = [2, 3, 4];
arr.push(5);
arr.push(6);
arr.push(7);
arr.unshift(1);
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7]



// ex-2
var arr = [5, 7, 9];
console.log(arr.push(6)); // 4
// push and unshift will return the new length of the array after the addition
// of the new element



// ex-3
var numbers = [4, 9, 7, 2, 1, 8];
numbers[1] = numbers[1] * 2;
numbers[2] = numbers[2] * 2;
numbers[4] = numbers[4] * 2;

var places = ['snfranisco', 'oacklannd', 'santacrus'];
places[0] = 'san francisco';
places[1] = 'oakland';
places[2] = 'santa cruz';



// *** MORE PRACTICE *** //



// ex-1
function nth (arr, i) {
  return arr[i];
}



// ex-2
function rest (arr) {
  return arr.slice(1);
}



// ex-3
function butLast (arr) {
  return arr.slice(0, arr.length - 1);
}
// remember that slice cuts UP TO the secound argument



// ex-4
function cons (item, arr) {
  arr.unshift(item);
  return arr;
}
// remember that unshift (and push) returns the new length, not the new array,
// so we can't simply return the arr.unshift()



// ex-5
function conj (item, arr) {
  arr.push(item);
  return arr;
}



// ex-6
// conj and cons return the actually array, whereas push and unshift return the
// new length



// ex-7
// in the chrome console, the array will be displayed as [undefined x 7, 'Hello.']
// this is simply chrome using shorthand to represent
// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'Hello.']
// To be at the 8th index (index 7), there must be 7 indices before it
// since these indices have no been set to anything, they are simply undefined



// *** ADVANCED *** //



// ex-1
// this is such a cruel problem - gave me the biggest headache ~Ryo
function conj (item, arr) {
  arr.push(item);
  return arr;
}

function rest (arr) {
  return arr.slice(1);
}

function first (arr) {
  return arr[0];
}

function mystery (array) {
  if (array.length === 0) {
    return [];
  }
  return conj(mystery(rest(array)), first(array));
}

// remember that a function invocation evaluates out to it's return statement
mystery([1, 2, 3, 4, 5]);
conj(mystery(rest(array)), first(array));
conj(mystery(rest([1, 2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(mystery([2, 3, 4, 5]), first([1, 2, 3, 4, 5]));
conj(conj(mystery(rest(array)), first(array)), first([1, 2, 3, 4, 5]));
conj(conj(mystery(rest([2, 3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(mystery([3, 4, 5]), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(mystery(rest(array)), first(array)), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(mystery(rest([3, 4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(mystery([4, 5]), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(mystery(rest(array)), first(array)), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(mystery(rest([4, 5])), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(mystery([5]), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(conj(mystery(rest(array)), first(array)), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(conj(mystery(rest([5])), first([5])), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(conj(mystery([]), first([5])), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(conj([], first([5])), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj(conj([], 5), first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj([5], first([4, 5])), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj(conj([5], 4), first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj([5, 4], first([3, 4, 5])), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj(conj([5, 4], 3), first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj([5, 4, 3], first([2, 3, 4, 5])), first([1, 2, 3, 4, 5]));
conj(conj([5, 4, 3], 2), first([1, 2, 3, 4, 5]));
conj([5, 4, 3, 2], first([1, 2, 3, 4, 5]));
conj([5, 4, 3, 2], 1);
[5, 4, 3, 2, 1];

// basically, it reverses the array . . . in a very convaluted way!



























// just ignore this
var array;
