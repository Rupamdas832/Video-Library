import axios from "axios";
import { URL } from "../Server/serverURL";

export const addToLikedVideos = async (
  selectedVideo,
  likedVideos,
  storeDispatch,
  user
) => {
  const videoAlreadyPresent = likedVideos.find(
    (item) => item._id === selectedVideo._id
  );

  if (videoAlreadyPresent) {
    return null;
  } else {
    storeDispatch({ type: "IS_LOADING", payload: "likeVideo" });
    try {
      const { status } = await axios.post(`${URL}/video-library/${user._id}`, {
        _id: selectedVideo._id,
        section: "likedVideos",
      });
      if (status === 201) {
        const newVideo = {
          _id: selectedVideo._id,
        };
        storeDispatch({ type: "ADD_TO_LIKED_VIDEO", payload: newVideo });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.likedVideos.push(newVideo);
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  }
};

export const addToWatchLater = async (
  selectedVideo,
  watchLaterVideos,
  storeDispatch,
  user
) => {
  const videoAlreadyPresent = watchLaterVideos.find(
    (item) => item._id === selectedVideo._id
  );
  if (videoAlreadyPresent) {
    return null;
  } else {
    storeDispatch({ type: "IS_LOADING", payload: "watchLater" });
    try {
      const { status } = await axios.post(`${URL}/video-library/${user._id}`, {
        _id: selectedVideo._id,
        section: "watchLaterVideos",
      });
      if (status === 201) {
        const newVideo = {
          _id: selectedVideo._id,
        };
        storeDispatch({ type: "ADD_TO_WATCH_LATER", payload: newVideo });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.watchLaterVideos.push(newVideo);
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  }
};

export const addToHistory = async (selectedVideo, storeDispatch, user) => {
  try {
    const { status } = await axios.post(`${URL}/video-library/${user._id}`, {
      _id: selectedVideo._id,
      section: "historyVideos",
    });
    if (status === 201) {
      const newVideo = {
        _id: selectedVideo._id,
      };
      storeDispatch({ type: "ADD_TO_HISTORY", payload: newVideo });
      const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
      storage.historyVideos.push(newVideo);
      localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
    }
  } catch (error) {
    console.log(error);
  }
};
