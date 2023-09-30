"use strict";

const range = document.getElementById("range");

const scale = function (number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = +getComputedStyle(e.target)
    .getPropertyValue("width")
    .slice(0, -2);
  const label_width = +getComputedStyle(label)
    .getPropertyValue("width")
    .slice(0, -2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (range_width / max) -
    label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});
