import React, { createContext, useContext, useReducer } from "react"
import StoreReducer from "./storeReducer"

const StoreContext = createContext()

export const useStore = () => {
    return useContext(StoreContext)
}

export const StoreProvider = ({children}) => {
    const initialState = {
        likedVideos: [],
        watchLaterVideos: [],
        historyVideos: []
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState)

    return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>
}