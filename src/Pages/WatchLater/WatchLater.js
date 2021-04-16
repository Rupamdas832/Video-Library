import React from 'react'
import { Link } from 'react-router-dom';
import { VideoItem } from '../../Components'
import { useStore } from '../../Store/storeContext'
import "./WatchLater.css"

export const WatchLater = () =>{

    const {storeState} = useStore()
    const {watchLaterVideos} = storeState;
    return (
        <div className="watchLaterContainer">
            <h1>Watch Later</h1>
            <div className="watchLaterVideoList">
            {watchLaterVideos.map((video) => {
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
