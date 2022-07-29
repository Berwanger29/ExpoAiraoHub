import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [hasLogin, setHasLogin] = useState(false)

    return (
        <AuthContext.Provider value={{hasLogin, setHasLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider