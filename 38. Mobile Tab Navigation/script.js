"use strict";

const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const hideAllContents = function () {
  contents.forEach((content) => content.classList.remove("show"));
};

const hideAllItems = function () {
  listItems.forEach((item) => item.classList.remove("active"));
};

listItems.forEach((item, idx) => {
  item.addEventListener("click", function () {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});
