import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{padding:"4px", fontWeight:"bold"}}to='/user'> Users </Link>
            <Link style={{padding:"4px", fontWeight:"bold"}} to='/addUser'> Add User </Link>
          
        </div>
    );
};

export default Header;