import React, { useState } from 'react'
import ReactPlayer from "react-player"
import { AiTwotoneLike } from 'react-icons/ai'
import { BsMusicNoteList } from 'react-icons/bs'
import { MdWatchLater } from 'react-icons/md'
import { useLocation, useParams } from 'react-router-dom'
import VideoList from '../Server/VideoData'
import "./VideoDetail.css"

export const VideoDetail = () =>{

    const {state: {course}} = useLocation();
    console.log(course)
    return (
        <div className="videoDetailContainer">
            <div className="videoDetail">
                <div className="videoDiv">
                    <ReactPlayer url={`https://youtube.com/watch?v=${course.id}`} controls width="100%" height="100%"/>
                </div>
                <div className="videoDesc">
                    <p>{course.title}</p>
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
