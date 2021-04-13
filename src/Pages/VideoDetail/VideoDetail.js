import React, { useState } from 'react'
import ReactPlayer from "react-player"
import { AiTwotoneLike } from 'react-icons/ai'
import { BsMusicNoteList } from 'react-icons/bs'
import { MdWatchLater } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import "./VideoDetail.css"
import { useStore } from '../../Store/storeContext'

export const VideoDetail = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false)

    const {videoId} = useParams()

    const {state,dispatch} = useStore()
    const {videos} = state

    const selectedVideo = videos.find(video => video.id === videoId)
    const {id, title, channelName} = selectedVideo


    return (
        <div className="videoDetailContainer">
            {isModalOpen && <div className="modal" onClick={() =>setIsModalOpen(!isModalOpen)}>
                <div className="modalBox">
                    <h3>Playlist</h3>
                    <ul>
                        <li>
                            Unreal engine 4
                        </li>
                        <li>
                            Blender
                        </li>
                        <li>
                            Substance Painter
                        </li>

                    </ul>
                </div>
            </div>}
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
                            <button className="btn unstyled" onClick={() =>setIsModalOpen(!isModalOpen)}><BsMusicNoteList/></button>
                            <span className="tooltipText">Add to Playlist</span>
                        </div>
                    </div>
                </div>
                <div className="videoChannelName">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" className="avatar" alt="profile"/>
                    <p>{channelName}</p>
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
