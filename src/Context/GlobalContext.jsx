import React, { createContext, useState, useContext } from 'react'

const Context = createContext();

export const GlobalContext = ({ children }) => {

    const [globalState, setGlobalState] = useState({});

    const updateState = (newStates) => {
        setGlobalState(prevStates => {
            return {
                ...prevStates,
                ...newStates
            }
        })
    }

    return (
        <Context.Provider value={{globalState, updateState}}>
            {children}
        </Context.Provider>
    )
}

export { Context };
export default GlobalContext;