'use client'

import { useState, useContext, createContext } from "react"

// ripped this context-part straight from my website 
// in case we need context and don't want the hassle of 
// figuring out how it works

const date = new Date();
const present = date.getHours();

const GlobalContext = createContext<any>({
    time: 0,
    setTime: 0,
})

export const GlobalContextProvider = ({ children }: any) => {
    const [time, setTime] = useState(present);

    return (
        <GlobalContext.Provider value={{ time, setTime }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);