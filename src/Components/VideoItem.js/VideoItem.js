import React from 'react'
import ReactPlayer from 'react-player';
import "./VideoItem.css"

export const VideoItem = ({video}) =>{
    const {id, title} = video;
    return (
            <div className="ecommerceCard">
            <div className="cardImg">
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} controls width="100%" height="100%"/>
            </div>
            <div className="cardBody">
                <p>{title}</p>
            </div>  
        </div>
    )
}
