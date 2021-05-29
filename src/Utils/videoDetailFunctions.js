import axios from "axios";
import { URL } from "../Server/serverURL";

export const addToLikedVideos = async (
  selectedVideo,
  likedVideos,
  storeDispatch,
  token
) => {
  const videoAlreadyPresent = likedVideos.find(
    (item) => item._id === selectedVideo._id
  );

  if (videoAlreadyPresent) {
    storeDispatch({ type: "IS_LOADING", payload: "removeLikeVideo" });
    try {
      const { status } = await axios.delete(`${URL}/video-library/`, {
        headers: { authorization: token },
        data: {
          _id: selectedVideo._id,
          section: "likedVideos",
        },
      });
      if (status === 202) {
        const newVideo = {
          _id: selectedVideo._id,
        };
        storeDispatch({ type: "REMOVE_FROM_LIKED_VIDEO", payload: newVideo });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.likedVideos = storage.likedVideos.filter(
          (item) => item._id !== selectedVideo._id
        );
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  } else {
    storeDispatch({ type: "IS_LOADING", payload: "likeVideo" });
    try {
      const { status } = await axios.post(
        `${URL}/video-library/`,
        {
          _id: selectedVideo._id,
          section: "likedVideos",
        },
        {
          headers: { Authorization: token },
        }
      );
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
      console.log(error.response.data);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  }
};

export const addToWatchLater = async (
  selectedVideo,
  watchLaterVideos,
  storeDispatch,
  token
) => {
  const videoAlreadyPresent = watchLaterVideos.find(
    (item) => item._id === selectedVideo._id
  );
  if (videoAlreadyPresent) {
    storeDispatch({ type: "IS_LOADING", payload: "removeWatchLater" });
    try {
      const { status } = await axios.delete(`${URL}/video-library/`, {
        headers: { authorization: token },
        data: {
          _id: selectedVideo._id,
          section: "watchLaterVideos",
        },
      });
      if (status === 202) {
        const newVideo = {
          _id: selectedVideo._id,
        };
        storeDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: newVideo });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.watchLaterVideos = storage.watchLaterVideos.filter(
          (item) => item._id !== selectedVideo._id
        );
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  } else {
    storeDispatch({ type: "IS_LOADING", payload: "watchLater" });
    try {
      const { status } = await axios.post(
        `${URL}/video-library`,
        {
          _id: selectedVideo._id,
          section: "watchLaterVideos",
        },
        {
          headers: { Authorization: token },
        }
      );
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
      console.log(error.response.data);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  }
};

export const addToHistory = async (selectedVideo, storeDispatch, token) => {
  try {
    const { status } = await axios.post(
      `${URL}/video-library`,
      {
        _id: selectedVideo._id,
        section: "historyVideos",
      },
      {
        headers: { Authorization: token },
      }
    );
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
    console.log(error.response.data);
  }
};
