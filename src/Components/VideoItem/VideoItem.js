import React from "react";
import "./VideoItem.css";

export const VideoItem = ({ video }) => {
  const { title, thumbnail, channelName } = video;
  return (
    <div className="ecommerceCard">
      <div className="cardImg">
        <img src={thumbnail} width="100%" height="100%" alt="thumbnail" />
      </div>
      <div className="videoChannelName">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX-CIEliwCQf3b_V8qSLCaTVx-9Lnq76JHQ&usqp=CAU"
          className="avatar small"
          alt="profile"
        />
        <div>
          <p>{title}</p>
          <p style={{ color: "gray" }}>{channelName}</p>
        </div>
      </div>
    </div>
  );
};
