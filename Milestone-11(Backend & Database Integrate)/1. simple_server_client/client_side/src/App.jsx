import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    })
  },[])
   const handleForm = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name,email};
    console.log(name,email);
    fetch('http://localhost:5000/users', {
      method : 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data => {console.log(data)
            const newUsers =[...users,data]
            setUsers(newUsers)     
    })
    form.reset();
    

   }

  return (
    <>
   
      <h1>Users from Server</h1>

      <p>Available Users: {users.length}</p>
      <form onSubmit={handleForm}>
        <input type="text"  placeholder='Enter Name' name="name"  />
        <br></br>
        <input type="email" placeholder='Enter Email' name="email"/>
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} - {user.name} : {user.email}</p>)
        }
        </div>
   

   
    </>
  )
}

export default App
