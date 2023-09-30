"use strict";

const background = document.getElementById("background");
const password = document.getElementById("password");
const letters = `abcdefghijklmnopqrstuvwxyz`;
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = `!"#$%&'()*+,-./:;<=>?@[|]^_{}`;
const lettersArr = Array.from(letters);
const specialCharArr = Array.from(specialChar);

const maxLength = 20;
const minLength = 5;
let blur = 20;

const readjustBlur = function () {
  blur = blur - 1;
  background.style.filter = `blur(${blur}px)`;
};

password.addEventListener("input", (e) => {
  const input = e.target.value;
  if (specialCharArr.some((char) => input.includes(char))) readjustBlur();
  if (lettersArr.some((letter) => input.includes(letter))) readjustBlur();
  if (minLength <= input <= maxLength) readjustBlur();
  if (numbersArr.some((num) => input.includes(num))) readjustBlur();
});
