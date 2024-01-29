import {createContext, useEffect, useState} from "react";

export const UserContext  = createContext();

export const UserContextProvider = ({children}) =>
{
    const [auth,setAuth] = useState(
        {
            user:null,
            token:""
        }
    ) ;
    
    useEffect(()=>
    {
        const data = localStorage.getItem('auth');

        if(data)
        {
            const parsedData = JSON.parse(data);

            setAuth(
                {
                    ...auth,
                    user : parsedData.user,
                    token : parsedData.token
                }
            )
        }
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <UserContext.Provider value={{auth,setAuth}}>
            {children}
        </UserContext.Provider>
    )
}