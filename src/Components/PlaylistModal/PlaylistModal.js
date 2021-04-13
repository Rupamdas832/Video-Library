import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useStore } from '../../Store/storeContext'
import "./PlaylistModal.css"

export const PlaylistModal = ({isModalOpen, setIsModalOpen}) => {

    const [playlistName, setPlaylistName] = useState("")

    const {state, dispatch} = useStore()
    const {playlist} = state;

    const addNewPlaylist = () => {
        const newPlaylist = {
            id: uuid(),
            title: playlistName
        }
        dispatch({type: "ADD_NEW_PLAYLIST", payload: newPlaylist})
        setPlaylistName("")
    }

    const addToPlaylist = () => {
        console.log("added")
    }
    
    return (
        <div className="modal">
                <div className="modalBox">
                    <h3>Playlist</h3>
                    <ul>
                    {playlist.map((playlistItem, idx) => {
                        return <li key={idx} onClick={() => addToPlaylist()}>
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
