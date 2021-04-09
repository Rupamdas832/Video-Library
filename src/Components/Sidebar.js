import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

export const Sidebar = () =>{
    return (
        <div className="sidebarContainer">
            <h1>GRAD TUBE</h1>
            <div className="sidebarNavContainer">
                <Link to="/"><p>Home</p></Link>
                <Link to="/playlist"><p>Playlist</p></Link>
                <Link to="/watchlater"><p>Watch Later</p></Link>
                <Link to="/likedvideos"><p>Liked Videos</p></Link>
                <Link to="/history"><p>History</p></Link>
            </div>
        </div>
    )
}
