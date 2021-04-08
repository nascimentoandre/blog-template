require('dotenv').config({ path : "../.env" });
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: "blog",
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

export default pool;
