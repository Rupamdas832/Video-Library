import React from 'react'
import { useAuth } from '../../Store/authContext'
import { Route , Navigate} from "react-router-dom"

export const PrivateRoute = ({path, ...props}) => {

    const {isUserLogin} = useAuth()
    
    return (isUserLogin ? (
        <Route {...props}/>
    ) : (
        <Navigate replace state={{from: path}} to="/login"/>
    ))
}
