import React, { createContext, useState } from "react"


export const LoggedContext = createContext()


export const LoggedProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({id:1, role:"sysAdmin", rolName: "Sys Admin"})

    return (
        <LoggedContext.Provider value={{ loggedUser, setLoggedUser }}>
            { children }
        </LoggedContext.Provider>
    )
}
