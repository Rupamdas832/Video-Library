import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";
import "./Playlist.css";

export const Playlist = () => {
  const { storeState } = useStore();
  const { playlist, videos, isLoading } = storeState;

  const { userState } = useUser();
  const { token } = userState;

  const navigate = useNavigate();

  const authenticateUser = async () => {
    try {
      await axios.get(`${URL}/user`, {
        headers: { authorization: token },
      });
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    authenticateUser();
  }, [token]);

  return (
    <div className="playlistContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1 className="headingMain">Playlist</h1>
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
                      <VideoItemFlat
                        video={selectedVideo}
                        section="playlist"
                        playlistId={playlistItem._id}
                        key={selectedVideo._id}
                      />
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
