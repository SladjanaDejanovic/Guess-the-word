"use strict";

/*
 - event on button guess

- strings of words in array? for secret word ✅
- generate random word ✅
 - put a random word from array to be word we're guessing ✅

- value of input ✅
- only put in one letter at the time ✅

- check if letter is there - if input is part of secretWord 
- put correct guessed letter on their spot
- show word
- show win if guessed the word correctly

 - lower number of guesses if wrong
- populate ul guessed letteres with guesses from input if wrong ✅
- delete input after pushing wrong guess in array
 
 - show end game if no more guesses remained
 - show try again button

 - event on button play again (playing = false  ???)

*/

// document.querySelector(".play-again").addEventListener("click", function () {});

const words = ["unbeliebubble", "dorime", "lovely", "slady", "yuri"];
// let play = true;
const guessButton = document.querySelector(".guessBtn");
const input = document.querySelector(".letter");

const showWord = document.querySelector(".word-in-progress");
let numberOfGuesses = document.querySelector(".number");
let number = 8;
numberOfGuesses.innerHTML = number;

const incorrectLetters = [];
const showWrong = document.querySelector(".guessed-letters");

const correctGuesses = [];

//- generate random word
let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(secretWord);
const stringArr = [...secretWord];
console.log(stringArr);

// - show _ instead of letters in a secret word
showWord.innerHTML = secretWord.replace(/./gi, "_");

// const checkLetter = function () {};

// - event on button guess
guessButton.addEventListener("click", function () {
  const letter = input.value.toUpperCase();
  console.log(letter);
  // - check if letter is there

  //maps
  let correctGuess = secretWord
    .split("")
    .map((char) => (char === letter ? char : "_"))
    .join("");
  console.log(correctGuess);
  showWord.innerHTML = correctGuess;
  input.value = "";

  if (!secretWord.includes(letter)) {
    incorrectLetters.push(letter);
    showWrong.innerHTML = [...incorrectLetters];
    number--;
    numberOfGuesses.innerHTML = number;
    input.value = "";
  }
  // if (secretWord.includes(letter)) {
  //   correctGuesses.push(letter);
  //   console.log(correctGuesses);
  //   // let correctWord = correctGuesses.toString();
  //   // showWord.innerHTML = secretWord.replace(/letter/g);
  //   input.value = "";
  //   if (correctGuesses.length === stringArr.length) {
  //     console.log("done!");
  //   }
  // } else {
  //   console.log("test");
  //   incorrectLetters.push(letter);
  //   console.log(incorrectLetters);
  //   showWrong.innerHTML = [...incorrectLetters];
  //   number--;
  //   numberOfGuesses.innerHTML = number;
  //   input.value = "";
  //   if (number <= 0) console.log("game over");
  // }
});

// replace all occurrances of correct letter in secret word

///////////////
/*
let word = "javascript";
let input = document.querySelector("input");
let correctGuess = "";

let wordArray = word.split("");
let guessedWord = wordArray.map(() => "_");

correctGuess = guessedWord.join("");

console.log(correctGuess);

input.addEventListener("input", function() {
  let guess = input.value;
  wordArray = word.split("");
  guessedWord = wordArray.map((letter, index) => {
    if (letter === guess) {
      return guess;
    } else {
      return correctGuess[index];
    }
  });

  correctGuess = guessedWord.join("");
  console.log(correctGuess);
}); */
