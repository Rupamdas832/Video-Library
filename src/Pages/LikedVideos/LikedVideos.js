import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";
import "./LikedVideos.css";

export const LikedVideos = () => {
  const { storeState } = useStore();
  const { likedVideos, videos, isLoading } = storeState;

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
    <div className="likedVideoContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1 className="headingMain">Liked Videos</h1>
          <div>
            {likedVideos.length === 0 ? (
              <p>No liked videos</p>
            ) : (
              <div className="likedVideoList">
                {likedVideos.map((item) => {
                  const foundVideo = videos.find(
                    (video) => video._id === item._id
                  );
                  return (
                    <VideoItemFlat
                      video={foundVideo}
                      key={foundVideo._id}
                      section="likedVideos"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
