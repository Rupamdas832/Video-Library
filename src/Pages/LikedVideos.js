import React from 'react'
import { Link } from 'react-router-dom';
import { VideoItem } from "../Components";
import { useStore } from '../Store/storeContext'
import "./LikedVideos.css"

export const LikedVideos = () =>{

    const {state} = useStore()
    const {likedVideos} = state;
    return (
        <div className="likedVideoContainer">
        <h1>Liked Videos</h1>
        <div className="likedVideoList">
        {likedVideos.map((video) => {
            return (
                <Link className="routerLink" to={`/video-detail/${video.id}`}>
                    <VideoItem video={video} key={video.id}/>
                </Link>
            )
        })}
            
        </div>
        </div>
    )
}
