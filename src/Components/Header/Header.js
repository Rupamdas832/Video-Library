import React from 'react'
import "./Header.css"
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="navbar ecommerce">
                <div className="navSearch ecommerce">
                    <label><FaSearch/></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div className="navAction ecommerce">
                    <Link to="/profile"><img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Justin-Welsh.jpeg" className="avatar" alt="profile"/></Link>
                    <Link to="/signup"><button className="btn outline nav">Signup</button></Link>
                    <Link to="/login"><button className="btn outline nav">Login</button></Link>
                </div>
            </div>
        </div>
    )
}

