import express from "express";
import {
  getAllPlants,
  getPlantsByName,
  getPlantByID,
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

export default router;
