"use strict";

/*
 - event on button guess✅

- strings of words in array for secret word ✅
- generate random word ✅
 - put a random word from array to be word to guess ✅

- value of input ✅
- only put in one letter at the time ✅

- check if letter is there - if input is part of secretWord ✅
- put correct guessed letter on their spot✅
- show word✅
- show win if guessed the word correctly

 - lower number of guesses if wrong✅
- populate ul guessed letteres with guesses from input if wrong ✅
- delete input after pushing wrong guess in array✅
 - prevent duplicate wrong guesses shown ✅
 - dont lower number of guesses if letter already tried ✅
 - show end game if no more guesses remained
 - show play again button ✅
 - add event on play again


*/

const words = ["unbeliebubble", "dorime", "lovely", "slady", "yuri"];
const playAgain = document.querySelector(".play-again");
const guessButton = document.querySelector(".guessBtn");
const input = document.querySelector(".letter");
const showWord = document.querySelector(".word-in-progress");
const showWrong = document.querySelector(".guessed-letters");

let numberOfGuesses = document.querySelector(".number");
let number = 7;
numberOfGuesses.innerHTML = number;

// wrong guesses
let incorrectLetters = [];

let correctGuess = "";

//- generate random word

let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(secretWord);

let wordArray = secretWord.split("");
let guessedWord = wordArray.map(() => "_");
correctGuess = guessedWord.join("");

// - show _ instead of letters in a secret word

showWord.innerHTML = secretWord.replace(/./gi, "_");

const init = function () {
  guessButton.classList.remove("hide");
  playAgain.classList.add("hide");
  input.disabled = false;

  incorrectLetters = [];
  showWrong.innerHTML = [...incorrectLetters];

  number = 7;
  numberOfGuesses.innerHTML = number;

  secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  wordArray = secretWord.split("");
  guessedWord = wordArray.map(() => "_");
  correctGuess = guessedWord.join("");
  showWord.innerHTML = secretWord.replace(/./gi, "_");
};

// - event on button guess
guessButton.addEventListener("click", function () {
  const guess = input.value.toUpperCase();

  if (incorrectLetters.includes(guess)) {
    console.log("You already tried this letter!");
    input.value = "";
    return;
  }

  // - check if letter is there
  guessedWord = wordArray.map((letter, index) => {
    if (letter === guess) {
      return guess;
    } else {
      return correctGuess[index];
    }
  });

  correctGuess = guessedWord.join("");
  console.log(correctGuess);
  input.value = "";

  if (!secretWord.includes(guess)) {
    incorrectLetters.push(guess);
    let uniqueLetter = [...new Set(incorrectLetters)];
    showWrong.innerHTML = [...uniqueLetter];
    number--;
    numberOfGuesses.innerHTML = number;
    input.value = "";

    if (number === 0) {
      console.log("you lost!");
      guessButton.classList.add("hide");
      playAgain.classList.remove("hide");
      showWord.innerHTML = secretWord;
      input.disabled = true;
    } else {
      correctGuess = guessedWord.join("");
      console.log(correctGuess);
      input.value = "";
      showWord.innerHTML = correctGuess;
    }
  }

  if (correctGuess === secretWord) {
    console.log("congrats!");
    input.disabled = true;
    guessButton.classList.add("hide");
    playAgain.classList.remove("hide");
  }

  showWord.innerHTML = correctGuess;
});

playAgain.addEventListener("click", init);
