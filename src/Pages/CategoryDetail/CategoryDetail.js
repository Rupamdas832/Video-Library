import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { VideoItem } from "../../Components";
import { useStore } from "../../Store";
import "./CategoryDetail.css";

export const CategoryDetail = () => {
  const {
    state: { categoryId, title },
  } = useLocation();

  const { storeState } = useStore();
  const { videos } = storeState;

  return (
    <div className="categoryContainer">
      <h1 className="headingMain">{title}</h1>
      <div className="categoryVideoList">
        {videos.map((video) => {
          if (video.categoryId === categoryId) {
            return (
              <Link
                className="routerLink"
                to={`/video-detail/${video.videoId}`}
                key={video._id}
              >
                <VideoItem video={video} />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
