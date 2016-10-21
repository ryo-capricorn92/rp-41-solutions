function sumOfSquares(n) {
  if(n === 0) {
    return 0;
  }
  return (n * n) + sumOfSquares(n - 1);
}

function sumEvens(n){
  if (n === 0) {
    return 0;
  } else if ( n % 2 === 0){
    return n + sumEvens(n - 1);
  } else {
    return sumEvens(n - 1);
  }
}
