import React from 'react'
import { useAuth } from '../../Store/authContext'
import { Route , Navigate} from "react-router-dom"

function PrivateRoute({path, ...props}){

    const {isUserLogin} = useAuth()
    
    return (isUserLogin ? (
        <Route {...props}/>
    ) : (
        <Navigate replace state={{from: path}} to="/login"/>
    ))
}

export default PrivateRoute;
