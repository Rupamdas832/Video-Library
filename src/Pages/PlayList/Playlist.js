import React from 'react'
import { VideoItem, VideoItemFlat } from '../../Components'
import {useStore} from '../../Store/storeContext'
import "./Playlist.css"

export const Playlist = () => {

    const {storeState} = useStore()
    const {playlist, videos} = storeState;
    return (
        <div className="playlistContainer">
        <h1>Playlist</h1>
            {playlist.map(playlistItem => {
                return <div className="playlist" key={playlistItem.playlistId}>
                    <h2>{playlistItem.title}</h2>
                    <div className="playlistVideos">
                        {playlistItem.list.map(item => {
                            const selectedVideo = videos.find(video => video.videoId === item)
                            return <VideoItemFlat video={selectedVideo}/>
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}
