import express from "express";
import { getAllPosts, getSinglePost } from "../controllers/postController";

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

export default router;
