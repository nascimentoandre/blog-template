import { Request, Response } from "express";
import pool from "../db/index";
import slugify from "slugify"
import marked from "marked"
import { JSDOM } from "jsdom";
const createDomPurify = require("dompurify");

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await pool.query("select * from posts order by created_at desc");
    res.json(posts.rows);
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  const pslug = req.params.slug;

  try {
    const post = await pool.query("select * from posts where slug = $1", [pslug]);
    res.json(post.rows);
  } catch (err) {
    console.error(err.message);
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { postTitle, postDescription, postContent, postTags } = req.body;

  // slugifying the title
  const slug = slugify(postTitle, { lower: true, strict: true })

  // creating the sanitized HTML
  const window = new JSDOM('').window;
  const DOMPurify = createDomPurify(window);
  let sanitizedHTML = ''

  if (postContent) {
    sanitizedHTML = DOMPurify.sanitize(marked(postContent));
  }

  // formatting tags to appropriate format for postgresql array
  let tagsStr = "";
  if (postTags) {
    let tagsArr = postTags.split(";");
    tagsStr += "{";
    tagsArr.map((tag: string) => tagsStr+=tag+", ")
    tagsStr = tagsStr.slice(0, tagsStr.length-2)
    tagsStr += "}";
  } else tagsStr = "{}"

  try {
    const newPost = await pool.query("insert into posts (title, slug, descript, content, sanitized_html, tags) values ($1, $2, $3, $4, $5, $6)", 
    [postTitle, slug, postDescription, postContent, sanitizedHTML, tagsStr]);
  } catch (err) {
    res.send(err.message);
  } finally {
    res.send("Finished");
  }
}

export const deletePost = async (req: Request, res: Response) => {
  const pid = req.params.id;

  try {
    const delPost = await pool.query("delete from posts where id = $1", [pid]);
  } catch (err) {
    console.error(err.message);
  } finally {
    res.send("Finished.")
  }
}