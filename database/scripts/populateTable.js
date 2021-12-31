import query from "../index.js";
import plantsArray from "../../plants-data.js";

// Want to gather info from the plants-data table
// Want to add this data to the Heroku databse using SQL

// Create an async function, await the response:
// Use loop for the length of the array
// Set each column in that row to the corresponding piece of data to the hardcoded plants array
// Stop when reach end of array

// Call function

async function populatePlantsTable() {
  for (let i = 0; i < plantsArray.length; i++) {
    const name = plantsArray[i].name;
    const age = plantsArray[i].age;
    const waterRating = plantsArray[i].waterRating;
    const image = plantsArray[i].image;
    const res = await query(
      `INSERT INTO plants(name, age, waterRating, image) VALUES ($1, $2, $3, $4) RETURNING name;`,
      [name, age, waterRating, image]
    );
    console.log(res);
  }
}

populatePlantsTable();
