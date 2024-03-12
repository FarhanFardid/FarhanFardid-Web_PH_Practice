import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
const [user,setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
 
    const handleGoogle =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })

    }

    const handleGitHub = () =>{
     signInWithPopup(auth,githubProvider)
     .then (result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
     })
     .catch(error =>{
        console.log(error);
     })
    }

    const handleLogout = ()=>{
        signOut(auth)
        .then(result =>{
         console.log(result);
         setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }

  

    return (
        <div>
        <h2>Welcome to Login Page</h2>

<h3>Login with Google or GitHub</h3>
{
    user ? <button onClick={handleLogout} style={{border : "2px solid black"}}>LogOut</button> : <><button onClick={handleGoogle} style={{border : "2px solid black"}}> Login with Google</button>
    <button onClick={handleGitHub} style={{border : "2px solid black", margin: "2px"}}> Login with GitHub</button></>
}

        </div>
    );
};

export default Login;