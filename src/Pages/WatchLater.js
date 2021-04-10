import React from 'react'
import { Link } from 'react-router-dom';
import { VideoItem } from '../Components';
import { useStore } from '../Store/storeContext'
import "./WatchLater.css"

export const WatchLater = () =>{

    const {state} = useStore()
    const {watchLaterVideos} = state;
    return (
        <div className="watchLaterContainer">
            <h1>Watch Later</h1>
            <div className="watchLaterVideoList">
            {watchLaterVideos.map((video) => {
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
