import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { BsMusicNoteList, BsStopwatchFill, BsStopwatch } from "react-icons/bs";
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
  const { likedVideos, watchLaterVideos, isLoading, videos } = storeState;

  const { userState } = useUser();
  const { isUserLogin, token } = userState;

  const { videoId: videoIdFromParam } = useParams();

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
      {isLoading === null ? (
        <Toast message="Removing from watch later..." />
      ) : (
        <div className="videoDetailContainer sub">
          {videos.map((selectedVideo) => {
            const { videoId, title, channelName, isLiked, isWatchLater } =
              selectedVideo;
            if (videoId === videoIdFromParam) {
              return (
                <div className="videoDetail" key={videoId}>
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
                  <div className="videoDiv">
                    <ReactPlayer
                      url={`https://youtube.com/watch?v=${videoId}`}
                      controls
                      width="100%"
                      height="100%"
                      onPlay={() =>
                        addToHistory(selectedVideo, storeDispatch, token)
                      }
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
                                token
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
                                token
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
              );
            } else return null;
          })}
        </div>
      )}
    </div>
  );
};
