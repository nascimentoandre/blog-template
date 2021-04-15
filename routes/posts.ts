import express from "express";
import { createPost, getAllPosts, getSinglePost } from "../controllers/postController";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.post("/new", createPost);

export default router;
