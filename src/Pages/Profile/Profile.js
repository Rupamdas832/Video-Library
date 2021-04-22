import React from 'react'
import { useUser } from '../../Store'
import "./Profile.css"

export const Profile = () => {

    const {userState} = useUser()
    const {user} = userState
    return (
        <div className="profileContainer">
            <p>Hii {user.name.toUpperCase()}</p>
            <div className="profileDetail">
                <div className="input">
                    <label>Name</label>
                    <input placeholder="Enter name" value={user.name}/>
                </div>
                <div className="input">
                    <label>Email</label>
                    <input placeholder="Enter name" value={user.email}/>
                </div>
                <div className="input">
                    <label>Password</label>
                    <input placeholder="Enter name" type="password" value={user.password}/>
                </div>
                <div className="input">
                    <label>Change Password</label>
                    <input placeholder="Enter new password" type="password"/>
                </div>
            </div>
        </div>
    )
}
