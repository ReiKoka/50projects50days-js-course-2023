"use strict";

const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const createUserCard = function (user) {
  const cardHtml = `
    <div class="card">
      <div>
        <img
          src="${user.avatar_url}"
          alt=""
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>
          ${user.bio}
        </p>
        <ul>
          <li>${user.followers} <strong>followers</strong></li>
          <li>${user.following} <strong>following</strong></li>
          <li>${user.public_repos} <strong>repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHtml;
};

const createErrorCard = function (message) {
  const cardHtml = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;
  main.innerHTML = cardHtml;
};

const addReposToCard = function (repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

const getUser = async function (username) {
  try {
    const { data } = await axios(`${API_URL}${username}`);
    console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
};

const getRepos = async function (username) {
  try {
    const { data } = await axios(`${API_URL}${username}/repos?sort=created`);
    console.log(data);
    addReposToCard(data);
  } catch (err) {
    console.log(err);
    createErrorCard("Couldn't get repositories");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
