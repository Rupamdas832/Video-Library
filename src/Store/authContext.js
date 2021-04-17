import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {

    const [isUserLogin, setIsUserLogin] = useState(false)

    useEffect(() => {
        const userData = localStorage.getItem("loginUser")
        if(userData){
            setIsUserLogin(userData)
        }
    },[])

    

    return <AuthContext.Provider value={{isUserLogin, setIsUserLogin}}>{children}</AuthContext.Provider>
}