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
 - dont lower number of guesses if letter already tried
 - show end game if no more guesses remained
 - show try again button

 - event on button play again (playing = false  ???)

*/
// let play = true;
// document.querySelector(".play-again").addEventListener("click", function () {});

const words = ["unbeliebubble", "dorime", "lovely", "slady", "yuri"];

const guessButton = document.querySelector(".guessBtn");
const input = document.querySelector(".letter");
const showWord = document.querySelector(".word-in-progress");
const showWrong = document.querySelector(".guessed-letters");

let numberOfGuesses = document.querySelector(".number");
let number = 8;
numberOfGuesses.innerHTML = number;

let correctGuess = "";

// wrong guesses
let incorrectLetters = [];

//- generate random word
let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(secretWord);

let wordArray = secretWord.split("");
let guessedWord = wordArray.map(() => "_");
correctGuess = guessedWord.join("");

// - show _ instead of letters in a secret word
showWord.innerHTML = secretWord.replace(/./gi, "_");

console.log(correctGuess);

// - event on button guess
guessButton.addEventListener("click", function () {
  const guess = input.value.toUpperCase();
  console.log(guess);

  // - check if letter is there
  let wordArray = secretWord.split("");
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
  }

  // if (correctGuesses.length === wordArray.length) {
  //   console.log("done!");
  // }

  //   if (number <= 0) console.log("game over");
  // }

  showWord.innerHTML = correctGuess;
});
