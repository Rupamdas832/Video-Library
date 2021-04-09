import React from 'react'
import "./VideoItem.css"

export const VideoItem = ({video}) =>{
    const {id,url,category} = video;
    return (
            <div className="ecommerceCard">
            <div className="cardImg">
            <iframe 
                src={url}  
                className="iframe medium"
            ></iframe>
            </div>
            <div className="cardBody">
                <p>boAt Airdopes 131 Bluetooth Headset</p>
            </div>  
        </div>
    )
}
