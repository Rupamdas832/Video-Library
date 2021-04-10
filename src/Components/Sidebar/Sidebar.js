import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import {ImHome} from "react-icons/im"
import {BsMusicNoteList} from "react-icons/bs"
import {FaHistory} from "react-icons/fa"
import {MdWatchLater} from "react-icons/md"
import {AiTwotoneLike} from "react-icons/ai"
import {CgListTree} from "react-icons/cg"

export const Sidebar = () =>{
    return (
        <div className="sidebarContainer">
            <h1>GRAD</h1>
            <div className="sidebarNavContainer">
                <Link to="/" className="routerLink">
                    <div className="sidebarNavItem">
                        <ImHome/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/categories" className="routerLink">
                    <div className="sidebarNavItem">
                        <CgListTree/>
                        <p>Categories</p>
                    </div>
                </Link>
                <Link to="/playlist" className="routerLink">
                    <div className="sidebarNavItem">
                        <BsMusicNoteList/>
                        <p>Playlist</p>
                    </div>
                </Link>
                <Link to="/watch-later" className="routerLink">
                    <div className="sidebarNavItem">
                        <MdWatchLater/>
                        <p>Watch Later</p>
                    </div>
                </Link>
                <Link to="/liked-videos" className="routerLink">
                    <div className="sidebarNavItem">
                        <AiTwotoneLike/>
                        <p>Liked Videos</p>
                    </div>
                </Link>
                <Link to="/history" className="routerLink">
                    <div className="sidebarNavItem">
                        <FaHistory/>
                        <p>History</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
