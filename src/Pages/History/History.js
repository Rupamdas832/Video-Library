import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VideoItemFlat } from '../../Components'
import { useStore } from '../../Store'
import "./History.css"

export const History = () => {

    const {storeState} = useStore()
    const {historyVideos} = storeState;
    

    return (
        <div className="historyContainer">
        <h1>History</h1>
        <div className="historyVideoList">
        {historyVideos.reverse().map((video) => {
            const {videoId, thumbnail, channelName, title} = video
            return (
                <Link className="routerLink" to={`/video-detail/${videoId}`} key={videoId}>
                    <div className="flatCard history">
                        <div className="imgFlat">
                            <img src={thumbnail}/>
                        </div>
                        <div className="detailFlat history">
                            <p>{title}</p>
                            <p>{channelName}</p>
                        </div>
                    </div>
                </Link>
            )
        })}
            
        </div>
        </div>
    )
}
