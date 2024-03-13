import { useContext } from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout =()=>{
        logOut()
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href=""className="fw-bold text-info" >React Auth Context</Navbar.Brand>
          {
            user && <div className="text-info fw-bold">UserName:  {user.displayName}</div>
          }
          <div>
          <Nav className="me-auto">
            <NavLink ><Link className="text-decoration-none text-info fw-bold " to="/">Home</Link></NavLink>
            <NavLink><Link  className="text-decoration-none text-info fw-bold " to="/inventory">Inventory</Link></NavLink>
            <NavLink> <Link className="text-decoration-none text-info fw-bold " to="/register">Sign Up</Link></NavLink>
            
           {
            user ? <button onClick={handleLogout}  className="border-2 bg-secondary text-info fw-bold px-3 py-2  rounded-4">
            LogOut</button> :  <button className="border-2 bg-secondary  fw-bold px-3 py-2  rounded-4"><Link  className="text-decoration-none text-info"  to="/login"> Login</Link></button>
           }
          

           

    
           
          </Nav>
          </div>
       
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;