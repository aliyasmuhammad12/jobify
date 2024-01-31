import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import logob from "../../assets/logob.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <body>
      <div className="login-main">
        <form className="form">
          <div>
            <img src={logob} alt="Jobify" className="jobify" />
            <h4 className="text-login">Login</h4>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="mb-3">
            <Link to='/navbar'>        
            <button className="btn login-btn w-100">Login</button>
            </Link>
          </div>
          <div>
            <button className="btn app-btn w-100">Explore The App</button>
          </div>
          <Link to='/register' className="link" >         
          <p className="login-para">Not a member yet? <span className="register">Register</span></p>
          </Link>
        </form>
      </div>
    </body>
  );
};

export default Login;
