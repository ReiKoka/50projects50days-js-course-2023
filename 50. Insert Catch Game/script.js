"use strict";

const screens = document.querySelectorAll(".screen");
const choose_Insects_Btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selected_insect = {};

console.log(screens);

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

const increaseTime = function () {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerText = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = function () {
  setInterval(() => increaseTime(), 1000);
};

const getRandomLocation = function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.floor(Math.random() * (width - 200) + 100);
  const y = Math.floor(Math.random() * (height - 200) + 100);
  return { x, y };
};

const increaseScore = function () {
  score++;
  if (score > 19) {
    message.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
};

const addInsects = function () {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};

const catchInsect = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
};

choose_Insects_Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect(), 1000);
    startGame();
  });
});

const createInsect = function () {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" 
  alt="${selected_insect.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;

  insect.addEventListener("click", catchInsect);

  game_container.appendChild(insect);
};
