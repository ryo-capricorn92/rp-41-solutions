////////////////////////////////////////
///////     Intro Functions     ////////
////////////////////////////////////////

// *** BASIC REQUIREMENTS *** //



// ex-1
function square (num) {
  return num * num;
}



// ex-2
// square(square(15)) is evaluating the square of square of 15. This means that
// the expression will first evalutate out square(15), or square of 15, which
// evalutates out to 225, then evalutate out square of that result, so square of
// 225, or square(225), which comes to 50,625.



// ex-3
function square (monkey) {
  return monkey * monkey;
}
// this still works!!



// ex-4
function square(monkey) {
  return x * x;
}
// x is undefined here - monkey is the value we want to use

function square(5) {
  return 5 * 5;
}
// a parameter must be a label, meaning that using 5 as a parameter name will
// throw an error. return 5 * 5 will always evaluate out to 25.

function square("x") {
  return "x" * "x";
}
// same as above, a parameter must be a label. Using a string will throw an
// error.



// ex-5
func square1(x {
  return x * x;
}
// function must be spelled out, the parameter needs its closing parenthesis

functionsquare2 x)
  return x * x;
}
// needs a space between function and square2, the parameter needs a starting
// parenthesis, and starting curly brace

function (x) square3 {
  return x * x;
// needs a closing curly brace, parameter must come after the function name



// ex-6
function square(x){return x*x;}
// should be broken into three seperate lines marked by the curly braces, there
// should always be a space between math operators and their subjects (ie, x * x)
// there should be a space between the parameter parenthesis and the function's
// curly braces

function square (x) { return x *x;
}
// as above, should be cut into three seperate lines marked by the curly braces,
// and math operators need spaces around them

function square(x)
{
  return x * x;
}
// should only be three spaces - the first curly brace should be on the same
// line as the function declaration. Blocks of code should be indented by two
// spaces. eg:
// function square(x) {
// ->return x * x;
// }

// should look like this -->
function square (x) {
  return x * x;
}


// ex-7
function cube (x) {
  return x * x * x;
}



// ex-8
function fullName (first, last) {
  return first + ' ' + last;
}
// the "empty" string in the middle is to add a space between the names



// ex-9
function average (num1, num2) {
  return (num1 + num2) / 2;
}
// num1 and num2 must go in parenthesis, because of the order of operations
// otherwise, you would be adding num1 to num2/2



// ex-10
function greeter (name) {
  return "Hello, " + name + '!';
}



// ex-11
function areaSquare (s) {
  return s * s;
}

function periSquare (s) {
  return s * 4;
}

function areaRect (l, w) {
  return l * w;
}

function periRect (l, w) {
  return (2 * l) + (2 * w);
}

function areaParal (l, h) {
  return l * h;
}

function periParal (l, w) {
  return (2 * l) + (2 * w);
}
// or, since we've already written this, we could do
function periParal_alt (l, w) {
  return periRect(l, w);
}

function areaTrap (h, b, B) {
  return (0.5 * h) * (b + B);
}

function periTrap (s, S, b, B) {
  return s + S + b + B;
}

function areaTri (b, h) {
  return 0.5 * b * h;
}

function periTri (s, S, b) {
  return s + S + b;
}

function areaCirc (r) {
  return Math.PI * r * r;
}

function periCirc1 (r) {
  return 2 * Math.PI * r;
}

function periCirc2 (d) {
  return Math.PI * d;
}





// *** More Practice *** //



function volRect (l, w, h) {
  return l * w * h;
}

function saRect (l, w, h) {
  return (2 * l * h) + (2 * w * h) + (2 * w * l);
}

function volCube (s) {
  return s * s * s;
}

function saCube (s) {
  return 6 * s * s;
}

function volCyl (r, h) {
  return Math.PI * r * r * h;
}

function saCyl (r, h) {
  return (2 * Math.PI * r * h) + (2 * Math.PI * r * r);
}

function volSph (r) {
  return (4 / 3) * Math.PI * r * r * r;
}

function saSph (r) {
  return 4 * Math.PI * r * r;
}

function volCone (r, h) {
  return (1 / 3) * Math.PI * r * r * h;
}

function saCone (r, h) {
  return Math.PI * r * Math.sqrt((r * r) + (h * h));
}

function volPyr (l, w, h) {
  return (1 / 3) * l * w * h;
}

function volFrus (r, R, h) {
  return (Math.PI * ((r * r) + (r * R) + (R * R)) * h) / 3;
}

function saFrus (s, r, R) {
  return Math.PI * s * (R + r);
}




// *** Advanced *** //
// some of these take advantage of topics we have not covered yet



// ex-1
function futureValue (P, i, n, t) {
  return P * Math.pow(1 + (i / n), n * t);
}

function power (base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

// a good resource for understanding this --> http://www.factmonster.com/ipka/A0932229.html (simplified)
// also this --> https://en.wikipedia.org/wiki/Methods_of_computing_square_roots (advanced)
function sqrt (number) {

}
