"use strict";

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

const getData = async function () {
  const res = await fetch("https://www.randomuser.me/api?results=50");
  const { results } = await res.json();

  // Clear Results
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.title}: ${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    result.appendChild(li);
  });
};

getData();

const filterData = function (searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

filter.addEventListener("input", (e) => filterData(e.target.value));
