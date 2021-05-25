import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiTwotoneLike } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { useParams } from "react-router-dom";
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
  const { videos, likedVideos, watchLaterVideos, isLoading } = storeState;

  const { userState } = useUser();
  const { isUserLogin, user } = userState;

  const { videoIdFromParam } = useParams();
  const selectedVideo = videos.find(
    (video) => video.videoId === videoIdFromParam
  );
  const { videoId, title, channelName } = selectedVideo;

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
      {isLoading === "watchLater" ? (
        <Toast message="Adding to watch later..." />
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
              <button className="btn unstyled">
                <AiTwotoneLike />
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
              <button className="btn unstyled">
                <MdWatchLater />
              </button>
              <span className="tooltipText">Add to Watch Later</span>
            </div>
            <div className="tooltip">
              <button
                className="btn unstyled"
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
