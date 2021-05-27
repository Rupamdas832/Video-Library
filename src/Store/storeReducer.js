const StoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "LOAD_VIDEOS":
      return {
        ...state,
        videos: action.payload.map((video) => ({
          ...video,
          isLiked: false,
          isWatchLater: false,
        })),
      };
    case "LOAD_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "LOAD_VIDEO_LIBRARY":
      return {
        ...state,
        likedVideos: action.payload.likedVideos,
        watchLaterVideos: action.payload.watchLaterVideos,
        historyVideos: action.payload.historyVideos,
        playlist: action.payload.playlist,
        videos: state.videos.map((video) => {
          const foundLikedVideo = action.payload.likedVideos.find(
            (item) => item._id === video._id
          );
          const foundWatchLaterVideo = action.payload.watchLaterVideos.find(
            (item) => item._id === video._id
          );
          if (foundLikedVideo) {
            video.isLiked = true;
          }
          if (foundWatchLaterVideo) {
            video.isWatchLater = true;
          }
          return video;
        }),
      };
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.concat(action.payload),
        videos: state.videos.map((video) => {
          if (video._id === action.payload._id) {
            video.isLiked = true;
          }
          return video;
        }),
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.concat(action.payload),
        videos: state.videos.map((video) => {
          if (video._id === action.payload._id) {
            video.isWatchLater = true;
          }
          return video;
        }),
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        historyVideos: state.historyVideos.concat(action.payload),
      };
    case "ADD_NEW_PLAYLIST":
      return { ...state, playlist: action.payload };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlistItem) => {
          if (playlistItem._id === action.payload._id) {
            const newVideo = {
              _id: action.payload.video_id,
            };
            return {
              ...playlistItem,
              videos: playlistItem.videos.concat(newVideo),
            };
          }
          return playlistItem;
        }),
      };
    case "REMOVE_FROM_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (item) => item._id !== action.payload._id
        ),
        videos: state.videos.map((video) => {
          if (video._id === action.payload._id) {
            video.isLiked = false;
          }
          return video;
        }),
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (item) => item._id !== action.payload._id
        ),
        videos: state.videos.map((video) => {
          if (video._id === action.payload._id) {
            video.isWatchLater = false;
          }
          return video;
        }),
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        historyVideos: state.historyVideos.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
};
export default StoreReducer;
