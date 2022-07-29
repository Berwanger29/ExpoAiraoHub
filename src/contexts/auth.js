import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [isFirstTime, setIsFirstTime] = useState(false)

    return (
        <AuthContext.Provider value={{ isFirstTime, setIsFirstTime }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider