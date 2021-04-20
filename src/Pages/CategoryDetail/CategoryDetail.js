import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { VideoItem } from '../../Components'
import { useStore } from '../../Store'
import "./CategoryDetail.css"

export const CategoryDetail = () =>{

    const {categoryId} = useParams()
    const {storeState, storeDispatch} = useStore()
    const {videos,categories} = storeState
    const {title} = categories.filter(cate => cate.categoryId === parseInt(categoryId))[0]

    const dispalyCategory= () => {
        
        return videos.map(video => {
           
            if(video.categoryId === parseInt(categoryId)){
                return <Link className="routerLink" to={`/video-detail/${video.videoId}`} onClick={() => storeDispatch({type: "ADD_TO_HISTORY", payload: video})}>
                        <VideoItem video={video}/>
                    </Link>
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
