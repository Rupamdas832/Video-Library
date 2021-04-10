import React from 'react'
import { useStore } from '../../Store/storeContext'
import "./Categories.css"

export const Categories = () => {

    const {state} = useStore()
    const {videoList} = state
    
    return (
        <div className="categoryContainer">
        <h1>Categories</h1>
            {videoList.map(video => {
                return <h2>{video.category}</h2>
            })}
        </div>
    )
}
