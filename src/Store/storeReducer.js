const StoreReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIKED_VIDEO":
            return {...state, likedVideos: state.likedVideos.concat(action.payload)}
        case "ADD_TO_WATCH_LATER":
            return {...state, watchLaterVideos: state.watchLaterVideos.concat(action.payload)}
        case "ADD_TO_HISTORY":
            return {...state, historyVideos: state.historyVideos.concat(action.payload)}
        case "ADD_NEW_PLAYLIST":
            return {...state, playlist: state.playlist.concat(action.payload)}
        default: 
            return state
    }
}
export default StoreReducer;