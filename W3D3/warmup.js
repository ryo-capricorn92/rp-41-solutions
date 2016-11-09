  ///////////////////////////////
 ///////     Warmup     ////////
///////////////////////////////

// ex-1
// Arrays are quite useful when needing to keep track of a list of items that
// do not need to be in a particular order or associated with other values
// If you're still unclear on Arrays' usefulness, you should shoot us a message!



// ex-2
var numbers = [1, 2, 3, 4, 5];



// ex-3
function squareAll (numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i]);
  }
  return result;
}
