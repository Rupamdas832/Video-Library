import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../../Components";
import { useStore } from "../../Store";
import "./History.css";

export const History = () => {
  const { storeState } = useStore();
  const { historyVideos, videos, isLoading } = storeState;

  const toBottom = useRef(null);

  const scrollToBottom = () => {
    toBottom.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="historyContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div>
          <h1>History</h1>
          <div className="historyVideoList">
            {historyVideos.reverse().map((item, idx) => {
              const foundVideo = videos.find((video) => video._id === item._id);
              const { videoId, thumbnail, channelName, title } = foundVideo;
              return (
                <Link
                  className="routerLink"
                  to={`/video-detail/${videoId}`}
                  key={idx}
                >
                  <div className="flatCard history">
                    <div className="imgFlat">
                      <img src={thumbnail} alt="thumbnail" />
                    </div>
                    <div className="detailFlat history">
                      <p>{title}</p>
                      <p>{channelName}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <div ref={toBottom} />
    </div>
  );
};
