import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <h2 style={{textAlign:"center" , fontSize: "40px", margin: "10px" }}>Welcome to website Home page  {user && <span>{user.email}</span> }</h2>
            <p></p>
        </div>
    );
};

export default Home;