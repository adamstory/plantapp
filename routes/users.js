import express from "express";
import {
  getAllPlants,
  getPlantsByName,
  getPlantByID,
  createPlant,
  updatePlantByID,
  deletePlantByID,
  getAllPlantNotes,
  createPlantNote,
} from "../models/requests.js";
const router = express.Router();

// Get all plants or get plant by name
router.get("/plants", async function (req, res) {
  let data = await getAllPlants();
  let message = "Currently owned plants:";
  let isSuccess = true;

  let name = req.query.name;
  if (req.query.name !== undefined) {
    data = await getPlantsByName(name);
    if (data.length !== 0) {
      message = `Found plant that contains '${name}':`;
    } else {
      message = `No plant found with name: ${name}`;
      isSuccess = false;
    }
  }
  res.json({ success: isSuccess, message: message, payload: data });
});

// Get plant by id request
router.get("/plants/:id", async function (req, res) {
  let id = Number(req.params.id);
  let message = `Currently owned plant with id of ${id}:`;
  let isSuccess = true;

  let found = await getPlantByID(id);
  if (found.length === 0) {
    message = `No plant found with id: ${id}.`;
    isSuccess = false;
  }
  res.json({ success: isSuccess, message: message, payload: found });
});

// Post new plant request
router.post("/plants", async function (req, res) {
  const plantInfo = {
    name: req.body.name,
    age: req.body.age,
    waterRating: req.body.waterRating,
    image: req.body.image,
  };
  let isSuccess = true;
  let newPlant = await createPlant(plantInfo);
  res.json({ success: isSuccess, message: "You added:", payload: newPlant });
});

// Update existing plant request
router.put("/plants/:id", async function (req, res) {
  const updates = {
    name: req.body.name,
    age: req.body.age,
    waterRating: req.body.waterRating,
    image: req.body.image,
  };
  const id = Number(req.params.id);
  let isSuccess = true;
  let message = "You added:";
  const data = await updatePlantByID(id, updates);
  if (data.length === 0) {
    message = `No plant with id '${id}' found, update failed.`;
    isSuccess = false;
  }
  res.json({ success: isSuccess, message: message, payload: data });
});

// Delete existing plant by ID
router.delete("/plants/:id", async function (req, res) {
  const id = Number(req.params.id);
  let message = `You deleted plant with id: ${id}`;
  let isSuccess = true;
  const found = await getPlantByID(id);
  if (found.length === 0) {
    message = `No plant with id '${id}' found. Delete failed.`;
    isSuccess = false;
  }
  deletePlantByID(id);
  const data = await getAllPlants();
  res.json({ success: isSuccess, message: message, payload: data });
});

// Plant Notes

// Get all plant notes
router.get("/plantnotes", async function (req, res) {
  let data = await getAllPlantNotes();
  let message = "Plant notes:";
  let isSuccess = true;

  res.json({ success: isSuccess, message: message, payload: data });
});

// Post new plant note
router.post("/plantnotes", async function (req, res) {
  // Get current time
  let today = new Date().toISOString().slice(0, 10);
  console.log(today);
  let todayFormatted = today.split("-").reverse().join("-");
  console.log(todayFormatted);

  const plantNoteInfo = {
    id: req.body.id,
    time: `${todayFormatted}`,
    watered: req.body.watered ? true : false,
    condition: req.body.condition,
    note: req.body.note,
  };

  let isSuccess = true;
  let newPlantNote = await createPlantNote(plantNoteInfo);
  res.json({
    success: isSuccess,
    message: "You added:",
    payload: newPlantNote,
  });
});

export default router;
