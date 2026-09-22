// 1. When the user clicks a button, show a message about the deer.
const animalButton = document.getElementById("animalButton");
animalButton.addEventListener("click", function () {
  alert("Deer are herbivorous mammals known for their graceful appearance.");
});

const animalTitle = document.getElementById("animalTitle");
animalTitle.addEventListener("click", function () {
  animalTitle.textContent = "My Favorite Animal is the Deer!";
  animalTitle.style.color = "blue";
});

const animalImage = document.querySelector("img");
animalImage.addEventListener("click", function () {
  animalImage.style.border = "5px solid blue";
});

// 2. When the user hovers over the image, change its opacity to 0.7, and when the mouse leaves, change it back to 1.
animalImage.addEventListener("mouseover", function () {
  animalImage.style.opacity = "0.7";
});

animalImage.addEventListener("mouseout", function () {
  animalImage.style.opacity = "1";
});

const animalInput = document.getElementById("animalInput");
const animaloutput = document.getElementById("animalOutput");
animalInput.addEventListener("input", function () {
  animaloutput.textContent = animalInput.value;
});

animalInput.addEventListener("focus", function () {
  console.log("Input is focused");
});

animalInput.addEventListener("blur", function () {
  console.log("Input lost focus");
});

const counter = document.getElementById("charCount");
const previewOutput = document.getElementById("previewOutput");
animalInputPreview.addEventListener("input", function () {
  counter.textContent = animalInputPreview.value.length;
  previewOutput.textContent = animalInputPreview.value;
});

const animalForm = document.getElementById("animalForm");
animalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (animalInput.value.trim() === "") {
    animaloutput.textContent = "Please enter an animal.";
    return;
  }
  animaloutput.textContent = "Your favorite animal is: " + animalInput.value;
});

document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
     console.log("Code:", event.code);
});
