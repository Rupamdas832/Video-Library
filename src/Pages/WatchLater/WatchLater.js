import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore, useUser } from "../../Store";
import "./WatchLater.css";

export const WatchLater = () => {
  const { storeState } = useStore();
  const { watchLaterVideos, videos, isLoading } = storeState;

  const { userState } = useUser();
  const { token } = userState;

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await axios.get(
        "https://Video-library-server-github.rupamdas.repl.co/user",
        {
          headers: { authorization: token },
        }
      );
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
    fetchData();
  }, [token]);

  return (
    <div className="watchLaterContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1>Watch Later</h1>
          <div className="watchLaterVideoList">
            {watchLaterVideos.map((item) => {
              const foundVideo = videos.find((video) => video._id === item._id);
              return (
                <Link
                  className="routerLink"
                  to={`/video-detail/${foundVideo.videoId}`}
                  key={item._id}
                >
                  <VideoItemFlat video={foundVideo} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
