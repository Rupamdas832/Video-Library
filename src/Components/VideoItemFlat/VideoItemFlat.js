import React from "react";
import "./VideoItemFlat.css";

export const VideoItemFlat = ({ video }) => {
  const { title, thumbnail, channelName } = video;
  return (
    <div className="flatCard">
      <div className="imgFlat">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="detailFlat">
        <p>{title}</p>
        <p>{channelName}</p>
      </div>
    </div>
  );
};
