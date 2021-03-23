import React, { useState, useEffect } from "react"

interface Post {
  title: string,
  text: string,
  category: string
}
const PlotPost: React.FC = () => {
  // Change this to getStaticProps later
  const [posts, setPosts] = useState<Post>({
    title: '',
    text: '',
    category: '',
  });

  const fetchPosts = async () => {
    let res = await fetch("/posts")
    if (res.ok) return res.json().then(p => setPosts(p)).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div>
      <p>Hold on</p>
      <p>{posts.title}</p>
    </div>
  )
}

export default PlotPost