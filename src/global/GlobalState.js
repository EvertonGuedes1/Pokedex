import React from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    return (
        <GlobalStateContext.Provider value={{}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState