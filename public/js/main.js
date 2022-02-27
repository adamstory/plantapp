// Button queries
let rightButton = document.querySelector("#right_button");
let leftButton = document.querySelector("#left_button");

// Plant info queries
let plantImageElement = document.querySelector("#plant_image");
let plantTitleElement = document.querySelector("#plant_title_text");
let plantLastWaterTextElement = document.querySelector("#days_ago_text");
let plantWaterTextElement = document.querySelector("#water_icon");
let plantTempTextElement = document.querySelector("#temperature_icon");
let plantLightTextElement = document.querySelector("#light_icon");

// Notes queries
let plantNotesContainer = document.getElementById("notes_text_container");

// Global variables
let currentIndex = 0;
let plantsArray;

async function setPlantText() {
  // Fetch data
  const response = await fetch("/plants");
  const data = await response.json();
  plantsArray = data.payload;

  // Log data for testing (remove)
  console.log(plantsArray);

  // Plant values
  let plantName = plantsArray[currentIndex].name;
  let plantID = plantsArray[currentIndex].id;
  let plantImage = plantsArray[currentIndex].image;
  let plantLastWateredText = plantsArray[currentIndex].lastwatered;
  let plantWaterText = plantsArray[currentIndex].waterrating;
  let plantTempText = plantsArray[currentIndex].temperature;
  let plantLightText = plantsArray[currentIndex].light;

  // Plant notes values

  let plantNotesObject = plantsArray[currentIndex].notes;
  let plantNotesObjectLength = Object.keys(plantNotesObject).length;

  for (let i = 1; i <= plantNotesObjectLength; i++) {
    let notesTextContainer = document.querySelector("#notes_text_container");
    let newPlantNoteElement = document.createElement("h4");
    newPlantNoteElement.setAttribute("id", "note");
    console.log(plantNotesObject[i]);
    newPlantNoteElement.innerText = plantNotesObject[i];
    notesTextContainer.appendChild(newPlantNoteElement);
  }

  console.log(plantNotesObject, plantNotesObjectLength);

  // Assign data to elements
  plantTitleElement.innerText = `ID: ${plantID} / ${plantName}`;
  plantImageElement.src = plantImage;
  plantLastWaterTextElement.innerText = `${plantLastWateredText} DAYS AGO`;
  plantWaterTextElement.innerText = plantWaterText;
  plantTempTextElement.innerText = `${plantTempText}'C`;
  plantLightTextElement.innerText = plantLightText;
}

setPlantText();

function increaseIndex() {
  currentIndex++;
  setPlantText();
  return currentIndex;
}

function decreaseIndex() {
  if (currentIndex === 0) {
    currentIndex = plantsArray.length;
  }
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  currentIndex--;
  setPlantText();
  return currentIndex;
}

async function handleRightClick() {
  plantNotesContainer.innerHTML = "";
  increaseIndex();
  if (currentIndex === plantsArray.length) {
    currentIndex = 0;
  }
}

async function handleLeftClick() {
  plantNotesContainer.innerHTML = "";
  decreaseIndex();
  if (currentIndex === plantsArray.length) {
    currentIndex = 0;
  }
}

// Generate notes

// Event listeners

rightButton.addEventListener("click", handleRightClick);
leftButton.addEventListener("click", handleLeftClick);
