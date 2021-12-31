import query from "../index.js";

const plantsTable = `DROP TABLE plants;`;

async function deletePlantsTable() {
  const res = await query(plantsTable);
  console.log("Deleted table:", res);
}

deletePlantsTable();
