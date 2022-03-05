import query from "../index.js";

const plantNotesTable = `DROP TABLE plantnotes;`;

async function deletePlantNotesTable() {
  const res = await query(plantNotesTable);
  console.log("Deleted table:", res);
}

deletePlantNotesTable();
