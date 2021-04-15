import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../Store/storeContext'
import "./Categories.css"

export const Categories = () => {
    const {state} = useStore()
    const {categories} = state

    return (
        <div className="categoryContainer">
        <h1>Categories</h1>
            {categories.map( category=> {
                const {categoryId,title} = category
                return <div className="category" key={categoryId}>
                        <Link to={`/category/${categoryId}`}><button className="btn outline categories">{title}</button></Link>
                    </div>
            })}
        </div>
    )
}
