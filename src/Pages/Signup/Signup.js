import React from 'react'
import './Signup.css'

export const Signup = () => {
    return (
        <div className="signupContainer">
            <div className="formCard">
                <h1>Signup</h1>
                <div className="formInput">
                    <label>Name</label>
                    <input placeholder="Type your name" type="text"/>
                </div>
                <div className="formInput">
                    <label>Email</label>
                    <input placeholder="Type your email" type="email"/>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input placeholder="Type your password" type="password"/>
                </div>
                <button className="formBtn">Signup</button>
            </div>
        </div> 
    )
}
