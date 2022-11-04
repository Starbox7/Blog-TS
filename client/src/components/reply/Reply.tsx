import { Link } from "react-router-dom"
import "./reply.css"
import ReplyDetail from "./ReplyDetail"

export default () => {
    return (
        <div className="reply">
            <div className="replyMenu">
                <div className="replyMeneLeft">
                    <i className="replyIcon fa-regular fa-heart"></i>
                    <Link to={`/single/$412345`} className="link">
                        <i className="replyIcon fa-regular fa-comment"></i>
                    </Link>
                    <i className="replyIcon fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className="postDescription">
                <span><strong>Starbox</strong></span>
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