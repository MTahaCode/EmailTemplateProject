import React, { createContext, useState } from 'react'

const Context = createContext();

export const GlobalContext = ({ children }) => {

    const [globalState, setGlobalState] = useState({});

    const updateGlobalState = (newStates) => {
        setGlobalState(prevStates => {
            return {
                ...prevStates,
                ...newStates
            }
        })
    }

    return (
        <Context.Provider value={{globalState, updateGlobalState}}>
            {children}
        </Context.Provider>
    )
}

export { Context };
export default GlobalContext;