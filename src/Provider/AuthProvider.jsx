import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.congif";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser,updateData)
    }

    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const provider = new GoogleAuthProvider();

    const googleLogIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const forgotPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)
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
        setUser,
        googleLogIn,
        logOut,
        loading,
        createUser,
        updateUser,
        logIn,
        forgotPassword,
    };



    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;