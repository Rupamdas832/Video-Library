import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {

    const [isUserLogin, setIsUserLogin] = useState(false)

    return <AuthContext.Provider value={{isUserLogin, setIsUserLogin}}>{children}</AuthContext.Provider>
}