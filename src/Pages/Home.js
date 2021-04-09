import React from 'react'
import { VideoItem } from '../Components/VideoItem.js/VideoItem'
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className="homeVideoList">
                <VideoItem url="https://youtube.com/embed/TPrnSACiTJ4"/>
                <VideoItem url="https://www.youtube.com/embed/QJpfLkEsoek"/>
                <VideoItem url="https://youtube.com/embed/R3c4WjSFXJg"/>
                <VideoItem url="https://youtube.com/embed/AyML8xuKfoc"/>
                <VideoItem url="https://youtube.com/embed/R3c4WjSFXJg"/>
                <VideoItem url="https://youtube.com/embed/TPrnSACiTJ4"/>
                <VideoItem url="https://www.youtube.com/embed/QJpfLkEsoek"/>
            </div>
        </div>
    )
}
