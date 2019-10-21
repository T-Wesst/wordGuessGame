# Word Guess Game

## Description

A game where player one (the computer) randomly picks a secret word and player two (the guesser) must try to guess each letter within the word one at a time.

The guesser has a limited number of guesses. Each correct guess reveals all occurrences of that letter within the word. The guesser wins the game once all the letters have been revealed. If the guesser runs out of guesses before the word is revealed, the game is over and the computer has one.

### Game Rules

- At the start of the game, the computer chooses a random word
- The guesser loses the game if they have no remaining guesses left
- The guesser wins the game if they guess all the letters in the word and have remaining guesses

### User Interface

- [x] display the length of the hidden word as a list of underscores: `_ _ _ _`
- [x] any type of UI is acceptable (CLI, mobile/web app)
- [x] occurrences of correct guesses are revealed meanwhile the remaining unknown letters are hidden
- [x] the number of guesses remaining is displayed
- [x] a list of incorrect guesses are displayed

### Implementation

- [x] must retrieve a random word from a dictionary list API
- [x] any tools can be used within reason (no game frameworks)
- [x] Program must retrieve a dictionary list of words from the word dictionary REST API provided

### Extension [optional]

- [x] track users/scores over time and show a leader board
- [] add support for guessing full words instead of just letters one at a time, and count those against the guesses total
- [] add support for phrases instead of just words, and numbers in addition to letters
- [] create a diagram (that can be drawn with x amount of attempt) that gets filled in as the user guesses incorrectly
- [] add a configurable “difficulty level” and adjust the words that are used based on the user’s preference
