import React from 'react'
import { VideoItem } from '../Components/VideoItem.js/VideoItem'
import "./Home.css"
import VideoList from "../Server/VideoData"
import { Link } from 'react-router-dom'

export const Home = () => {
    
   
    return (
        <div className="homeContainer">
            <h1>Home</h1>
            <div className="homeVideoList">
            {VideoList.map((video) => {
                return (
                    <Link 
                        state={{ course: video }} 
                        to={{
                            pathname: "/video-detail"
                        }
                        }  
                        className="routerLink">
                        <VideoItem video={video} key={video.id}/>
                    </Link>
                )
            })}
                
            </div>
        </div>
    )
}
