import Head from 'next/head'
import { GetServerSideProps } from 'next'
import api from '../services/api'
import Post from '../components/posts'
import Navbar from '../components/navbar'
import { HomeContainer, PostFlexbox } from '../styles/pages/home'
import Footer from '../components/footer'

function Home({ posts }) {
  if (!posts) return <div><p>Loading...</p></div>

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <HomeContainer>
        <h1>Latest posts</h1>
        <PostFlexbox>
          {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            content={post.content}
            createdAt={post.created_at}
            tags={post.tags} />
          ))}
        </PostFlexbox>
      </HomeContainer>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  ////const res = await fetch("http://localhost:3001/posts")
  try {
    const res = await api.get("/posts")
    const posts = await res.data
    return {
      props: {
        posts,
      }
    }
  } catch (err) {
    console.error(err.message)
    return {
      props: {}
    }
  }
}

export default Home
