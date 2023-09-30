"use strict";

const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = 'Satisfied';

const removeActive = function () {
  for (const rating of ratings) {
    rating.classList.remove("active");
  }
};

panel.addEventListener("click", (e) => {
  if (e.target.closest(".ratings-container")) {
    removeActive();
    e.target.closest('.rating').classList.add("active");
    selectedRating = e.target.closest('.rating').lastElementChild.innerText;

  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support!</p>
  `
})
