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

  // INITIAL DISPLAY
  updateUI();

  document.onkeydown = function(event) {
    // if key pressed is within range from a-z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let userInput = event.key.toLowerCase();
      console.log(userInput);
      // if the game is over
      if (remainingGuesses === 0) {
        alert('you lost');
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
  // CHECK INPUT
  function checkInput(word, char) {
    // if guessedLetters array does not include character
    if (!guessedLetters.includes(char)) {
      // check answer
      checkAnswer(word, char, answer);
      // push the character into guessedLetters array
      guessedLetters.push(char);
      // decrease remaining guesses
      remainingGuesses--;
    }
  }

  function checkAnswer(word, char, answer) {
    for (let i = 0; i < word.length; i++) {
      // if the current index value = the char
      if (word[i] === char) {
        // reveal all occurences the character at index in answer
        answer[i] = char;
        // if game has no more underscores
        if (!answer.includes('_')) {
          wins++;
          alert('you won');
          reset();
        }
      }
    }
  }

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
  // RESET GAME
  function reset() {
    // wait 3 seconds and reset variables
    setTimeout(function() {
      guessedLetters = [];
      randomWord = arrWords[Math.floor(Math.random() * arrWords.length)];
      remainingGuesses = randomWord.length;
      answer = new Array(randomWord.length).fill('_');
      updateUI();
    }, 3000);
  }
})();
