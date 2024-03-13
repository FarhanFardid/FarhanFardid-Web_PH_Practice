import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);
   
 const auth = getAuth(app);

 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

 const handleSignIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   

 }
 const handleSignUp =(email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
    
 }
const UpdateUser =(name) =>{
    return updateProfile(auth.currentUser,{displayName: name})
}
const googleSignIn =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
}

const logOut =() => {
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    }) ;
    return ()=>{
        unsubscribe();
    }
},[])
    const authInfo = {
        user,
        loading,
        handleSignIn,
        handleSignUp,
        UpdateUser,
        googleSignIn,
        githubSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;