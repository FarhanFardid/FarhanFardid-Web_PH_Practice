import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers] = useState(loadedUsers);
  console.log(loadedUsers);
    return (
        <div>
          <h5>Available Users: {users.length}</h5> 
          <div className='p-3 m-3'>
            {
              users.map(user => <User key={user._id} user={user} users={users} setUsers={setUsers}></User>)
            }
          </div>

        </div>
    );
};

export default Users;