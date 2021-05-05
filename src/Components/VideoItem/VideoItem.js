import React from 'react'
import "./VideoItem.css"

export const VideoItem = ({video}) =>{
    const {title, thumbnail, channelName} = video;
    return (
            <div className="ecommerceCard">
            <div className="cardImg">
            <img src={thumbnail} width="100%" height="100%" alt="thumbnail"/>
            </div>
            <div className="cardBody">
                <p>{title}</p>
            </div>
            <div className="videoChannelName">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" className="avatar small" alt="profile"/>
                    <p>{channelName}</p>
                </div>
        </div>
    )
}
