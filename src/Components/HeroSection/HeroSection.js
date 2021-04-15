import React from 'react'
import "./HeroSection.css"
import {Route, Switch} from "react-router-dom"
import { Categories, CategoryDetail, History, Home, LikedVideos, Login, Playlist, Profile, Signup, VideoDetail, WatchLater } from '../../Pages'


export const HeroSection = () => {
    return (
        <div className="heroSectionContainer">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/history" component={History}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route path="/liked-videos" component={LikedVideos}/>
                    <Route path="/watch-later" component={WatchLater}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/video-detail/:videoIdFromParam" component={VideoDetail}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/category/:categoryId" component={CategoryDetail}/>
                </Switch>
        </div>
    )
}

