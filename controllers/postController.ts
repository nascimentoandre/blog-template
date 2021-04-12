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

//export const getAllPosts = (req: Request, res: Response) => {
//  res.json({
//    title: "post 1",
//    content: "jfal als dla aslkfa las ldfjald açdfka",
//  });
//}

