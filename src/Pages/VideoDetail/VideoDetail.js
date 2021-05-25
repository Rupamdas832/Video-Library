import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { BsMusicNoteList, BsStopwatchFill, BsStopwatch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import "./VideoDetail.css";
import { LoginModal, PlaylistModal, Toast } from "../../Components";
import { useStore, useUser } from "../../Store";
import {
  addToHistory,
  addToLikedVideos,
  addToWatchLater,
} from "../../Utils/videoDetailFunctions";

export const VideoDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { storeState, storeDispatch } = useStore();
  const { likedVideos, watchLaterVideos, isLoading } = storeState;

  const { userState } = useUser();
  const { isUserLogin, user } = userState;

  const { state } = useLocation();
  const selectedVideo = state.video;

  const { videoId, title, channelName, isLiked, isWatchLater } = selectedVideo;

  const loginToggler = () => {
    if (isUserLogin) {
      return setIsLoginModalOpen(false);
    } else return setIsLoginModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="videoDetailContainer">
      {isModalOpen && (
        <PlaylistModal
          setIsModalOpen={setIsModalOpen}
          video_id={selectedVideo._id}
        />
      )}
      {isLoginModalOpen && (
        <LoginModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          videoId={videoId}
        />
      )}
      {isLoading === "likeVideo" ? (
        <Toast message="Adding to liked videos..." />
      ) : null}
      {isLoading === "removeLikeVideo" ? (
        <Toast message="Removing from liked videos..." />
      ) : null}
      {isLoading === "watchLater" ? (
        <Toast message="Adding to watch later..." />
      ) : null}
      {isLoading === "removeWatchLater" ? (
        <Toast message="Removing from watch later..." />
      ) : null}
      <div className="videoDetail">
        <div className="videoDiv">
          <ReactPlayer
            url={`https://youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            onPlay={() => addToHistory(selectedVideo, storeDispatch, user)}
          />
        </div>
        <div className="videoDesc">
          <p>{title}</p>
          <div
            className="videoLike"
            onClick={() => loginToggler(selectedVideo)}
          >
            <div
              className="tooltip"
              onClick={() =>
                isUserLogin
                  ? addToLikedVideos(
                      selectedVideo,
                      likedVideos,
                      storeDispatch,
                      user
                    )
                  : null
              }
            >
              <button className="btn unstyled icon">
                {isLiked === true ? (
                  <AiTwotoneLike className="iconClicked" />
                ) : (
                  <AiOutlineLike />
                )}
              </button>
              <span className="tooltipText">Add to Liked Videos</span>
            </div>
            <div
              className="tooltip"
              onClick={() =>
                isUserLogin
                  ? addToWatchLater(
                      selectedVideo,
                      watchLaterVideos,
                      storeDispatch,
                      user
                    )
                  : null
              }
            >
              <button className="btn unstyled icon">
                {isWatchLater === true ? (
                  <BsStopwatchFill className="iconClicked" />
                ) : (
                  <BsStopwatch />
                )}
              </button>
              <span className="tooltipText">Add to Watch Later</span>
            </div>
            <div className="tooltip">
              <button
                className="btn unstyled icon"
                onClick={() =>
                  isUserLogin ? setIsModalOpen(!isModalOpen) : null
                }
              >
                <BsMusicNoteList />
              </button>
              <span className="tooltipText">Add to Playlist</span>
            </div>
          </div>
        </div>
        <div className="videoChannelName">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU"
            className="avatar"
            alt="profile"
          />
          <p>{channelName}</p>
        </div>
      </div>
    </div>
  );
};
