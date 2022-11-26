import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Magazines from "../../components/magazines/Magazines"
import { IPost } from "../../interface"

function Explore () {
    const [posts, setPosts] = useState<Array<IPost>>([])
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/api/post/")
          setPosts(res.data)
        }
        fetchPosts()
      }, [])
    return (
        <>
            <Header/>
            <Magazines posts={posts}></Magazines>
        </>
    )
}

export default Explore