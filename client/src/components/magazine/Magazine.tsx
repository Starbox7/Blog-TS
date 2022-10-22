import {Link} from "react-router-dom"
import "./magazine.css"

function Magazine () {

    return (
        <div className="magazine">
            <Link className="link" to={`/single/$12345`}>
                <img src="https://picsum.photos/100"/>
            </Link>
        </div>
    )
}

export default Magazine