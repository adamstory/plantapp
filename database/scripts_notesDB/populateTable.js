import query from "../index.js";
import plantNotesArray from "../../plant-notes-data.js";

async function populatePlantNotesTable() {
  for (let i = 0; i < plantNotesArray.length; i++) {
    const id = plantNotesArray[i].id;
    const watered = plantNotesArray[i].watered;
    const condition = plantNotesArray[i].condition;
    const note = plantNotesArray[i].note;
    const res = await query(
      `INSERT INTO plantNotes (id, watered, condition, note) VALUES ($1, $2, $3, $4) RETURNING noteId;`,
      [id, watered, condition, note]
    );
    console.log(res);
  }
}

populatePlantNotesTable();
