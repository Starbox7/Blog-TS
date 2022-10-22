import { Link } from "react-router-dom";
import Profile from "../profile/Profile";
import "./info.css"

function Info() {
    return (
        <div className="info">
            <div className="infoProfile">
                <Profile />
            </div>
            <div className="infoView">
                <div className="infoSettings">
                    <span><strong>Starbox7</strong></span>
                    <Link className="link" to="/setting">
                        <i className="fa-solid fa-gear"></i>
                    </Link>
                </div>
                <div className="infoTotal">
                    <div className="infoTotalDetail">
                        post: <strong>12345</strong>
                    </div>
                    <div className="infoTotalDetail">
                        follower: <strong>12345</strong>
                    </div>
                    <div className="infoTotalDetail">
                        follow: <strong>12345</strong>
                    </div>
                </div>
                <div className="infoTotal">
                    <span><strong>Starbox7</strong></span>
                </div>
                <div className="infoTotal"><span>starbox</span>
                </div>
            </div>
        </div>
    )
}

export default Info