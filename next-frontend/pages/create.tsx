import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { CreateContainer } from "../styles/pages/create"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Btn1 from "../components/confirmBtn"
import api from "../services/api"

const Create: React.FC = () => {
  const router = useRouter()

  const [inp, setInput] = useState<object>({
    postTitle: "test",
    postDescription: "",
    postContent: "",
    postTags: ""
  })

  const handleChange: ((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void) = event => {
    const { name, value } = event.target

    setInput((prevInput) => {
      return {
      ...prevInput,
      [name]:  value
    }})
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post("/posts/new", inp)
      router.push("/")
    } catch(err) {
      console.log(err.message)
    } 
  }

  return (
    <>
    <Navbar />
    <CreateContainer onSubmit={handleSubmit}>
      <h1>Create a new markdown post</h1>
      <label>Write a title (max. 70 characters)</label>
      <br />
      <input type="text" name="postTitle" onChange={handleChange} autoComplete="off" />
      <br />
      <label>Write a description for your post (max. 200 characters)</label>
      <br />
      <textarea name="postDescription" rows={3} onChange={handleChange} autoComplete="off"></textarea>
      <br />
      <label>Write your post</label>
      <br />
      <textarea name="postContent" rows={10} onChange={handleChange} autoComplete="off"></textarea>
      <br />
      <label>Enter your tags separated by semicolons (optional)</label>
      <br />
      <input type="text" name="postTags" onChange={handleChange} autoComplete="off" />
      <br />
      <Link href="/">Cancel</Link>
      <Btn1 text="Submit" />
    </CreateContainer>
    <Footer />
    </>
  )
}

export default Create