import React from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { BsMusicNoteList } from 'react-icons/bs'
import { MdWatchLater } from 'react-icons/md'
import { useParams } from 'react-router'
import VideoList from '../Server/Data'
import "./VideoDetail.css"

export const VideoDetail = () =>{

    const {videoId} = useParams()
    const selectedVideo = VideoList.find(video => video.id === parseInt(videoId))
    const {url,category} = selectedVideo
    return (
        <div className="videoDetailContainer">
            <div className="videoDetail">
                <div className="videoDiv">
                    <iframe 
                    src={url} 
                    className="iframe large"
                    ></iframe>
                </div>
                <div className="videoDesc">
                    <p>Part 3, Level 1: Modifiers-Blender Beginner Tutorial</p>
                    <div className="VideoLike">
                        <div className="tooltip">
                            <button className="btn unstyled"><AiTwotoneLike/></button>
                            <span className="tooltipText">Add to Liked Videos</span>
                        </div>
                        <div className="tooltip">
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
