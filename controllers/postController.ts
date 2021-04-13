import { Request, Response } from "express";
import pool from "../db/index";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await pool.query("select * from posts");
    res.json(posts.rows);
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  const pid = req.params.id;
  console.log(pid);

  try {
    const post = await pool.query("select * from posts where id = $1", [pid]);
    res.json(post.rows);
  } catch (err) {
    console.error(err.message);
  }
};

