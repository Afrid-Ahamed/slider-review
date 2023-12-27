// Import DB from db.json
import { results } from "../../db.json";
// Import render from view.js
import render from "./view";

// Select the container DIV
let containerDiv = document.querySelector(".container"); // Container div

// Decide an index for the profile to be displayed from DB.JSON
let index = 0;

// IIFE for displaying a profile initially
(() => {
  containerDiv.innerHTML += render(results[index]);
})();

// Select all elements from DOM
let forwardBtn = document.querySelector("#icon-forward"); // Forward button
let backBtn = document.querySelector("#icon-back"); // Back button
let supriseMeBtn = document.querySelector("#surprise"); // Surprise Button

// When forward button is clicked, need to show the next profile in the array.
forwardBtn.addEventListener("click", (evt) => {
  index++;
  // If the index goes beyond the length of array, display the first profile in the array
  if (index > results.length - 1) {
    index = 0;
  }
  containerDiv.innerHTML = "";
  containerDiv.innerHTML += render(results[index]);
});

// When backward button is clicked, need to show the previous profile in the array.
backBtn.addEventListener("click", (evt) => {
  index--;
  // If the index goes less than 0, display the last profile in the array
  if (index < 0) {
    index = results.length - 1;
  }
  containerDiv.innerHTML = "";
  containerDiv.innerHTML += render(results[index]);
});

// When surprise button is clicked, need to show the random profile in the array.
supriseMeBtn.addEventListener("click", (evt) => {
  index = Math.floor(Math.random() * (results.length - 1 - 0)) + 0;
  containerDiv.innerHTML = "";
  containerDiv.innerHTML += render(results[index]);
});
