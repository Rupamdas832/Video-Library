import React from 'react'
import "./VideoItem.css"

export const VideoItem = ({url}) =>{
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
                <p> Bluetoot boAt Airdopes 131boAt Airdopes 131</p>
            </div>  
        </div>
    )
}
