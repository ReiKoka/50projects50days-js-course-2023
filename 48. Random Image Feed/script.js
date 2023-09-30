"use strict";

const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 10;

const getRandomNumber = function () {
  return Math.floor(Math.random() * 10) + 300;
};

const getRandomSize = function () {
  return `${getRandomNumber()}x${getRandomNumber()}`;
};

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}
