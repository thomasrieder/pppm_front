import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

const getInitialState = () => {
    const auth = sessionStorage.getItem("auth");
    return auth ? JSON.parse(auth) : {}
}

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(getInitialState);

    useEffect(() => {
        sessionStorage.setItem("auth", JSON.stringify(auth))
        
    }, [auth])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;
