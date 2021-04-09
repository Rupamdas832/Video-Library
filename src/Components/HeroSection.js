import React from 'react'
import "./HeroSection.css"
import {Route, Switch} from "react-router-dom"
import { History, Home, LikedVideos, Playlist, WatchLater } from '../Pages'

export const HeroSection = () => {
    return (
        <div className="heroSectionContainer">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/history" component={History}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route path="/likedvideos" component={LikedVideos}/>
                    <Route path="/watchlater" component={WatchLater}/>
                </Switch>
        </div>
    )
}

