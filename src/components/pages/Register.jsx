import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import logob from "../../assets/logob.svg";
import { Link } from 'react-router-dom';
import '../styles/login.css'
function Register() {
  return (
    <body>
    <div className="login-main">
      <form className="form">
        <div>
          <img src={logob} alt="Jobify" className="jobify" />
          <h4 className="text-login">Register</h4>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
          Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
          Location
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
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
          <button className="btn login-btn w-100">Submit</button>
        </div>
        <Link to='/login' className='link'>
        <p className="login-para">Not a member yet? <span className="register">Login</span></p>
        </Link>
      </form>
    </div>
  </body>
  )
}

export default Register;