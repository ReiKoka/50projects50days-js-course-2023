"use strict";

const API_KEY = "d3ac4b2baf94a4fe859af814f447a11e";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// Function to determine the colour of the rating
const getClassByRate = function (vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

// Show Movies
const showMovies = function (movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
        src="${IMG_PATH}${poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
          ${overview}
      </div>   
    `;

    main.appendChild(movieEl);
  });
};

// Get initial movies
const getMovies = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(`${SEARCH_API}${searchTerm}&api_key=${API_KEY}`);
    search.value = "";
  } else {
    window.location.reload();
  }
});
