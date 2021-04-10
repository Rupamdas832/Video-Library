import React from 'react'
import { Link } from 'react-router-dom'
import { VideoItem } from '../../Components'
import { useStore } from '../../Store/storeContext'
import "./History.css"

export const History = () => {

    const {state} = useStore()
    const {historyVideos} = state
    return (
        <div className="historyContainer">
        <h1>History</h1>
        <div className="historyVideoList">
        {historyVideos.map((video) => {
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
