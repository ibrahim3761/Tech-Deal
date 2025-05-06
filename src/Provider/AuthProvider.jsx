import React, { createContext } from "react";
import app from "../Firebase/firebase.congif";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;