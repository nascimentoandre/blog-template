import express from "express";
import { createPost, deletePost, getAllPosts, getSinglePost } from "../controllers/postController";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:slug", getSinglePost);
router.post("/new", createPost);
router.delete("/delete/:id", deletePost);

export default router;
