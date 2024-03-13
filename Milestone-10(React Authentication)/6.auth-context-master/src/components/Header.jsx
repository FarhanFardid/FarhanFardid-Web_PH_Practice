import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="">React Auth Context</Navbar.Brand>
          <div>
          <Nav className="me-auto">
            <NavLink ><Link className="text-decoration-none text-info fw-bold " to="/">Home</Link></NavLink>
            <NavLink><Link  className="text-decoration-none text-info fw-bold " to="/inventory">Inventory</Link></NavLink>
            <NavLink> <Link className="text-decoration-none text-info fw-bold " to="/register">Register</Link></NavLink>
            <NavLink> <Link className="text-decoration-none text-info fw-bold " to="/login">Login</Link></NavLink>
    
           
          </Nav>
          </div>
       
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;