import React, { createContext, useContext, useReducer } from "react";
import StoreReducer from "./storeReducer";
import { CategoryList } from "../Server/VideoData";

const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const loginStatus = JSON.parse(localStorage.getItem("VideoLoginUser"));

let initialState;

if (loginStatus?.isUserLogin) {
  initialState = {
    videos: [],
    categories: CategoryList,
    likedVideos: loginStatus.likedVideos,
    watchLaterVideos: loginStatus.watchLaterVideos,
    historyVideos: loginStatus.historyVideos,
    playlist: loginStatus.playlist,
    isLoading: null,
  };
} else {
  initialState = {
    videos: [],
    categories: CategoryList,
    likedVideos: [],
    watchLaterVideos: [],
    historyVideos: [],
    playlist: [],
    isLoading: null,
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
