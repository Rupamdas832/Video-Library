import React from 'react'
import { VideoItem } from '../../Components'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useStore } from '../../Store/storeContext'

export const Home = () => {
    
    const {state,dispatch} = useStore()
    const {videoList} = state
   
    return (
        <div className="homeContainer">
            <h1>Home</h1>
            <div className="homeVideoList">
            {videoList.map((video) => {
                return (
                    <Link className="routerLink" to={`/video-detail/${video.id}`} onClick={() => dispatch({type: "ADD_TO_HISTORY", payload: video})}>
                        <VideoItem video={video} key={video.id}/>
                    </Link>
                )
            })}
                
            </div>
        </div>
    )
}
