const StoreReducer = (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {...state, isLoading: action.payload}
        case "ADD_TO_LIKED_VIDEO":
            return {...state, likedVideos: state.likedVideos.concat(action.payload)}
        case "ADD_TO_WATCH_LATER":
            return {...state, watchLaterVideos: state.watchLaterVideos.concat(action.payload)}
        case "ADD_TO_HISTORY":
            return {...state, historyVideos: state.historyVideos.concat(action.payload)}
        case "ADD_NEW_PLAYLIST":
            return {...state, playlist: state.playlist.concat(action.payload)}
        case "ADD_VIDEO_TO_PLAYLIST":
            return {...state, playlist: state.playlist.map(playlistItem => {
                if(playlistItem.playlistId === action.payload.playlistId){
                    console.log(playlistItem.playlistId)
                    return {...playlistItem, list: playlistItem.list.concat(action.payload.videoId)}
                }
                return playlistItem
            })}
        default: 
            return state
    }
}
export default StoreReducer;