import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useStore } from '../../Store/storeContext'
import "./PlaylistModal.css"

export const PlaylistModal = ({isModalOpen, setIsModalOpen, videoId}) => {

    const [playlistName, setPlaylistName] = useState("")

    const {state, dispatch} = useStore()
    const {playlist} = state;

    const addNewPlaylist = () => {
        const newPlaylist = {
            playlistId: uuid(),
            title: playlistName,
            list: []
        }
        dispatch({type: "ADD_NEW_PLAYLIST", payload: newPlaylist})
        setPlaylistName("")
    }

    const addVideoToPlaylist = (playlistId) => {
        const videoDetail = {
            playlistId: playlistId,
            videoId: videoId
        }
        dispatch({type: "ADD_VIDEO_TO_PLAYLIST", payload: videoDetail})
        setIsModalOpen(!isModalOpen)
        console.log(playlist)
    }
    
    return (
        <div className="modal">
                <div className="modalBox">
                    <h3>Playlist</h3>
                    <ul>
                    {playlist.map((playlistItem) => {
                        const {playlistId} = playlistItem
                        return <li key={playlistId} onClick={() => addVideoToPlaylist(playlistId)}>
                        {playlistItem.title}
                    </li>
                    })}
                    </ul>
                    <div className="addPlaylist">
                        <input className="input" onChange={(e) => setPlaylistName(e.target.value)}/>
                        <button className="btn outline" onClick={() => addNewPlaylist()}>Add New</button>
                    </div>
                </div>
        </div>
    )
}
