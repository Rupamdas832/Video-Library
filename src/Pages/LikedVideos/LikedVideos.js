import React from 'react'
import { Link } from 'react-router-dom';
import { VideoItem } from '../../Components'
import { useStore } from '../../Store/storeContext'
import "./LikedVideos.css"

export const LikedVideos = () =>{

    const {storeState} = useStore()
    const {likedVideos} = storeState;
    return (
        <div className="likedVideoContainer">
        <h1>Liked Videos</h1>
        <div className="likedVideoList">
        {likedVideos.map((video) => {
            return (
                <Link className="routerLink" to={`/video-detail/${video.videoId}`}>
                    <VideoItem video={video} key={video.videoId}/>
                </Link>
            )
        })}
            
        </div>
        </div>
    )
}
