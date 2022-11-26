import {Link} from "react-router-dom"
import { IPost } from "../../interface"
import "./magazine.css"

interface IProps {
    magazine: IPost
}

function Magazine ({magazine}: IProps) {

    return (
        <div className="magazine">
            <Link className="link" to={`/single/${magazine._id}`}>
                <img src="https://picsum.photos/100"/>
            </Link>
        </div>
    )
}

export default Magazine