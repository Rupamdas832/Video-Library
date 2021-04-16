import React from 'react'
import "./HeroSection.css"
import {Route, Routes} from "react-router-dom"
import { Categories, CategoryDetail, History, Home, LikedVideos, Login, Playlist, Profile, Signup, VideoDetail, WatchLater } from '../../Pages'
import PrivateRoute from '../PrivateRoute/PrivateRoute'


export const HeroSection = () => {
    return (
        <div className="heroSectionContainer">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/liked-videos" element={<LikedVideos/>}/>
                    <Route path="/watch-later" element={<WatchLater/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/video-detail/:videoIdFromParam" element={<VideoDetail/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/category/:categoryId" element={<CategoryDetail/>}/>
                    <PrivateRoute path="/playlist" element={<Playlist/>}/>
                </Routes>
        </div>
    )
}

