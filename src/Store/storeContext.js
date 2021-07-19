import React, { createContext, useContext, useReducer } from "react";
import StoreReducer from "./storeReducer";

const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const loginStatus = JSON.parse(localStorage.getItem("VideoLoginUser"));

let initialState;

if (loginStatus?.isUserLogin) {
  initialState = {
    videos: [],
    categories: [],
    likedVideos: loginStatus.likedVideos,
    watchLaterVideos: loginStatus.watchLaterVideos,
    historyVideos: loginStatus.historyVideos,
    playlist: loginStatus.playlist,
    isLoading: null,
    search: "",
  };
} else {
  initialState = {
    videos: [],
    categories: [],
    likedVideos: [],
    watchLaterVideos: [],
    historyVideos: [],
    playlist: [],
    isLoading: null,
    search: "",
  };
}

export const StoreProvider = ({ children }) => {
  const [storeState, storeDispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{ storeState, storeDispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
