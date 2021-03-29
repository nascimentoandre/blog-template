import Head from "next/head"
import { CreateContainer } from "../styles/pages/create"

const Create: React.FC = () => {
  return (
    <CreateContainer>
      <h1>Create a new post</h1>
      <label>Write a title</label>
      <br />
      <input id="title" type="text" name="postTitle" autoComplete="off"/>
      <br />
      <label>Write your post</label>
      <br />
      <textarea id="content" name="postContent" rows={8} autoComplete="off"></textarea>
      <br />
      <label>Enter the tags (separated by ;)</label>
      <br />
      <input />
    </CreateContainer>
  )
}

export default Create