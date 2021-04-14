import Head from "next/head"
import Link from "next/link"
import { CreateContainer } from "../styles/pages/create"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn1 from "../components/confirmBtn"

const Create: React.FC = () => {
  return (
    <>
    <Navbar />
    <CreateContainer>
      <h1>Create a new markdown post</h1>
      <label>Write a title (max. 100 characters)</label>
      <br />
      <input id="title" type="text" name="postTitle" autoComplete="off"/>
      <br />
      <label>Write a description for your post (max. 150 characters)</label>
      <br />
      <textarea id="description" name="postDescription" rows={3} autoComplete="off"></textarea>
      <br />
      <label>Write your post</label>
      <br />
      <textarea id="content" name="postContent" rows={10} autoComplete="off"></textarea>
      <br />
      <label>Enter your tags separated by semicolons (optional)</label>
      <br />
      <input />
      <br />
      <Link href="/">Cancel</Link>
      <Btn1 text="Submit" />
    </CreateContainer>
    <Footer />
    </>
  )
}

export default Create