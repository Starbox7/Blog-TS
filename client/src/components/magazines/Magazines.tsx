import "./magazines.css"
import React from "react"
import Magazine from "../magazine/Magazine"

import { IPost } from "../../interface"

interface IProps {
    posts: Array<IPost>
}

export default function Magazines ({ posts }: IProps) {
    return(
        <div className="magazines">
            {Array.isArray(posts) && posts.map((data: IPost, index) => (
                <Magazine magazine={data} key={index}/>
            ))}
        </div>
    )
}