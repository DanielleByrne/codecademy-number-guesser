let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, compGuess, targetNum) {
  if (humanGuess != compGuess) {
    humanAbs = Math.abs(humanGuess - targetNum);
    compAbs = Math.abs(compGuess - targetNum);

    if (humanAbs <= compAbs) {
      return true;
    }
    if (compAbs <= humanAbs) {
      return false;
    }
    else return "idk"
  }
}

console.log(compareGuesses(3, 8, 1))

