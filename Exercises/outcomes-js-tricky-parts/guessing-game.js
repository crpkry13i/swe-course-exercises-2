function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;

  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === ANSWER) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
