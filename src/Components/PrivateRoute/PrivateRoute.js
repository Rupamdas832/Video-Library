import React from 'react'

import { Route , Navigate} from "react-router-dom"
import { useAuth } from '../../Store'

export const PrivateRoute = ({path, ...props}) => {

    const LoginStatus = JSON.parse(localStorage.getItem("loginUser"))
    
    return (LoginStatus.isUserLogin ? (
        <Route {...props}/>
    ) : (
        <Navigate replace state={{from: path}} to="/login"/>
    ))
}
