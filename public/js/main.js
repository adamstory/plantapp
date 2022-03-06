// Button queries
let rightButton = document.querySelector("#right_button");
let leftButton = document.querySelector("#left_button");
let submitButton = document.querySelector("#submitform");

// Plant info queries
let plantImageElement = document.querySelector("#plant_image");
let plantTitleElement = document.querySelector("#plant_title_text");
let plantLastWaterTextElement = document.querySelector("#days_ago_text");
let plantWaterTextElement = document.querySelector("#water_icon");
let plantTempTextElement = document.querySelector("#temperature_icon");
let plantLightTextElement = document.querySelector("#light_icon");

// Plant rating bar queries
let plantRatingContainer = document.querySelector("#rectangle_container");

let plantRatingBlocks = document.getElementsByClassName("rectangle");

// Form queries
let currentPlantIDNumber = document.querySelector("#currentPlantID");
let plantNotesContainer = document.getElementById("notes_text_container");

// Global variables
let currentIndex = 0;
let plantsArray;
let plantNotesByID;

async function setPlantText() {
  // Fetch data
  const response = await fetch("/plants");
  const data = await response.json();
  plantsArray = data.payload;

  const notesResponse = await fetch("/plantnotes");
  const notesData = await notesResponse.json();
  plantNotesArray = notesData.payload;

  // Plant values
  let plantName = plantsArray[currentIndex].name;
  let conditionRating = plantsArray[currentIndex].conditionrating;
  let plantID = plantsArray[currentIndex].id;
  let plantImage = plantsArray[currentIndex].image;
  let plantLastWateredText = plantsArray[currentIndex].lastwatered;
  let plantWaterText = plantsArray[currentIndex].waterrating;
  let plantTempText = plantsArray[currentIndex].temperature;
  let plantLightText = plantsArray[currentIndex].light;

  // Plant notes values

  plantNotesByID = plantNotesArray
    .reverse()
    .filter((item) => item.id === plantID);

  for (let i = 0; i < plantNotesByID.length; i++) {
    let notesTextContainer = document.querySelector("#notes_text_container");
    let newPlantNoteElement = document.createElement("h4");
    newPlantNoteElement.setAttribute("id", "note");
    let newNote = plantNotesByID[i].note;
    let newNoteDate = plantNotesByID[i].time;
    newPlantNoteElement.innerText = `${newNoteDate}: ${newNote}`;
    notesTextContainer.appendChild(newPlantNoteElement);
  }

  // Get Days Since Last Watered

  let daysSinceWatered;

  function calculateDaysSinceWatered() {
    // Needs refactor and clean up
    let today = new Date().toISOString().slice(0, 10);
    let todayFormatted = today.split("-").reverse().join("-");

    let lastWaterDay = plantNotesByID[0].time;
    console.log(lastWaterDay);
    console.log(todayFormatted, lastWaterDay);

    let startDate = lastWaterDay;
    let endDate = todayFormatted;
    console.log("test1:", lastWaterDay);

    // Process for deploying on Heroku - last watered

    let lw = lastWaterDay.split("-");
    let lwDate = lw.splice(0, 1)[0];
    lw.splice(1, 0, lwDate);
    lw = lw.join("-");
    console.log("lw:", lw);
    console.log("lwDate:", lwDate);

    // Process for deploying on Heroku - last watered

    let td = todayFormatted.split("-");
    let tdDate = td.splice(0, 1)[0];
    td.splice(1, 0, tdDate);
    td = td.join("-");
    console.log("td:", td);
    console.log("tdDate:", tdDate);

    let diffInMs = new Date(td) - new Date(lw);
    daysSinceWatered = diffInMs / (1000 * 60 * 60 * 24);
    return daysSinceWatered;
  }

  calculateDaysSinceWatered();

  // Plant condition rating values

  for (let i = 0; i < conditionRating; i++) {
    plantRatingBlocks[i].style.backgroundColor = "#F6F6F6";
  }

  // Assign data to elements
  plantTitleElement.innerText = `ID: ${plantID} / ${plantName}`;
  plantImageElement.src = plantImage;
  plantLastWaterTextElement.innerText = `${daysSinceWatered} DAYS AGO`;
  plantWaterTextElement.innerText = plantWaterText;
  plantTempTextElement.innerText = `${plantTempText}'C`;
  plantLightTextElement.innerText = plantLightText;

  // Data to form elements
  currentPlantIDNumber.value = plantsArray[currentIndex].id;
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
  clearConditionRating();
  plantNotesContainer.innerHTML = "";
  increaseIndex();
  if (currentIndex === plantsArray.length) {
    currentIndex = 0;
  }
}

async function handleLeftClick() {
  clearConditionRating();
  plantNotesContainer.innerHTML = "";
  decreaseIndex();
  if (currentIndex === plantsArray.length) {
    currentIndex = 0;
  }
}

function refreshNotes() {
  plantNotesContainer.innerText = "";
  setPlantText();
  document.getElementById("form").reset();
}

async function handleSubmitClick() {
  setTimeout(refreshNotes, 1000);
}

function clearConditionRating() {
  for (let i = 0; i < 10; i++) {
    plantRatingBlocks[i].style.backgroundColor = "#2D2D2D";
  }
}

// Event listeners

rightButton.addEventListener("click", handleRightClick);
leftButton.addEventListener("click", handleLeftClick);
submitButton.addEventListener("click", handleSubmitClick);
