import React from 'react'
import "./Header.css"
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useAuth, useUser } from '../../Store'


export const Header = () => {

    const {authState,authDispatch} = useAuth()
    const {isUserLogin} = authState;

    const {userState} = useUser()
    const {user} = userState

    const logoutUser = () => {
        localStorage.removeItem("loginUser")
        authDispatch({type: "USER_LOGOUT"})
    }

    return (
        <div className="headerContainer">
            <div className="navbar ecommerce">
                <div className="navSearch ecommerce">
                    <label><FaSearch/></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div className="navAction ecommerce">
                    
                    {isUserLogin && <Link to="/profile"><img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Justin-Welsh.jpeg" className="avatar" alt="profile"/></Link>}
                    {isUserLogin && user ? <p style={{color: "white"}}>{user.name}</p> : null}
                    {!isUserLogin && <Link to="/signup"><button className="btn outline nav">Signup</button></Link>}
                    {!isUserLogin && <Link to="/login"><button className="btn outline nav">Login</button></Link>}
                    {isUserLogin && <button className="btn outline nav" onClick={() => logoutUser()}>Logout</button>}
                </div>
            </div>
        </div>
    )
}

