import React from "react"
import { Link } from "react-router-dom"
import "./register.css"

function Register () {
    return (
        <div className="register">
        <form className="registerForm">
            <label><strong>MoSikaengE</strong></label>
            <div className="registerFormGroup">
                <input type="text" placeholder="id" required/>
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required/>
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