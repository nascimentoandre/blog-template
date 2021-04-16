import { Request, Response } from "express";
import pool from "../db/index";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await pool.query("select * from posts order by created_at desc");
    res.json(posts.rows);
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  const pid = req.params.id;

  try {
    const post = await pool.query("select * from posts where id = $1", [pid]);
    res.json(post.rows);
  } catch (err) {
    console.error(err.message);
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { postTitle, postDescription, postContent, postTags } = req.body;
  let tagsStr = "";

  if (postTags) {
    let tagsArr = postTags.split(";");
    tagsStr += "{";
    tagsArr.map((tag: string) => tagsStr+=tag+", ")
    tagsStr = tagsStr.slice(0, tagsStr.length-2)
    tagsStr += "}";
  } else tagsStr = "{}"

  try {
    const newPost = await pool.query("insert into posts (title, descript, content, tags) values ($1, $2, $3, $4)", 
    [postTitle, postDescription, postContent, tagsStr]);
  } catch (err) {
    res.send(err.message);
  } finally {
    res.send("Finished");
  }
}