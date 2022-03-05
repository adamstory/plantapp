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

export async function updatePlantByID(id, updates) {
  const data = await query(
    `UPDATE plants SET name = $1, age = $2, waterrating = $3, image = $4 WHERE id = ${id} RETURNING *;`,
    [updates.name, updates.age, updates.waterRating, updates.image]
  );
  return data.rows;
}

export async function deletePlantByID(id) {
  const data = await query(`DELETE FROM plants WHERE id = ${id} RETURNING *;`);
  return data.rows;
}

// Notes table

export async function getAllPlantNotes() {
  const data = await query(`SELECT * FROM plantNotes;`);
  return data.rows;
}

export async function createPlantNote(info) {
  const data = await query(
    `INSERT INTO plantNotes(id, time, watered, condition, note) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [info.id, info.time, info.watered, info.condition, info.note]
  );
  return data.rows;
}
