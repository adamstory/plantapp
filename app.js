import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import usersRouter from "./routes/users.js";

import {
  getAllPlants,
  getPlantByID,
  getPlantsByName,
} from "./models/requests.js";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

// Get all plants
app.get("/plants", async function (req, res) {
  let data = await getAllPlants();
  let message = "Currently owned plants:";
  let isSuccess = true;
  res.json({ success: isSuccess, message: message, payload: data });
});

export default app;
