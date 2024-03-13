import { FloatingLabel, Form } from "react-bootstrap";


const Login = () => {

    const handleSubmit= (event) =>{
    event.preventDefault();

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
            <button className="border-2 bg-secondary rounded-4 px-3 py-2 fw-bold text-white m-3">Google Sign In</button>
         </div>
        </div>
    );
};

export default Login;