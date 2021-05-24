import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Toast, VideoItemFlat } from "../../Components";
import { useStore } from "../../Store/storeContext";
import "./WatchLater.css";

export const WatchLater = () => {
  const { storeState } = useStore();
  const { watchLaterVideos, videos, isLoading } = storeState;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
