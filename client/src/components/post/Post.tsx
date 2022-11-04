import { Link } from "react-router-dom"
import Gallery from "../gallery/Gallery"
import Profile from "../profile/Profile"
import Reply from "../reply/Reply"
import "./post.css"

function Post() {
    return(
        <div className="post">
            <div className="postHeader">
                <div className="postHeaderLeft">
                    <span>
                        <Link to={`/&12345`}>
                            <Profile />
                        </Link>
                    </span>
                    <Link to={`/$12345`} className="link">
                        <strong>Starbox</strong>
                    </Link>
                </div>
                <div className="postHeaderRight">
                    <Link className="link" to={`/write/$12345`}>
                        <i className="fa-solid fa-pen"></i>
                    </Link>
                    <i className="fa-sharp fa-solid fa-trash"></i>
                </div>
            </div>
            <div className="postSection">
                <Gallery />
            </div>
            <div className="postFooter">
                <Reply />
            </div>
        </div>
    )
}

export default Post