import React from 'react'
import { VideoItem } from '../../Components'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useStore } from '../../Store/storeContext'
import ReactPlayer from 'react-player'

export const Home = () => {
    
    const {state,dispatch} = useStore()
    const {videos} = state
   
    return (
        <div className="homeContainer">
            <h1>Home</h1>
            <div className="homeVideoList">
            {videos.map((video) => {
                const {videoId} = video;
                return (
                    <Link className="routerLink" to={`/video-detail/${videoId}`} onClick={() => dispatch({type: "ADD_TO_HISTORY", payload: video})}>
                        <VideoItem video={video}/>
                    </Link>
                )
            })}
                
            </div>
        </div>
    )
}
