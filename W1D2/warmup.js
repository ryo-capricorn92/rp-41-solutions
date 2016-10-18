  ///////////////////////////////
 ///////     Warmup     ////////
///////////////////////////////

// ex-3
function cube x {
return x * x * y;
// needs parameter parenthesis around the parameter (x), needs closing curly
// brace at the end of the function (new line), line 7 needs to be indented to
// two spaces, and y is not defined - that should be x.

// correct function -->
function cube (x) {
  return x * x * x;
}



// ex-4
function lhs (a, b) {
  return (a + b) * (a + b);
}

function rhs (a, b) {
  return (a * a) + (2 * a * b) + (b * b);
}

// these DO NOT evaluate to the same value. Javascript works a little different
// under the hood ;)
