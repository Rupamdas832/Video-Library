import React, { useEffect } from 'react'
import "./HeroSection.css"
import {Route, Routes} from "react-router-dom"
import { Categories, CategoryDetail, History, Home, LikedVideos, Login, PageNotFound, Playlist, Profile, Signup, VideoDetail, WatchLater } from '../../Pages'
import {PrivateRoute} from "../../Components"
import { useAuth, useUser } from '../../Store'
import axios from 'axios'

export const HeroSection = () => {

    const {authDispatch} = useAuth()

    const {userDispatch} = useUser()

    const fetchUser = async (userId) => {
        try {
            const response = await axios.post("https://Video-Library-Server.rupamdas.repl.co/user", {
            "userId": userId
            })
            userDispatch({type: "LOAD_USER", payload: response.data.user})
        } catch (error) {
            console.log(error.response.data)
        }
        
    }

    useEffect(() => {
        const loginStatus = JSON.parse(localStorage.getItem("loginUser"))
        if(loginStatus?.isUserLogin){
            authDispatch({type: "USER_LOGIN"})
            fetchUser(loginStatus.userId)
        }
    },[])

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

