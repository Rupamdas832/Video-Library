import React from 'react'
import { useParams } from 'react-router'
import { VideoItem } from '../../Components/VideoItem/VideoItem'
import { useStore } from '../../Store/storeContext'
import "./CategoryDetail.css"

export const CategoryDetail = () =>{

    const {categoryId} = useParams()
    const {state} = useStore()
    const {videos,categories} = state
    const {title} = categories.filter(cate => cate.categoryId === parseInt(categoryId))[0]

    const dispalyCategory= () => {
        
        return videos.map(video => {
           
            if(video.categoryId === parseInt(categoryId)){
                return <VideoItem video={video}/>
            }
            return null
        })
    }
    return (
        <div className="categoryContainer">
            <h1>{title}</h1>
            <div className="categoryVideoList">
                {dispalyCategory()}
            </div>
            
        </div>
    )
}
