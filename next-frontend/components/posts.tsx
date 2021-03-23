import React, { useState, useEffect } from "react"
//import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

interface Kanye {
  quote: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = await fetch("https://api.kanye.rest/")
  const posts: Kanye = await req.json()

  return {
    props: {posts}
  }
}

function PlotPost({ posts }) {
  console.log(posts)
  return (
    <div>
      <p>Hold on</p>
    </div>
  )
}

export default PlotPost