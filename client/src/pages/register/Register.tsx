import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import { LoginContext } from "../../context/LoginContext"
import axios from "axios"

function Register() {
    const [id, setId] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // const {state, dispatch} = useContext(LoginContext) //이해도 부족 라인. 이해 필요

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // dispatch({type: "REGISTER_START"})
        try {
            const res = await axios.post("/api/auth/register", {  //postman 사용법과 비교하며 공부하기
                id: id,
                username: username,
                password: password,
            })
            res && window.location.replace("/")
            // dispatch({type: "REGISTER_SUCCESS", payload: res.data})
        } catch (err: unknown) {
            // dispatch({type: "REGISTER_FAILURE"})
        }
    }

    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <label><strong>MoSikaengE</strong></label>
                <div className="registerFormGroup">
                    <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} required />
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
                    <div className="registerFormButton">
                        <button className="registerSubmit" type="submit">Register</button>
                        <Link to="/login">
                            <button className="registerLogin">Login</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register