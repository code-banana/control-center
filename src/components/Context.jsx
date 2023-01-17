import React, { createContext, useState } from "react";

const GlobalContext = createContext(null);

export function GlobalContextProvider({children}) {
    const [config, setConfig] = useState(null)
    return <GlobalContext.Provider value={{config, setConfig}}>{children}</GlobalContext.Provider>
} 

export default GlobalContext;