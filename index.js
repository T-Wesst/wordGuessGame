(async () => {
  let url =
    'https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words';
  const { data } = await axios.get(url);
  const arrWords = data.split('\n');
  let randomWord = arrWords[Math.floor(Math.random() * arrWords.length)];
  // GAME TRACKERS
  let wins = 0;
  let losses = 0;
  let guessedLetters = [];
  let remainingGuesses = randomWord.length;
  let answer = new Array(randomWord.length).fill('_');
  updateUI();

  document.onkeydown = function(event) {
    // if key pressed is within range from a-z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let userInput = event.key.toLowerCase();
      console.log(userInput);
      // if the game is over
      if (remainingGuesses === 0) {
        losses++;
        reset();
      } else {
        checkInput(randomWord, userInput);
        updateUI();
      }
    } else {
      alert('sorry, please enter a character between a-z');
    }
  };

  // UI
  function updateUI() {
    console.log(randomWord, randomWord.length);
    document.querySelector(
      '#displayRemainingGuesses'
    ).innerHTML = remainingGuesses;
    document.querySelector('#displayWins').innerHTML = wins;
    document.querySelector('#displayLosses').innerHTML = losses;
    document.querySelector('#displayGuesses').innerHTML = guessedLetters.join(
      ', '
    );
    document.querySelector('#displayWordToGuess').innerHTML = answer.join(' ');
  }
})();
