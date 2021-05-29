import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";
import "./WatchLater.css";

export const WatchLater = () => {
  const { storeState } = useStore();
  const { watchLaterVideos, videos, isLoading } = storeState;

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
    <div className="watchLaterContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1>Watch Later</h1>
          {watchLaterVideos.length === 0 ? (
            <p>No videos to watch later</p>
          ) : (
            <div className="watchLaterVideoList">
              {watchLaterVideos.map((item) => {
                const foundVideo = videos.find(
                  (video) => video._id === item._id
                );
                return (
                  <VideoItemFlat
                    video={foundVideo}
                    key={foundVideo._id}
                    section="watchLaterVideos"
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
