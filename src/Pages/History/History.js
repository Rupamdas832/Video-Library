import React from 'react'
import { Link } from 'react-router-dom'
import { VideoItem } from '../../Components'
import { useStore } from '../../Store'
import "./History.css"

export const History = () => {

    const {storeState} = useStore()
    const {historyVideos} = storeState
    return (
        <div className="historyContainer">
        <h1>History</h1>
        <div className="historyVideoList">
        {historyVideos.map((video) => {
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
