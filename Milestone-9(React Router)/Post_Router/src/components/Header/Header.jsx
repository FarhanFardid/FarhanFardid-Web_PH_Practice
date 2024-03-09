import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="header-text">React Router Practice Website</div>
            <div className="link_container">  
           <div> <Link to="/home">Home</Link></div>
          <div>  <Link to="/posts">All Blogs</Link></div>
            </div>
          
     
        </div>
    );
};

export default Header;