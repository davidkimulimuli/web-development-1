// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";
    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    const nameValue = animalName.value.trim();
    const speciesValue = animalSpecies.value.trim();
    const noteValue = careNote.value.trim();
    // TODO: Validate and show errors / Validoi ja näytä virheet.
    let valid = true;
    if (nameValue === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }   
    if (speciesValue === "") {
        speciesError.textContent = "Species is required.";
        valid = false;
    }   
       if (noteValue.length < 1 || noteValue.length > 150) {
        noteError.textContent = "Care note must be 1–150 characters.";
        valid = false;
    }   
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (valid) {
        formResult.textContent = `Animal: ${nameValue} (${speciesValue}) - Note: ${noteValue}`;
    }   
    
    // TODO: Create { name, species, note } and save it as JSON.
    // TODO: Luo { name, species, note } ja tallenna se JSON-tekstinä.
  const animalobject = {
    name: nameValue,
    species: speciesValue,  
    note: noteValue
  };
  localStorage.setItem("ws05Animal", JSON.stringify(animalobject));
}); 


// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    // TODO: Muunna syötteet numeroiksi Number()-funktiolla.
    const annualFee = Number(animalType.value);
    const years = Number(yearsInput.value);
    // TODO: Calculate the price and apply discounts.
    discountMessage.textContent = "";   
    if (!Number.isInteger(years) || years <= 0) {
        cost.textContent = "Please enter a valid number of years.";
        return;
    }   
    let totalCost = annualFee * years;
    if (years >= 2) {
        totalCost *= 0.8; // 20% discount
        discountMessage.textContent = "A 20% discount has been applied for sponsoring 2  or more years.";
    }
    if (years >= 5) {
        totalCost -= 5; 
        discountMessage.textContent += " Extra 5 euros discount applied for 5 years or more!.";
    }
    // TODO: Laske hinta ja alennukset.
    // TODO: Show the result / Näytä tulos.
    cost.textContent = `Total cost: €${totalCost.toFixed(2)}`;          
});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    const savedAnimalData = localStorage.getItem("ws05Animal");
    if (savedAnimalData === null) {
        savedAnimal.textContent = "No saved animal data.";
        return;
    }
    const savedAnimalObject = JSON.parse(savedAnimalData);
    // TODO: Display name, species and note with textContent.
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.
    savedAnimal.textContent = `Animal: ${savedAnimalObject.name} (${savedAnimalObject.species}) - Note: ${savedAnimalObject.note}`; 
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    // TODO: Remove ws05Animal and update the displayed result.
    // TODO: Poista ws05Animal ja päivitä sivulla näkyvä tulos.
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal yet.";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.

// sessionstorage Reflection exercise

function loadSessionAnimal() {
    const saved = sessionStorage.getItem("ws05SessionAnimal");

    if (saved === null) {
        console.log("Session storage is empty.");
        return;
    }

    const animal = JSON.parse(saved);
    console.log("Session animal:", animal);
}

function saveSessionAnimal(name, species, note) {
    const sessionAnimal = {
        name: name,
        species: species,
        note: note
    };
    sessionStorage.setItem("ws05SessionAnimal", JSON.stringify(sessionAnimal));
}
loadAnimal();
loadSessionAnimal();
        