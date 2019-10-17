let url =
  'https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words';

(async () => {
  const { data } = await axios.get(url);
  const arrWords = data.split('\n');
  let randomWord = arrWords[Math.floor(Math.random() * arrWords.length)];
  console.log(randomWord);
})();
