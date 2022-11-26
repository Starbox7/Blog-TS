import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import { IPost, IUser } from "../../interface"
import "./reply.css"
import ReplyDetail from "./ReplyDetail"

interface IProps {
    user: IUser,
    post: IPost
}

export default ({ user, post }: IProps) => {
    const { state } = useContext(LoginContext)
    const [reply, setReply] = useState<string>("")
    const [replies, setReplies] = useState([])
    const [view, setView] = useState<boolean>(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (reply !== "") {
            const newReply = {
                description: reply,
                user_id: state.user,
                post_id: post._id,
            }
            try {
                await axios.post("/api/reply", newReply)
                setReply("")
            } catch (err: unknown) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
    const fetchReplies = async () => {
      const res = await axios.get(`/api/reply/${post._id}`)
      setReplies(res.data)
    }
    fetchReplies()
  }, [post._id, replies])
    return (
        <div className="reply">
            <div className="replyMenu">
                <div className="replyMenuLeft">
                    <i className="replyIcon fa-regular fa-heart"></i>
                    <Link to={`/single/${post._id}`} className="link">
                        <i className="replyIcon fa-regular fa-comment"></i>
                    </Link>
                    <i className="replyIcon fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className="postDescription">
                <span><strong>{user.username}&nbsp;</strong>{post.description}</span>
            </div>
            <div className="replyList">
                <div className="postDescription" style={{color:"#888"}}>댓글확인</div>
                <ReplyDetail />
            </div>
            <form className="replyForm">
                <div className="replyFormLeft">
                    <i className="replyIcon fa-regular fa-face-smile"></i>
                </div>
                <div className="replyFormCenter">
                    <input type="text" className="replyInput" placeholder="reply" />
                </div>
                <button className="replyFormRight" type="submit">게시</button>
            </form>
        </div>

    )
}