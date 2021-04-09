import React from 'react'
import { VideoItem } from '../Components/VideoItem.js/VideoItem'
import "./Home.css"
import VideoList from "../Server/Data"
import { Link } from 'react-router-dom'

export const Home = () => {
    
   
    return (
        <div className="homeContainer">
            <h1>Home</h1>
            <div className="homeVideoList">
            {VideoList.map((video) => {
                return <Link to={`/video-detail/${video.id}`} className="routerLink"><VideoItem video={video} key={video.id}/></Link>
            })}
                
            </div>
        </div>
    )
}
