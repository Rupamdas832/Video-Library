import React from 'react'
import "./Header.css"
import {FaSearch} from "react-icons/fa"

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="navbar ecommerce">
                <div className="navSearch ecommerce">
                    <label><FaSearch/></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div className="navAction ecommerce">
                    <img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Justin-Welsh.jpeg" className="avatar" alt="profile"/>
                </div>
            </div>
        </div>
    )
}

