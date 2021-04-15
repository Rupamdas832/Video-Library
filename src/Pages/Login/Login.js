import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginWithCredentials = async () => {
        console.log(email,password)
        try {
            const response = await axios.post("https://Video-Library-Server.rupamdas.repl.co/", {
                body: {
                    email: email,
                    password: password
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className="loginContainer">
            <div className="formCard">
                <h1>Login</h1>
                <div className="formInput">
                    <label>Email</label>
                    <input placeholder="Type your email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input placeholder="Type your password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="formBtn" onClick={loginWithCredentials}>Login</button>
                <div className="redirectToSignup">
                    <p>Create a new account. <Link to="/signup">here</Link></p>
                </div>
            </div>
        </div>
    )
}
