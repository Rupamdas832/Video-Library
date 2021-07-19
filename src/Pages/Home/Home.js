import React from "react";
import { VideoItem } from "../../Components";
import "./Home.css";
import { Link } from "react-router-dom";
import { useStore } from "../../Store";

export const Home = () => {
  const { storeState } = useStore();
  const { videos, search } = storeState;

  const compare = ({ title, channelName }, searchData) => {
    return (
      title.toLowerCase().includes(searchData) ||
      channelName.toLowerCase().includes(searchData)
    );
  };

  const searchedVideos = videos.filter((video) =>
    compare(video, search.toLowerCase())
  );

  return (
    <div className="homeContainer">
      <div className="homeVideoList">
        {searchedVideos.map((video) => {
          const { videoId } = video;
          return (
            <Link
              className="routerLink"
              to={`/video-detail/${videoId}`}
              state={{ video: video }}
              key={videoId}
            >
              <VideoItem video={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
