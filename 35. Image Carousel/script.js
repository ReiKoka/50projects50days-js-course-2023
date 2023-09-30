"use strict";

const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const imgsContainer = document.getElementById("imgs");

const imgs = document.querySelectorAll("#imgs img");
let index = 0;

const changeImage = function () {
  if (index > imgs.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imgs.length - 1;
  }
  imgsContainer.style.transform = `translateX(${-index * 500}px)`;
};

const run = function () {
  index++;
  changeImage();
};

const resetInterval = function () {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

let interval = setInterval(run, 2000);

nextBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
