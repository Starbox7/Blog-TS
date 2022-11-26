import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IUser } from "../../interface";
import { PF } from "../../settings";
import Profile from "../profile/Profile";
import "./info.css"

interface IProps {
    post: number
}

function Info({post}: IProps) {
    const [user, setUser] = useState<IUser>()
    const location = useLocation()
    const path = location.pathname.split("/")[1]

    useEffect(() => {
        const findUser = async () => {
            const res = await axios.get(`/api/user/${path}`)
            setUser(res.data)
        }
        findUser()
    }, [path])
    return (
        <div className="info">
            <div className="infoProfile">
                <Profile name={
                    user&&user.profilePic? PF + user.profilePic : "/no.jpg"}/>
            </div>
            <div className="infoView">
                <div className="infoSettings">
                    <span><strong>{user?.id}</strong></span>
                    <Link className="link" to="/setting">
                        <i className="fa-solid fa-gear"></i>
                    </Link>
                </div>
                <div className="infoTotal">
                    <div className="infoTotalDetail">
                        post: <strong>{post}</strong>
                    </div>
                    <div className="infoTotalDetail">
                        follower: <strong>12345</strong>
                    </div>
                    <div className="infoTotalDetail">
                        follow: <strong>12345</strong>
                    </div>
                </div>
                <div className="infoTotal">
                    <span><strong>{user?.username}</strong></span>
                </div>
                <div className="infoTotal"><span>{user?.intro}</span>
                </div>
            </div>
        </div>
    )
}

export default Info