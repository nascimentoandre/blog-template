import Head from "next/head"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PostContainer } from "../../styles/pages/post"
import { GetServerSideProps } from "next"
import api from "../../services/api"
import Btn1 from "../../components/confirmBtn"
import ReactHtmlParser from "react-html-parser"

function printPost({ post }) {
  let d = new Date(post.created_at)

  return (
    <>
      <Navbar />
      <PostContainer>
        <h1>{post.title}</h1>
        <p className="date">{d.toLocaleDateString()}, {d.toLocaleTimeString()}</p>
        {ReactHtmlParser(post.sanitized_html)} 
        <div style={{width: "100%", textAlign: "center"}}>
          <Btn1 text="Return to the main page" link={true} to="/" />
        </div>
      </PostContainer>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await api.get(`/posts/${params.id}`)
    const post = await res.data[0]

    return {
      props: {
        post
      }
    }
  } catch (err) {
    console.error(err.message)
    return {
      props: {}
    }
  }
}

export default printPost