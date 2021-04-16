import React from 'react'
import "./HeroSection.css"
import {Route, Routes} from "react-router-dom"
import { Categories, CategoryDetail, History, Home, LikedVideos, Login, PageNotFound, Playlist, Profile, Signup, VideoDetail, WatchLater } from '../../Pages'
import {PrivateRoute} from "../../Components"

export const HeroSection = () => {
    return (
        <div className="heroSectionContainer">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <PrivateRoute path="/history" element={<History/>}/>
                    <PrivateRoute path="/liked-videos" element={<LikedVideos/>}/>
                    <PrivateRoute path="/watch-later" element={<WatchLater/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <PrivateRoute path="/profile" element={<Profile/>}/>
                    <Route path="/video-detail/:videoIdFromParam" element={<VideoDetail/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/category/:categoryId" element={<CategoryDetail/>}/>
                    <PrivateRoute path="/playlist" element={<Playlist/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Routes>
        </div>
    )
}

