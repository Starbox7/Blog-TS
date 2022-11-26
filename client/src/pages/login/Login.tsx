import React,{useContext, useState} from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import "./login.css"
import axios from "axios"

function Login () {
    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {state, dispatch} = useContext(LoginContext)

    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post("/api/auth/login",{  //postman 사용법과 비교하며 공부하기
                id:id,
                password: password,
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        }catch(err: unknown){
            dispatch({type: "LOGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <label><strong>MoSikaengE</strong></label>
                <div className="loginFormGroup">
                    <input type="text" placeholder="id" onChange={(e)=>setId(e.target.value)} required/>
                    <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} required/>
                    <div className="loginFormButton">
                        <button className="loginSubmit" type="submit">Login</button>
                        <Link to="/register">
                            <button className="loginRegister">Register</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login