import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {

    const handleSubmit= (event) =>{
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const pass = form.password.value;
    console.log(email,pass);

    }
    return (
        <div className="bg-info">
         <h2 className="bg-info p-3 ">Welcome to Login Page</h2>

         <form onSubmit={handleSubmit} className="bg-dark p-5">
            <h4 className="text-white fs-3 py-4">Please Login</h4>
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
      <button type="submit" className="border-2 text-dark bg-info px-3 py-2 fw-bold m-4 rounded-3">Login</button>
         </form>
         <div>
            <button className="border-2 bg-dark rounded-4 px-3 py-2 fw-bold text-info m-3">Google Sign In</button>
         </div>
         <div>
    <p className="text-black fw-bold fs-5 p-3">New to Auth Context Master ? Go to <Link to='/register' className="text-danger" >Sign Up</Link></p>
</div>
       
        </div>
    );
};

export default Login;