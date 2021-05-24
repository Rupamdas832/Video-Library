import React from "react";
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
                  {playlistItem.list.map((item, idx2) => {
                    const selectedVideo = videos.find(
                      (video) => video.videoId === item
                    );
                    return <VideoItemFlat video={selectedVideo} key={idx2} />;
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
