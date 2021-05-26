import React from "react";
import { useEffect } from "react";
import "./HeroSection.css";
import { Route, Routes } from "react-router-dom";
import {
  Categories,
  CategoryDetail,
  History,
  Home,
  LikedVideos,
  Login,
  PageNotFound,
  Playlist,
  Profile,
  Signup,
  VideoDetail,
  WatchLater,
} from "../../Pages";
import { PrivateRoute } from "../../Components";
import { URL } from "../../Server/serverURL";
import { useStore } from "../../Store";
import { Toast } from "../Toast/Toast";
import axios from "axios";

export const HeroSection = () => {
  const { storeState, storeDispatch } = useStore();
  const { isLoading } = storeState;

  const fetchCategories = async () => {
    try {
      const {
        data: { categories },
        status,
      } = await axios.get(`${URL}/categories`);
      if (status === 200) {
        storeDispatch({ type: "LOAD_CATEGORIES", payload: categories });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideos = async () => {
    storeDispatch({ type: "IS_LOADING", payload: "fetchingVideos" });
    try {
      const {
        data: { videos },
        status,
      } = await axios.get(`${URL}/videos`);
      if (status === 200) {
        storeDispatch({ type: "LOAD_VIDEOS", payload: videos });
        fetchCategories();
        const loginStatus = JSON.parse(localStorage.getItem("VideoLoginUser"));
        if (loginStatus.isUserLogin) {
          storeDispatch({ type: "LOAD_VIDEO_LIBRARY", payload: loginStatus });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="heroSectionContainer">
      {isLoading === "fetchingVideos" ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <PrivateRoute path="/history" element={<History />} />
          <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
          <PrivateRoute path="/watch-later" element={<WatchLater />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <Route path="/video-detail/:videoId" element={<VideoDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category" element={<CategoryDetail />} />
          <PrivateRoute path="/playlist" element={<Playlist />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
};
