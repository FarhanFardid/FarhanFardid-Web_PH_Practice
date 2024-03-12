import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth} from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
const [user,setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
 
    const handleGoogle =()=>{

    }

    const handleGitHub  =()=>{
        
    }

    return (
        <div>
        <h2>Welcome to Login Page</h2>

<h3>Login with Google or GitHub</h3>
<button onClick={handleGoogle} style={{border : "2px solid black"}}> Login with Google</button>
<button onClick={handleGitHub} style={{border : "2px solid black", margin: "2px"}}> Login with GitHub</button>

        </div>
    );
};

export default Login;