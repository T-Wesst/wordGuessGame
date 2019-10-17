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
  console.log(answer);
  console.log(remainingGuesses);
  console.log(randomWord);
})();
