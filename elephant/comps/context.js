import React, { useState, useEffect } from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [currentCategory, setCurrentCategory] = useState("")

    return (
        <MyContext.Provider value={{
            token,
            setToken,
            currentCategory,
            setCurrentCategory
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider