import React from 'react'
import "./Header.css"
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useAuth } from '../../Store/authContext'

export const Header = () => {

    const {isUserLogin, setIsUserLogin} = useAuth()

    return (
        <div className="headerContainer">
            <div className="navbar ecommerce">
                <div className="navSearch ecommerce">
                    <label><FaSearch/></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div className="navAction ecommerce">
                    {isUserLogin && <Link to="/profile"><img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Justin-Welsh.jpeg" className="avatar" alt="profile"/></Link>}
                    {!isUserLogin && <Link to="/signup"><button className="btn outline nav">Signup</button></Link>}
                    {!isUserLogin && <Link to="/login"><button className="btn outline nav">Login</button></Link>}
                    {isUserLogin && <Link to="/login" onClick={() => setIsUserLogin(false)}><button className="btn outline nav">Logout</button></Link>}
                </div>
            </div>
        </div>
    )
}

