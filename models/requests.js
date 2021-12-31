import query from "../database/index.js";

export async function getAllPlants() {
  const data = await query(`SELECT * FROM plants;`);
  return data.rows;
}

export async function getPlantByID(id) {
  const data = await query(`SELECT * FROM plants WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getPlantsByName(plantName) {
  const data = await query(
    `SELECT * FROM plants WHERE name ILIKE '%' || $1 || '%';`,
    [plantName]
  );
  return data.rows;
}