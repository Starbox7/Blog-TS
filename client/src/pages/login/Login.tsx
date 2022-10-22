import React from "react"
import { Link } from "react-router-dom"
import "./login.css"

function Login () {
    return (
        <div className="login">
            <form className="loginForm">
                <label><strong>MoSikaengE</strong></label>
                <div className="loginFormGroup">
                    <input type="text" placeholder="id" required/>
                    <input type="password" placeholder="password" required/>
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