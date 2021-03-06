import React from 'react'
import { VideoItem } from '../../Components'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useStore } from '../../Store'

export const Home = () => {
    
    const {storeState , storeDispatch} = useStore()
    const {videos} = storeState 
   
    return (
        <div className="homeContainer">
            <h1>Home</h1>
            <div className="homeVideoList">
            {videos.map((video) => {
                const {videoId} = video;
                return (
                    <Link className="routerLink" to={`/video-detail/${videoId}`} onClick={() => storeDispatch({type: "ADD_TO_HISTORY", payload: video})} key={videoId}>
                        <VideoItem video={video}/>
                    </Link>
                )
            })}
                
            </div>
        </div>
    )
}
