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
                    <input placeholder="Not working currently...WIP"/>
                </div>
                <div className="navAction ecommerce">
                    
                    {isUserLogin && user ? <div className="dropdown">
                                                <button className="btnFloat">{user.name.charAt(0).toUpperCase()}</button>
                                                <div className="dropdownContent">
                                                    <ul>
                                                    <Link to="/profile" className="routerLink"><li>Profile</li></Link>
                                                    <li onClick={() => logoutUser()}>Logout</li>
                                                    </ul>
                                                </div>
                                            </div>: null}
                    {!isUserLogin && <Link to="/login"><button className="btn unstyled nav">Login</button></Link>}
                   
                </div>
            </div>
        </div>
    )
}

