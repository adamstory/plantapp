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

export async function createPlant(info) {
  const data = await query(
    `INSERT INTO plants(name, age, waterRating, image) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [info.name, info.age, info.waterRating, info.image]
  );
  return data.rows;
}
