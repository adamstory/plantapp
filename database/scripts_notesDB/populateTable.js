import query from "../index.js";
import plantNotesArray from "../../plant-notes-data.js";

async function populatePlantNotesTable() {
  for (let i = 0; i < plantNotesArray.length; i++) {
    const noteId = plantNotesArray[i].noteId;
    const id = plantNotesArray[i].id;
    const note = plantNotesArray[i].note;
    const res = await query(
      `INSERT INTO plantNotes (noteId, id, note) VALUES ($1, $2, $3) RETURNING noteId;`,
      [noteId, id, note]
    );
    console.log(res);
  }
}

populatePlantNotesTable();
