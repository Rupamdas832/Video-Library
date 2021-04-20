import axios from 'axios'
import {v4 as uuid} from 'uuid'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Toast } from '../../Components'
import { useAuth, useStore, useUser } from '../../Store'

import './Signup.css'

export const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const {state} = useLocation()

    const { authDispatch } = useAuth()
    const {userDispatch} = useUser()

    const {storeState, storeDispatch} = useStore()
    const {isLoading} = storeState

    const signUpUser = async () => {
        storeDispatch({type: "IS_LOADING", payload: "signup"})
        try {
            const response = await axios.post("https://Video-Library-Server.rupamdas.repl.co/signup" ,{
                    "userId": uuid(),
                    "name": name,
                    "email": email,
                    "password": password
            })
            if(response.status === 201){
                authDispatch({type: "USER_LOGIN"})
                userDispatch({type: "LOAD_USER", payload: response.data.user})
                navigate(state?.from ? state.from : "/")
            }
        } catch (error) {
            setError(error.response.data.message)
        }
        finally{
            storeDispatch({type: "IS_LOADING", payload: "success"})
        }
    }
    return (
        <div className="signupContainer">
            {isLoading === "signup" ? <Toast message="Signing up..."/> : null}
            <div className="formCard">
                <h1>Signup</h1>
                <div className="formInput">
                    <label>Name</label>
                    <input placeholder="Type your name" type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="formInput">
                    <label>Email</label>
                    <input placeholder="Type your email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input placeholder="Type your password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button className="formBtn" onClick={signUpUser}>Signup</button>
            </div>
        </div> 
    )
}
