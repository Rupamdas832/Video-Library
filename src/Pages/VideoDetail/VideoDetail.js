import React, { useState } from 'react'
import ReactPlayer from "react-player"
import { AiTwotoneLike } from 'react-icons/ai'
import { BsMusicNoteList } from 'react-icons/bs'
import { MdWatchLater } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import "./VideoDetail.css"
import { useStore } from '../../Store/storeContext'
import { useAuth } from '../../Store/authContext'
import { LoginModal, PlaylistModal } from '../../Components'

export const VideoDetail = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const {storeState,storeDispatch} = useStore()
    const {videos} = storeState

    const {isUserLogin} = useAuth()

    const {videoIdFromParam} = useParams()
    const selectedVideo = videos.find(video => video.videoId === videoIdFromParam)
    const {videoId, title, channelName} = selectedVideo

    const loginToggler = () => {
        if(isUserLogin){
            return setIsLoginModalOpen(false)
        }
        else return setIsLoginModalOpen(true)
    }


    return (
        <div className="videoDetailContainer">
            {isModalOpen && <PlaylistModal setIsModalOpen={setIsModalOpen} videoId={videoId}/>}
            {isLoginModalOpen && <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} videoId={videoId}/>}
            <div className="videoDetail">
                <div className="videoDiv">
                    <ReactPlayer url={`https://youtube.com/watch?v=${videoId}`} controls width="100%" height="100%"/>
                </div>
                <div className="videoDesc">
                    <p>{title}</p>
                    <div className="videoLike" onClick={() => loginToggler(selectedVideo)}>
                        <div className="tooltip" onClick={() => isUserLogin ? storeDispatch({type: "ADD_TO_LIKED_VIDEO", payload: selectedVideo}): null}>
                            <button className="btn unstyled"><AiTwotoneLike/></button>
                            <span className="tooltipText">Add to Liked Videos</span>
                        </div>
                        <div className="tooltip" onClick={() => isUserLogin ? storeDispatch({type: "ADD_TO_WATCH_LATER", payload: selectedVideo}) : null}>
                            <button className="btn unstyled"><MdWatchLater/></button>
                            <span className="tooltipText">Add to Watch Later</span>
                        </div>
                        <div className="tooltip">
                            <button className="btn unstyled" onClick={() => isUserLogin ? setIsModalOpen(!isModalOpen) : null}><BsMusicNoteList/></button>
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
