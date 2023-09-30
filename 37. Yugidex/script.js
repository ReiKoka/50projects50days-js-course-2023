"use strict";

const yugiohContainer = document.getElementById("yugioh-container");
const yugioh_count = 150;
const colors = {
  "Aqua": "#c8d9f5",
  "Beast": "#d3ffce",
  "Beast Warrior": "#edfeff",
  "Creator God": "#f6d88f",
  "Cyberse": "#ffc3a0",
  "Dinosaur": "##f0ffff",
  "Divine Beast": "#ffcba4",
  "Dragon": "#eed5b7",
  "Fairy": "#96c8a2",
  "Fiend": "#eea9b8",
  "Fish": "#1facf6",
  "Insect": "#cfcf",
  "Machine": "#aeeeee",
  "Plant": "#069908",
  "Psychic": "#4b90ab",
  "Pyro": "#b63818",
  "Reptile": "#28be1e",
  "Rock": "#b1b7af",
  "Sea Serpent": "#ad282f",
  "Spellcaster": "#eee0e5",
  "Thunder": "#ab82ff",
  "Warrior": "#dcdcdc",
  "Winged Beast": "#f1eca2",
  "Wyrm": "#be9b2c",
  "Zombie": "#707070",
};

const main_races = Object.keys(colors);
console.log(main_races);

const createYugiohCard = function (yugiohCard) {
  const yugiohEl = document.createElement("div");
  yugiohEl.classList.add("yugioh-card");
  const starArray = [];

  for (let i = 0; i < yugiohCard.level; i++) {
    const star = `<i class="material-icons">&#xe8d0</i>`;
    starArray.push(star);
  } 
  
  const yugiohInnerHTML = `
    <div class="img-container">
    <img
      src="${yugiohCard.card_images[0].image_url_cropped}"
      alt=""
    />
    <span class="number">${yugiohCard.id}</span>
    </div>
    <div class="info">
      <h6>${yugiohCard.level ? starArray.join("") : "N/A"}</h6>
      <h3 class="name">${yugiohCard.name}</h3>
      <small class="type">Race: <span>${yugiohCard.race}</span></small>
      <div class="info-atk-def">
        <h5 class="atk"><span>ATK/</span>${yugiohCard.atk}</h5>
        <h5 class="def"><span>DEF/</span>${yugiohCard.def}</h5>
      </div>
      
    </div>
  `;

  const color = colors[yugiohCard.race];
  yugiohEl.style.backgroundColor = color;
  yugiohEl.innerHTML = yugiohInnerHTML;
  yugiohContainer.appendChild(yugiohEl);
};

const fetchYugiCards = async function () {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?atk=gt2500`
  );
  const { data } = await res.json();
  const dataSmall = data.slice(0, 150);
  const dataSorted = dataSmall.sort(function (x, y) {
    return x.atk - y.atk;
  });

  console.log(dataSorted);
  dataSorted.forEach((card) => createYugiohCard(card));
};

fetchYugiCards();
