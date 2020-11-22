import React, { useState, useEffect } from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children }) => {

    const [token, setToken] = useState("")

    return (
        <MyContext.Provider value={{
            token,
            setToken
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider