import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import mockServer from '../../Server/mockServer'
import { useAuth } from '../../Store/authContext'
import "./Login.css"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const {state} = useLocation()
    const navigate = useNavigate()
    const { setIsUserLogin } = useAuth()

    const loginWithCredentials = async () => {
        try {
            const response = await mockServer(email,password)
            if(response.success){
                setIsUserLogin(true)
                navigate(state?.from ? state.from : "/")
            }
        } catch (error) {
            setError(error.message)
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
                {error && <p style={{color: "red"}}>{error}</p>}
                <div className="redirectToSignup">
                    <p>Create a new account. <Link to="/signup">here</Link></p>
                </div>
            </div>
        </div>
    )
}
