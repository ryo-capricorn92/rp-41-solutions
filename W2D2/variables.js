//Basic Requirements

//1
var animal = "monkey";
var monkey = "animal";
var x = 15;
var y = 10;
var huh = "huh?";
var incorrect = false;

var isTenEven = function(){
  return 10 % 2;
};

//2
var firstName = "Josephine";
var lastName = "Chen";
var midName = "Yee";

var fullName = firstName + " " + midName + " " + lastName;

//4
var count = 1;
function counter() {
  return count++;
}


//More Practice


function randInt(n){
  return Math.floor(Math.random()*(n+1));
}
function guessMyNumberGame(uBound){
  var upperBound=uBound;
  var randomNum = randInt(upperBound);
  var game=true;
  var tries=3;
  var maxTries=4;
  console.log("Let's play a game! You have "+maxTries+" tries.");
  while(game==true){
    //console.log("Pssst,"+randomNum);
      var guess=prompt("Guess a number between 0 and "+upperBound+"!");
      if(randomNum==guess){
          console.log("You guessed my number!");
          if(maxTries-tries===1){
            console.log("You got it in your first guess! Nice!");
          }
          else if(tries===0){
            console.log("Cutting it a bit close. You took "+maxTries+" tries.")
          }
          else{
            console.log("You took "+ (maxTries-tries)+" tries.");
          }
          console.log("My number was",randomNum);
          game=false;
          return maxTries-tries;
      }
      else if(tries===0){
          console.log("You ran out of tries! Game over.");
          console.log("My number was "+ randomNum);
          game=false;
          return maxTries;
      }
      else{
          console.log("Nope! That wasn't it! Try again.");
          tries--;
          //console.log("Psst," + randomNum);
          console.log("You guessed, " + guess);
          if(guess>randomNum){
            console.log("Too high!");
          }
          if (guess<randomNum){
            console.log("Too low!");
          }
          console.log("You have "+ tries +" tries left. Good luck.");
      }
  }
}

function numberGame(){
  var highScore=4;
  var upperBound=10;
  var gameOver = false;
  while(gameOver==false){
    var score = guessMyNumberGame(upperBound);
    if (score<highScore){
      highScore=score;
    }
    console.log("High score is "+highScore);
    if (score==4){
      upperBound-=1;
    }
    else {
      upperBound+=1;
    }
    var again = prompt("Play again? (yes/no)");
    if (again=="no"){
      gameOver=true;
    }
  }
}
numberGame();


//Algorithm for number game
function guessMyNumber(n,upperBound, random) {
  console.log("Guess is "+n);
  if (n > upperBound) {
    console.log( "Out of bounds! Please try a number between 0 and "+upperBound+".");
  }
  else if (n === random) {
    console.log( "You guessed my number!");
    return 0;
  }
  else{
  console.log( "Nope! That wasn't it!");
  //if else here for hints
    if (n > random) {
      console.log("Too high!");
      return 1;
    }
    else {
      console.log("Too low!");
      return -1;
    }
  }
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}


function guessMyNumberAlg(){
  var upperBound = 10;
  var guess=Math.ceil(upperBound/2);
  var lowerBound=0;
  var random = randInt(upperBound);
  console.log("Random number is "+random);
  var hint = guessMyNumber(guess,upperBound,random);
  var tries=0;
  var gameOver=false;
  while(gameOver==false){
    if (tries>10){
      gameOver=true;
    }
    else if(hint===1){
      //too high
      //new guess is half of the difference of guess and lowerBound
      //new upperBound is guess
      tries+=1;
      upperBound=guess;
      guess=Math.floor((guess-lowerBound)/2);
      guessMyNumber(guess,upperBound,random);
    }
    else if(hint===-1){
      //too low
      //new guess is half of the difference of upperBound and guess
      //new lowerBound is guess
      lowerBound=guess;
      tries+=1;
      guess=Math.ceil((upperBound-guess)/2)+guess;
      guessMyNumber(guess,upperBound,random);
    }
    else{
      console.log("You win!");
      console.log("You took "+tries+" tries.");
      gameOver=true;
    }
  }
}
guessMyNumberAlg();

