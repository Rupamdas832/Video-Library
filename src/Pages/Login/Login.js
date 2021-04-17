import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Toast } from '../../Components'
import mockServer from '../../Server/mockServer'
import { useAuth } from '../../Store/authContext'
import { useStore } from '../../Store/storeContext'
import { useUser } from '../../Store/userContext'
import "./Login.css"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const {state} = useLocation()
    const navigate = useNavigate()
    const { setIsUserLogin } = useAuth()

    const {storeState, storeDispatch} = useStore()
    const {isLoading} = storeState

    const {userDispatch} = useUser()

    const loginWithCredentials = async () => {
            storeDispatch({type: "IS_LOADING", payload: "loggingIn"})
        try {
            const response = await axios.post("https://Video-Library-Server.rupamdas.repl.co/login",{
                    "email": email,
                    "password": password
            })
            if(response.status === 200){
                setIsUserLogin(true)
                userDispatch({type: "LOAD_USER", payload: response.data.user})
                localStorage.setItem("loginUser", true)
                navigate(state?.from ? state.from : "/")
            }
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data.message)
        }
        finally{
            storeDispatch({type: "IS_LOADING", payload: "success"})
        }
    }
    return (
        <div className="loginContainer">
            {isLoading === "loggingIn" ? <Toast message="Authenticating Details..."/> : null}
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
