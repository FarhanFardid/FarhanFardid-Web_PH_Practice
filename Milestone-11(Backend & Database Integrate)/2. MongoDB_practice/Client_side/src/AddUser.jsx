
import React from 'react';
import { Button, Form } from 'react-bootstrap';


const AddUser = () => {
const handleAddUser = event => {
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user={name,email}
    console.log(user); 
    fetch('http://localhost:5000/users',{
        method: 'POST',
       headers: {
        'content-type': "application/json"
       },
       body: JSON.stringify(user)
    })
    .then (res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId)
        {
            form.reset();
            alert("User is successfully Added");
        }
    })
}

    return (
        <div>
            <h5 className='p-3 fw-bold'>Add New User</h5>

            <Form onSubmit={handleAddUser} className='p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Email" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
        </div>
    );
};

export default AddUser;