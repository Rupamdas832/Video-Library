import React from 'react'
import "./VideoItem.css"

export const VideoItem = ({video}) =>{
    const {id, title, thumbnail} = video;
    return (
            <div className="ecommerceCard">
            <div className="cardImg">
            <img src={thumbnail} width="100%" height="100%"/>
            </div>
            <div className="cardBody">
                <p>{title}</p>
            </div>  
        </div>
    )
}
