import Head from "next/head"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PostContainer } from "../../styles/pages/post"
import { GetServerSideProps } from "next"
import api from "../../services/api"
import Link from "next/link"

function printPost({ post }) {
  let d = new Date(post.created_at)

  return (
    <>
      <Navbar />
      <PostContainer>
        <h1>{post.title}</h1>
        <p className="date">{d.toLocaleDateString()}, {d.toLocaleTimeString()}</p>
        <p className="content">{post.content}</p>
        <div style={{width: "100%", textAlign: "center"}}>
          <button className="return"><Link href="/">Return to the main page</Link></button>
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