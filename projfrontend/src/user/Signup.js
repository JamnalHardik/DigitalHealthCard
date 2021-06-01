import React from 'react'
import '../styles.css'
import { signup } from '../auth/helper/index'

const Signup = () => {
  const [values, setValues] = useState({    
    firstname: "",
    lastname: "",
    aadharNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    error: "",
    success: false
  });
  
  const { firstname, lastName, aadharNumber, email, password, dateOfBirth, error, success } = values;

  const SignupForm = () => {
    return (
      <div>
        <div id="header-main">
          <h1>Digital Health Card</h1>
        </div>
        <div classname="container">
          <form id="form-main">
          <div classname="mb-3">
              <label for="exampleInputEmail1" classname="form-label">First Name </label>
              <input type="name" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div classname="mb-3">
              <label for="exampleInputEmail1" classname="form-label">Email address</label>
              <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div classname="mb-3">
              <label for="exampleInputPassword1" classname="form-label">Password</label>
              <input type="password" classname="form-control" id="exampleInputPassword1" />
            </div>
            <div classname="mb-3 form-check">
              <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
              <label classname="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" classname="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      {SignupForm()}
    </div>
  )
}

export default Signup
