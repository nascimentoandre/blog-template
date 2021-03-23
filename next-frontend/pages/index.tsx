import Head from 'next/head'
import PlotPost from "../components/posts"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Title</h1>
      <p>Hello world</p>
      <PlotPost />
    </div>
  )
}

export default Home
