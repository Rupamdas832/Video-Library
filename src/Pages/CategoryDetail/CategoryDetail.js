import React from 'react'
import { useParams } from 'react-router'
import { useStore } from '../../Store/storeContext'

export const CategoryDetail = () =>{

    const {categoryId} = useParams()
    const {state} = useStore()
    const {videos} = state

    const dispalyCategory= () => {
        console.log(categoryId)
        videos.map(video => {
            return<h1>Hiiiiii</h1>
        })
    }
    return (
        <div>
        <h1>Hiiiiii</h1>
            {dispalyCategory()}
        </div>
    )
}
