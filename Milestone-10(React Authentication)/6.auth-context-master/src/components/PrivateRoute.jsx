import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if (loading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace ></Navigate>
    }
   
};

export default PrivateRoute;