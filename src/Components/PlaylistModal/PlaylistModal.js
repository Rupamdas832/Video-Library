import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useStore } from '../../Store/storeContext'
import "./PlaylistModal.css"

export const PlaylistModal = ({setIsModalOpen, videoId}) => {

    const [playlistName, setPlaylistName] = useState("")

    const {storeState, storeDispatch} = useStore()
    const {playlist} = storeState;

    const addNewPlaylist = () => {
        const newPlaylist = {
            playlistId: uuid(),
            title: playlistName,
            list: []
        }
        storeDispatch({type: "ADD_NEW_PLAYLIST", payload: newPlaylist})
        setPlaylistName("")
    }

    const addVideoToPlaylist = (playlistId) => {
        const videoDetail = {
            playlistId: playlistId,
            videoId: videoId
        }
        storeDispatch({type: "ADD_VIDEO_TO_PLAYLIST", payload: videoDetail})
        setIsModalOpen(false)
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
                    <input className="input" onChange={(e) => setPlaylistName(e.target.value)}/>
                    <div className="addPlaylist">
                        <button className="btn outline" onClick={() => addNewPlaylist()}>Add New</button>
                        <button className="btn outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </div>
                </div>
        </div>
    )
}
