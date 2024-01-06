import React, { useContext, useEffect, useState } from 'react'
import { getAuth } from '../Firebase/Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return getAuth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        const unsubscribe = getAuth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    const value = {
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
