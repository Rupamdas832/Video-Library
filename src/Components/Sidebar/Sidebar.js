import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import {ImHome} from "react-icons/im"
import {BsMusicNoteList} from "react-icons/bs"
import {FaHistory} from "react-icons/fa"
import {MdWatchLater} from "react-icons/md"
import {AiTwotoneLike} from "react-icons/ai"

export const Sidebar = () =>{
    return (
        <div className="sidebarContainer">
            <h1>GRAD</h1>
            <div className="sidebarNavContainer">
                <Link to="/" className="sidebarNavLinks">
                    <div className="sidebarNavItem">
                        <ImHome/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/playlist" className="sidebarNavLinks">
                    <div className="sidebarNavItem">
                        <BsMusicNoteList/>
                        <p>Playlist</p>
                    </div>
                </Link>
                <Link to="/watchlater" className="sidebarNavLinks">
                    <div className="sidebarNavItem">
                        <MdWatchLater/>
                        <p>Watch Later</p>
                    </div>
                </Link>
                <Link to="/likedvideos" className="sidebarNavLinks">
                    <div className="sidebarNavItem">
                        <AiTwotoneLike/>
                        <p>Liked Videos</p>
                    </div>
                </Link>
                <Link to="/history" className="sidebarNavLinks">
                    <div className="sidebarNavItem">
                        <FaHistory/>
                        <p>History</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
