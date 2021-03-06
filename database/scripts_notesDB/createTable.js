import query from "../index.js";

const plantNotesTable = `CREATE TABLE IF NOT EXISTS plantNotes (noteId SERIAL PRIMARY KEY, id INTEGER, time TEXT, watered BOOLEAN, condition INTEGER, note TEXT);`;

async function createPlantNotesTable() {
  const res = await query(plantNotesTable);
  console.log("Created table:", res);
}

createPlantNotesTable();
