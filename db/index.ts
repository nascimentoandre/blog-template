require('dotenv').config({ path : "../.env" });
//import { Client } from "pg";
const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  //host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE
});

client.connect()
.then(() => console.log("Connected sucessfully"))
.catch(e => console.log(e))
.finally(() => client.end());

