import React from 'react'
import { useUser } from '../../Store'
import "./Profile.css"

export const Profile = () => {

    const {userState} = useUser()
    const {user} = userState
    return (
        <div className="profileContainer">
            <h3>Hii! {user.name}</h3>
        </div>
    )
}
