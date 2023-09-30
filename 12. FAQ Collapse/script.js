"use strict";

const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active");
  });
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    buttons.forEach((button) => {
      button.parentNode.classList.remove("active");
    });
  }
});
