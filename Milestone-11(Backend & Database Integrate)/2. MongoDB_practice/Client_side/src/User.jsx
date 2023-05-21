import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user,users,setUsers}) => {
const handleDelete = _id =>{
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then (data => {
        console.log(data);
        if(data.deletedCount>0){
            alert("User is removed successfully")
            const remaining = users.filter(user=> user._id !== _id)
            setUsers(remaining);
        }
    })
}

    const {_id, name, email} = user;
    console.log(user);
    return (
        <div className='p-2 border border-2 rounded m-2'>
            <h6>User Id : {_id}</h6>
            <p>User Name: {name}</p>
            <p>User Email: {email}</p>
            <Link to={`/updateUser/${_id}`}><button className='btn btn-primary'>Update User</button> </Link>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete User</button>
        </div>
    );
};

export default User;