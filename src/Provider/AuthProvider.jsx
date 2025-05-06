import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.congif";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const googleLogIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authData = {
        user,
        googleLogIn,
        logOut,
        loading,
    };



    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;