import React from 'react'
import "./VideoItem.css"

export const VideoItem = ({video}) =>{
    const {title, thumbnail} = video;
    return (
            <div className="ecommerceCard">
            <div className="cardImg">
            <img src={thumbnail} width="100%" height="100%" alt="thumbnail"/>
            </div>
            <div className="cardBody">
                <p>{title}</p>
            </div>  
        </div>
    )
}
