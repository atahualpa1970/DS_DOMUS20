import React, { createContext, useState } from "react"


export const LoggedContext = createContext()


export const LoggedProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({id:0, role:"norole", rolName: "Sin Rol"})

    return (
        <LoggedContext.Provider value={{ loggedUser, setLoggedUser }}>
            { children }
        </LoggedContext.Provider>
    )
}
