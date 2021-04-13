import React, { createContext, useContext, useReducer } from "react"
import StoreReducer from "./storeReducer"
import {CategoryList, Playlist, VideoList} from "../Server/VideoData"

const StoreContext = createContext()

export const useStore = () => {
    return useContext(StoreContext)
}

export const StoreProvider = ({children}) => {
    const initialState = {
        videos: VideoList,
        categories: CategoryList,
        likedVideos: [],
        watchLaterVideos: [],
        historyVideos: [],
        playlist: Playlist,
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState)

    return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>
}