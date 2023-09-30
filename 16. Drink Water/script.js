"use strict";

const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

const updateBigCup = function () {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  console.log(fullCups);
  const totalCups = smallCups.length;
  console.log(totalCups);

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 335}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = "0";
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

updateBigCup();

const highlightCups = function (index) {
  if (
    smallCups[smallCups.length - 1].classList.contains("full") ||
    (smallCups[index].classList.contains("full") &&
      !smallCups[index].nextElementSibling.classList.contains("full"))
  ) {
    index--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
};

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
