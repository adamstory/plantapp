import pg from "pg";
import * as config from "./config.js";

const pool = new pg.Pool({
  user: config.dbUsername,
  host: config.dbHost,
  database: config.dbDatabase,
  password: config.dbPassword,
  port: config.dbPort,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
