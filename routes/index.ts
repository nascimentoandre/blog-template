import express from "express";

let router = express.Router();

// Only a test for now

router.get("/", (req, res, next) => {
  res.send("Hello there");
});

export default router;
