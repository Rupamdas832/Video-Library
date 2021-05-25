import React from "react";
import { Link } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore } from "../../Store/storeContext";
import "./Playlist.css";

export const Playlist = () => {
  const { storeState } = useStore();
  const { playlist, videos, isLoading } = storeState;

  return (
    <div className="playlistContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1>Playlist</h1>
          {playlist.map((playlistItem, idx1) => {
            return (
              <div className="playlist" key={idx1}>
                <h2>{playlistItem.title}</h2>
                <div className="playlistVideos">
                  {playlistItem.videos.map((item, idx2) => {
                    const selectedVideo = videos.find(
                      (video) => video._id === item._id
                    );
                    return (
                      <Link
                        to={`/video-detail/${selectedVideo.videoId}`}
                        key={idx2}
                      >
                        <VideoItemFlat video={selectedVideo} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
