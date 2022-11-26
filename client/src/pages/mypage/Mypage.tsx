import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Info from "../../components/info/Info"
import Magazines from "../../components/magazines/Magazines"

function Mypage() {
    const [posts, setPosts] = useState([])
    const location = useLocation()
    const path = location.pathname.split("/")[1]

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`/api/post/${path}`)
            setPosts(res.data)
        }
        fetchPosts()
    }, [path])
    return (
        <>
            <Header />
            <Info post={posts.length}/>
            <Magazines posts={posts}/>
        </>
    )
}

export default Mypage