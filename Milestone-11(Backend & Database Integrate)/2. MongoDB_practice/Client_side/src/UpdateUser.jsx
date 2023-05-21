import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);
    const {_id,name,email} = loadedData;

    const handleUpdateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email};
        console.log(user);
       fetch(`http://localhost:5000/users/${_id}`,{
        method:'PUT',
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
       })
       .then(res=> res.json())
       .then(data => {console.log(data)
    if(data.modifiedCount>0)
{
    alert("User info is successfully updated")
    
}})

    }
    return (
        <div>
        <h5 className='p-3 fw-bold'>Update User</h5>

        <Form onSubmit={handleUpdateUser} className='p-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" name="name" defaultValue={name} placeholder="Enter Name" />
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Email</Form.Label>
    <Form.Control type="email" name="email" defaultValue={email} placeholder="Enter Email" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Update User
  </Button>
</Form>
    </div>
    );
};

export default UpdateUser;