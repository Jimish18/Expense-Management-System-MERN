import { createContext, useState } from "react";

export const ToggleSidebarContext = createContext();

export const ToggleSidebarContextProvider = ({children}) =>
{
    const [openMenu,setOpenMenu] = useState(false);

    return (
        <ToggleSidebarContext.Provider value={{openMenu,setOpenMenu}}>
            {children}
        </ToggleSidebarContext.Provider>
    )
}