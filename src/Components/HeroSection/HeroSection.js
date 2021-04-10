import React from 'react'
import "./HeroSection.css"
import {Route, Switch} from "react-router-dom"
import { History, Home, LikedVideos, Playlist, VideoDetail, WatchLater } from '../../Pages'

export const HeroSection = () => {
    return (
        <div className="heroSectionContainer">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/history" component={History}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route path="/liked-videos" component={LikedVideos}/>
                    <Route path="/watch-later" component={WatchLater}/>
                    <Route path="/video-detail" component={VideoDetail}/>
                </Switch>
        </div>
    )
}

