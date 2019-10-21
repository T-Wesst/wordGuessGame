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
  let correctAudio = new Audio(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3'
  );
  let winAudio = new Audio(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3'
  );
  let loseAudio = new Audio(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3'
  );

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
        loseAudio.play();
        losses++;
        reset();
      } else {
        checkInput(randomWord, userInput);
        updateUI();
      }
    } else {
      document.querySelector('div.game-background').classList.add('shake');
      setTimeout(function() {
        alert('sorry, please enter a character between a-z');
        document.querySelector('div.game-background').classList.remove('shake');
      }, 1000);
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
    } else {
      document.querySelector('div.game-background').classList.add('shake');
      setTimeout(function() {
        alert(`you've already tried that answer`);
        document.querySelector('div.game-background').classList.remove('shake');
      }, 1000);
    }
  }
  // CHECK ANSWER
  function checkAnswer(word, char, answer) {
    for (let i = 0; i < word.length; i++) {
      // if the current index value = the char
      if (word[i] === char) {
        // reveal all occurrences the character at index in answer
        answer[i] = char;
        correctAudio.play();
        // if game has no more underscores
        if (!answer.includes('_')) {
          wins++;
          winAudio.play();
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
    document.querySelector('#loading').classList.add('loader');
    setTimeout(function() {
      document.querySelector('#loading').classList.remove('loader');
      guessedLetters = [];
      randomWord = arrWords[Math.floor(Math.random() * arrWords.length)];
      remainingGuesses = randomWord.length;
      answer = new Array(randomWord.length).fill('_');
      updateUI();
    }, 3000);
  }
})();
