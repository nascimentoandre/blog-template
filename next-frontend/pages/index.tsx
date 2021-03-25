import Head from 'next/head'
import { GetServerSideProps } from 'next'
import api from '../services/api'
import Post from '../components/posts'
import Navbar from '../components/navbar'
import { HomeContainer, PostFlexbox } from '../styles/pages/home'
import Footer from '../components/footer'

//export const getServerSideProps: GetServerSideProps = async () => {
  ////const res = await fetch("http://localhost:3001/posts")
  //const res = await api.get("/posts")
  //const posts = res.data

  //return {
    //props: {
      //posts,
    //}
  //}
//}

function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <HomeContainer>
        <h1>Latest posts</h1>
        <PostFlexbox>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostFlexbox>
      </HomeContainer>
      <Footer />
    </div>
  )
}

export default Home
