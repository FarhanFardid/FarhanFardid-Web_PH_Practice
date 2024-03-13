import { useContext } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const Register = () => {
const navigate = useNavigate();
const {handleSignUp,UpdateUser,logOut} = useContext(AuthContext);

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass);
        handleSignUp(email,pass)
        .then(result=> {
            const signedUser = result.user;
            console.log(signedUser);
            UpdateUser(name)
            .then(result=>{console.log(result)})
            .catch(error =>{
                console.log(error);
          
            })
            form.reset();
            logOut();
          navigate ('/login');
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="bg-info">
            <h2 className="bg-info p-3 ">Welcome to Register Page</h2>

            <form onSubmit={handleSubmit} className="bg-dark p-5">
            <h4 className="text-white fs-3 py-4">Please Sign Up</h4>
         <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-3"
      >
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" name="password" placeholder="Password" />
      </FloatingLabel>
      <button type="submit" className="border-2 text-dark bg-info px-3 py-2 fw-bold m-4 rounded-3">Sign Up</button>
         </form>

<div>
    <p className="text-black fw-bold fs-5 p-3">Already have an account? Go to <Link to='/login' className="text-danger" >Login</Link></p>
</div>
       
        </div>
    );
};

export default Register;