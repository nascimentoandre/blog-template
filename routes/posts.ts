import express from "express";
import { getAllPosts } from "../controllers/postController";

const router = express.Router();

router.get("/", getAllPosts);

export default router;
