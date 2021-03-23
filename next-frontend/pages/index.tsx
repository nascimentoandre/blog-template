import Head from 'next/head'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/posts")
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Title</h1>
      <p>Hello world</p>
      <p>{posts.text}</p>
    </div>
  )
}

export default Home
