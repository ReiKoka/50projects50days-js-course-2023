"use strict";

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  
  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokeEl.textContent = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);
