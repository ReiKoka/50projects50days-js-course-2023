"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");

openBtn.addEventListener("click", function () {
  navs.forEach((nav) => nav.classList.add("visible"));
});

closeBtn.addEventListener("click", function () {
  navs.forEach((nav) => nav.classList.remove("visible"));
});