import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import { IPost, IUser } from "../../interface"
import { PF } from "../../settings"
import Gallery from "../gallery/Gallery"
import Profile from "../profile/Profile"
import Reply from "../reply/Reply"
import "./post.css"

interface IProps {
    post: IPost
}

function Post({post}: IProps) {
    const { state } = useContext(LoginContext)
    const [user, setUser] = useState<IUser>({})
    useEffect(() => {
        const findUser = async () => {
            const res = await axios.get(`/api/user/${post.user_id}`)
            setUser(res.data)
        }
        findUser()
    }, [post.user_id])
    return(
        <div className="post">
            <div className="postHeader">
                <div className="postHeaderLeft">
                    <span>
                        <Link to={`/${user._id}`}>
                            <Profile name={state.user.profilePic? PF + state.user.profilePic : "/no.jpg"}/>
                        </Link>
                    </span>
                    <Link to={`/${user._id}`} className="link">
                        <strong>{user.username}</strong>
                    </Link>
                </div>
                <div className="postHeaderRight">
                { (state.user._id === post.user_id) && <>                
                    <Link className="link" to={`/write/${post._id}`}>
                        <i className="fa-solid fa-pen"></i>
                    </Link>
                    <i className="fa-sharp fa-solid fa-trash"></i>
                </>}
                </div>
            </div>
            <div className="postSection">
                <Gallery />
            </div>
            <div className="postFooter">
                <Reply user={user} post={post}/>
            </div>
        </div>
    )
}

export default Post