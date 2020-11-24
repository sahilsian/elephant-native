import React, { useState, useEffect } from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [currentCategory, setCurrentCategory] = useState("")
    const [user, setUser] = useState("")

    return (
        <MyContext.Provider value={{
            token,
            setToken,
            currentCategory,
            setCurrentCategory,
            setUser,
            user
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider