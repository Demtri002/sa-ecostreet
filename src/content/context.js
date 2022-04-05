import React, { createContext, useContext, useState } from 'react'
import { validatePathConfig } from '@react-navigation/native'

const contextUser = createContext()

export default function ContextProvider({children}){
    const [userLogado,setUserLogado] = useState()
    const [denuncia, setDenuncia] = useState([])


    return(
        <contextUser.Provider
            value={{
                userLogado,
                setUserLogado,
                denuncia,
                setDenuncia
            }}
        >
            {children}
        </contextUser.Provider>
    )
}

export function useUser(){
    const context = useContext(contextUser)
    const { userLogado, setUserLogado , denuncia, setDenuncia} = context
     return { userLogado,setUserLogado , denuncia, setDenuncia}


}