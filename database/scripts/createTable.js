import query from "../index.js";

const plantsTable = `CREATE TABLE IF NOT EXISTS plants(id SERIAL PRIMARY KEY, name TEXT, conditionRating INTEGER, lastWatered INTEGER, light TEXT, temperature TEXT, waterRating TEXT, notes JSON, image TEXT)`;

async function createPlantsTable() {
  const res = await query(plantsTable);
  console.log("Created table:", res);
}

createPlantsTable();
