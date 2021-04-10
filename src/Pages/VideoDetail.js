import React from 'react'
import ReactPlayer from "react-player"
import { AiTwotoneLike } from 'react-icons/ai'
import { BsMusicNoteList } from 'react-icons/bs'
import { MdWatchLater } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import VideoList from '../Server/VideoData'
import "./VideoDetail.css"
import { useStore } from '../Store/storeContext'

export const VideoDetail = () =>{

    const {videoId} = useParams()

    const {dispatch} = useStore()

    const selectedVideo = VideoList.find(video => video.id === videoId)
    const {id, title} = selectedVideo

    return (
        <div className="videoDetailContainer">
            <div className="videoDetail">
                <div className="videoDiv">
                    <ReactPlayer url={`https://youtube.com/watch?v=${id}`} controls width="100%" height="100%"/>
                </div>
                <div className="videoDesc">
                    <p>{title}</p>
                    <div className="VideoLike">
                        <div className="tooltip" onClick={() => dispatch({type: "ADD_TO_LIKED_VIDEO", payload: selectedVideo})}>
                            <button className="btn unstyled"><AiTwotoneLike/></button>
                            <span className="tooltipText">Add to Liked Videos</span>
                        </div>
                        <div className="tooltip" onClick={() => dispatch({type: "ADD_TO_WATCH_LATER", payload: selectedVideo})}>
                            <button className="btn unstyled"><MdWatchLater/></button>
                            <span className="tooltipText">Add to Watch Later</span>
                        </div>
                        <div className="tooltip">
                            <button className="btn unstyled"><BsMusicNoteList/></button>
                            <span className="tooltipText">Add to Playlist</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoNotes">
                <h3>Take Notes</h3>
                <div className="input">
                    <input placeholder="Enter notes"/>
                </div>
            </div>
        </div>
    )
}
